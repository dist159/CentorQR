var idiomaSeleccionado = [];

var alertasText = [];

//IDIOMAS // AQUI SE PUEDEN CARGAR LOS IDIOMAS NECESARIOS
var INGLES = [];
var ESPANOL = [];
var FRANCES = [];
var TURCO = [];

var alertasEN = [];
var alertasES = [];
var alertasFR = [];
var alertasTU = [];

//IDIOMA
INGLES['bt_nex'] = "Next";
ESPANOL['bt_nex'] = "Siguiente";
FRANCES['bt_nex'] = "Suivant";
TURCO['bt_nex'] = "Sonraki";

//ESCANER LICENCIA
INGLES['bt_scan_licence'] = "Scan License";
ESPANOL['bt_scan_licence'] = "Escanear Licencia";
FRANCES['bt_scan_licence'] = "Scan Licence";
TURCO['bt_scan_licence'] = "Tarama Lisansi";

INGLES['bt_cancel'] = "Cancel"; /// PARA LOS BOTONES DE CANCELAR
ESPANOL['bt_cancel'] = "Cancelar";
FRANCES['bt_cancel'] = "Annuler";
TURCO['bt_cancel'] = "Iptal etmek";

INGLES['bt_terminar'] = "Finish"; /// PARA LOS BOTONES DE CANCELAR
ESPANOL['bt_terminar'] = "Terminar";
FRANCES['bt_terminar'] = "Terminer";
TURCO['bt_terminar'] = "Bitis";

INGLES['bt_finalizar'] = "Finalize"; /// PARA LOS BOTONES DE CANCELAR
ESPANOL['bt_finalizar'] = "Finalizar";
FRANCES['bt_finalizar'] = "Finaliser";
TURCO['bt_finalizar'] = "Sonuçlandirmak";

INGLES['ti_scanner_punto'] = "Record Checkpoint"; /// PARA LOS BOTONES DE CANCELAR
ESPANOL['ti_scanner_punto'] = "Escanear Punto";
FRANCES['ti_scanner_punto'] = "Créer un point de contrôle";
TURCO['ti_scanner_punto'] = "Kayit Kontrol Noktasi";

INGLES['bt_escanear'] = "Scan"; /// PARA LOS BOTONES DE CANCELAR
ESPANOL['bt_escanear'] = "Escanear";
FRANCES['bt_escanear'] = "Scanner";
TURCO['bt_escanear'] = "Taramak";

//CONFUGURACION
INGLES['ti_setup'] = "Setup";
ESPANOL['ti_setup'] = "Configurar";
FRANCES['ti_setup'] = "Configurer";
TURCO['ti_setup'] = "Kurmak";

INGLES['ti_key_super'] = "Key in Supervisor PIN";
ESPANOL['ti_key_super'] = "Ingrese PIN Supervisor";
FRANCES['ti_key_super'] = "Entrer PIN Superviseur";
TURCO['ti_key_super'] = "Yönetici PIN kodunu girin";

INGLES['ti_report_destination'] = "Report Destination Emails*";
ESPANOL['ti_report_destination'] = "Correos de destino - Reportes";
FRANCES['ti_report_destination'] = "Email(s) destinataire(s) - Rapports";
TURCO['ti_report_destination'] = "Hedef E-postalari Bildirin *";

INGLES['ti_email_1'] = "Email 1 *";
ESPANOL['ti_email_1'] = "Email 1 *";
FRANCES['ti_email_1'] = "Email 1 *";
TURCO['ti_email_1'] = "E-posta 1 *";

INGLES['ti_email_2'] = "Email 2 *";
ESPANOL['ti_email_2'] = "Email 2 *";
FRANCES['ti_email_2'] = "Email 2 *";
TURCO['ti_email_2'] = "E-posta 2 *";

INGLES['ti_email_3'] = "Email 3 *";
ESPANOL['ti_email_3'] = "Email 3 *";
FRANCES['ti_email_3'] = "Email 3 *";
TURCO['ti_email_3'] = "E-posta 3 *";


INGLES['ti_report_transmit'] = "Report Transmission Interval *";
ESPANOL['ti_report_transmit'] = "Intervalo - Transmision Reportes *";
FRANCES['ti_report_transmit'] = "Intervalle de transmission des rapports*";
TURCO['ti_report_transmit'] = "Iletim Araligi Raporu *";

INGLES['place_hours'] = "Hours (04 to 168) *";
ESPANOL['place_hours'] = "Horas (04 a 168)*";
FRANCES['place_hours'] = "Heures (04 à 168)*";
TURCO['place_hours'] = "Saatler (04 - 168) *";

INGLES['alert_quietud'] = "30 seconds to inactivity Alarm";
ESPANOL['alert_quietud'] = "En 30 segundos se enviará alerta de inactividad.";
FRANCES['alert_quietud'] = "30 secondes á l'alarme inactivité";
TURCO['alert_quietud'] = "hareketsizlik Alarmi için 30 saniye";

INGLES['ti_report_quietud'] = "Inactivity *";
ESPANOL['ti_report_quietud'] = "Inactividad *";
FRANCES['ti_report_quietud'] = "Inactivity *";
TURCO['ti_report_quietud'] = "Inactivity *";

INGLES['place_hours_quietud'] = "Minutes (5 to 999) *";
ESPANOL['place_hours_quietud'] = "Minutos (5 a 999)*";
FRANCES['place_hours_quietud'] = "Minutes (5 à 999) *";
TURCO['place_hours_quietud'] = "Dakika (5 ila 999) *";


INGLES['ti_emergency_phone'] = "Emergency Phone Number *";
ESPANOL['ti_emergency_phone'] = "Teléfono de Emergencia *";
FRANCES['ti_emergency_phone'] = "Téléphone d'urgence *";
TURCO['ti_emergency_phone'] = "Acil Telefon Numarasi *";

INGLES['ti_sms'] = "Emergency SMS Number *";
ESPANOL['ti_sms'] = "SMS de Emergencia *";
FRANCES['ti_sms'] = "SMS d'urgence *";
TURCO['ti_sms'] = "Acil SMS Numarasi *";

INGLES['ti_activar_podometro'] = "Activate Pedometer *";
ESPANOL['ti_activar_podometro'] = "Activar Podómetro *";
FRANCES['ti_activar_podometro'] = "Activer le podomètre *";
TURCO['ti_activar_podometro'] = "Pedometreyi Etkinleştir *";

INGLES['ti_activar_mandown'] = "Detect Inactivity *";
ESPANOL['ti_activar_mandown'] = "Detectar Inactividad *";
FRANCES['ti_activar_mandown'] = "Détecter l'inactivité *";
TURCO['ti_activar_mandown'] = "Hareketsizlik Tespiti *";


INGLES['bt_save'] = "Save";
ESPANOL['bt_save'] = "Guardar";
FRANCES['bt_save'] = "Sauvegarder";
TURCO['bt_save'] = "Kayit etmek";

//SESION
INGLES['ti_name_guard'] = "Enter Guard Name";
ESPANOL['ti_name_guard'] = "Ingrese Nombre del Guardia";
FRANCES['ti_name_guard'] = "Entrez le nom de l'agent";
TURCO['ti_name_guard'] = "Güvenlik Ismini Girin";

INGLES['bt_start'] = "Start";
ESPANOL['bt_start'] = "Inicio";
FRANCES['bt_start'] = "Débuter";
TURCO['bt_start'] = "Basla";

//HOME
INGLES['ti_intervalo_tiempo'] = "Interval Timer";
ESPANOL['ti_intervalo_tiempo'] = "Intervalo de tiempo";
FRANCES['ti_intervalo_tiempo'] = "Intervalle de temps";
TURCO['ti_intervalo_tiempo'] = "Aralik Zamanlayicisi";

INGLES['ti_press_emergecy'] = "Press in case of emergency";
ESPANOL['ti_press_emergecy'] = "Oprima en caso de emergencia";
FRANCES['ti_press_emergecy'] = "Appuyer en cas d'urgence";
TURCO['ti_press_emergecy'] = "Acil durumlarda basin";

INGLES['bt_trasnmit_tours'] = "Transmit Reports";
ESPANOL['bt_trasnmit_tours'] = "Transmitir Reportes";
FRANCES['bt_trasnmit_tours'] = "Transmettre Rapports";
TURCO['bt_trasnmit_tours'] = "Raporlari Aktar";

INGLES['bt_record_check_point'] = "Record Checkpoint";
ESPANOL['bt_record_check_point'] = "Registrar Punto Control";
FRANCES['bt_record_check_point'] = "Créer un point de contrôle";
TURCO['bt_record_check_point'] = "Kayit Kontrol Noktasi";

INGLES['bt_incident_message'] = "Incident Message";
ESPANOL['bt_incident_message'] = "Mensaje Incidente";
FRANCES['bt_incident_message'] = "Message d'incident";
TURCO['bt_incident_message'] = "Olay Mesaji";

INGLES['ti_emergenci_data_transmit'] = "Emergency Transmission Data";
ESPANOL['ti_emergenci_data_transmit'] = "Datos Transmision Emergencia";
FRANCES['ti_emergenci_data_transmit'] = "Contacts pour transmission des données";
TURCO['ti_emergenci_data_transmit'] = "Acil Durum Iletim Verileri";

//MENU LATERAL
INGLES['bt_menu_home'] = "Home";
ESPANOL['bt_menu_home'] = "Home";
FRANCES['bt_menu_home'] = "Accueil";
TURCO['bt_menu_home'] = "Ev";

INGLES['bt_menu_alert'] = "Send Alert";
ESPANOL['bt_menu_alert'] = "Enviar Alerta";
FRANCES['bt_menu_alert'] = "Envoyer une alerte";
TURCO['bt_menu_alert'] = "Uyari Gönder";

INGLES['bt_menu_checkpoint'] = "Record Checkpoint";
ESPANOL['bt_menu_checkpoint'] = "Registrar Punto Control";
FRANCES['bt_menu_checkpoint'] = "Créer un point de contrôle";
TURCO['bt_menu_checkpoint'] = "Kayit Kontrol Noktasi";

INGLES['bt_menu_menssage'] = "Incident Message";
ESPANOL['bt_menu_menssage'] = "Mensaje Incidente";
FRANCES['bt_menu_menssage'] = "Message d'incident";
TURCO['bt_menu_menssage'] = "Olay Mesaji";

INGLES['bt_menu_created'] = "Create Tours";
ESPANOL['bt_menu_created'] = "Crear Rondas";
FRANCES['bt_menu_created'] = "Créer les rondes";
TURCO['bt_menu_created'] = "Turlar Olustur";

INGLES['bt_menu_load'] = "Load Databases";
ESPANOL['bt_menu_load'] = "Cargar Bases de Datos";
FRANCES['bt_menu_load'] = "Charger des bases de Données";
TURCO['bt_menu_load'] = "Veritabanlarini Yükle";

INGLES['bt_menu_edit'] = "Edit Tours";
ESPANOL['bt_menu_edit'] = "Editar Rondas";
FRANCES['bt_menu_edit'] = "Editer les rondes";
TURCO['bt_menu_edit'] = "Turlari Düzenle";

INGLES['bt_menu_report'] = "Reports";
ESPANOL['bt_menu_report'] = "Reportes";
FRANCES['bt_menu_report'] = "Rapports";
TURCO['bt_menu_report'] = "Raporlar";

INGLES['bt_menu_photo'] = "Send Photo";
ESPANOL['bt_menu_photo'] = "Enviar Foto";
FRANCES['bt_menu_photo'] = "Envoyer photo";
TURCO['bt_menu_photo'] = "Fotograf göndermek";

INGLES['bt_menu_transmit'] = "Transmit Reports";
ESPANOL['bt_menu_transmit'] = "Transmitir Reportes";
FRANCES['bt_menu_transmit'] = "Transmettre les Rapports";
TURCO['bt_menu_transmit'] = "Raporlari Aktar";

INGLES['bt_menu_database'] = "Send Database";
ESPANOL['bt_menu_database'] = "Enviar Base de datos";
FRANCES['bt_menu_database'] = "Envoyer la base de données";
TURCO['bt_menu_database'] = "Veritabanini Gönder";

INGLES['bt_menu_setup'] = "Setup";
ESPANOL['bt_menu_setup'] = "Configurar";
FRANCES['bt_menu_setup'] = "Configurer";
TURCO['bt_menu_setup'] = "Kurmak";

INGLES['bt_menu_start'] = "Start";
ESPANOL['bt_menu_start'] = "Inicio";
FRANCES['bt_menu_start'] = "Débuter";
TURCO['bt_menu_start'] = "Basla";

INGLES['bt_menu_tutorial'] = "Manuals";
ESPANOL['bt_menu_tutorial'] = "Manuales";
FRANCES['bt_menu_tutorial'] = "Manuels";
TURCO['bt_menu_tutorial'] = "Kilavuzlar";

INGLES['bt_menu_about'] = "About";
ESPANOL['bt_menu_about'] = "Acerca";
FRANCES['bt_menu_about'] = "A propos";
TURCO['bt_menu_about'] = "Hakkinda";

INGLES['bt_menu_leguage'] = "Language";
ESPANOL['bt_menu_leguage'] = "Idioma";
FRANCES['bt_menu_leguage'] = "Langue";
TURCO['bt_menu_leguage'] = "Dil";

INGLES['bt_menu_salir'] = "Exit";
ESPANOL['bt_menu_salir'] = "Salir App";
FRANCES['bt_menu_salir'] = "Quitter";
TURCO['bt_menu_salir'] = "Çikis";

//CREAR SITIOS
INGLES['ti_sitios'] = "SITES";
ESPANOL['ti_sitios'] = "SITIOS";
FRANCES['ti_sitios'] = "SITES";
TURCO['ti_sitios'] = "SITELER";

INGLES['subti_sitio'] = "Site";
ESPANOL['subti_sitio'] = "Sitio";
FRANCES['subti_sitio'] = "Site";
TURCO['subti_sitio'] = "Site";

//TOURS
INGLES['ti_rondas'] = "TOURS";
ESPANOL['ti_rondas'] = "RONDAS";
FRANCES['ti_rondas'] = "RONDES";
TURCO['ti_rondas'] = "TURLARI";

INGLES['subti_rondas'] = "Tour";
ESPANOL['subti_rondas'] = "Ronda";
FRANCES['subti_rondas'] = "Ronde";
TURCO['subti_rondas'] = "Tur";

INGLES['bt_crear_sitio'] = "Create Site";
ESPANOL['bt_crear_sitio'] = "Crear Sitio";
FRANCES['bt_crear_sitio'] = "Créer un Site";
TURCO['bt_crear_sitio'] = "Site Olustur";

//POP UP ALERTA CONTADOR
INGLES['ti_contador_estimado'] = "Time Remaining";
ESPANOL['ti_contador_estimado'] = "Tiempo restante";
FRANCES['ti_contador_estimado'] = "Temps restant";
TURCO['ti_contador_estimado'] = "Kalan süre";

INGLES['bt_ok'] = "Ok";
ESPANOL['bt_ok'] = "Aceptar";
FRANCES['bt_ok'] = "Accepter";
TURCO['bt_ok'] = "Tamam";

INGLES['bt_cancelar'] = "Cancel";
ESPANOL['bt_cancelar'] = "Cancelar";
FRANCES['bt_cancelar'] = "Annuler";
TURCO['bt_cancelar'] = "Iptal etmek";

//CARGAR RONDAS
INGLES['ti_cargar_ronda'] = "Load Databases";
ESPANOL['ti_cargar_ronda'] = "Cargar Bases de Datos";
FRANCES['ti_cargar_ronda'] = "Charger des bases de données";
TURCO['ti_cargar_ronda'] = "Veritabanlarini Yükle";

INGLES['mensaje_carga'] = "Remember the files to upload must be in .CSV format and are loaded from Google Drive, please request them from your supervisor.";
ESPANOL['mensaje_carga'] = "Recuerde los archivos a cargar deben ser en formato .CSV y se cargan desde Google Drive, solicíteselos a su supervisor.";
FRANCES['mensaje_carga'] = "N'oubliez pas que les fichiers à télécharger doivent être au format .CSV et sont chargés à partir de Google Drive, demandez-les à votre superviseur.";
TURCO['mensaje_carga'] = "Yüklenecek dosyaların .CSV biçiminde olması gerektiğini ve Google Drive'dan yüklendiğini unutmayın, bunları şefinizden isteyin.";

INGLES['bt_seleccionar_archivo'] = "Select File";
ESPANOL['bt_seleccionar_archivo'] = "Seleccionar Archivo";
FRANCES['bt_seleccionar_archivo'] = "Sélectionner un fichier";
TURCO['bt_seleccionar_archivo'] = "Dosya Seç";

INGLES['bt_cargar'] = "Upload";
ESPANOL['bt_cargar'] = "Subir";
FRANCES['bt_cargar'] = "Télécharger";
TURCO['bt_cargar'] = "Yükleme";

//CREAR RONDAS
INGLES['ti_crear_ronda'] = "Create Tours";
ESPANOL['ti_crear_ronda'] = "Crear Rondas";
FRANCES['ti_crear_ronda'] = "Créer des rondes";
TURCO['ti_crear_ronda'] = "Turlar Olustur";

INGLES['confirmar_escaneo'] = "Scan successful!";
ESPANOL['confirmar_escaneo'] = "Escaneo exitoso";
FRANCES['confirmar_escaneo'] = "Scan réussi";
TURCO['confirmar_escaneo'] = "Tarama basarili!";

INGLES['nombre_punto'] = "Checkpoint Name";
ESPANOL['nombre_punto'] = "Nombre del punto";
FRANCES['nombre_punto'] = "Nom du point de contrôle";
TURCO['nombre_punto'] = "Kontrol Noktasi Adi";

INGLES['nombre_tour_conf'] = "Tour Name";
ESPANOL['nombre_tour_conf'] = "Nombre de la Ronda";
FRANCES['nombre_tour_conf'] = "Nom de la ronde";
TURCO['nombre_tour_conf'] = "Tur Adi";

INGLES['bt_star_point'] = "Save Start Tour Checkpoint";
ESPANOL['bt_star_point'] = "Guardar punto Inicio Ronda";
FRANCES['bt_star_point'] = "Enregistrer le point de départ";
TURCO['bt_star_point'] = "Baslangiç Turu Denetim Noktasini Kaydet";

INGLES['bt_control_point'] = "Save Checkpoint";
ESPANOL['bt_control_point'] = "Guardar Punto";
FRANCES['bt_control_point'] = "Enregistrer le point de contrôle";
TURCO['bt_control_point'] = "Kontrol Noktasini Kaydet";

//CREAR SITIO
INGLES['ti_crear_sitio'] = "Create Site";
ESPANOL['ti_crear_sitio'] = "Crear Sitio";
FRANCES['ti_crear_sitio'] = "Créer un site";
TURCO['ti_crear_sitio'] = "Site Olustur";

INGLES['nombre_sitio_conf'] = "Site Name";
ESPANOL['nombre_sitio_conf'] = "Nombre Sitio";
FRANCES['nombre_sitio_conf'] = "Nom du site";
TURCO['nombre_sitio_conf'] = "Site Adi";

//EDIATR PUNTO
INGLES['ti_editar_punto'] = "Edit Point";
ESPANOL['ti_editar_punto'] = "Editar Punto";
FRANCES['ti_editar_punto'] = "Modifier un point";
TURCO['ti_editar_punto'] = "Noktayi Düzenle";

INGLES['nombre_sitio_edit'] = "Checkpoint Name";
ESPANOL['nombre_sitio_edit'] = "Nombre del punto";
FRANCES['nombre_sitio_edit'] = "Nom du point de contrôle";
TURCO['nombre_sitio_edit'] = "Kontrol Noktasi Adi";

INGLES['bt_editar'] = "Edit";
ESPANOL['bt_editar'] = "Editar";
FRANCES['bt_editar'] = "Modifier";
TURCO['bt_editar'] = "Düzenle";

//EDITAR SITIO
INGLES['ti_editar_sitio'] = "Edit Site";
ESPANOL['ti_editar_sitio'] = "Editar Sitio";
FRANCES['ti_editar_sitio'] = "Modifier le Site";
TURCO['ti_editar_sitio'] = "Siteyi Düzenle";

INGLES['nombre_sitio_edt'] = "Site Name";
ESPANOL['nombre_sitio_edt'] = "Nombre Sitio";
FRANCES['nombre_sitio_edt'] = "Nom du site";
TURCO['nombre_sitio_edt'] = "Site Adi";

//EDITAR RONDA
INGLES['ti_editar_ronda'] = "Edit Tour";
ESPANOL['ti_editar_ronda'] = "Editar Ronda";
FRANCES['ti_editar_ronda'] = "Modifier la ronde";
TURCO['ti_editar_ronda'] = "Turu Düzenle";

INGLES['nombre_punto_edit'] = "Tour Name";
ESPANOL['nombre_punto_edit'] = "Nombre Ronda";
FRANCES['nombre_punto_edit'] = "Nom de la ronde";
TURCO['nombre_punto_edit'] = "Tur Adi";

//ENVIAR FOTO
INGLES['ti_enviar_foto'] = "Send Photos";
ESPANOL['ti_enviar_foto'] = "Enviar Fotos";
FRANCES['ti_enviar_foto'] = "Envoyer photos";
TURCO['ti_enviar_foto'] = "Fotograf Göndermek";

INGLES['bt_foto_1'] = "Take a Photo 1";
ESPANOL['bt_foto_1'] = "Toma foto 1";
FRANCES['bt_foto_1'] = "Prendre photo 1";
TURCO['bt_foto_1'] = "Fotograf Çek 1";

INGLES['bt_foto_2'] = "Take a Photo 2";
ESPANOL['bt_foto_2'] = "Toma foto 2";
FRANCES['bt_foto_2'] = "Prendre photo 2";
TURCO['bt_foto_2'] = "Fotograf Çek 2";

INGLES['bt_foto_3'] = "Take a Photo 3";
ESPANOL['bt_foto_3'] = "Toma foto 3";
FRANCES['bt_foto_3'] = "Prendre photo 3";
TURCO['bt_foto_3'] = "Fotograf Çek 3"

INGLES['bt_foto_4'] = "Take a Photo 4";
ESPANOL['bt_foto_4'] = "Toma foto 4";
FRANCES['bt_foto_4'] = "Prendre photo 4";
TURCO['bt_foto_4'] = "Fotograf Çek 4";

INGLES['bt_foto_5'] = "Take a Photo 5";
ESPANOL['bt_foto_5'] = "Toma foto 5";
FRANCES['bt_foto_5'] = "Prendre photo 5";
TURCO['bt_foto_5'] = "Fotograf Çek 5";

INGLES['bt_transmitir'] = "Send";
ESPANOL['bt_transmitir'] = "Enviar";
FRANCES['bt_transmitir'] = "Envoyer";
TURCO['bt_transmitir'] = "Göndermek";

INGLES['bt_eliminar'] = "Delete";
ESPANOL['bt_eliminar'] = "Eliminar";
FRANCES['bt_eliminar'] = "Effacer";
TURCO['bt_eliminar'] = "Silmek";

//ENVIAR MENSAJE
INGLES['ti_mensaje_incidentes'] = "Record Incidents";
ESPANOL['ti_mensaje_incidentes'] = "Registrar incidentes";
FRANCES['ti_mensaje_incidentes'] = "Enregistrer un incident";
TURCO['ti_mensaje_incidentes'] = "Kayit Olaylari";

INGLES['max_50_palabras'] = "Max. 200 Characters";
ESPANOL['max_50_palabras'] = "Max. 200 Caracteres";
FRANCES['max_50_palabras'] = "Max. 200 caractères";
TURCO['max_50_palabras'] = "Maks. 200 karakter";

INGLES['text_descripcion_men'] = "Incident Description";
ESPANOL['text_descripcion_men'] = "Descripción del incidente";
FRANCES['text_descripcion_men'] = "Description de l'incident";
TURCO['text_descripcion_men'] = "Olay Açiklamasi";

//POPUP REGISTRO 
INGLES['ti_confirmacion_escaneo'] = "Checkpoint Successfully scanned";
ESPANOL['ti_confirmacion_escaneo'] = "Punto de control escaneado con éxito";
FRANCES['ti_confirmacion_escaneo'] = "Point de contrôle scanné avec succès";
TURCO['ti_confirmacion_escaneo'] = "Kontrol Noktasi Basariyla tarandi";

//POPUP CREAR TOUR
INGLES['text_tour_crear'] = "Do you want to create an entirely new site or add a checkpoint to an existing site?";
ESPANOL['text_tour_crear'] = "¿Desea crear un nuevo sitio o agregar un punto de control a un sitio existente?";
FRANCES['text_tour_crear'] = "Voulez-vous créer un nouveau site ou ajouter un point de contrôle à un site existant?";
TURCO['text_tour_crear'] = "Tamamen yeni bir site olusturmak mi yoksa mevcut bir siteye bir kontrol noktasi eklemek mi istiyorsunuz?";

INGLES['bt_nuevo_sitio'] = "New Site";
ESPANOL['bt_nuevo_sitio'] = "Nuevo sitio";
FRANCES['bt_nuevo_sitio'] = "Nouveau site";
TURCO['bt_nuevo_sitio'] = "Yeni Site";

INGLES['bt_sitio_existente'] = "Existing Site";
ESPANOL['bt_sitio_existente'] = "Sitio existente";
FRANCES['bt_sitio_existente'] = "Site existant";
TURCO['bt_sitio_existente'] = "Mevcut Site";

//tutorial
INGLES['ti_tutorial_video'] = "User Manual";
ESPANOL['ti_tutorial_video'] = "Manual Usuario";
FRANCES['ti_tutorial_video'] = "Manuel utilisateur";
TURCO['ti_tutorial_video'] = "Kullanim Kilavuzu";

//UDID
INGLES['ti_mensaje_udid'] = "This is the Android ID of your device";
ESPANOL['ti_mensaje_udid'] = "Este es el ID de su dispositivo";
FRANCES['ti_mensaje_udid'] = "Ceci est l'ID de votre appareil";
TURCO['ti_mensaje_udid'] = "Bu, cihazinizin Android Kimligidir";


//LENGUAJE
INGLES['text_lenguaje_sel'] = "Select Language";
ESPANOL['text_lenguaje_sel'] = "Seleccione el idioma";
FRANCES['text_lenguaje_sel'] = "Sélectionnez la langue";
TURCO['text_lenguaje_sel'] = "Dil Seçin";

//BOTONES POP UP
INGLES['bt_edit_site'] = "Edit Site";
ESPANOL['bt_edit_site'] = "Editar Sitio";
FRANCES['bt_edit_site'] = "Modifier le site";
TURCO['bt_edit_site'] = "Siteyi Düzenle";

INGLES['bt_delete_site'] = "Delete Site";
ESPANOL['bt_delete_site'] = "Eliminar Sitio";
FRANCES['bt_delete_site'] = "Supprimer le site";
TURCO['bt_delete_site'] = "Siteyi Sil";

INGLES['bt_export_site'] = "Export Site";
ESPANOL['bt_export_site'] = "Exportar Sitio";
FRANCES['bt_export_site'] = "Exporter le site";
TURCO['bt_export_site'] = "Siteyi Disa Aktar";

INGLES['bt_edit_tour'] = "Edit Tour";
ESPANOL['bt_edit_tour'] = "Editar Ronda";
FRANCES['bt_edit_tour'] = "Modifier la ronde";
TURCO['bt_edit_tour'] = "Turu Düzenle";

INGLES['bt_delete_tour'] = "Delete Tour";
ESPANOL['bt_delete_tour'] = "Eliminar Ronda";
FRANCES['bt_delete_tour'] = "Supprimer la ronde";
TURCO['bt_delete_tour'] = "Turu Sil";

INGLES['bt_edit_point'] = "Edit Checkpoint";
ESPANOL['bt_edit_point'] = "Editar Punto";
FRANCES['bt_edit_point'] = "Modifier le point de contrôle";
TURCO['bt_edit_point'] = "Kontrol Noktasini Düzenle";

INGLES['bt_delete_point'] = "Delete Checkpoint";
ESPANOL['bt_delete_point'] = "Eliminar Punto";
FRANCES['bt_delete_point'] = "Supprimer le point de contrôle";
TURCO['bt_delete_point'] = "Denetim Noktasini Sil";

INGLES['bt_cancel_pop'] = "Cancel";
ESPANOL['bt_cancel_pop'] = "Cancelar";
FRANCES['bt_cancel_pop'] = "Annuler";
TURCO['bt_cancel_pop'] = "Iptal etmek";

INGLES['ti_reportes'] = "REPORTS";
ESPANOL['ti_reportes'] = "REPORTES";
FRANCES['ti_reportes'] = "Rapports";
TURCO['ti_reportes'] = "RAPORLAR";


//REPORTES
INGLES['item_id'] = "Phone ID Number";
ESPANOL['item_id'] = "No. ID Teléfono";
FRANCES['item_id'] = "ID du téléphone";
TURCO['item_id'] = "Telefon Kimlik Numarasi";

INGLES['item_qr'] = "QR No.";
ESPANOL['item_qr'] = "No. QR";
FRANCES['item_qr'] = "N° du QR code";
TURCO['item_qr'] = "QR No.";

INGLES['item_siteName'] = "Site Name";
ESPANOL['item_siteName'] = "Nombre Sitio";
FRANCES['item_siteName'] = "Nom du site";
TURCO['item_siteName'] = "Site Adi";

INGLES['item_tour_n'] = "Tour";
ESPANOL['item_tour_n'] = "Ronda";
FRANCES['item_tour_n'] = "Ronde";
TURCO['item_tour_n'] = "Tur";

INGLES['item_point'] = "Checkpoint Name";
ESPANOL['item_point'] = "Nombre Punto Control";
FRANCES['item_point'] = "Nom du point de contrôle";
TURCO['item_point'] = "Kontrol Noktasi Adi";

INGLES['item_fecha'] = "Date / Time";
ESPANOL['item_fecha'] = "Fecha / Hora";
FRANCES['item_fecha'] = "Date / Heure";
TURCO['item_fecha'] = "Tarih / Saat";

INGLES['item_officer'] = "Officer";
ESPANOL['item_officer'] = "Vigilante";
FRANCES['item_officer'] = "Agent";
TURCO['item_officer'] = "Bekçi";

INGLES['item_latitud'] = "Latitude";
ESPANOL['item_latitud'] = "Latitud";
FRANCES['item_latitud'] = "Latitude";
TURCO['item_latitud'] = "Enlem"

INGLES['item_longitud'] = "Longitude";
ESPANOL['item_longitud'] = "Longitud";
FRANCES['item_longitud'] = "Longitude";
TURCO['item_longitud'] = "Boylam";

INGLES['item_mensaje'] = "Message";
ESPANOL['item_mensaje'] = "Mensaje";
FRANCES['item_mensaje'] = "Message";
TURCO['item_mensaje'] = "Mesaj";

INGLES['item_pasos'] = "Steps";
ESPANOL['item_pasos'] = "Pasos";
FRANCES['item_pasos'] = "les Marches";
TURCO['item_pasos'] = "Adimlar"

INGLES['item_state'] = "State";
ESPANOL['item_state'] = "Estado";
FRANCES['item_state'] = "Etat";
TURCO['item_state'] = "Belirtmek, bildirmek";

INGLES['bt_nuevo_punto'] = "New Checkpoint";
ESPANOL['bt_nuevo_punto'] = "Nuevo Punto";
FRANCES['bt_nuevo_punto'] = "Nouveau point de contrôle";
TURCO['bt_nuevo_punto'] = "Yeni kontrol noktasi";

INGLES['sin_rondas_gonf'] = "You have not set any tours";
ESPANOL['sin_rondas_gonf'] = "No has configurado rondas";
FRANCES['sin_rondas_gonf'] = "Vous n'avez configuré aucune ronde";
TURCO['sin_rondas_gonf'] = "Hiç tur ayarmadiniz"

INGLES['sin_puntos_gonf'] = "You have not set any checkpoints";
ESPANOL['sin_puntos_gonf'] = "No tienes puntos configurados";
FRANCES['sin_puntos_gonf'] = "Aucun point de contrôle configuré";
TURCO['sin_puntos_gonf'] = "Herhangi bir kontrol noktasi belirlemediniz";

INGLES['alert_no_sitio_lista'] = "You have no Configured Sites";
ESPANOL['alert_no_sitio_lista'] = "No tienes Sitios Configurados";
FRANCES['alert_no_sitio_lista'] = "Aucun site n'a été configuré";
TURCO['alert_no_sitio_lista'] = "Yapilandirilmis Siteniz yok";



/** Subir desde Drive */

INGLES['bt_cargar_d'] = "Load database";
ESPANOL['bt_cargar_d'] = "Cargar la base de datos ";
FRANCES['bt_cargar_d'] = "Charger la base de données";
TURCO['bt_cargar_d'] = "Veritabanını yükle ";


INGLES['bt_cerrar_sesion'] = "Sign out";
ESPANOL['bt_cerrar_sesion'] = "Cerrar sesión";
FRANCES['bt_cerrar_sesion'] = "Fermer la session";
TURCO['bt_cerrar_sesion'] = "Oturumu Kapat";

INGLES['bt_subir_drive'] = "Upload database";
ESPANOL['bt_subir_drive'] = "Subir toda la base de datos";
FRANCES['bt_subir_drive'] = "Téléchargez toute la base de données";
TURCO['bt_subir_drive'] = "Veritabanının tamamını yükleyin";

INGLES['iniciar_sesion'] = "Sign in to Google";
ESPANOL['iniciar_sesion'] = "Iniciar sesión en Google";
FRANCES['iniciar_sesion'] = "Connectez-vous à Google";
TURCO['iniciar_sesion'] = "Google'da oturum açın";

/**Control caidas */

INGLES['bt_subir_0'] = "Upload database";
ESPANOL['bt_subir_0'] = "Desactivado";
FRANCES['bt_subir_0'] = "Téléchargez toute la base de données";
TURCO['bt_subir_0'] = "Veritabanının tamamını yükleyin";

INGLES['bt_subir_1'] = "Upload database";
ESPANOL['bt_subir_1'] = "Sensibilidad 1";
FRANCES['bt_subir_1'] = "Téléchargez toute la base de données";
TURCO['bt_subir_1'] = "Veritabanının tamamını yükleyin";

//POPUP ALERTAS
//POPUP ALERTAS
//POPUP ALERTAS
alertasEN['alert_emergencia'] = "Alert 5! Do not abuse this system, if you are not in an emergency you will be reported.";
alertasES['alert_emergencia'] = "Alerta 5! No abuse de este Sistema, si usted no está en una emergencia será reportado.";
alertasFR['alert_emergencia'] = "Alerte 5! N'abusez pas de ce système, si vous n'êtes pas en situation d'urgence, cela sera signalé";
alertasTU['alert_emergencia'] = "5. uyari! Bu sistemi kötüye kullanmayin, acil bir durumda degilseniz size bildirilecektir.";

alertasEN['alert_sin_ronda'] = "No Reports to transmit";
alertasES['alert_sin_ronda'] = "No hay reportes para transmitir";
alertasFR['alert_sin_ronda'] = "Aucun rapport à transmettre";
alertasTU['alert_sin_ronda'] = "Iletilecek rapor yok";

alertasEN['alert_transmision_exito'] = "Report transmission was successful";
alertasES['alert_transmision_exito'] = "La transmisión del reporte fue exitosa";
alertasFR['alert_transmision_exito'] = "Rapport transmis avec succès";
alertasTU['alert_transmision_exito'] = "Rapor iletimi basarili oldu";

alertasEN['alert_sin_internet'] = "You do not have internet access, please connect to a network and try again";
alertasES['alert_sin_internet'] = "No tienes acceso a internet, recuerda conectarte a una red he intentar de nuevo";
alertasFR['alert_sin_internet'] = "Aucun accès internet, connectez-vous à un réseau et réessayez";
alertasTU['alert_sin_internet'] = "Internet erisiminiz yok, lütfen bir aga baglanin ve tekrar deneyin";

alertasEN['alert_ingresar_nombre'] = "You must enter a name";
alertasES['alert_ingresar_nombre'] = "Debes ingresar un nombre";
alertasFR['alert_ingresar_nombre'] = "Vous devez entrer un nom";
alertasTU['alert_ingresar_nombre'] = "Bir isim girmelisin";


alertasEN['alert_obligatorios'] = "Need to fill-in all fields";
alertasES['alert_obligatorios'] = "Llenar todos los campos";
alertasFR['alert_obligatorios'] = "Tous les champs doivent être remplis";
alertasTU['alert_obligatorios'] = "Tüm alanlari doldurmaniz gerekiyor";


alertasEN['alert_codigo_udid_copiado'] = "Your Android Device ID No. has been copied to your clipboard, please save a copy";
alertasES['alert_codigo_udid_copiado'] = "El Numero Android ID de su teléfono ha sido copiado a su portapapeles, guarde una copia";
alertasFR['alert_codigo_udid_copiado'] = "Le N° ID de votre appareil a été copié dans le presse-papiers, sauvegardez-le";
alertasTU['alert_codigo_udid_copiado'] = "Android Cihaz Kimlik Numaraniz panoya kopyalandi, lütfen bir kopyasini kaydedin";

alertasEN['alert_activo_alerta'] = "An alert has been activated for the guard";
alertasES['alert_activo_alerta'] = "Se ha activado una alerta para el guardia";
alertasFR['alert_activo_alerta'] = "Une alerte a été activée pour l'agent";
alertasTU['alert_activo_alerta'] = "Koruma için bir uyari etkinlestirildi";

alertasEN['alert_inactividad_movimiento'] = "An inactivity time is reported for the guard ";
alertasES['alert_inactividad_movimiento'] = "Se reporta un tiempo de inactividad  para el guardia ";
alertasFR['alert_inactividad_movimiento'] = "Un temps d'inactivité est rapporté pour l'agent";
alertasTU['alert_inactividad_movimiento'] = "Bekçi için hareketsizlik süresi bildirildi ";

alertasEN['alert_alerta_enviada'] = "Emergency Signal has been successfully transmitted";
alertasES['alert_alerta_enviada'] = "La señal de emergencia se ha transmitido con éxito";
alertasFR['alert_alerta_enviada'] = "Signal d'urgence transmis avec succès";
alertasTU['alert_alerta_enviada'] = "Acil Durum Sinyali basariyla iletildi";


alertasEN['alert_sitio_existe'] = "This site already exists";
alertasES['alert_sitio_existe'] = "Este sitio ya existe";
alertasFR['alert_sitio_existe'] = "Ce site existe déjà";
alertasTU['alert_sitio_existe'] = "Bu site zaten var";

alertasEN['alert_sitio_nombre'] = "You must enter a name for the site";
alertasES['alert_sitio_nombre'] = "Debes ingresar un nombre para el sitio";
alertasFR['alert_sitio_nombre'] = "Vous devez entrer un nom pour le site";
alertasTU['alert_sitio_nombre'] = "Site için bir isim girmelisiniz";

alertasEN['alert_sin_fotos'] = "No Photos";
alertasES['alert_sin_fotos'] = "Sin Fotos";
alertasFR['alert_sin_fotos'] = "Aucune photo";
alertasTU['alert_sin_fotos'] = "Fotograf yok"

alertasEN['alert_transmision_fotos'] = "Photo transmission was successful";
alertasES['alert_transmision_fotos'] = "La transmisión de las fotos fue exitosa";
alertasFR['alert_transmision_fotos'] = "Photo transmise avec succès";
alertasTU['alert_transmision_fotos'] = "Fotograf aktarimi basarili oldu";

alertasEN['alert_escanear_licencia'] = "License activated for this device";
alertasES['alert_escanear_licencia'] = "Licencia activada para este dispositivo";
alertasFR['alert_escanear_licencia'] = "Licence activée pour cet appareil";
alertasTU['alert_escanear_licencia'] = "Bu cihaz için lisans etkinlestirildi";

alertasEN['alert_licencia_invalidad'] = "Sorry, this license is invalid for this device";
alertasES['alert_licencia_invalidad'] = "Lo sentimos, esta licencia es inválida para este dispositivo";
alertasFR['alert_licencia_invalidad'] = "Désolé, cette licence n'est pas valide pour cet appareil";
alertasTU['alert_licencia_invalidad'] = "Maalesef, bu lisans bu cihaz için geçersiz";

alertasEN['alert_licencia_no_licencia'] = "Sorry, you are not scanning a license.";
alertasES['alert_licencia_no_licencia'] = "Lo sentimos, no estás escaneando una licencia.";
alertasFR['alert_licencia_no_licencia'] = "Désolé, ce QR code n'est pas une licence valide.";
alertasTU['alert_licencia_no_licencia'] = "Üzgünüz, bir lisans taramiyorsunuz.";

alertasEN['alert_licencia_no_qr'] = "Sorry, we do not recognize this QR CODE";
alertasES['alert_licencia_no_qr'] = "Lo sentimos, no reconocemos este QR CODE";
alertasFR['alert_licencia_no_qr'] = "Désolé, ce QR code n'est pas reconnu";
alertasTU['alert_licencia_no_qr'] = "Üzgünüz, bu QR Kodunu tanimiyoruz";

alertasEN['nombre_punto'] = "Name";
alertasES['nombre_punto'] = "Nombre";
alertasFR['nombre_punto'] = "Nom";
alertasTU['nombre_punto'] = "Isim";

alertasEN['hora_punto'] = "Local Time";
alertasES['hora_punto'] = "Hora local";
alertasFR['hora_punto'] = "Heure locale";
alertasTU['hora_punto'] = "Yerel zaman";

alertasEN['alert_ya_registrado'] = "This Checkpoint was already registered";
alertasES['alert_ya_registrado'] = "Este punto ya fue registrado";
alertasFR['alert_ya_registrado'] = "Ce point de contrôle est déjà enregistré";
alertasTU['alert_ya_registrado'] = "Bu Kontrol Noktasi zaten kayitli";

alertasEN['alert_ningun_punto'] = "No Checkpoints have been assigned";
alertasES['alert_ningun_punto'] = "No tienes ningun punto configurado";
alertasFR['alert_ningun_punto'] = "Aucun point de contrôle assigné";
alertasTU['alert_ningun_punto'] = "Kontrol Noktasi atanmadi";

alertasEN['alert_qr_no_conf'] = "This QR is not configured";
alertasES['alert_qr_no_conf'] = "Este QR no esta configurado";
alertasFR['alert_qr_no_conf'] = "Ce QR code n'est pas configuré";
alertasTU['alert_qr_no_conf'] = "Bu QR yapilandirilmamis";

alertasEN['alert_escaneado_licencia'] = "Sorry, you are scanning a license. Try again";
alertasES['alert_escaneado_licencia'] = "Lo sentimos, estas escaneando una licencia. Intenta nuevamente";
alertasFR['alert_escaneado_licencia'] = "Désolé, vous scannez une licence. Réessayez";
alertasTU['alert_escaneado_licencia'] = "Üzgünüz, bir lisans tariyorsunuz. Tekrar deneyin";

alertasEN['alert_no_qr_code'] = "Sorry, we do not recognize this QR CODE";
alertasES['alert_no_qr_code'] = "Lo sentimos, no reconocemos este QR CODE";
alertasFR['alert_no_qr_code'] = "Désolé, ce QR code n'est pas reconnu";
alertasTU['alert_no_qr_code'] = "Üzgünüz, bu QR Kodunu tanimiyoruz";

alertasEN['alert_es_licencia'] = "Sorry, you are scanning a license. Try again";
alertasES['alert_es_licencia'] = "Lo sentimos, estas escaneando una licencia. Intenta nuevamente";
alertasFR['alert_es_licencia'] = "Désolé, vous scannez une licence. Réessayez";
alertasTU['alert_es_licencia'] = "Üzgünüz, bir lisans tariyorsunuz. Tekrar deneyin";

alertasEN['alert_sel_archivo'] = "You must select a file";
alertasES['alert_sel_archivo'] = "Debe selecionar un archivo";
alertasFR['alert_sel_archivo'] = "Vous devez sélectionner un fichier";
alertasTU['alert_sel_archivo'] = "Bir dosya seçmelisiniz";

alertasEN['alert_carga_archivo'] = "File was loaded successfully";
alertasES['alert_carga_archivo'] = "El archivo fue cargado";
alertasFR['alert_carga_archivo'] = "Le fichier a été chargé avec succès";
alertasTU['alert_carga_archivo'] = "Dosya basariyla yüklendi"

alertasEN['alert_incorrecto_archivo'] = "Incorrect structure";
alertasES['alert_incorrecto_archivo'] = "Estructura incorrecta";
alertasFR['alert_incorrecto_archivo'] = "Structure incorrecte";
alertasTU['alert_incorrecto_archivo'] = "Yanlis yapi";

//popup
alertasEN['alert_eliminar_sitio'] = "You are about to delete a site, are you sure?";
alertasES['alert_eliminar_sitio'] = "Estas a punto de eliminar un sitio, ¿Estas seguro?";
alertasFR['alert_eliminar_sitio'] = "Vous êtes sur le point de supprimer un site, êtes-vous sûr?";
alertasTU['alert_eliminar_sitio'] = "Bir siteyi silmek üzeresiniz, emin misiniz?";

alertasEN['alert_sin_ronda'] = "You have not created any Report";
alertasES['alert_sin_ronda'] = "No tienes ningun reporte cargado";
alertasFR['alert_sin_ronda'] = "Vous n'avez créé aucune Rapport";
alertasTU['alert_sin_ronda'] = "Herhangi bir Rapor olusturmadiniz";

alertasEN['alert_eliminar_ronda'] = "You are about to delete a Tour, are you sure?";
alertasES['alert_eliminar_ronda'] = "Vas a eliminar una ronda, ¿Estas seguro?";
alertasFR['alert_eliminar_ronda'] = "Vous êtes sur le point de supprimer une ronde, êtes-vous sûr?";
alertasTU['alert_eliminar_ronda'] = "Bir Tur silmek üzeresiniz, emin misiniz?";

alertasEN['alert_eliminar_punto'] = "You are about to delete a Checkpoint, are you sure?";
alertasES['alert_eliminar_punto'] = "Estas a punto de eliminar un punto, ¿Estas seguro?";
alertasFR['alert_eliminar_punto'] = "Vous êtes sur le point de supprimer un point, êtes-vous sûr?";
alertasTU['alert_eliminar_punto'] = "Bir Checkpoint silmek üzeresiniz, emin misiniz?";

alertasEN['alert_exportar_sitio'] = "You are about to export a Site, are you sure?";
alertasES['alert_exportar_sitio'] = "Estás a punto de exportar un sitio, ¿Estás seguro?";
alertasFR['alert_exportar_sitio'] = "Vous êtes sur le point d'exporter un site, êtes-vous sûr?";
alertasTU['alert_exportar_sitio'] = "Bir Site vermek üzeresiniz, emin misiniz?";

alertasEN['alert_sin_registros'] = "No Records";
alertasES['alert_sin_registros'] = "Sin Registros";
alertasFR['alert_sin_registros'] = "Aucun enregistrement";
alertasTU['alert_sin_registros'] = "Kayit yok";

alertasEN['alert_sin_mensaje'] = "You must write a message";
alertasES['alert_sin_mensaje'] = "Debes escribir un mensaje";
alertasFR['alert_sin_mensaje'] = "Vous devez écrire un message";
alertasTU['alert_sin_mensaje'] = "Bir mesaj yazmalisin";

alertasEN['alert_sin_star_tour'] = "This is not a Start Tour Checkpoint";
alertasES['alert_sin_star_tour'] = "Este no es un Punto Inicio Ronda";
alertasFR['alert_sin_star_tour'] = "Ceci n'est pas un point de départ de ronde";
alertasTU['alert_sin_star_tour'] = "Bu bir Baslangiç Turu Kontrol Noktasi degil";

alertasEN['alert_punto_guardado'] = "Checkpoint Saved";
alertasES['alert_punto_guardado'] = "Punto Guardado";
alertasFR['alert_punto_guardado'] = "Point de contrôle enregistré";
alertasTU['alert_punto_guardado'] = "Kontrol noktasi kaydedildi";

alertasEN['text_mas_alertas'] = "You can now transmit more Alerts";
alertasES['text_mas_alertas'] = "Ya puedes enviar mas alertas";
alertasFR['text_mas_alertas'] = "Vous pouvez maintenant envoyer plus d'alertes";
alertasTU['text_mas_alertas'] = "Artik daha fazla Uyari iletebilirsiniz";

alertasEN['pin_invalido'] = "¡Invalid PIN!";
alertasES['pin_invalido'] = "¡Pin inválido!";
alertasFR['pin_invalido'] = "PIN incorrect!";
alertasTU['pin_invalido'] = "PIN Geçersiz PIN!";

alertasEN['alert_qr_invalido'] = "Invalid QR";
alertasES['alert_qr_invalido'] = "QR Inválido";
alertasFR['alert_qr_invalido'] = "QR code invalide";
alertasTU['alert_qr_invalido'] = "Geçersiz QR";


alertasEN['no_soporta_gps'] = "GPS signal lost";
alertasES['no_soporta_gps'] = "No hay señal GPS";
alertasFR['no_soporta_gps'] = "Signal GPS perdu";
alertasTU['no_soporta_gps'] = "GPS sinyali kayboldu";

alertasEN['no_permitido_gps'] = "User blocked GEO location";
alertasES['no_permitido_gps'] = "Usuario bloqueó GEO localización";
alertasFR['no_permitido_gps'] = "L'utilisateur a bloqué la GEO-localisation";
alertasTU['no_permitido_gps'] = "Kullanici engellenmis GEO konumu";

alertasEN['no_permitido_gps'] = "Please activate GPS Location";
alertasES['no_permitido_gps'] = "Por favor active ubicación GPS";
alertasFR['no_permitido_gps'] = "Veuillez activer le signal GPS";
alertasTU['no_permitido_gps'] = "Lütfen GPS Konumunu etkinlestirin";

alertasEN['alert_sin_smsm'] = "Error Not SMS";
alertasES['alert_sin_smsm'] = "Error, no tiene SMS";
alertasFR['alert_sin_smsm'] = "Erreur, aucun SMS";
alertasTU['alert_sin_smsm'] = "Hata SMS Yok";


alertasEN['mail_titulo_reporte'] = "REPORT";
alertasES['mail_titulo_reporte'] = "REPORTE";
alertasFR['mail_titulo_reporte'] = "RAPPORT";
alertasTU['mail_titulo_reporte'] = "RAPOR";

alertasEN['mail_enviado'] = "Sent by";
alertasES['mail_enviado'] = "Enviado por";
alertasFR['mail_enviado'] = "Envoyé par";
alertasTU['mail_enviado'] = "Tarafindan gönderilen";

alertasEN['mail_fecha'] = "Date";
alertasES['mail_fecha'] = "Fecha";
alertasFR['mail_fecha'] = "Date";
alertasTU['mail_fecha'] = "Tarih";

alertasEN['mail_ubicacion'] = "Location";
alertasES['mail_ubicacion'] = "Ubicación";
alertasFR['mail_ubicacion'] = "Emplacement";
alertasTU['mail_ubicacion'] = "Yer";

alertasEN['mail_titulo_base'] = "DATABASE";
alertasES['mail_titulo_base'] = "BASE DATOS";
alertasFR['mail_titulo_base'] = "BASE DE DONNÉES";
alertasTU['mail_titulo_base'] = "VERITABANI";

alertasEN['alert_interval_incumplido'] = "Interval Rules! 'Please wait until the Time Interval has passed' ";
alertasES['alert_interval_incumplido'] = "¡Reglas de Intervalo! 'Por Favor esperar hasta que el intervalo de tiempo se cumpla'";
alertasFR['alert_interval_incumplido'] = "¡Règles d'intervalle! 'S'il vous plaît attendre jusqu'à ce que l'intervalle de temps est écoulé'";
alertasTU['alert_interval_incumplido'] = "Aralik Kurallari! 'Zaman Araligi geçene kadar lütfen bekleyin'";

alertasEN['alert_debe_transmitir_reporte'] = "You can now transmit the report";
alertasES['alert_debe_transmitir_reporte'] = "Ya puede transmitir el reporte";
alertasFR['alert_debe_transmitir_reporte'] = "Vous pouvez maintenant transmettre le rapport";
alertasTU['alert_debe_transmitir_reporte'] = "Artik raporu iletebilirsiniz";

alertasEN['alert_debe_marcar_start'] = "Must Record a Start Tour Checkpoint";
alertasES['alert_debe_marcar_start'] = "Debe Registrar un punto Inicio Ronda";
alertasFR['alert_debe_marcar_start'] = "Vous devez enregistrer un point de départ de ronde";
alertasTU['alert_debe_marcar_start'] = "Bir Baslangiç Turu Kontrol Noktasi Kaydetmeli";

alertasEN['alert_debe_marcar_start_cambio'] = "Firstly please record a Start Tour Checkpoint";
alertasES['alert_debe_marcar_start_cambio'] = "Primero debe marcar un Inicio Ronda";
alertasFR['alert_debe_marcar_start_cambio'] = "Vous devez d'abord créer un point de départ de ronde";
alertasTU['alert_debe_marcar_start_cambio'] = "Öncelikle lütfen bir Baslangiç Turu Kontrol Noktasi kaydedin";

alertasEN['alert_timer_debe_transmitir'] = "Time Interval has elapsed, please transmit your tours.";
alertasES['alert_timer_debe_transmitir'] = "El intervalo de tiempo se ha cumplido, debes transmitir la ronda";
alertasFR['alert_timer_debe_transmitir'] = "L'intervalle de temps est écoulé, merci de transmettre le rapport";
alertasTU['alert_timer_debe_transmitir'] = "Zaman Araligi doldu, lütfen turlarinizi iletin.";

alertasEN['alert_timer_no_puede_transmitir'] = "The Time Interval has not elapsed, you cannot transmit Reports";
alertasES['alert_timer_no_puede_transmitir'] = "Aún no se cumple el intervalo de tiempo, no puedes transmitir reportes";
alertasFR['alert_timer_no_puede_transmitir'] = "L'intervalle de temps n'est pas encore écoulé, vous ne pouvez pas transmettre de Rapports";
alertasTU['alert_timer_no_puede_transmitir'] = "Zaman Araligi dolmadi, Raporlari iletemezsiniz";

alertasEN['alert_sin_tel'] = "No permission to call";
alertasES['alert_sin_tel'] = "Sin permiso para llamada";
alertasFR['alert_sin_tel'] = "Permission d'appeler refusée";
alertasTU['alert_sin_tel'] = "Arama izni yok";

alertasEN['alert_cuota_cumplida'] = "Sorry, you have exceeded the daily limit of report transmissions (12 / Day); you can restart transmissions after 00:00 AM.";
alertasES['alert_cuota_cumplida'] = "Lo sentimos, ya sobrepasó el límite diario de transmisión de reportes (12/Día). Después de las 00:00 AM podrá reiniciar transmisiones.";
alertasFR['alert_cuota_cumplida'] = "Désolé, vous avez dépassé la limite quotidienne de transmission de rapports (12 / Day); vous pouvez redémarrer les transmissions après 00h00.";
alertasTU['alert_cuota_cumplida'] = "Üzgünüz, günlük rapor iletimi sinirini astiniz (12 / Gün); 00: 00’dan sonra yayinlari yeniden baslatabilirsiniz.";
 

alertasEN['sms_inactividad_1'] = "Inactivity has been detected, ";
alertasES['sms_inactividad_1'] = "Se ha detectado inactividad de ";
alertasFR['sms_inactividad_1'] = "L'inactivité a été détectée ";
alertasTU['sms_inactividad_1'] = "Hareketsizlik tespit edildi ";

alertasEN['sms_inactividad_2'] = " minutes  ";
alertasES['sms_inactividad_2'] = " minutos ";
alertasFR['sms_inactividad_2'] = " minutes ";
alertasTU['sms_inactividad_2'] = " dakika ";

alertasEN['no_sesio_iniciada'] = "Can't find a Google Drive session started.";
alertasES['no_sesio_iniciada'] = "No se encuentra una sesion de Google Drive iniciada.";
alertasFR['no_sesio_iniciada'] = "Impossible de trouver une session Google Drive démarrée.";
alertasTU['no_sesio_iniciada'] = "Başlatılan bir Google Drive oturumu bulamıyorum.";

alertasEN['sobrescribirBase'] = "This process will overwrite the current database.";
alertasES['sobrescribirBase'] = "Este proceso va a sobrescribir la base de datos actual.";
alertasFR['sobrescribirBase'] = "Ce processus écrasera la base de données actuelle.";
alertasTU['sobrescribirBase'] = "Bu işlem mevcut veri tabanının üzerine yazacaktır.";

alertasEN['sobrescribirBaseEnDrive'] = "This process will overwrite the database on Google Drive.";
alertasES['sobrescribirBaseEnDrive'] = "Este proceso va a sobrescribir la base de datos en Google Drive.";
alertasFR['sobrescribirBaseEnDrive'] = "Ce processus écrasera la base de données sur Google Drive.";
alertasTU['sobrescribirBaseEnDrive'] = "Bu işlem, Google Drive'daki veritabanının üzerine yazacak.";




//AQUI SE EJECUTAN LOS STRING PARA EL IDIOMA
//AQUI SE EJECUTAN LOS STRING PARA EL IDIOMA
function idioma(val){
	//ingles = 1
	//español = 3

	localStorage.setItem("lenguaje", val);
	
	if(val == "null" || val == null){ //IDIOMA POR DEFECTO = ESPAÑOL
		localStorage.setItem("lenguaje", 1);
		val = 1;
	}

	if(val == 1){
		idiomaSeleccionado = INGLES;
		alertasText = alertasEN;
	}

	if(val == 3){
		idiomaSeleccionado = ESPANOL;
		alertasText = alertasES;
	}
	
	if(val == 4){
		idiomaSeleccionado = FRANCES;
		alertasText = alertasFR;
	}
	
	if(val == 5){
		idiomaSeleccionado = TURCO;
		alertasText = alertasTU;
	}

	//lenguaje
	$('.bt_nex').val( idiomaSeleccionado['bt_nex'] );

	//escanner
	$('#bt_scan_licence').val( idiomaSeleccionado['bt_scan_licence'] );
	$('.bt_cancel').val( idiomaSeleccionado['bt_cancel'] );
	$('.bt_terminar').val( idiomaSeleccionado['bt_terminar'] );

	$('#bt_escanear').val( idiomaSeleccionado['bt_escanear'] );
	$('#bt_escaner_lic').val( idiomaSeleccionado['bt_escanear'] );
	
	$('#ti_crear_tour').html( idiomaSeleccionado['bt_menu_created'] );
	
	$('#key_pass_dia').attr("placeholder", idiomaSeleccionado['ti_key_pass_dia']); /////

	//setup
	$('#ti_setup').html( idiomaSeleccionado['ti_setup'] );
	$('#ti_key_super').html( idiomaSeleccionado['ti_key_super'] );
	$('#ti_report_destination').html( idiomaSeleccionado['ti_report_destination'] );
	$('#ti_email_1').html( idiomaSeleccionado['ti_email_1'] );
	$('#ti_email_2').html( idiomaSeleccionado['ti_email_2'] );
	$('#ti_email_3').html( idiomaSeleccionado['ti_email_3'] );


	$('#ti_report_quietud').html( idiomaSeleccionado['ti_report_quietud'] );
	$('#place_hours_quietud').html( idiomaSeleccionado['place_hours_quietud'] );
	
	$('#alert_quietud').html( idiomaSeleccionado['alert_quietud'] );
	
	


	$('#ti_report_transmit').html( idiomaSeleccionado['ti_report_transmit'] );
	$('#place_hours').html( idiomaSeleccionado['place_hours'] );
	$('#ti_emergency_phone').html( idiomaSeleccionado['ti_emergency_phone'] );
	$('#ti_sms').html( idiomaSeleccionado['ti_sms'] );
	$('#ti_activar_podometro').html( idiomaSeleccionado['ti_activar_podometro'] );
	$('#ti_activar_mandown').html( idiomaSeleccionado['ti_activar_mandown'] );
	$('#ti_activar_mandown_label').html( idiomaSeleccionado['ti_activar_mandown'] );
	
	$('.bt_save').val( idiomaSeleccionado['bt_save'] );
	$('.bt_cancel').val( idiomaSeleccionado['bt_cancel'] );
	$('.bt_finalizar').val( idiomaSeleccionado['bt_finalizar'] );
	

	//sesion
	$('#ti_name_guard').html( idiomaSeleccionado['ti_name_guard'] );
	$('#bt_start').val( idiomaSeleccionado['bt_start'] );

	//home
	$('#ti_press_emergecy').html( idiomaSeleccionado['ti_press_emergecy'] );
	$('#bt_trasnmit_tours').val( idiomaSeleccionado['bt_trasnmit_tours'] );
	$('#bt_record_check_point').val( idiomaSeleccionado['bt_record_check_point'] );
	$('#bt_incident_message').val( idiomaSeleccionado['bt_incident_message'] );
	$('#ti_emergenci_data_transmit').html( idiomaSeleccionado['ti_emergenci_data_transmit'] );
	$('#ti_intervalo_tiempo').html( idiomaSeleccionado['ti_intervalo_tiempo'] );
	

	//menu lateral
	$('#bt_menu_home').html( idiomaSeleccionado['bt_menu_home'] );
	$('#bt_menu_alert').html( idiomaSeleccionado['bt_menu_alert'] );
	$('#bt_menu_checkpoint').html( idiomaSeleccionado['bt_menu_checkpoint'] );
	$('#bt_menu_menssage').html( idiomaSeleccionado['bt_menu_menssage'] );
	$('#bt_menu_created').html( idiomaSeleccionado['bt_menu_created'] );
	$('#bt_menu_load').html( idiomaSeleccionado['bt_menu_load'] );
	$('#bt_menu_edit').html( idiomaSeleccionado['bt_menu_edit'] );
	$('#bt_menu_report').html( idiomaSeleccionado['bt_menu_report'] );
	$('#bt_menu_photo').html( idiomaSeleccionado['bt_menu_photo'] );
	$('#bt_menu_transmit').html( idiomaSeleccionado['bt_menu_transmit'] );
	$('#bt_menu_database').html( idiomaSeleccionado['bt_menu_database'] );
	$('#bt_menu_setup').html( idiomaSeleccionado['bt_menu_setup'] );
	$('#bt_menu_start').html( idiomaSeleccionado['bt_menu_start'] );
	$('#bt_menu_tutorial').html( idiomaSeleccionado['bt_menu_tutorial'] );
	$('#bt_menu_about').html( idiomaSeleccionado['bt_menu_about'] );
	$('#bt_menu_leguage').html( idiomaSeleccionado['bt_menu_leguage'] );
	$('#bt_menu_salir').html( idiomaSeleccionado['bt_menu_salir'] );

	//popup contador alerta
	$('#ti_contador_estimado').html( idiomaSeleccionado['ti_contador_estimado'] );
	$('.bt_ok').val( idiomaSeleccionado['bt_ok'] );
	$('.bt_cancelar').val( idiomaSeleccionado['bt_cancelar'] );
	
	//cargar rondas
	$('#ti_cargar_ronda').html( idiomaSeleccionado['ti_cargar_ronda'] );
	$('#mensaje_carga').html( idiomaSeleccionado['mensaje_carga'] );
	$('#bt_cargar').val( idiomaSeleccionado['bt_cargar'] );
	
	$('#bt_seleccionar_archivo').val( idiomaSeleccionado['bt_seleccionar_archivo'] );
	
	$('.bt_cargar').val( idiomaSeleccionado['bt_cargar'] );
	$('.bt_seleccionar_archivo').val( idiomaSeleccionado['bt_seleccionar_archivo'] );
	
	/** cargar rondas desde drive */
	$('.bt_cargar_d').val( idiomaSeleccionado['bt_cargar_d']  );
	$('#bt_cargar_d').val( idiomaSeleccionado['bt_cargar_d']  );
	
	$('.bt_cerrar_sesion').val( idiomaSeleccionado['bt_cerrar_sesion']  );
	$('#bt_cerrar_sesion').val( idiomaSeleccionado['bt_cerrar_sesion']  );

	$('.bt_subir_drive').val( idiomaSeleccionado['bt_subir_drive']  );
	$('#bt_subir_drive').val( idiomaSeleccionado['bt_subir_drive']  );

	/**detector de caidas */
	$('.bt_subir_0').val( idiomaSeleccionado['bt_subir_0']  );
	$('#bt_subir_0').val( idiomaSeleccionado['bt_subir_0']  );

	$('.bt_subir_1').val( idiomaSeleccionado['bt_subir_1']  );
	$('#bt_subir_1').val( idiomaSeleccionado['bt_subir_1']  );

	/** Log in */
	$('.iniciar_sesion').val( idiomaSeleccionado['iniciar_sesion']  );
	$('#iniciar_sesion').val( idiomaSeleccionado['iniciar_sesion']  );
	
	//crear rondas
	$('#ti_crear_ronda').html( idiomaSeleccionado['ti_crear_ronda'] );
	$('#confirmar_escaneo').html( idiomaSeleccionado['confirmar_escaneo'] );
	$('#nombre_punto').html( idiomaSeleccionado['nombre_punto'] );
	$('#nombre_tour_conf').html( idiomaSeleccionado['nombre_tour_conf'] );
	$('#bt_star_point').val( idiomaSeleccionado['bt_star_point'] );
	$('#bt_control_point').val( idiomaSeleccionado['bt_control_point'] );

	//crear sitios
	$('#ti_crear_sitio').html( idiomaSeleccionado['ti_crear_sitio'] );
	$('#nombre_sitio_conf').html( idiomaSeleccionado['nombre_sitio_conf'] );
	
	//editar punto
	$('#ti_editar_punto').html( idiomaSeleccionado['ti_editar_punto'] );
	$('#nombre_sitio_edit').html( idiomaSeleccionado['nombre_sitio_edit'] );
	$('.bt_editar').val( idiomaSeleccionado['bt_editar'] );
	
	//editar sitio
	$('#ti_editar_sitio').html( idiomaSeleccionado['ti_editar_sitio'] );
	$('#nombre_sitio_edt').html( idiomaSeleccionado['nombre_sitio_edt'] );
	
	//editar ronda
	$('#ti_editar_ronda').html( idiomaSeleccionado['ti_editar_ronda'] );
	$('#nombre_punto_edit').html( idiomaSeleccionado['nombre_punto_edit'] );
	
	//enviar foto
	$('#ti_enviar_foto').html( idiomaSeleccionado['ti_enviar_foto'] );
	$('#bt_foto_1').val( idiomaSeleccionado['bt_foto_1'] );
	$('#bt_foto_2').val( idiomaSeleccionado['bt_foto_2'] );
	$('#bt_foto_3').val( idiomaSeleccionado['bt_foto_3'] );
	$('#bt_foto_4').val( idiomaSeleccionado['bt_foto_4'] );
	$('#bt_foto_5').val( idiomaSeleccionado['bt_foto_5'] );
	$('.bt_transmitir').val( idiomaSeleccionado['bt_transmitir'] );
	$('.bt_eliminar').val( idiomaSeleccionado['bt_eliminar'] );
	
	//enviar mensaje
	$('#ti_mensaje_incidentes').html( idiomaSeleccionado['ti_mensaje_incidentes'] );
	$('#max_50_palabras').html( idiomaSeleccionado['max_50_palabras'] );
	$('#text_descripcion_men').html( idiomaSeleccionado['text_descripcion_men'] );
	
	//popup registro punto control
	$('#ti_confirmacion_escaneo').html( idiomaSeleccionado['ti_confirmacion_escaneo'] );
	
	//popup crear tour
	$('#text_tour_crear').html( idiomaSeleccionado['text_tour_crear'] );
	$('.bt_nuevo_sitio').val( idiomaSeleccionado['bt_nuevo_sitio'] );
	$('.bt_sitio_existente').val( idiomaSeleccionado['bt_sitio_existente'] );
	
	//tutorial
	$('#ti_tutorial_video').html( idiomaSeleccionado['ti_tutorial_video'] );
	
	//udid
	$('#ti_mensaje_udid').html( idiomaSeleccionado['ti_mensaje_udid'] );
	
	//lenguaje
	$('#text_lenguaje_sel').html( idiomaSeleccionado['text_lenguaje_sel'] );
	
	//lenguaje
	$('#ti_scanner_punto').html( idiomaSeleccionado['ti_scanner_punto'] );
	
	//popup
	$('#key_supervisor').attr("placeholder", idiomaSeleccionado['ti_key_super']);  
	
	//
	$('#ti_sitios').html( idiomaSeleccionado['ti_sitios'] );
	$('#ti_rondas').html( idiomaSeleccionado['ti_rondas'] );
	
	//botones popup
	$('#bt_edit_site').html( idiomaSeleccionado['bt_edit_site'] );
	$('#bt_delete_site').html( idiomaSeleccionado['bt_delete_site'] );
	$('#bt_export_site').html( idiomaSeleccionado['bt_export_site'] );
	$('#bt_edit_tour').html( idiomaSeleccionado['bt_edit_tour'] );
	$('#bt_delete_tour').html( idiomaSeleccionado['bt_delete_tour'] );
	$('#bt_edit_point').html( idiomaSeleccionado['bt_edit_point'] );
	$('#bt_delete_point').html( idiomaSeleccionado['bt_delete_point'] );
	$('#bt_cancel_pop').html( idiomaSeleccionado['bt_cancel_pop'] );
	
	$('#ti_reportes').html( idiomaSeleccionado['ti_reportes'] );

}


