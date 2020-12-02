var vista_home = false;
var vista_crear_sala = false;
var vista_detalle_sala = false;

function Vistas() {

	lng = localStorage.getItem("lenguaje");

	$("#home").load("views/home.html", function () {
		Validaciones();
		idioma(lng); //CARGAMOS EL IDIOMA
		Validar_Timer_Activo(); // VALIDAMOS SI SE DEBE ACTIVAR EL TIMER
		Contador_Mostrar_Envios(); //MOSTRAR ALERTAS

		setTimeout("Permiso_SMS()", 2000);
		/*	var fpath = "path/to/local/file.ext";
			window.cordova.plugins.gdrive.uploadFile(fpath,
				function (response) {
					//simple response message with the status
				},
				function (error) {
					console.log(error);
				}
			);
	*/
	});

	$("#cont_lateral").load("views/lateral.html", function () {
		$("#name_guarda_menu").html(localStorage.getItem("nombre_guarda_sesion")); //NOMBRE DEL GUARDA	
		idioma(lng); //CARGAMOS EL IDIOMA
	});

	//TODOS LOS POPUP
	$("#cont_popup_validar_key").load("views/popup_validar_key.html", function () {
		idioma(lng); //CARGAMOS EL IDIOMA	
	});
	//TODOS LOS POPUP
	$("#cont_popup_validar_pass").load("views/popup_validar_pass.html", function () {
		idioma(lng); //CARGAMOS EL IDIOMA	
	});

	$("#cont_popup_checkpoint_set").load("views/popup_checkpoint_set.html", function () {
		idioma(lng); //CARGAMOS EL IDIOMA
	});
	$("#cont_popup_checkpoint_registro").load("views/popup_checkpoint_registro.html", function () {
		idioma(lng); //CARGAMOS EL IDIOMA
	});
	$("#cont_popup_licencia").load("views/popup_licencia.html", function () {
		idioma(lng); //CARGAMOS EL IDIOMA	
	});

	$("#cont_popup_CrearTour").load("views/popup_crear_tour.html", function () {
		idioma(lng); //CARGAMOS EL IDIOMA		
	});

	$("#cont_alerta_contador").load("views/alerta_contador.html", function () {
		idioma(lng); //CARGAMOS EL IDIOMA	
	});

	//PAGINAS
	$("#lenguaje").load("views/lenguaje.html", function () { idioma(lng); });
	$("#crear_sitio").load("views/crear_sitio.html", function () { idioma(lng); });
	$("#editar_sitio").load("views/editar_sitio.html", function () { idioma(lng); });

	$("#editar_tour").load("views/editar_tour.html", function () { idioma(lng); });
	$("#editar_punto").load("views/editar_punto.html", function () { idioma(lng); });

	$("#crear_punto").load("views/crear_punto.html", function () { idioma(lng); });
	$("#cont_popup_Acerca").load("views/acerca.html", function () { idioma(lng); });
	$("#setup").load("views/setup.html", function () {
		idioma(lng);
		Activar_Timer_Quietud(); // PARA ACTIVAR EL MANDOWN
		ValidarSensores(); //VALIDAMOS LOS SENSORES DEL PODOMETRO
		localStorage.setItem("pasos_tmp", localStorage.getItem("pasos"));
	});

	$("#mensaje_incidente").load("views/mensaje_incidente.html", function () { idioma(lng); });
	$("#cargar_tours").load("views/cargar_tours.html", function () { idioma(lng); });
	$("#enviar_foto").load("views/enviar_foto.html", function () { idioma(lng); });
	$("#tutorial").load("views/tutorial.html", function () { idioma(lng); });

}
