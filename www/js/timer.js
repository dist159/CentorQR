if(localStorage.getItem("iniciar_crono" ) == "" || localStorage.getItem("iniciar_crono" ) == null ){
	localStorage.setItem("iniciar_crono", "desactivar");
}

//FUNCION PARA VALIDAR SI EL TIMER SE DEBE ACTIVAR O NO
function Validar_Timer_Activo(){

	if(localStorage.getItem("iniciar_crono" ) == "" || localStorage.getItem("iniciar_crono" ) == null ){
		localStorage.setItem("iniciar_crono", "desactivar");
	}
	
	if( localStorage.getItem("iniciar_crono" ) == "desactivar" ){
		$("#base_crono").css("background-color","#4caf50"); // CAMBIAMOS EL COLOR A VERDE
		document.getElementById('crono').innerHTML = "";
	}
	
	if( localStorage.getItem("iniciar_crono" ) == "activar" ){
		Empezar_Detener();
		$("#base_crono").css("background-color","#F44336"); // CAMBIAMOS EL COLOR A ROJO
	}	
}

//FUNCTION PARA CUANDO SE TRANSMITE CON EL PASSWORD DEL DÍA
function Solo_Setear_Fecha_Cierre(){	
	ahora = new Date();
	ahora.setSeconds()-5;
	
	anio = ahora.getFullYear();
	mes = ahora.getMonth()+1;
	dia = ahora.getDate();	
	horas = ahora.getHours();
	minutos = ahora.getMinutes();
	segundos = ahora.getSeconds();
	
	fecha_actual = anio+'-'+mes+'-'+dia+' '+horas+':'+minutos+':'+segundos;
	localStorage.setItem("hora_stop_tour", fecha_actual  ); /// GUARDAMOS LA FECHA DE INICIO
	
	$("#base_crono").css("background-color","#4caf50"); // CAMBIAMOS EL COLOR A VERDE
	document.getElementById('crono').innerHTML = "";
	localStorage.setItem("iniciar_crono", "desactivar");
	clearTimeout(timeout);
	inicio=0;
	timeout=0;
}


//FUNCTION PARA GUARDAR LA FECHA Y HORA DE INICIO Y CIERRE
function guardar_fecha(){	
	ahora = new Date();
	
	anio = ahora.getFullYear();
	mes = ahora.getMonth()+1;
	dia = ahora.getDate();	
	horas = ahora.getHours();
	minutos = ahora.getMinutes();
	segundos = ahora.getSeconds();
	
	if(mes <= 9){ mes = "0"+mes; }
	if(dia <= 9){ dia = "0"+dia; }
	if(horas <= 9){ mes = "0"+horas; }
	if(minutos <= 9){ mes = "0"+minutos; }
	if(segundos <= 9){ mes = "0"+segundos; }

	fecha_actual = anio+'-'+mes+'-'+dia+' '+horas+':'+minutos+':'+segundos;
	localStorage.setItem("hora_start_tour", fecha_actual  ); /// GUARDAMOS LA FECHA DE INICIO
	
	//////////////////////////////////////////
	set_hora_transmicion = localStorage.getItem("set_hora_transmicion");
	set_minuto_transmicion = localStorage.getItem("set_minuto_transmicion");

	al_cierre = new Date();
	
	al_cierre.setHours(al_cierre.getHours()+ (parseInt(set_hora_transmicion)) );
	al_cierre.setMinutes(al_cierre.getMinutes()+ (parseInt(set_minuto_transmicion)) );
	//al_cierre.setMinutes()+15;
	anioC = al_cierre.getFullYear();
	mesC = al_cierre.getMonth()+1;
	diaC = al_cierre.getDate();	
	horasC = al_cierre.getHours();
	minutosC = al_cierre.getMinutes();
	segundosC = al_cierre.getSeconds();
	
	fecha_cierre = anioC+'-'+mesC+'-'+diaC+' '+horasC+':'+minutosC+':'+segundosC;
	localStorage.setItem("hora_stop_tour", fecha_cierre  );	 // GUARDAMOS LA HORA DE CIERRE
	
	localStorage.setItem("iniciar_crono", "activar"  );
	
	Empezar_Detener(); ///AL MOMENTO DE GUARDAR LAS FECHAS SE INICIA EL CRONOMETRO	
}

//FUNCION PARA VALIDAR EL INTERVALO DE TIEMPO - SE HA CUMPLIDO O NO
function validar_intervalo(){
	fechaAhora = Date.now();
	fechaCierre = new Date( localStorage.getItem("hora_stop_tour") );
	
	if(fechaAhora > fechaCierre){
		return true;
	}
	else{
		return false;
	}
}

//CICLO EN SEGUNDOS
var inicio=0;
var timeout=0;
 
function Empezar_Detener(){
	
	if(timeout==0){
		// empezar el cronometro
		//elemento.value="Detener";
		// Obtenemos el valor actual
		inicio = new Date( localStorage.getItem("hora_start_tour") ).getTime();
		// iniciamos el proceso
		funcionando();
		$("#base_crono").css("background-color","#F44336");
	}
	else{
		// detemer el cronometro
		//elemento.value="Empezar";
		clearTimeout(timeout);
		timeout=0;
	}
}

function funcionando(){
	
	if(validar_intervalo() == false){

		// obteneos la fecha actual
		var actual = new Date().getTime();
		// obtenemos la diferencia entre la fecha actual y la de inicio
		var diff = new Date(actual-inicio);
		
		// mostramos la diferencia entre la fecha actual y la inicial
		var result= LeadingZero(diff.getUTCHours())+":"+LeadingZero(diff.getUTCMinutes())+":"+LeadingZero(diff.getUTCSeconds()); //SIN UTC ES PARA IPHONE
		//var result= LeadingZero(diff.getHours())+":"+LeadingZero(diff.getMinutes())+":"+LeadingZero(diff.getSeconds());
		document.getElementById('crono').innerHTML = result;
	 
		// Indicamos que se ejecute esta función nuevamente dentro de 1 segundo
		timeout = setTimeout("funcionando()",1000);
	}
	else{
		
		clearTimeout(timeout);

		$("#PopUp").show();
        $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
		$("#parrafo_info").append( "."+alertasText["alert_timer_debe_transmitir"]+"<br>" );
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
		
		//alert("El intervalo de tiempo se ha cumplido, bebes transmitir la ronda");
		timeout=0;
		localStorage.setItem("iniciar_crono", "desactivar" );
		$("#base_crono").css("background-color","#4caf50"); // CAMBIAMOS EL COLOR A VERDE
		document.getElementById('crono').innerHTML = "";
	}
}
 
/* Funcion que pone un 0 delante de un valor si es necesario */
function LeadingZero(Time) {
	return (Time < 10) ? "0" + Time : + Time;
}



