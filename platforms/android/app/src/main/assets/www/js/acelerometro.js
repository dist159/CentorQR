if(localStorage.getItem("activar_mandonw") == "" || localStorage.getItem("activar_mandonw") == null){
	localStorage.setItem("activar_mandonw", 2); //ACTIVO
}

if(localStorage.getItem("set_minutos_quietud") == null ){
	localStorage.setItem("set_minutos_quietud", 999);
}

if(localStorage.getItem("pasos_tmp") == null ){
	localStorage.setItem("pasos_tmp", 0);
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
function Activar_Timer_Quietud(){ 
	clearInterval(timeout_quitud);
	timeout_quitud = setInterval(Timer_Quietud,1000);
}

//TIMER QUIETUD
function Timer_Quietud(){
	
	//console.log(segundos_quietud);
	minutos_conf = parseInt( localStorage.getItem("set_minutos_quietud")*60 ) ;
	
	if(localStorage.getItem("activar_mandonw") == 1){

		if(segundos_quietud >= minutos_conf ){
			
			pasos = parseInt( localStorage.getItem("pasos")) - parseInt(localStorage.getItem("pasos_tmp") );

			//alert(localStorage.getItem("pasos"));
			if( pasos >= 1 ){
				segundos_quietud = 0;
				segundos_alerta_quietud = 0;	
			}
			else{
				
				
				$("#PopUpQuietud").show();
				//cordova.plugins.backgroundMode.moveToForeground(); //esta funcion trae al primer plano
				segundos_quietud = 0;
				segundos_alerta_quietud = 0;
				audioElement.play();
				clearInterval(timeout_quitud);
				Activar_Timer_Quietud_Alerta(); /// AQUI SE ACTIVA EL SEGUNDO CRONOMETRO //////////		AQUI SE ACTIVA EL SEGUNDO CRONOMETRO
			}
			
			//pasos_totales = parseInt(localStorage.getItem("pasos")) + pasos);
			localStorage.setItem("pasos_tmp", localStorage.getItem("pasos") );
			//alert(pasos);
			//alert(pasos_totales);
		}
		else{
			segundos_quietud++;
		}
	}

	if(localStorage.getItem("activar_mandonw") == 2){
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

function Cancelar_Quietud(){
	segundos_quietud = 0;
	segundos_alerta_quietud = 0;
	$("#PopUpQuietud").hide();
	Activar_Timer_Quietud();
	Cancelar_Quietud_Alerta();
}


////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function Activar_Timer_Quietud_Alerta(){
	clearInterval(timeout_alerta_quitud);
	timeout_alerta_quitud = setInterval(Timer_Quietud_Alerta,1000);
}

function Timer_Quietud_Alerta(){
	if(segundos_alerta_quietud >= 30 ){
		$("#PopUpQuietud").hide();
		segundos_quietud = 0;
		segundos_alerta_quietud = 0;
		clearInterval(timeout_alerta_quitud);
		Activar_Timer_Quietud(); // SE ACTIVA EL TIMER DE QUIETUD NUEVAMENTE.
		Enviar_SMS_alerta_Quietud(); /// SE ENVÍA UN SMS
	}
	else{
		segundos_alerta_quietud++;
	}
}

function Cancelar_Quietud_Alerta(){
	segundos_quietud = 0;
	segundos_alerta_quietud = 0;
	clearInterval(timeout_alerta_quitud);
	$("#PopUpQuietud").hide();
}




		