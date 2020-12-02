

//PRIMER PASO
function Cargar_Base_Datos() {

    if ($('#file_rondas').val() == "") {
        $("#PopUp").show();
        $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
        $("#parrafo_info").append(alertasText['alert_sel_archivo'] + ".<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
    }
    else {

        $('#file_rondas').parse({
            config: {
                delimiter: ";",
                complete: base_rondas
            },
            before: function (file, inputElem) {
                //data_csv(file, inputElem);
                //console.log("Parsing file...", file);
                //console.log(inputElem);
            },
            error: function (err, file) {
                console.log("ERROR:", err, file);
            },
            complete: function (result) {
                //console.log("Done with all files");
                //console.log(result);

                //$("#archivo_cargado_tmp").html("");

            }
        });
    }
}


//RONDAS 2
function base_rondas(results) {

    //DATOS DEL REGISTRO
    arreglo = results.data[0];
    //SEPARADOS
    sitio = arreglo[0];
    tours = arreglo[1];
    puntos = arreglo[2];
    console.log("ESta recargado la base de datos:")
    console.log(arreglo[0])
    console.log(arreglo[1])
    console.log(arreglo[2])

    if (arreglo.length == 3) {

        localStorage.setItem("lista_sitios", sitio); //SETEAMOS LOS TOURS

        //GUARDAMOS LA LISTA DE RONDAS
        tours_partes = tours.split("|");
        nueva_lista_tours = "";
        for (i = 0; i < tours_partes.length; i++) {
            if (nueva_lista_tours == "") {
                nueva_lista_tours = tours_partes[i];
            }

            else {
                nueva_lista_tours += ";" + tours_partes[i];
            }
        }

        localStorage.setItem("lista_tours", nueva_lista_tours); //SETEAMOS LOS TOURS

        //GUARDAMOS LOS PUNTOS
        puntos_partes = puntos.split("|");
        nueva_lista_puntos = "";
        for (i = 0; i < puntos_partes.length; i++) {

            if (nueva_lista_puntos == "") {
                nueva_lista_puntos = puntos_partes[i];
            }

            else {
                nueva_lista_puntos += ";" + puntos_partes[i];
            }
        }

        localStorage.setItem("lista_puntos", nueva_lista_puntos); //CONFIGURAMOS 1 SITIO

        $("#PopUp").show();
        $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
        $("#parrafo_info").append(alertasText['alert_carga_archivo'] + "<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');

        Ir_Home();

        $('#file_rondas').val("");


    }

    else {
        $("#PopUp").show();
        $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
        $("#parrafo_info").append(alertasText['alert_incorrecto_archivo'] + "<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
    }




    /*
    nuevos_puntos = '';
    var data = results.data;  
    sitio_tmpo = "";  
    //console.log(data);

    if(data[0].length >= 4){
        $("#PopUp").show();
        $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
        $("#parrafo_info").append("Las columnas del archivo RONDAS exceden el permitido.<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');

    }

    else{

        for(i=0;i<data.length;i++){
            if(data.length == (i+1) ){
                nuevos_puntos += data[i][0]+","+data[i][1]+","+data[i][2];
            }
            else{
                nuevos_puntos += data[i][0]+","+data[i][1]+","+data[i][2]+";";
            }
            sitio_tmpo = data[i][0];
            //console.log(data[i]);
        }
        //console.log(nuevos_puntos);
        localStorage.setItem( "lista_tours", nuevos_puntos ); //SETEAMOS LOS TOURS
        localStorage.setItem( "lista_sitios", sitio_tmpo ); //CONFIGURAMOS 1 SITIO

        $('#file_punto').parse({
            config: {
                delimiter: ",",
                complete: base_punto
            },
            before: function(file, inputElem){
                //data_csv(file, inputElem);
                //console.log("Parsing file...", file);
                //console.log(inputElem);
            },
            error: function(err, file){
                console.log("ERROR:", err, file);
            },
            complete: function(result){
                //console.log("Done with all files");
                 //console.log(result);
            }
        });

    }  
    */
}


function Cargar_Base_DatosDrive() {
    window.plugins.gdrive.downloadFile("11Nck0H1LhC1FxXnwx2TjZyerBlRmVKFr",
        function (res) {
            console.log(res);
            //alert(res);
            //DATOS DEL REGISTRO

        },
        function (err) {
            console.log(err);
            console.log("dio error");
            console.log("la info es:" + err)
            let dataDrive = err;
            console.log("la info es:" + dataDrive)
            let contador = 0;
            let sitio = "";
            let tours = "";
            let puntos = "";
            for (let a = 0; a < dataDrive.length; a++) {

                if (dataDrive.charAt(a) == ";") {
                    contador++;
                } else {
                    switch (contador) {
                        case 0:
                            sitio += dataDrive.charAt(a);
                            break;
                        case 1:
                            tours += dataDrive.charAt(a);
                            break;
                        case 2:
                            puntos += dataDrive.charAt(a);
                            break;
                    }
                }
            }

            console.log("ESta recargado la base de datos:")
            console.log(sitio)
            console.log(tours)
            console.log(puntos)

            if (contador == 2) {

                localStorage.setItem("lista_sitios", sitio); //SETEAMOS LOS TOURS

                //GUARDAMOS LA LISTA DE RONDAS
                tours_partes = tours.split("|");
                nueva_lista_tours = "";
                for (i = 0; i < tours_partes.length; i++) {
                    if (nueva_lista_tours == "") {
                        nueva_lista_tours = tours_partes[i];
                    }

                    else {
                        nueva_lista_tours += ";" + tours_partes[i];
                    }
                }

                localStorage.setItem("lista_tours", nueva_lista_tours); //SETEAMOS LOS TOURS

                //GUARDAMOS LOS PUNTOS
                puntos_partes = puntos.split("|");
                nueva_lista_puntos = "";
                for (i = 0; i < puntos_partes.length; i++) {

                    if (nueva_lista_puntos == "") {
                        nueva_lista_puntos = puntos_partes[i];
                    }

                    else {
                        nueva_lista_puntos += ";" + puntos_partes[i];
                    }
                }

                localStorage.setItem("lista_puntos", nueva_lista_puntos); //CONFIGURAMOS 1 SITIO

                $("#PopUp").show();
                $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
                $("#parrafo_info").append(alertasText['alert_carga_archivo'] + "<br>");
                $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');

                Ir_Home();

                $('#file_rondas').val("");


            }

            else {
                $("#PopUp").show();
                $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
                $("#parrafo_info").append(alertasText['alert_incorrecto_archivo'] + "<br>");
                $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
            }
        }
    );
}


function cargarTodaLaBaseDeDatos() {
    console.log("holi");

    window.plugins.gdrive.downloadFile("1p0HZsyMOsACRomJsFzn1eEcSSJLoO6Z9",
        function (res) {
            console.log(res);
            //alert(res);
            //DATOS DEL REGISTRO

        },
        function (err) {

            localStorage.setItem("lista_sitios", "");
            localStorage.setItem("lista_tours","");
            localStorage.setItem("lista_puntos", "");
            console.log(err);
            console.log("dio error");
            console.log("la info es:" + err)
            let dataDrive = err;
            console.log("la info es:" + dataDrive)
            sitios = dataDrive.split("&");
            console.log(sitios.length);
            console.log(sitios[0]);
            console.log(sitios[1]);
            let contador = 0;
            for (let l = 0; l < sitios.length; l++) {
                contador = 0;


                let sitio = "";
                let tours = "";
                let puntos = "";
                let puntosa = "";
                for (let a = 0; a < sitios[l].length; a++) {

                    if (sitios[l].charAt(a) == ";") {
                        contador++;

                    } else {
                        switch (contador) {
                            case 0:
                                sitio += sitios[l].charAt(a);
                                break;
                            case 1:
                                tours += sitios[l].charAt(a);
                                break;
                            case 2:
                                puntos += sitios[l].charAt(a);
                                break;
                            case 3:
                                puntosa += sitios[l].charAt(a);
                                break;
                        }
                    }
                }

                console.log("ESta recargado la base de datos:")
                console.log(sitio)
                console.log(tours)
                console.log(puntos)
                console.log(puntosa)


                if (contador == 2) {

                    //SETEAMOS LOS TOURS

                    sitiosaa = localStorage.getItem("lista_sitios");
                    if (sitiosaa == "" || sitiosaa == null) {
                        localStorage.setItem("lista_sitios", sitio);
                    }
                    else {
                    console.log("Sitio es:+"+ sitiosaa + "," + sitio)
                        localStorage.setItem("lista_sitios", sitiosaa + "," + sitio);
                    }

                    
                    //GUARDAMOS LA LISTA DE RONDAS
                    tours_partes = tours.split("|");
                    nueva_lista_tours = "";
                    for (i = 0; i < tours_partes.length; i++) {
                        if (nueva_lista_tours == "") {
                            nueva_lista_tours = tours_partes[i];
                        }

                        else {
                            nueva_lista_tours += ";" + tours_partes[i];
                        }
                    }

                    //SETEAMOS LOS TOURS
                    lista_tours = localStorage.getItem("lista_tours");
                    if (lista_tours == "" || lista_tours == null) {
                        localStorage.setItem("lista_tours", nueva_lista_tours);
                    }
                    else {
                        console.log("Los tours son: " + lista_tours + ";" + nueva_lista_tours)
                        localStorage.setItem("lista_tours", lista_tours + ";" + nueva_lista_tours);
                    }
                    //GUARDAMOS LOS PUNTOS
                    puntos_partes = puntos.split("|");
                    nueva_lista_puntos = "";
                    for (i = 0; i < puntos_partes.length; i++) {

                        if (nueva_lista_puntos == "") {
                            nueva_lista_puntos = puntos_partes[i];
                        }

                        else {
                            nueva_lista_puntos += ";" + puntos_partes[i];
                        }
                    }

                    //CONFIGURAMOS 1 SITIO

                    lista_puntos = localStorage.getItem("lista_puntos");
                    if (lista_puntos == "" || lista_puntos == null) {
                        localStorage.setItem("lista_puntos", nueva_lista_puntos);
                    }
                    else {
                        localStorage.setItem("lista_puntos", lista_puntos + ";" + nueva_lista_puntos);
                    }

                    $("#PopUp").show();
                    $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
                    $("#parrafo_info").append(alertasText['alert_carga_archivo'] + "<br>");
                    $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');

                    Ir_Home();

                    $('#file_rondas').val("");


                }

                else {
                    console.log("contadro es:" + contador);
                    $("#PopUp").show();
                    $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
                    $("#parrafo_info").append(alertasText['alert_incorrecto_archivo'] + "<br>");
                    $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
                }
            }
        }
    );
}


//PUNTOS
function base_punto(results) {
    nuevas_rondas = '';
    var data = results.data;
    //console.log(data);

    if (data.length[0] >= 7) {
        $("#PopUp").show();
        $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
        $("#parrafo_info").append("Las columnas del archivo PUNTOS exceden el permitido.<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');
    }

    else {

        for (i = 0; i < data.length; i++) {

            if (data.length == (i + 1)) {
                nuevas_rondas += data[i][0] + "," + data[i][1] + "," + data[i][2] + "," + data[i][3] + "," + data[i][4] + "," + data[i][5];
            }
            else {
                nuevas_rondas += data[i][0] + "," + data[i][1] + "," + data[i][2] + "," + data[i][3] + "," + data[i][4] + "," + data[i][5] + ";";
            }
            //console.log(data[i]);
        }
        //console.log(nuevas_rondas);
        localStorage.setItem("lista_puntos", nuevas_rondas); //SETEAMOS LOS PUNTOS

        $("#PopUp").show();
        $("#parrafo_info").html('<img src="img/icono_advertencia_amarillo.png" width="30"/><br>');
        $("#parrafo_info").append("Los archivos has sido cargados!.<br>");
        $("#parrafo_info").append('<input type="button" data-role="none" value="Ok" class="bt_verde" onclick="Ocultar_PopUp()">');

        Ir_Home();

        $('#file_rondas').val("");
        $('#file_punto').val("");
    }


}

function seEncuentrItemEnArreglo(sitiosTemp, sitiosBaseDatos) {
    for (i = 0; i < sitiosTemp.length; i++) {
        for (o = 0; o < sitiosBaseDatos.length; o++) {
            if (sitiosTemp[i] == sitiosBaseDatos[o]) {
                return true;
            }
        }
        return false;
    }
}




