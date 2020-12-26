function Ir_Home(){	
	$("#cont_telefono").html( localStorage.getItem("set_telefono_emergencia") );
	$("#cont_sms").html( localStorage.getItem("set_sms_emergencia") );
	$("#cont_mail_1").html( localStorage.getItem("set_mail_1") );
	$("#cont_mail_2").html( localStorage.getItem("set_mail_2") );
	//$("#cont_mail_3").html( localStorage.getItem("set_mail_3") );
	
	$("#horas_timer").html( localStorage.getItem("set_hora_transmicion") );
	$("#minutos_timer").html( localStorage.getItem("set_minuto_transmicion") );
	
	window.location = "#HOME";  
	Obtener_mi_ubicacion();	
}

function Ir_Crear_Sitio(){
	window.location = "#CREAR_SITIO"; 
	$("#new_site").val("");
	vaciar_id_temp();
}

function Ir_Escanner_Tour(){
    window.location = "#SCANNER_CONFIGURAR"; 
    Activar_Escanner(3);       
}

function Ir_Escanner(){
	
	if( localStorage.getItem("reporte_tour") == "" || localStorage.getItem("reporte_tour") == null ){
		window.location = "#SCANNER";  
		Obtener_mi_ubicacion(); 
		Activar_Escanner(1); 
	}
	else if(localStorage.getItem("reporte_tour") !=  "" ){
		
		if(localStorage.getItem("iniciar_crono") == "activar" ){
		
			window.location = "#SCANNER";  
			Obtener_mi_ubicacion(); 
			Activar_Escanner(1); 
		}
		else{
			$("#PopUp").show();
        	$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
			$("#parrafo_info").append( alertasText["alert_timer_debe_transmitir"]+"<br>" );
        	$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
		}
	}
	
	//if( (localStorage.getItem("reporte_tour") == "" || localStorage.getItem("reporte_tour") == null) && localStorage.getItem("iniciar_crono") == "desactivar" ){
	//}

	/*
	if(localStorage.getItem("reporte_tour") == "" || localStorage.getItem("reporte_tour") == null && localStorage.getItem("iniciar_crono") == "desactivar" ){
		window.location = "#SCANNER";  
		Obtener_mi_ubicacion(); 
		Activar_Escanner(1); 
	}
	*/
	/*
	if(localStorage.getItem("iniciar_crono") == "desactivar" ){
		
		window.location = "#SCANNER";  
		Obtener_mi_ubicacion(); 
		Activar_Escanner(1); 
	}
	*/
	
	/*
	else if(localStorage.getItem("iniciar_crono") == "desactivar"){
		window.location = "#SCANNER";  
		Obtener_mi_ubicacion(); 
		Activar_Escanner(1); 
	}
	*/
	
	/*
	else if(localStorage.getItem("reporte_tour") == ""){
		window.location = "#SCANNER";  
		Obtener_mi_ubicacion(); 
		Activar_Escanner(1); 
	}
	*/
	/*
	else{
		$("#PopUp").show();
        $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
		$("#parrafo_info").append( alertasText["alert_timer_debe_transmitir"]+"<br>" );
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
	}
	*/
	
	
	
          
}

function Ir_Lenguaje(){
    window.location = "#LENGUAJE";        
}

function Ir_Licencia(){
	window.location = "#SCANNER_LICENCIA"; 
}

function Ir_Detalle_Tour(){
	window.location = "#DETALLE_TOUR"; 
	Detalle_Tour();
}

function Ir_Sesion(){
	window.location = "#SESION"; 
}

//IR CONFIGURACION PASO 2
function Ir_Setup(){	
	$("#set_key_supervisor").val( localStorage.getItem("set_key_supervisor") );
	
	$("#set_mail_1").val( localStorage.getItem("set_mail_1") );
	$("#set_mail_2").val( localStorage.getItem("set_mail_2") );
	//$("#set_mail_3").val( localStorage.getItem("set_mail_3") );

	$("#set_hora_transmicion").val( localStorage.getItem("set_hora_transmicion") );
	$("#set_minuto_transmicion").val( localStorage.getItem("set_minuto_transmicion") );

	$("#set_telefono_emergencia").val( localStorage.getItem("set_telefono_emergencia") );
	$("#set_sms_emergencia").val( localStorage.getItem("set_sms_emergencia") );
	
	$("#set_minutos_quietud").val( localStorage.getItem("set_minutos_quietud") );
	

	if( localStorage.getItem("activar_podemotro") == 1){ $("#set_activar_podometro").prop( "checked",true );  }
	if( localStorage.getItem("activar_podemotro") == 2){ $("#set_activar_podometro").prop( "checked",false ) ;  }
	
	if( localStorage.getItem("activar_mandonw") == 1){ $("#set_activar_acelerometro").prop( "checked",true );  }
	if( localStorage.getItem("activar_mandonw") == 2){ $("#set_activar_acelerometro").prop( "checked",false ) ;  }

	window.location = "#SETUP"; 
	
	var stateObj = { page: "home" };
	window.history.replaceState(stateObj, "home", "#HOME");



	window.plugins.gdrive.estadoSesion(
		function(success) {
			console.log("Si esta iniciado: "+success)
			$("#buttonCerrarSesion").show()  
			$("#buttonIniciarSesion").hide()  
			calStorage.setItem("sesionActiva", "si");
		},
		function(error) {
			console.log("No esta iniciado: "+error)
			$("#buttonCerrarSesion").hide()  
			$("#buttonIniciarSesion").show()  
			calStorage.setItem("sesionActiva", "no");
	});
	
	
}

//mensaje de incidentes
function Ir_Mensaje_Inicidente(){
	window.location = "#MENSAJE_INCIDENTE"; 
}


function Ir_Reporte(){
	window.location = "#REPORTE"; 

	reporte_tour = localStorage.getItem("reporte_tour");

	if(reporte_tour == "" || reporte_tour == null){
		$("#cont_reporte_lista").html('<div style="padding: 15px; color: #ffffff; background-color: #03A9F4;">'+alertasText['alert_sin_registros']+'</div>');
	}
	else{

		filas = reporte_tour.split(";");
        elem = "";     
		for (i = 0; i < filas.length; i++) { 
			nodo = filas[i].split(","); //estraemos el codigo del marcador
			elem += '<div style="text-align: left; padding: 15px;">'+idiomaSeleccionado['item_id']+': '+nodo[0]+'<br>'+idiomaSeleccionado['item_qr']+': '+nodo[1]+'<br>'+idiomaSeleccionado['item_siteName']+': '+nodo[2]+'<br>'+idiomaSeleccionado['item_tour_n']+': '+nodo[3]+'<br>'+idiomaSeleccionado['item_point']+': '+nodo[4]+'<br>'+idiomaSeleccionado['item_fecha']+':'+nodo[5]+
			'<br>'+idiomaSeleccionado['item_officer']+': '+nodo[6]+'<br>'+idiomaSeleccionado['item_latitud']+': '+nodo[7]+'<br>'+idiomaSeleccionado['item_longitud']+': '+nodo[8]+
			'<br>'+idiomaSeleccionado['item_mensaje']+': '+nodo[9]+'<br>'+idiomaSeleccionado['item_pasos']+': '+nodo[12]+'</div>'
			; 
		}

		$("#cont_reporte_lista").html(elem);

	}
}

//IR CARGAR TOUR
function Ir_Cargar_Tour(){
	window.location = "#CARGAR_TOURS"; 
	sesionActiva = localStorage.getItem("sesionActiva");
	if(sesionActiva=="si"){
		$("#buttonCerrarSesion").show(); 
	}else{
		$("#buttonCerrarSesion").hide(); 
		$("#buttonCerrarSesion").show(); 
	}

}

//IR ENVIAR FOTO
function Ir_Enviar_Foto(){
	window.location = "#ENVIAR_FOTO"; 
}

//IR TUTORIAL
function Ir_Tutorial(){
	window.location = "#TUTORIAL"; 
}

function Ir_Acerca(){
	$("#PopUpAcerca").show();
}

var link_validar = "";
function ver_validar_key(val){
	$("#PopUpValidarKey").show();
	link_validar = val;

	//sesionActiva = localStorage.getItem("sesionActiva")




}

function ver_validar_pass(val){
	$("#PopUpValidarPassDia").show();
	link_validar = val;

}


function Validar_Key(){

	set_key_supervisor = localStorage.getItem("set_key_supervisor");
	key_supervisor = $("#key_supervisor").val();
	key_pass_dia = $("#key_pass_dia").val(); //SOLO PARA VALIDAR EL PASSWORD DEL DÍA
	
	if(link_validar == 5){
		key_supervisor = key_pass_dia;
	}

	//VALIDAMOS KEY SUPERVISOR
	if(key_supervisor == set_key_supervisor){

		if(link_validar == 1){ //CONFIGURACION
			Ir_Setup();
			Ocultar_PopUpValidarKey();
		}
		if(link_validar == 2){ //CREAR TOUR
			Ver_PopUp_Crear_Tour();
			Ocultar_PopUpValidarKey();
		}

		if(link_validar == 3){ //CARGAR TOUR
			//Ir_Cargar_Tour();
			Ocultar_PopUpValidarKey();
			
			$("#PopUp").show();
        		$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
				$("#parrafo_info").append( alertasText["sobrescribirBase"]+ "<br>");
				$("#parrafo_info").append('<input type="button" data-role="none" value="'+idiomaSeleccionado['bt_cargar_d'] +'" class="bt_verde" onclick="cargarTodaLaBaseDeDatos();Ocultar_PopUp()" style="width: 80%; margin-bottom: 5px;"><br><input type="button" data-role="none" value="' +
				idiomaSeleccionado['bt_cancel'] + '" class="bt_verde" onclick="Ocultar_PopUp();" style="width: 80%; margin-bottom: 5px;">'); 
			}

		if(link_validar == 4){ //IR SITIOS
			Ir_Sitios();
			Ocultar_PopUpValidarKey();
		}
		
		if(link_validar == 5){ //ENVIAR TOUR CON PASSWORD DEL DÍA
			$("#PopUp").show();
        	$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
			$("#parrafo_info").append( alertasText["pin_invalido"]+ "<br>");
			$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');  
			
			//Validar_Transmision_Tour(1);
			//Ocultar_PopUpValidarKey();
		}

		if(link_validar == 6){ //CARGAR TOUR

			Ocultar_PopUpValidarKey();
			$("#PopUp").show();
        		$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
				$("#parrafo_info").append( alertasText["sobrescribirBaseEnDrive"]+ "<br>");
				$("#parrafo_info").append('<input type="button" data-role="none" value="'+idiomaSeleccionado['bt_subir_drive'] +'" class="bt_verde" onclick="Exportar_Todos_Los_Sitios();Ocultar_PopUp()" style="width: 80%; margin-bottom: 5px;"><br><input type="button" data-role="none" value="' +
				idiomaSeleccionado['bt_cancel'] + '" class="bt_verde" onclick="Ocultar_PopUp();" style="width: 80%; margin-bottom: 5px;">'); 
			}

		$("#key_supervisor").val("");

	}

	//VALIDAMOS EL PASSWORD DEL DÍA
	else{

	    //SOLO PARA LOS CARGO EXPORTAR E IMPORTAR BASES
	    if(link_validar >= 3 && link_validar <= 5 ){

			//PASSWORD DEL DÍA SOLO PARA EXPORTAR E IMPORTAR
	    	var dt = new Date();
		    month = dt.getMonth()+1;
		    day = dt.getDate();
		    year = dt.getFullYear();
		    fecha = month+''+day+''+year;
		    fecha = parseInt(fecha);
		    hex = fecha.toString(16);
			hex = hex.toUpperCase();

	    	if(key_supervisor == hex){
			
				if(link_validar == 3){
					Ir_Cargar_Tour();
					Ocultar_PopUpValidarKey();
				}
				if(link_validar == 4){ //IR SITIOS
					Ir_Sitios();
					Ocultar_PopUpValidarKey();
				}
				
				if(link_validar == 5){ //ENVIAR TOUR CON PASSWORD DEL DÍA
					//Ocultar_PopUpValidarKey();
					Ocultar_PopUpValidarPass();
					Validar_Transmision_Tour(1);
				}

				$("#key_supervisor").val("");

			}

			else{
				
				$("#PopUp").show();
        		$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
				$("#parrafo_info").append( alertasText["pin_invalido"]+ "<br>");
				$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');  
			}

	    }
	    //EN CASO CONTRARIO EL PIN ES INVÁLIDO
	    else{
			$("#PopUp").show();
			$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
			$("#parrafo_info").append( alertasText["pin_invalido"]+ "<br>");
			$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');  
	    }

	}

}

//CANTIDAD DE REPORTES
function Cantidad_Reportes_Hoy(){

	ahora = new Date();
	anio = ahora.getFullYear();
	mes = ahora.getMonth()+1;
	dia = ahora.getDate();	
	
	//CARGAMOS LA VARIABLES DE COMPARACION
	fecha_actual_hoy = anio+'-'+mes+'-'+dia;
	primer_envio_hoy = localStorage.getItem("primer_envio_hoy");
	conteo = localStorage.getItem("conteo");
	
	if(primer_envio_hoy == "" || primer_envio_hoy == null){ localStorage.setItem("primer_envio_hoy", fecha_actual_hoy); }
	if(conteo == "" || conteo == null){ localStorage.setItem("conteo", 12 ); conteo = 12 }
	
	//SI LAS FECHAS SON IGUALES
	if(fecha_actual_hoy == primer_envio_hoy ){
		localStorage.setItem("conteo", conteo-1 );
	}
	//SI EL DÍA YA CAMBÍO
	if(fecha_actual_hoy != primer_envio_hoy ){
		localStorage.setItem("conteo", 12-1 );
		localStorage.setItem("primer_envio_hoy", fecha_actual_hoy);
	}
	
	if(localStorage.getItem("conteo") >= 1){
		$("#badge").html( localStorage.getItem("conteo") );
		//Transmitir_Tour();
		//console.log("Transmision");
	}
	
	else{
		$("#PopUp").show();
		$("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
		$("#parrafo_info").append( alertasText["alert_cuota_cumplida"]+"<br>" );
		$("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()" style="width: 80%; margin-bottom: 5px;">'); //SE CAMBÍO 
		
		
		$("#badge").html( 0 );
	}	
}

//AL INICIAR EL APP
function Contador_Mostrar_Envios(){
	ahora = new Date();
	anio = ahora.getFullYear();
	mes = ahora.getMonth()+1;
	dia = ahora.getDate();	

	//CARGAMOS LA VARIABLES DE COMPARACION
	fecha_actual_hoy = anio+'-'+mes+'-'+dia;
	primer_envio_hoy = localStorage.getItem("primer_envio_hoy");
	conteo = localStorage.getItem("conteo");
	
	if(primer_envio_hoy == "" || primer_envio_hoy == null){ localStorage.setItem("primer_envio_hoy", fecha_actual_hoy); }
	if(conteo == "" || conteo == null){ localStorage.setItem("conteo", 12 ); conteo = 12 }
	
	//SI LAS FECHAS SON IGUALES
	if(fecha_actual_hoy == primer_envio_hoy ){
		
		if(localStorage.getItem("conteo") <= 0){
			$("#badge").html( "0" );
		}
		else{
			$("#badge").html( localStorage.getItem("conteo") );
		}	
	}
	//SI EL DÍA YA CAMBÍO
	if(fecha_actual_hoy != primer_envio_hoy ){
		localStorage.setItem("conteo", 12 );
		$("#badge").html( "12" );
	}
}



