var activar_eliminar = false;
//ELIMINAR SITIO
function Eliminar_Sitio(){
    if(activar_eliminar == false){

         $("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
        $("#parrafo_info").append( alertasText["alert_eliminar_sitio"]+"<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="'+idiomaSeleccionado["bt_ok"]+'" class="bt_verde" onclick="activar_eliminar = true; Eliminar_Sitio()" style="width: 90%;">');
        $("#parrafo_info").append('<input type="button" data-role="none" value="'+idiomaSeleccionado["bt_cancelar"]+'" class="bt_rojo" onclick="Ocultar_PopUp()" style="width: 90%;">');

        $("#PopUp").show();
    }
    else{
        sitio = $("#variable_seleccion").val(); 
        Borrar_sitio(sitio);
        Ocultar_Editar();
        Ir_Sitios();
        activar_eliminar = false;
        Ocultar_PopUp();
    }
}









var url = "http://celmediaapps.com/centor/";
//TRANSMITIR REPORTE
function Transmitir_Base(sitio){

    set_mail_1 = localStorage.getItem( "set_mail_1" );
    set_mail_2 = localStorage.getItem( "set_mail_2" );
    //set_mail_3 = localStorage.getItem( "set_mail_3" );
    lista_tours = localStorage.getItem( "lista_tours" );
    lista_puntos = localStorage.getItem( "lista_puntos" );
    nombre_guarda_sesion = localStorage.getItem( "nombre_guarda_sesion" );



    //TOMAS SOLO LOS TOUR CON EL NOMBRE DEL SITIO
    nuevo_lista_tour = "";

    if(lista_tours == "" || lista_tours == null){
       lista_tours = "";
    }

    else{

        filas = lista_tours.split(";");
        nueva_fila = "";        
        
        for (i = 0; i < filas.length; i++) { 
            nodo = filas[i].split(","); //extraemos el codigo del marcador
            
            if( nodo[0] == sitio ){
                if(filas[i].length == (i+1) ){
                    nueva_fila = nodo[0]+","+nodo[1]+","+nodo[2];
                }
                else{
                    nueva_fila = nodo[0]+","+nodo[1]+","+nodo[2]+";";
                } 
            }

            nuevo_lista_tour += nueva_fila;

        }

        lista_tours = nuevo_lista_tour;
    }


    //TOMAS SOLO LOS PUNTOS CON EL NOMBRE DEL SITIO
    nuevo_lista_puntos = "";

    if(lista_puntos == "" || lista_puntos == null){
       lista_puntos = "";
    }

    else{

        filasP = lista_puntos.split(";");
        nueva_fila_puntos = "";        
        
        for (i = 0; i < filasP.length; i++) { 
            nodo = filasP[i].split(","); //extraemos el codigo del marcador
            
            if( nodo[0] == sitio ){
                if(filasP[i].length == (i+1) ){
                    nueva_fila_puntos = nodo[0]+","+nodo[1]+","+nodo[2];
                }
                else{
                    nueva_fila_puntos = nodo[0]+","+nodo[1]+","+nodo[2]+";";
                } 
            }

            nuevo_lista_puntos += nueva_fila_puntos;

        }

        lista_puntos = nuevo_lista_puntos;
    }
 


    if(lista_tours == "" || lista_tours == null){
        $("#PopUp").show();
        $("#parrafo_info").html( alertasText["alert_sin_ronda"]+"<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
    }
    else{

        jQuery.ajax({
            url: url+'email/enviar_base.php',
            type:'post',
            data: { set_mail_1:set_mail_1, set_mail_2:set_mail_2, set_mail_3:set_mail_3, lista_tours:lista_tours, lista_puntos:lista_puntos, nombre_guarda_sesion:nombre_guarda_sesion, sitio:sitio },
            success: function(result){
                
                $("#PopUp").show();
                $("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
                $("#parrafo_info").append("Report transmission was successful.<br>");
                $("#parrafo_info").append('<input type="button" data-role="none" value="'+idiomaSeleccionado["bt_ok"]+'" class="bt_verde" onclick="Ocultar_PopUp()">');
                localStorage.setItem("reporte_tour", ""); 
                Ir_Home();
            },     

            error: function(result){
                $("#PopUp").show();
                $("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
                $("#parrafo_info").append(alertasText["alert_sin_internet"]+"<br>");
                $("#parrafo_info").append('<input type="button" data-role="none" value="'+idiomaSeleccionado["bt_ok"]+'" class="bt_verde" onclick="Ocultar_PopUp()">');
            }
        });
    }
    
}











//ELIMINAR TOUR
function Eliminar_Tour(){
    if(activar_eliminar == false){

         $("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
        $("#parrafo_info").append( alertasText["alert_eliminar_ronda"]+"<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="'+idiomaSeleccionado["bt_ok"]+'" class="bt_verde" onclick="activar_eliminar = true; Eliminar_Tour()" style="width: 90%;">');
        $("#parrafo_info").append('<input type="button" data-role="none" value="'+idiomaSeleccionado["bt_cancelar"]+'" class="bt_rojo" onclick="Ocultar_PopUp()" style="width: 90%;">');

        $("#PopUp").show();
    }
    else{
        tour = $("#variable_seleccion").val(); 
        Borrar_Tour(tour);
        Ocultar_Editar();

        Ir_Tour( $("#site_selected").val() );
        activar_eliminar = false;
        Ocultar_PopUp();
    }
}


//ELIMINAR TOUR
function Eliminar_Punto(){
    
    if(activar_eliminar == false){

         $("#parrafo_info").html('<img src="img/icono_check.png" width="30"/><br>');
        $("#parrafo_info").append(alertasText["alert_eliminar_punto"]+"<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="'+idiomaSeleccionado["bt_ok"]+'" class="bt_verde" onclick="activar_eliminar = true; Eliminar_Punto()" style="width: 90%;">');
        $("#parrafo_info").append('<input type="button" data-role="none" value="'+idiomaSeleccionado["bt_cancelar"]+'" class="bt_rojo" onclick="Ocultar_PopUp()" style="width: 90%;">');

        $("#PopUp").show();
    }
    else{
        punto = $("#variable_seleccion").val(); 
        Borrar_Punto(punto);
        Ocultar_Editar();

        Ir_Puntos( $("#tour_selected").val() );
        activar_eliminar = false;
        Ocultar_PopUp();
    }
}

//PARA BORRAR UN SITIO
function Borrar_sitio(val){
    lista_sitios = localStorage.getItem("lista_sitios");
    filas = lista_sitios.split(",");
    nueva_lista = "";

    for (i = 0; i < filas.length; i++) { 
        if(val != filas[i]){
            if(nueva_lista == ""){
                nueva_lista = filas[i];
            }
            else{
                nueva_lista += ","+filas[i];
            }
        } 
        if(val == filas[i]){
            Borrar_Varios_Tour(val);
        }     
    }
    localStorage.setItem("lista_sitios", nueva_lista);
}

//PARA BORRAR VARIOS TOUR ASOCIADOS A UN SITIO
function Borrar_Varios_Tour(val){
    //PARA ELIMINAR LAS RONDAS DE ESTE SITIO
    //PARA ELIMINAR LAS RONDAS DE ESTE SITIO
    lista_tours = localStorage.getItem("lista_tours");
    fila = lista_tours.split(";");
    nueva_lista_tours = "";
    for (e = 0; e < fila.length; e++) { 

        datos = fila[e].split(",");
        if(val != datos[0]){
            if(nueva_lista_tours == ""){
                 nueva_lista_tours += fila[e];
            }
            else{
                nueva_lista_tours += ";"+fila[e];
            }
        }
        if(val == datos[0]){
            Borrar_Varios_Puntos(datos[1]);
        }       
    }
    localStorage.setItem("lista_tours", nueva_lista_tours);
}

//PARA BORRAR UN TOUR
function Borrar_Tour(val){
    //PARA ELIMINAR LAS RONDAS DE ESTE SITIO
    //PARA ELIMINAR LAS RONDAS DE ESTE SITIO
    lista_tours = localStorage.getItem("lista_tours");
    fila = lista_tours.split(";");
    nueva_lista = "";

    for (e = 0; e < fila.length; e++) { 

        datos = fila[e].split(",");
        if(val != datos[1]){
            if(nueva_lista == ""){
                 nueva_lista += fila[e];
            }
            else{
                nueva_lista += ";"+fila[e];
            }
        }
        if(val == datos[1]){
            Borrar_Varios_Puntos(datos[1]);
        }  
    }
    localStorage.setItem("lista_tours", nueva_lista);
}

//PARA BORRAR VARIOS PUNTOS ASOCIADOS A UN TOUR
function Borrar_Varios_Puntos(val){
    //PARA BORRAR VARIOS DE UNA RONDA
    //PARA BORRAR VARIOS DE UNA RONDA
    lista_puntos = localStorage.getItem("lista_puntos");
    filap = lista_puntos.split(";");
    nueva_lista_puntos = "";

    for (p = 0; p < filap.length; p++) { 

        datosp = filap[p].split(",");
        if(val != datosp[1]){
            if(nueva_lista_puntos == ""){
                 nueva_lista_puntos += filap[p];
            }
            else{
                nueva_lista_puntos += ";"+filap[p];
            }
        }       
    }
    localStorage.setItem("lista_puntos", nueva_lista_puntos);
}

//PARA BORRAR UN PUNTO
function Borrar_Punto(val){
    //PARA ELIMINAR UN PUNTO
    //PARA ELIMINAR UN PUNTO
    lista_puntos = localStorage.getItem("lista_puntos");
    fila = lista_puntos.split(";");
    nueva_lista = "";

    for (e = 0; e < fila.length; e++) { 

        datos = fila[e].split(",");
        if(val != datos[0]){
            if(nueva_lista == ""){
                 nueva_lista += fila[e];
            }
            else{
                nueva_lista += ";"+fila[e];
            }
        }       
    }
    localStorage.setItem("lista_puntos", nueva_lista);
}