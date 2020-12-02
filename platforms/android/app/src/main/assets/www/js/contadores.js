//VARIABLES DEL CONTADOR PARA ENVIAR UNA ALERTA
var temporizador;
var temporizador_oportunidades;

var segundos = 5;
var segundos_oportunidad = 1;

var oportunidades = 1;

//MOSTRAR POPUPALERTA
//MOSTRAR POPUPALERTA
function Pop_up_Alerta(){
    if(oportunidades <= 5){
        $("#segundos_cont").html(5);
        $("#PopUpAlerta").show();
        segundos = 5;
        temporizador = setInterval('contador()',1000);
        contador();
    }
    else{
		
		$("#PopUp").show();
        $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
        $("#parrafo_info").append( alertasText['alert_emergencia']+"<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="'+idiomaSeleccionado["bt_ok"]+'" class="bt_verde" onclick="Ocultar_PopUp()">');
    }
}

//CONTADOR
function contador(){
    if(segundos > 0){
        $("#segundos_cont").html(segundos);
        segundos--;
    }
    else{
       Ocultar_PopUpAlerta();
       segundos = 5;
	   clearInterval(temporizador);
       Enviar_SMS(); 
	     
    }
}

//CONTADOR OPORTUNIDAD
//CONTADOR OPORTUNIDAD
//CONTADOR OPORTUNIDAD
function contador_oportunidades(){ //////////////////////////////////////////////////////////////////////
    if(segundos_oportunidad < 300){ //5 minutos
        segundos_oportunidad++;
    }
    else{
        clearInterval(temporizador_oportunidades);
        oportunidades = 1;
        segundos_oportunidad = 1; 
		
		$("#PopUp").show();
        $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
        $("#parrafo_info").append( alertasText["text_mas_alertas"]+ "<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');  
    }
}


//OCULTAR EL POPUP DE LA ALERTA
function Ocultar_PopUpAlerta(){
    $("#PopUpAlerta").hide();
    clearInterval(temporizador);
}







//AQUI INICIA EL TEMPORIZADOR GENERAL

var segundos_totales;
var contador_activo = false; /// SOLO SE PUEDE ESCANERA SI EL CONTADOR ESTÁ ACTIVO

//CONTADOR TIMER
function Contador_Timer(){
    textHoras = "";
    textMinutos = "";
    textSegundos = "";
    
    //HORAS RESTANTES
    horas = segundos_totales/3600;
    horas = Math.trunc(horas);

    //MINUTOS RESTANTES
    minutos = (segundos_totales/60) - (60*horas);
    minutos = Math.trunc(minutos);
    //minutos = (segundos_timer/60)/horas;

    if(segundos_totales > 0){
        $("#horas_timer").html(horas);
        $("#minutos_timer").html(minutos);
        segundos_totales--;
    }
    
	else{
		$("#PopUp").show();
        $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
        $("#parrafo_info").append( alertasText["alert_debe_transmitir_reporte"]+"<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');  

       DetenerTimer();
	   contador_activo = false;
    }
}

//ACTIVAR EL INTERVALO DE TIEMPO
//ACTIVAR EL INTERVALO DE TIEMPO
var activar_contador = false;
var temporizador_timer;


function activar_Timer(){

	if(activar_contador == false){
		
		set_hora_transmicion = localStorage.getItem("set_hora_transmicion" );
		set_minuto_transmicion = localStorage.getItem("set_minuto_transmicion" );
		segundos_totales = ( set_hora_transmicion*3600 ) + ( set_minuto_transmicion*60 );;
		
        temporizador_timer = setInterval('Contador_Timer()',1000);
        activar_contador = true;
    }
}

function DetenerTimer(){
    clearInterval(temporizador_timer);
}





