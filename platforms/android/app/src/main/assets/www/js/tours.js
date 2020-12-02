//GUARDAR NUEVO SITIO
//GUARDAR NUEVO SITIO
function Guardar_Sitio(){
    vaciar_id_temp();//vaciamos el id temporal de star tour
	
	site_name = $("#new_site").val(); //input
	site_name = site_name.replace("'", "´");
    activar = true; //permite el registro

    if(site_name != ""){
        //agregamos a la lista de sitios
        lista_sitios = localStorage.getItem("lista_sitios");
        if(lista_sitios == "" || lista_sitios == null){
            localStorage.setItem("lista_sitios", site_name );
            localStorage.setItem("site_temp", site_name);
            Ir_Escanner_Tour();
        }
        else{
            
            filas = lista_sitios.split(",");
            for (i = 0; i < filas.length; i++) { 
                
                if(filas[i] == site_name){ //VALIDAMOS QUE NO EXISTA
                    activar = false;
                }
            }

            if(activar == true){ //VALIDAMOS QUE NO EXISTA
                localStorage.setItem("lista_sitios", lista_sitios+","+site_name );
                localStorage.setItem("site_temp", site_name);
                Ir_Escanner_Tour();
            }
            else{
                $("#resp_pop_licencia").html( alertasText["alert_sitio_existe"] );
                $("#PopUpLicencia").show();    
            } 

        } 
    }

    else{
        $("#resp_pop_licencia").html( alertasText["alert_sitio_nombre"] );
        $("#PopUpLicencia").show();
    }
}

//DETALLE TOUR
//DETALLE TOUR
function Detalle_Tour(){
    report_tours = localStorage.getItem("report_tours");
    filas = report_tours.split(";");
    lista = "";

    for (i = 0; i < filas.length; i++) { 

        //$("#cont_lista_tour").append(filas[i]+"<hr>");

        columnas = filas[i].split(",");

        lista += '<table width="100%" style="margin-top: 20px"><tr>';
        lista +=    '<td style=" padding: 10px;">';
        lista +=        '<b>Name: 001 - Tower 10 Floor 1</b><br>';
        lista +=        'Number: <b>'+columnas[3]+'</b><br>';
        lista +=        'Site: <b>Sausalito Office center</b><br>';
        lista +=        'Type: <b>Start Tour</b><br>';
        lista +=        'Tour: <b>1</b><br>';
        lista +=    '</td>';
        lista +=    '<td width="30" valign="top" style="padding-top: 10px"><img src="img/btn_opciones-gris.png" width="30"></td>'
        lista += '</tr> </table>';
    }

    $("#cont_lista_tour").html(lista);
}

//LISTA SITIOS
//LISTA SITIOS
//LISTA SITIOS
function Ir_Sitios(){
    window.location = "#SITIOS"; 
    lista_sitios = localStorage.getItem("lista_sitios");

    if(lista_sitios == "" || lista_sitios == null){
        $("#cont_sitios_lista").html('<div style="padding: 15px; color: #ffffff; background-color: #03A9F4;">'+idiomaSeleccionado["alert_no_sitio_lista"]+'</div>');
        $("#cont_sitios_lista").append('<input type="button" value="'+idiomaSeleccionado["bt_crear_sitio"]+'" class="bt_azul" data-role="none" style="width: 90%; margin-bottom: 0px;" onclick="Ir_Crear_Sitio()">');
    }
    else{

        filas = lista_sitios.split(",");
        lista = "";

        $("#cont_sitios_lista").html(lista);
        lista += '<input type="button" data-role="none" value="Subir todos los sitios a Drive" class="bt_verde bt_cargar_d" style="width: 89%;" onclick="Exportar_Todos_Los_Sitios()">';

        for (i = 0; i < filas.length; i++) { 
			n_site = filas[i].replace("'", "`");

            lista += '<table width="100%" style="margin-top:10px; padding-top:0;"><tr>';
			lista +=    '<td width="35"><img src="img/btn_opciones-gris.png" width="35" onclick="Ver_Editar('+"'"+n_site+"'"+',1)" ></td>';
            lista +=    '<td style=" padding: 10px;">';
            lista +=        '<div class="sub_ti_setup" style="padding-left: 0; margin-top: 0;">'+idiomaSeleccionado["subti_sitio"]+'</div>';
            lista +=        '<b style="font-size: 17px;">'+filas[i]+'';
            lista +=    '</td>';
            lista +=    '<td width="30" valign="top" style="padding-top: 15px"><img src="img/btn_flecha_adelante_gris.png" width="20" onclick="Ir_Tour('+"'"+filas[i]+"'"+');" ></td>'
            lista += '</tr> </table>';
        }

        $("#cont_sitios_lista").html(lista);
    }
}

//LISTA TOUR
function Ir_Tour(val){
    window.location = "#TOURS"; 
    lista_tours = localStorage.getItem("lista_tours");
    localStorage.setItem("site_temp", val);// SETEAMOS TEMPORALMENTE EL NOMBRE DEL SITIO
    $("#site_selected").val(val);

    if(lista_tours == "" || lista_tours == null){
        $("#cont_tour_lista").html('<div style="padding: 15px; color: #ffffff; background-color: #03A9F4;">'+idiomaSeleccionado["sin_rondas_gonf"]+'</div>');
    }
    else{
        filas = lista_tours.split(";");
        lista = "";

        $("#cont_tour_lista").html(lista);

        for (i = 0; i < filas.length; i++) { 

            nodo = filas[i].split(",");

            if(nodo[0] == val){
				
				n_site = nodo[1].replace("'", "`");
				n_tour = nodo[2].replace("'", "`");

                lista += '<table width="100%" style="margin-top:10px; padding-top:0; "><tr>';
                lista +=    '<td width="35"><img src="img/btn_opciones-gris.png" width="35" onclick="Ver_Editar('+"'"+n_site+"'"+',2,'+"'"+n_tour+"'"+');" ></td>';
                lista +=    '<td style=" padding: 10px;">';
                lista +=        '<div class="sub_ti_setup" style="padding-left: 0; margin-top: 0;">'+idiomaSeleccionado["subti_rondas"]+'</div>';
                lista +=        '<b style="font-size: 17px;">'+nodo[2]+'<b>';
                lista +=    '</td>';
                lista +=    '<td width="30" valign="top" style="padding-top: 15px"><img src="img/btn_flecha_adelante_gris.png" width="20" onclick="Ir_Puntos('+"'"+nodo[1]+"'"+',   '+"'"+nodo[2]+"'"+');" ></td>'
                lista += '</tr> </table>';
            }
        }
        $("#cont_tour_lista").html(lista);  
    }
    $("#cont_tour_lista").append('<div style="text-align: left; padding: 15px;"><img src="img/btn-mas.png" class="bt_mas" onclick="vaciar_id_temp();Ir_Escanner_Tour();"></div>');
}

//ESTRUCTURA DE LA BASE GUARDADA SEPARADA POR COMAS
//1. CODIGO
//2. CODIGO DEL STARTPOINT
//3. NOMBRE SITIO
//4. NOMBRE TOUR
//5. NOMBRE PUNTO
//6. TIPO PUNTO
//ESTRUCTURA DE LA BASE GUARDADA SEPARADA POR COMAS

//LISTA TOUR
function Ir_Puntos(val,name){
    window.location = "#PUNTOS"; 
    lista_puntos = localStorage.getItem("lista_puntos");
    localStorage.setItem("id_star_point", val);// SETEAMOS TEMPORALMENTE EL NOMBRE DEL SITIO
    $("#tour_selected").val(val);
	
	localStorage.setItem("tour_name",name);

    if(lista_puntos == "" || lista_puntos == null){
        $("#cont_puntos_lista").html('<div style="padding: 15px; color: #ffffff; background-color: #03A9F4;">'+idiomaSeleccionado["sin_puntos_gonf"]+'</div>');
    }
    else{
        filas = lista_puntos.split(";");
        lista = "";

        $("#cont_puntos_lista").html("");

        for (i = 0; i < filas.length; i++) { 

            nodo = filas[i].split(",");
            textTipo = "";

            if(nodo[5] == "03"){textTipo = "Startpoint";}
            if(nodo[5] == "04"){textTipo = "Controlpoint";}

            if(nodo[1] == val){
				
				n_tour = nodo[0].replace("'", "`");
				n_point = nodo[0].replace("'", "`");

                lista += '<table width="100%" style="margin-top: 20px; padding-top:0;"><tr>';
                lista +=    '<td style=" padding: 10px;">';
                lista +=        'Name: '+nodo[4]+'<br>';
                lista +=        'Number: '+nodo[0]+'<br>';
                lista +=        'Site: '+nodo[2]+'<br>';
                lista +=        'Type: '+textTipo+'<br>';
                lista +=        'Tour: '+nodo[3]+'<br>';
                lista +=    '</td>';
                lista +=    '<td width="40" valign="top" style="padding-top: 15px"><img src="img/btn_opciones-gris.png" width="40" onclick="Ver_Editar('+"'"+n_tour+"'"+',3,'+"'"+n_point+"'"+');"></td>'
                lista += '</tr> </table>';
            }
        }
        if(lista == ""){ 
            lista = '<div style="padding: 15px; color: #ffffff; background-color: #03A9F4;">No tienes Puntos Configurados.</div>';
        }

        $("#cont_puntos_lista").html(lista);
    }
    $("#cont_puntos_lista").append('<div style="text-align: left; padding: 15px;"><img src="img/btn-mas.png" class="bt_mas" onclick="Ir_Escanner_Tour();"> '+idiomaSeleccionado["bt_nuevo_punto"]+'</div>');
}


function vaciar_id_temp(){
	localStorage.setItem("id_star_point",""); 
}








































var url = "http://celmediaapps.com/centor/";
//TRANSMITIR REPORTE
function Transmitir_Reporte(){
	
	Convertir_Reporte();

	/*
    set_mail_1 = localStorage.getItem( "set_mail_1" );
    set_mail_2 = localStorage.getItem( "set_mail_2" );
    set_mail_3 = localStorage.getItem( "set_mail_3" );
    reporte_tour = localStorage.getItem( "reporte_tour" );
    nombre_guarda_sesion = localStorage.getItem( "nombre_guarda_sesion" );

    if(reporte_tour == "" || reporte_tour == null){
        $("#PopUp").show();
        $("#parrafo_info").html("No tienes ningun rondas cargadas.<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
    }
    else{

        jQuery.ajax({
            url: url+'email/enviar_mensaje.php',
            type:'post',
            data: { set_mail_1:set_mail_1, set_mail_2:set_mail_2, set_mail_3:set_mail_3, reporte_tour:reporte_tour, nombre_guarda_sesion:nombre_guarda_sesion },
            success: function(result){
                
                $("#PopUp").show();
                $("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
                $("#parrafo_info").append("Report transmission was successful.<br>");
                $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
                localStorage.setItem("reporte_tour", ""); 
                Ir_Home();
            },     

            error: function(result){
                $("#PopUp").show();
                $("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
                $("#parrafo_info").append("No tienes acceso a internet, recuerda conectarte a una red he intentar de nuevo.<br>");
                $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
            }
        });
    } 
	*/  
}






































//TRANSMITIR REPORTE
function Transmitir_Imagen(){

    set_mail_1 = localStorage.getItem( "set_mail_1" );
    set_mail_2 = localStorage.getItem( "set_mail_2" );
    //set_mail_3 = localStorage.getItem( "set_mail_3" );
    foto1 = localStorage.getItem( "foto1" );
    nombre_guarda_sesion = localStorage.getItem( "nombre_guarda_sesion" );

    if(foto1 == "" || foto1 == null){
        $("#PopUp").show();
        $("#parrafo_info").html("No tienes ninguna imagen o archivo seleccionado.<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
    }
    else{

        jQuery.ajax({
            url: url+'email/enviar_foto.php',
            type:'post',
            data: { set_mail_1:set_mail_1, set_mail_2:set_mail_2, set_mail_3:set_mail_3, foto1:foto1, nombre_guarda_sesion:nombre_guarda_sesion },
            success: function(result){
                
                $("#PopUp").show();
                $("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
                $("#parrafo_info").append("La imagen fue envíada .<br>");
                $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
                Ir_Home();
            },     

            error: function(result){
                $("#PopUp").show();
                $("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
                $("#parrafo_info").append("No tienes acceso a internet, recuerda conectarte a una red he intentar de nuevo.<br>");
                $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
            }
        });

    }
    
}


//TRANSMITAR BASE DE DATOS
function Transmitir_Base_Datos(){
    /*
    $("#PopUp").show();
    $("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
    $("#parrafo_info").append("Assignments have been successfully transmitted.<br>");
    
    $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
    */
    ver_validar_key(4);
}


