//EDITAR SITIO
function Editar_Sitio(){
    sitio = $("#variable_seleccion").val(); 
	sitio = sitio.replace("'", "´");
	
    window.location = "#EDITAR_SITIO";
    $("#edit_site").val(sitio);  
    Ocultar_Editar();  
    
}

//EDITAR SITIO
function Editar_Sitio_Nombre(){
    sitio = $("#variable_seleccion").val(); 
    sitio = sitio.replace("'", "´");
	
	edit_site = $("#edit_site").val(); 
	edit_site = edit_site.replace("'", "´");

    lista_sitios = localStorage.getItem("lista_sitios");
    filas = lista_sitios.split(",");

    activar = true;
    for (i = 0; i < filas.length; i++) { 
        if(filas[i] == edit_site){
            activar = false;
        }
    }

    //no el nombre no se ha tomado
    if(activar == false){
		$("#PopUp").show();
        $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
        $("#parrafo_info").append( "este sitio ya existe.<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');	
    }

    else{
        //MODIFICAMOS EL NOMBRE EN LA BASE
        nueva_lista = "";
        for (i = 0; i < filas.length; i++) {

            if(nueva_lista == ""){
                if(sitio == filas[i]){
                    nueva_lista = edit_site;
                }
                else{
                    nueva_lista = filas[i];
                }
            }

            else{
                if(sitio == filas[i]){
                    nueva_lista += ","+edit_site;
                }
                else{
                    nueva_lista += ","+filas[i];
                }
            }  
        }
        localStorage.setItem("lista_sitios", nueva_lista);

        //MODIFICAMOS EL NOMBRE EN LOS TOURS
        lista_tours = localStorage.getItem("lista_tours");
        filasTours = lista_tours.split(";");
        nueva_lista_tours = "";
        for (i = 0; i < filasTours.length; i++) {
            
            dato = filasTours[i].split(",");

            if(nueva_lista_tours == ""){
                if(sitio == dato[0]){
                    nueva_lista_tours = edit_site+","+dato[1]+","+dato[2];
                }
                else{
                    nueva_lista_tours = filasTours[i];
                }
            }

            else{
                if(sitio == dato[0]){
                    nueva_lista_tours += ";"+edit_site+","+dato[1]+","+dato[2];
                }
                else{
                    nueva_lista_tours += ";"+filasTours[i];
                }
            }  
        }
        localStorage.setItem("lista_tours", nueva_lista_tours);

        //MODIFICAMOS LOS NOMBRES DE LOS PUNTOS
        //MODIFICAMOS LOS NOMBRES DE LOS PUNTOS
        lista_puntos = localStorage.getItem("lista_puntos");
        filasPuntos = lista_puntos.split(";");
        nueva_lista_puntos = "";
        for (i = 0; i < filasPuntos.length; i++) {
            
            datoPuntos = filasPuntos[i].split(",");

            if(nueva_lista_puntos == ""){
                if(sitio == datoPuntos[2]){
                    nueva_lista_puntos = datoPuntos[0]+","+datoPuntos[1]+","+edit_site+","+datoPuntos[3]+","+datoPuntos[4]+","+datoPuntos[5];
                }
                else{
                    nueva_lista_puntos = filasTours[i];
                }
            }

            else{
                if(sitio == datoPuntos[2]){
                    nueva_lista_puntos += ";"+datoPuntos[0]+","+datoPuntos[1]+","+edit_site+","+datoPuntos[3]+","+datoPuntos[4]+","+datoPuntos[5];
                }
                else{
                    nueva_lista_puntos += ";"+filasTours[i];
                }
            }  
        }
        localStorage.setItem("lista_puntos", nueva_lista_puntos);
    
    }

    Ir_Sitios();

}




//EDITAR TOUR
function Editar_Tour(){
    id_tour = $("#variable_seleccion").val(); 
    tour = $("#variable_tour").val();
    
    window.location = "#EDITAR_TOUR";
    $("#tour_name_edit").val(tour);  
    Ocultar_Editar();  
    
}


function Editar_Tour_Nombre(){
    id_tour = $("#variable_seleccion").val(); 
    tour = $("#variable_tour").val();
    tour_name_edit = $("#tour_name_edit").val();
	tour_name_edit = tour_name_edit.replace("'", "´");
    sitio_tmp = "";

    //MODIFICAMOS EL NOMBRE EN LOS TOURS
    //MODIFICAMOS EL NOMBRE EN LOS TOURS
    lista_tours = localStorage.getItem("lista_tours");
    filasTours = lista_tours.split(";");
    nueva_lista_tours = "";
    for (i = 0; i < filasTours.length; i++) {
            
        dato = filasTours[i].split(",");

        if(nueva_lista_tours == ""){
            if(id_tour == dato[1]){
                nueva_lista_tours = dato[0]+","+dato[1]+","+tour_name_edit;
            }
            else{
                nueva_lista_tours = filasTours[i];
            }
        }

        else{
            if(id_tour == dato[1]){
                nueva_lista_tours += ";"+dato[0]+","+dato[1]+","+tour_name_edit;
            }
            else{
                nueva_lista_tours += ";"+filasTours[i];
            }
        }
        sitio_tmp = dato[0];
    }
    localStorage.setItem("lista_tours", nueva_lista_tours);
	
	
	//MODIFICAMOS LOS NOMBRES DE LOS PUNTOS
	//MODIFICAMOS LOS NOMBRES DE LOS PUNTOS
	lista_puntos = localStorage.getItem("lista_puntos");
	filasPuntos = lista_puntos.split(";");
	nueva_lista_puntos = "";
	for (i = 0; i < filasPuntos.length; i++) {
            
            datoPuntos = filasPuntos[i].split(",");

            if(nueva_lista_puntos == ""){
                if(id_tour == datoPuntos[1]){
                    nueva_lista_puntos = datoPuntos[0]+","+datoPuntos[1]+","+datoPuntos[2]+","+tour_name_edit+","+datoPuntos[4]+","+datoPuntos[5];
                }
                else{
                    nueva_lista_puntos = datoPuntos[0]+","+datoPuntos[1]+","+datoPuntos[2]+","+datoPuntos[3]+","+datoPuntos[4]+","+datoPuntos[5];
                }
            }
			else{
				if(id_tour == datoPuntos[1]){
                    nueva_lista_puntos += ";"+datoPuntos[0]+","+datoPuntos[1]+","+datoPuntos[2]+","+tour_name_edit+","+datoPuntos[4]+","+datoPuntos[5];
                }
                else{
                    nueva_lista_puntos += ";"+datoPuntos[0]+","+datoPuntos[1]+","+datoPuntos[2]+","+datoPuntos[3]+","+datoPuntos[4]+","+datoPuntos[5];
                }
			}
	}
	localStorage.setItem("lista_puntos", nueva_lista_puntos);
	
	
	

    Ir_Tour(sitio_tmp);
}

//EDITAR TOUR
function Editar_Punto(){
    id = $("#variable_seleccion").val(); 
    tour = $("#variable_tour").val();
    
    window.location = "#EDITAR_PUNTO";
    $("#point_name_edit").val(tour);  
    Ocultar_Editar();  
    
}

function Editar_Punto_Nombre(){
    id = $("#variable_seleccion").val(); 
    tour = $("#variable_tour").val();
    point_name_edit = $("#point_name_edit").val();  
	point_name_edit = point_name_edit.replace("'", "´");
    tour_tmp = "";

    //MODIFICAMOS EL NOMBRE EN LOS TOURS
    //MODIFICAMOS EL NOMBRE EN LOS TOURS
    lista_puntos = localStorage.getItem("lista_puntos");
    filas = lista_puntos.split(";");
    nueva_lista = "";
    for (i = 0; i < filas.length; i++) {
            
        dato = filas[i].split(",");

        if(nueva_lista == ""){
            if(id == dato[0]){
                nueva_lista = dato[0]+","+dato[1]+","+dato[2]+","+dato[3]+","+point_name_edit+","+dato[5];
            }
            else{
                nueva_lista = filas[i];
            }
        }

        else{
            if(id == dato[0]){
                nueva_lista += ";"+dato[0]+","+dato[1]+","+dato[2]+","+dato[3]+","+point_name_edit+","+dato[5];
            }
            else{
                nueva_lista += ";"+filas[i];
            }
        }
        tour_tmp = dato[1];
    }
    localStorage.setItem("lista_puntos", nueva_lista);

    Ir_Puntos(tour_tmp);


}