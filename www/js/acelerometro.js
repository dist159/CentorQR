if (localStorage.getItem("activar_mandonw") == "" || localStorage.getItem("activar_mandonw") == null) {
	localStorage.setItem("activar_mandonw", 2); //ACTIVO
}

if (localStorage.getItem("set_minutos_quietud") == null) {
	localStorage.setItem("set_minutos_quietud", 999);
}

if (localStorage.getItem("pasos_tmp") == null) {
	localStorage.setItem("pasos_tmp", 0);
}

AcceleracionX = 9;
AcceleracionY = 9;
AcceleracionZ = 9;

AcceleracionX_stored = 9;
AcceleracionY_stored = 9;
AcceleracionZ_stored = 9;

function monitorearCaidas() {

	//cordova.plugins.backgroundMode.setEnabled(true);
	//cordova.plugins.backgroundMode.moveToBackground();
	//temporizador_timer = setInterval('verificar_desaceleracion_drastica()', 50);
	
	window.addEventListener("devicemotion", function (event) {
		// Process event.acceleration, event.accelerationIncludingGravity,
		// event.rotationRate and event.interval
		if (localStorage.getItem("activar_caidas") != "1")
		return

		 // console.log("me estoy moviedno X "+ event.accelerationIncludingGravity.x)
		//  console.log("me estoy moviedno Y "+ event.accelerationIncludingGravity.y)
		//  console.log("me estoy moviedno Z "+ event.accelerationIncludingGravity.z)
		let index = 0;
		let accelValuesX = {}
		let accelValuesY = {}
		let accelValuesZ = {}
		accelValuesX[index] = event.acceleration.x;
		accelValuesY[index] = event.acceleration.y;
		accelValuesZ[index] = event.acceleration.z;

		AcceleracionX = event.accelerationIncludingGravity.x;
		AcceleracionY = event.accelerationIncludingGravity.y;
		AcceleracionZ = event.accelerationIncludingGravity.z;
		valorCaida=localStorage.getItem("caidaNivel")
		//console.log(localStorage.getItem("caidaNivel"))
		//console.log(valorCaida)
		let val=0;
		if(valorCaida=="1"){
			val=0.35;
		}
		if(valorCaida=="2"){
			val=0.6;
		}
		if(valorCaida=="3"){
			val=1.5;
		}

		let rootSquare = Math.sqrt(Math.pow(event.accelerationIncludingGravity.x, 2) + Math.pow(event.accelerationIncludingGravity.y, 2) + Math.pow(event.accelerationIncludingGravity.z, 2));
		//console.log(rootSquare)
		if (rootSquare < val) {

			//  Toast.makeText(this, "Fall detected", Toast.LENGTH_SHORT).show();

			//console.log("Caida detectada")
		//	alert("Alerta se detecto una caida")

		//	guardarCaida("Caida", AcceleracionX, AcceleracionY, AcceleracionZ);

		if(localStorage.getItem("yaseActivoAlarma")!="si"){
			$("#PopUpCaida").show();
			//cordova.plugins.backgroundMode.moveToForeground(); //esta funcion trae al primer plano
			segundos_quietud2 = 0;
			segundos_alerta_quietud2 = 0;
			audioElement.play();
			//clearInterval(timeout_quitud);
			Activar_Timer_caida_Alerta(); /// AQUI SE ACTIVA EL SEGUNDO CRONOMETRO //////////		AQUI SE ACTIVA EL SEGUNDO CRONOMETRO
		}
		}else{
			
		}



	}, true);
}


function verificar_desaceleracion_drastica() {
	let Actual = Math.sqrt(Math.pow(AcceleracionX, 2) + Math.pow(AcceleracionY, 2) + Math.pow(AcceleracionZ, 2));
	let Antiguo = Math.sqrt(Math.pow(AcceleracionX_stored, 2) + Math.pow(AcceleracionY_stored, 2) + Math.pow(AcceleracionZ_stored, 2));

	console.log(Actual+" || "+ Antiguo);
	if (Antiguo < 0.2 && Actual > 3) {
		guardarCaida("Caida Fatal", AcceleracionX_stored, AcceleracionY_stored, AcceleracionZ_stored);
		console.log("IMPACTO")
		alert("Alerta se detecto una caida Fatal")
	}
	AcceleracionX_stored = AcceleracionX;
	AcceleracionY_stored = AcceleracionY;
	AcceleracionZ_stored = AcceleracionZ;

}

function guardarCaida(tipo, x, y, z) {
	caidas_string = "";
	caidas_string = localStorage.getItem("alertas_fallman");
	var caidas = JSON.parse(caidas_string);

	console.log("las caidas son:");
	console.log(caidas[0].hora);
	console.log(caidas[0].guarda);
	console.log(caidas[0].z);
	nombre_guarda_sesion = localStorage.getItem("nombre_guarda_sesion");
	caida = {
		hora: Fecha_Hoy(),
		guarda: nombre_guarda_sesion,
		tipo: tipo,
		x: x,
		y: y,
		z: z

	}

	if (caidas_string == "") {
		var arreglo_caidas = new Array();
		arreglo_caidas.push(caida)
		var myJSON = JSON.stringify(arreglo_caidas);
		console.log(myJSON)
		localStorage.setItem("alertas_fallman", myJSON);
	} else {
		caidas.push(caida)
		console.log(caidas.length);
		console.log(caidas[0])
		var myJSON = JSON.stringify(caidas);
		console.log(myJSON)
		localStorage.setItem("alertas_fallman", myJSON);
	}


}


function Ir_Caidas() {
	console.log("Intentado poner la locacion asi")
	window.location = "#CAIDAS";

	caidas_string = localStorage.getItem("alertas_fallman");

	var caidas = JSON.parse(caidas_string);

	console.log(caidas.length);
	console.log(caidas[0].hora);
	console.log(caidas[0].guarda);
	console.log(caidas[0].z);


	if (caidas_string == "" || caidas_string == null) {
		$("#cont_puntos_listaA").html('<div style="padding: 15px; color: #ffffff; background-color: #03A9F4;">' + idiomaSeleccionado["sin_puntos_gonf"] + '</div>');
	}
	else {

		lista = "";
		$("#cont_puntos_listaA").html("");

		for (i = 0; i < caidas.length; i++) {
			textTipo = "";
			lista += '<table width="100%" style="margin-top: 20px; padding-top:0;"><tr>';
			lista += '<td style=" padding: 10px;">';
			lista += 'Hour: ' + caidas[i].hora + '<br>';
			lista += 'Number: ' + caidas[i].guarda + '<br>';
			lista += 'Tipe: ' + caidas[i].tipo + '<br>';
			lista += 'X: ' + caidas[i].x + '<br>';
			lista += 'Y: ' + caidas[i].y + '<br>';
			lista += 'Z: ' + caidas[i].z + '<br>';
			lista += '</td>';
			lista += '</tr> </table>';
		}
		if (lista == "") {
			lista = '<div style="padding: 15px; color: #ffffff; background-color: #03A9F4;">No tienes Puntos Configurados.</div>';
		}

		$("#cont_puntos_listaA").html(lista);
	}
	// $("#cont_puntos_listaA").append('<div style="text-align: left; padding: 15px;"><img src="img/btn-mas.png" class="bt_mas" onclick="Ir_Escanner_Tour();"> '+idiomaSeleccionado["bt_nuevo_punto"]+'</div>');
}


/*
var acelerometro = true;
///FUNCION PARA ACTIVAR LOS SENSORES DE MOVIMIENTO
///FUNCION PARA ACTIVAR LOS SENSORES DE MOVIMIENTO
///FUNCION PARA ACTIVAR LOS SENSORES DE MOVIMIENTO
///FUNCION PARA ACTIVAR LOS SENSORES DE MOVIMIENTO
///FUNCION PARA ACTIVAR LOS SENSORES DE MOVIMIENTO
///FUNCION PARA ACTIVAR LOS SENSORES DE MOVIMIENTO
function Activar_Acelerometro(){
	if(window.DeviceMotionEvent) {
		window.addEventListener("devicemotion",deviceMotionHandler, true);
		$("#acelerometro_disponible_alert").hide();	
		acelerometro = true;
		Activar_Timer_Quietud();
	}
	else{
		$("#acelerometro_disponible_alert").show();
		acelerometro = false;	
	}
}

//DATOS DEL ACELEROMETRO
function deviceMotionHandler(event) {
	
	if ( event.acceleration.x > 0.7 || event.acceleration.y > 0.7 || event.acceleration.z > 0.7 ) {
		segundos_quietud = 0;
		segundos_alerta_quietud = 0;
		$("#acelera").html( event.acceleration.x +"-"+event.acceleration.y+"-"+event.acceleration.z );
	}
}
*/



////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// OBJETO DE AUDIO
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'img/alarma_sirena.mp3');

var timeout_quitud = 0;
var segundos_quietud = 0;

var timeout_alerta_quitud = 0;
var segundos_alerta_quietud = 0;

//ACTIVAR TIMER
function Activar_Timer_Quietud() {
	clearInterval(timeout_quitud);
	timeout_quitud = setInterval(Timer_Quietud, 1000);
}

//TIMER QUIETUD
function Timer_Quietud() {

	//console.log(segundos_quietud);
	minutos_conf = parseInt(localStorage.getItem("set_minutos_quietud") * 60);

	if (localStorage.getItem("activar_mandonw") == 1) {

		if (segundos_quietud >= minutos_conf) {

			pasos = parseInt(localStorage.getItem("pasos")) - parseInt(localStorage.getItem("pasos_tmp"));

			//alert(localStorage.getItem("pasos"));
			if (pasos >= 1) {
				segundos_quietud = 0;
				segundos_alerta_quietud = 0;
			}
			else {


				$("#PopUpQuietud").show();
				//cordova.plugins.backgroundMode.moveToForeground(); //esta funcion trae al primer plano
				segundos_quietud = 0;
				segundos_alerta_quietud = 0;
				audioElement.play();
				clearInterval(timeout_quitud);
				Activar_Timer_Quietud_Alerta(); /// AQUI SE ACTIVA EL SEGUNDO CRONOMETRO //////////		AQUI SE ACTIVA EL SEGUNDO CRONOMETRO
			}

			//pasos_totales = parseInt(localStorage.getItem("pasos")) + pasos);
			localStorage.setItem("pasos_tmp", localStorage.getItem("pasos"));
			//alert(pasos);
			//alert(pasos_totales);
		}
		else {
			segundos_quietud++;
		}
	}

	if (localStorage.getItem("activar_mandonw") == 2) {
		clearInterval(timeout_quitud);
		segundos_quietud = 0;
		segundos_alerta_quietud = 0;
	}

	/*
	if( localStorage.getItem("iniciar_crono" ) == "desactivar" ){
		clearInterval(timeout_quitud);
		segundos_quietud = 0;
		segundos_alerta_quietud = 0;
	}
	*/
}

function Cancelar_Quietud() {
	segundos_quietud = 0;
	segundos_alerta_quietud = 0;
	$("#PopUpQuietud").hide();
	Activar_Timer_Quietud();
	Cancelar_Quietud_Alerta();
}

function Cancelar_Quietud2() {
	segundos_quietud2 = 0;
	segundos_alerta_quietud2 = 0;
	localStorage.setItem("yaseActivoAlarma","no");
	$("#PopUpCaida").hide();
	//Activar_Timer_Quietud();
	Cancelar_Caida_Alerta();
}



////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function Activar_Timer_Quietud_Alerta() {
	clearInterval(timeout_alerta_quitud);
	timeout_alerta_quitud = setInterval(Timer_Quietud_Alerta, 1000);
}

function Timer_Quietud_Alerta() {
	if (segundos_alerta_quietud >= 30) {
		$("#PopUpQuietud").hide();
		segundos_quietud = 0;
		segundos_alerta_quietud = 0;
		clearInterval(timeout_alerta_quitud);
		Activar_Timer_Quietud(); // SE ACTIVA EL TIMER DE QUIETUD NUEVAMENTE.
		Enviar_SMS_alerta_Quietud(); /// SE ENVÍA UN SMS
	}
	else {
		segundos_alerta_quietud++;
	}
}

function Cancelar_Quietud_Alerta() {
	segundos_quietud = 0;
	segundos_alerta_quietud = 0;
	clearInterval(timeout_alerta_quitud);
	$("#PopUpQuietud").hide();
}


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function Activar_Timer_caida_Alerta() {
	localStorage.setItem("yaseActivoAlarma","si");
	timeout_alerta_quitud2 = setInterval(Timer_Caida_Alerta, 1000);
}

function Timer_Caida_Alerta() {
	if (segundos_alerta_quietud2 >= 30) {
		$("#PopUpCaida").hide();
		segundos_quietud2 = 0;
		segundos_alerta_quietud2 = 0;
		clearInterval(timeout_alerta_quitud2);
	//	console.log("Seenvio")
		localStorage.setItem("yaseActivoAlarma","no");
		Enviar_SMS_alerta_Caida(); /// SE ENVÍA UN SMS
		
	}
	else {
		segundos_alerta_quietud2++;
	//	console.log("contando")
	}
}

function Cancelar_Caida_Alerta() {
	segundos_quietud2 = 0;
	segundos_alerta_quietud2 = 0;
	clearInterval(timeout_alerta_quitud2);
	$("#PopUpCaida").hide();
}





