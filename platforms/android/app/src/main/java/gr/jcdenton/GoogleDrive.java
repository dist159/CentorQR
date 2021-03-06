package gr.jcdenton;

import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;

import android.content.Intent;
import android.content.IntentSender;
import android.net.Uri;
import android.os.Bundle;
import androidx.annotation.NonNull;
import android.util.Log;
import android.os.Environment;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.auth.api.signin.GoogleSignIn;
import com.google.android.gms.auth.api.signin.GoogleSignInAccount;
import com.google.android.gms.auth.api.signin.GoogleSignInClient;
import com.google.android.gms.auth.api.signin.GoogleSignInOptions;
import com.google.android.gms.common.api.ResultCallback;
import com.google.android.gms.common.api.Status;
/*
import com.google.android.gms.drive.Drive;
import com.google.android.gms.drive.DriveApi;
import com.google.android.gms.drive.DriveContents;
import com.google.android.gms.drive.DriveFile;
import com.google.android.gms.drive.DriveFolder;
import com.google.android.gms.drive.DriveId;
import com.google.android.gms.drive.DriveResource;
import com.google.android.gms.drive.Metadata;
import com.google.android.gms.drive.MetadataBuffer;
import com.google.android.gms.drive.MetadataChangeSet;
import com.google.android.gms.drive.query.Filters;
import com.google.android.gms.drive.query.Query;
import com.google.android.gms.drive.query.SearchableField;
*/
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;
import com.google.android.gms.common.api.Scope;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

import static android.app.Activity.RESULT_OK;

import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;

import com.google.api.client.googleapis.extensions.android.gms.auth.GoogleAccountCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.FileContent;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;

import com.google.android.gms.tasks.Task;
import com.google.android.gms.tasks.Tasks;

import com.google.api.client.http.ByteArrayContent;
import java.io.BufferedReader;
import android.util.Pair;
import android.content.ContentResolver;
import android.database.Cursor;
import android.provider.OpenableColumns;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;

import androidx.core.content.ContextCompat;
import android.Manifest;
import android.content.pm.PackageManager;

public class GoogleDrive extends CordovaPlugin  {

    private static final String TAG = "GoogleDrivePlugin";
    private static final int REQUEST_CODE_RESOLUTION = 400;
    private GoogleApiClient mGoogleApiClient;
    private GoogleSignInClient mSignInClient;
    private String mAction = "";
    private String toLocalDest;
    private String fileid;
    private String localFPath;
    private String name;
    private String content;
    private JSONArray  adjuntosFotos;
    private boolean appFolder, listOfFiles,inicio;
    private CallbackContext mCallbackContext;
    private final Executor mExecutor = Executors.newSingleThreadExecutor();
    Drive driveService;
    boolean inicialisando =false;
    GoogleSignInAccount account;
    private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView){
        super.initialize(cordova, webView);
 /*       if (mGoogleApiClient == null) {
            mGoogleApiClient = new GoogleApiClient.Builder(cordova.getActivity())
                    .addApi(Drive.API)
                    .addScope(Drive.SCOPE_FILE)
                    .addScope(Drive.SCOPE_APPFOLDER)
                    .addConnectionCallbacks(this)
                    .addOnConnectionFailedListener(this)
                    .build();
        }
*/



//cordova.setActivityResultCallback (this);

 account = GoogleSignIn.getLastSignedInAccount(cordova.getActivity());

      if (mSignInClient == null) {
      
      /*    Log.d("DRIVE", "SI ES NULL EL PLUGIN DE INICIO");
            GoogleSignInOptions options = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestEmail()
            .requestScopes(new Scope( DriveScopes.DRIVE_FILE))
            .requestScopes(new Scope(DriveScopes.DRIVE_APPDATA))
            .build();
    
            mSignInClient = GoogleSignIn.getClient(cordova.getActivity(), options);*/

         //   cordova.getActivity().startActivityForResult(mSignInClient.getSignInIntent(), 400);
        }else{

          //  GoogleSignInAccount account = GoogleSignIn.getLastSignedInAccount(cordova.getActivity());
        }
        inicialisando=true;
        Log.i(TAG,"Plugin initialized");
    }

    @Override
    public boolean execute(String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
        mCallbackContext = callbackContext;
        mAction = action;
        if ("downloadFile".equals(action)) {
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        Log.d("GOOGLEDIRVE","Llamando funcion Download");
                        fileid = args.getString(0);
                       // content = args.getString(1);

                       if(driveService!=null && mSignInClient!=null){  
                            downloadFile(fileid);
                            Log.d("GOOGLEDIRVE","Iniciando processo ");
                        }else{
                           // if(!inicialisando){ 
                                iniciarSesion();
                                Log.d("GOOGLEDIRVE","Iniciando sesion ");
                           // } 
                        }
                 
                       /* if(mGoogleApiClient.isConnected()) {
                            if(localFPath.trim().length()>0)
                                uploadFile(localFPath, appFolder);
                            else
                                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,"one of the parameters is empty"));
                        } else
                            mGoogleApiClient.connect();*/
                    }catch(JSONException ex){
                        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,ex.getLocalizedMessage()));
                    }
                }
            });
            return true;
        } else if("uploadFile".equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        Log.d("GOOGLEDIRVE","Llamando funcion upload");
                        Log.d("GOOGLEDIRVE","arreglo es: "+args);
                        name = args.getString(0);
                        content = args.getString(1);

                        if(args.getJSONArray(2)!=null&&args.getJSONArray(2).length()>0){ 
                            try {
                                adjuntosFotos = args.getJSONArray(2);
                            } catch (JSONException e) {
                                e.printStackTrace();
                            }
                        }
         
                        account = GoogleSignIn.getLastSignedInAccount(cordova.getActivity());

                        if(account!=null){
                            if(driveService!=null && mSignInClient!=null){  
                                uploadFile(name,content);
                                Log.d("GOOGLEDIRVE","Iniciando processo ");
                            }else{
                                    iniciarSesion();
                                    Log.d("GOOGLEDIRVE","Iniciando sesion ");
                            }
                            
                        }else{
                            mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,"not sign in"));
           
                        }

                    }catch(JSONException ex){
                        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,ex.getLocalizedMessage()));
                    }
                }
            });
            return true;
        } else if("fileList".equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                 //   try {
                  //      appFolder = args.getBoolean(0);
                       /* if(mGoogleApiClient.isConnected()) {
                            fileList(appFolder);
                        } else
                            mGoogleApiClient.connect();*/
                  //  }catch(JSONException ex){
                  //      callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,ex.getLocalizedMessage()));
                  //  }

                }
            });
            return true;
        } else if("deleteFile".equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                    Log.d("GOOOG","Borrando y subiend");
                    try {
                        Log.d("GOOGLEDIRVE","Llamando funcion upload");
                        name = args.getString(0);
                        content = args.getString(1);

                        if(driveService!=null && !inicialisando){ 
                            deleteFile(name,content);
                            Log.d("GOOGLEDIRVE","Iniciando processo ");
                        }else{
                          //  if(!inicialisando){ 
                                iniciarSesion();
                                Log.d("GOOGLEDIRVE","Iniciando sesion ");
                           // } 
                        }
                 
                       /* if(mGoogleApiClient.isConnected()) {
                            if(localFPath.trim().length()>0)
                                uploadFile(localFPath, appFolder);
                            else
                                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,"one of the parameters is empty"));
                        } else
                            mGoogleApiClient.connect();*/
                    }catch(JSONException ex){
                        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,ex.getLocalizedMessage()));
                    }
                }
            });
            return true;
        } else if("requestSync".equals(action)){
              cordova.getThreadPool().execute(new Runnable() {
                  @Override
                  public void run() {
                      try {
                          Log.d("GOOGLEDIRVE","CERRAR SESION o Iniciar Sesion");
                          inicio = args.getBoolean(0);
                          if(mSignInClient!=null){ 
                              if(inicio){
                                iniciarSesion();  
                              }else{
                                Log.d("GOOGLEDIRVE","CERRAndo SESION");
                                  cerrarSesion();
                              }
                             
                          }else{
                            if(inicio){
                              iniciarSesion();  
                              }else{
                                Log.d("GOOGLEDIRVE","CERRAR SESION");
                                  cerrarSesion();
                              }
                          }
                      }catch (JSONException ex){
                          callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,ex.getLocalizedMessage()));
                      }
                  }
              });
              return true;
        } else if("estadoSesion".equals(action)){
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
          
                        
                        account = GoogleSignIn.getLastSignedInAccount(cordova.getActivity());
                        Log.d("GOOGLEDIRVE","Verificando el estado de la sesion actual");
                      if(account!=null)
                        Log.d("GOOGLEDIRVE","account es: "+account);
                        if(account!=null){ 
                            iniciarSesion();  
                            mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, "OK"));
                           
                        }else{
                            //iniciarSesion();  
                            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,"Not ok"));
                        }
                  
                }
            });
            return true;
      }


        
        return false;
    }

    private void    deleteFile(String fileName, String fileContent){
        Log.d("GOOG","Esta borrando y subiendo un nuevo archivo");
        Log.d("GOOG","la data es "+fileName+" --- "+fileContent);
        queryFiles()
        .addOnSuccessListener(fileId ->{
           List<File> files = fileId.getFiles();
           if (files == null || files.size() == 0) {
               System.out.println("No files found.");
               uploadFile(fileName,fileContent);
           } else {
            Log.d("GOOG","la data es num:: "+files.size());
              // if ( files.size()==1)
               for (File file : files) {
                   System.out.printf("%s (%s)\n", file.getName(), file.getId());
                   saveFile( file.getId(), fileName, fileContent)
                                    .addOnSuccessListener(fileID -> {Log.d("Siino","El archivo se guardo exitosamente"); 
                                    mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, "El archivo se creo con el ID: "+fileId));
                                } )
                                    .addOnFailureListener(exception -> {
                                        Log.d("Siino","el erro actula es ++ "+exception);
                                        mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,""+exception));
                                    });
               }
           }
           Log.d("Siino","De la lista de archivos se obtivo "+fileId);
       })
       .addOnFailureListener(exception -> {
           Log.d("Siino","el erro actula es ++ "+exception);
           mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,""+exception));
       });
    }

    private void downloadFile(String fileid) {
       //readFile(fileId);
    // Log.d("GOOO","LA RESPUESTA OBTENIDA ES "+queryFiles());
     queryFiles()
     .addOnSuccessListener(fileId ->{
        List<File> files = fileId.getFiles();
        if (files == null || files.size() == 0) {
            System.out.println("No files found.");
            mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, "No files found"));
        } else {
            if(files.size()==1)
            for (File file : files) {
                System.out.printf("%s (%s)\n", file.getName(), file.getId());
                readFile(file.getId()+"")     
                .addOnSuccessListener(fileIds ->{
                    Log.d("Siino","elarchivoes "+fileIds);
                    mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, fileIds));
                })
                .addOnFailureListener(exception -> {
                    Log.d("Siino","el erro actula es ++ "+exception);
                    mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, ""+exception));
                });
            }

           
        }
        Log.d("Siino","De la lista de archivos se obtivo "+fileId);
    })
    .addOnFailureListener(exception -> {
        Log.d("Siino","el erro actula es ++ "+exception);
        mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,exception.getLocalizedMessage()));
    });
    
  
    }

    

    private void fileList(final boolean appFolder) {
/*
        Query.Builder qb = new Query.Builder();
        qb.addFilter(Filters.and(
                Filters.eq(SearchableField.MIME_TYPE, "application/octet-stream"),
                Filters.eq(SearchableField.TRASHED, false)));

        if(appFolder) {
            DriveId appFolderId = Drive.DriveApi.getAppFolder(mGoogleApiClient).getDriveId();
            qb.addFilter(Filters.in(SearchableField.PARENTS, appFolderId));
        }

        Query query = qb.build();

        Drive.DriveApi.query(mGoogleApiClient, query)
                .setResultCallback(new ResultCallback<DriveApi.MetadataBufferResult>() {
                    @Override
                    public void onResult(DriveApi.MetadataBufferResult result) {
                        if (!result.getStatus().isSuccess()) {
                            mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,"failed to retrieve file list"));
                            return;
                        }
                        MetadataBuffer flist = result.getMetadataBuffer();
                        JSONArray response = new JSONArray();
                        for (Metadata file: flist
                                ) {
                            try {
                                response.put(new JSONObject().put("name", file.getTitle()).put("modifiedTime", file.getCreatedDate().toString()).put("id", file.getDriveId()));
                            }catch (JSONException ex){}
                        }
                        JSONObject flistJSON = new JSONObject();
                        try{
                            flistJSON.put("flist", response);
                        } catch (JSONException ex){}
                        mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK,flistJSON));
                        flist.release();
                        //Log.i(TAG,flist.toString());
                    }
                });*/
    }

    private void deleteFileA(String fileid){
        try {
            if(driveService!=null)
            driveService.files().delete(fileid).execute();
        } catch (IOException e) {
            Log.d("Err","error: "+e);
            //TODO: handle exception
        }
        
    }

    private void requestSync(final boolean listOfFiles){
        /*Drive.DriveApi.requestSync(mGoogleApiClient).setResultCallback(new ResultCallback<Status>() {
            @Override
            public void onResult(@NonNull Status status) {
                if (!status.isSuccess()) {
                    mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,status+""));
                }
                if(listOfFiles) {
                    //after syncing with Google Drive fetch files from private app's folder
                    fileList(true);
                }
            }
        });*/
    }
public void iniciarSesion(){
    cordova.setActivityResultCallback (this);
    inicialisando=false;
    GoogleSignInOptions options = new GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
    .requestEmail()
    .requestScopes(new Scope( DriveScopes.DRIVE_FILE))
    .requestScopes(new Scope(DriveScopes.DRIVE_APPDATA))
    .build();

    mSignInClient = GoogleSignIn.getClient(cordova.getActivity(), options);

//             Intent intent = mSignInClient.getSignInIntent();
cordova.getActivity().startActivityForResult(mSignInClient.getSignInIntent(), 400);
}

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        Log.d("tag","Si entro pero acacacaca");
        super.onActivityResult(requestCode, resultCode, data);
        Log.d("tag","Si entro pero acacacaca");
        Log.d("tag","codigo A_1_2 es: "+REQUEST_CODE_RESOLUTION +" -- "+requestCode+" codigo A_1_2 es: "+resultCode +" -- "+ RESULT_OK);
        if (requestCode == REQUEST_CODE_RESOLUTION && resultCode == RESULT_OK) {
           // mGoogleApiClient.connect();
         
            try {
                Log.d("Sii","Si lo esta intentado");
                manejoInicio(data);
                
            } catch (IOException e) {
                e.printStackTrace();
                Log.d("Siino","el erro actula es "+e);
                mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,e.getLocalizedMessage()));
            } catch (GeneralSecurityException e) {
                e.printStackTrace();
                Log.d("Siino","el erro actula es "+e);
                mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,e.getLocalizedMessage()));
            }
        } else {
            Log.d("Siino","el erro actula es el usuario cancelototo");
            if(mAction.equals("downloadFile")){
                mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, "Error, check internet connection"));
            }else{
                mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,"Error, check internet connection"));
            }
            
        }
    }


    private void manejoInicio(Intent data) throws IOException, GeneralSecurityException {

        final NetHttpTransport HTTP_TRANSPORT = new com.google.api.client.http.javanet.NetHttpTransport();
        GoogleSignIn.getSignedInAccountFromIntent(data)
                .addOnSuccessListener(new OnSuccessListener<GoogleSignInAccount>() {
                    @Override
                    public void onSuccess(GoogleSignInAccount googleSignInAccount) {
                        GoogleAccountCredential  credential =
                                GoogleAccountCredential.
                                        usingOAuth2(cordova.getActivity(), Collections.singleton(DriveScopes.DRIVE_FILE));
                         credential.setSelectedAccount(googleSignInAccount.getAccount());
                        Log.d("s","si logro iniciar");
                         driveService = new Drive.Builder(HTTP_TRANSPORT, JSON_FACTORY, credential)
                        .setApplicationName("Cencor test")
                        .build();
                        Log.d("memory","La memoria actual es :"+ Environment.getDataDirectory());
                        inicialisando =false;
                        Log.i(TAG, "API client connected.");
                        if(mAction.equals("downloadFile")){
                            downloadFile(fileid);
                        } else if(mAction.equals("uploadFile")){
                            uploadFile(name,content);
                        } else if(mAction.equals("fileList")){
                            fileList(appFolder);
                        } else if(mAction.equals("deleteFile")){
                            deleteFile(name,content);
                        } else if (mAction.equals("requestSync")){
                            //requestSync(listOfFiles);
                            if(inicio){
                                mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, "inicio de sesion exitoso"));
                                //iniciarSesion();  
                              }else{
                                  cerrarSesion();
                              }
                          
                        } else if(mAction.equals("borrarYsubir")){
                           // borrarYsubir(name,content);
                        }
                    }
                })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        Log.d("s","no se pudo: "+e);
                    }
                });

        }
     /*   public Task<String> createFile(Drive mDriveService) {
            return Tasks.call(mExecutor, () -> {
                    File metadata = new File()
                            .setParents(Collections.singletonList("root"))
                            .setMimeType("text/csv")
                            .setName("SOy yo y si estoy reque funcionando WOWOWOW.cvs");
                            
    
                    File googleFile = mDriveService.files().create(metadata).execute();
                    if (googleFile == null) {
                        throw new IOException("Null result when requesting file creation.");
                    }
    
                    return googleFile.getId();
                });
        }*/

           /**
     * Creates a text file in the user's My Drive folder and returns its file ID.
     */
        public Task<String> createFile() {
            return Tasks.call(mExecutor, () -> {
                Log.d("GOOGLEDIRVE","Creando el archivo correspondiete con el nombre");
                File metadata = new File()
                        .setParents(Collections.singletonList("root"))
                        .setMimeType("text/plain")
                        .setName("Untitled file");
              
                File googleFile = driveService.files().create(metadata).execute();
                if (googleFile == null) {
                    throw new IOException("Null result when requesting file creation.");
                }
                return googleFile.getId();
            });
        }

        public Task<String> createFileImage(String filepatha,String name) {
            
            return Tasks.call(mExecutor, () -> {
                Log.d("GOOGLEDIRVE","Creando el archivo correspondiete con el nombre");
                if (ContextCompat.checkSelfPermission(cordova.getActivity(),
                Manifest.permission.READ_EXTERNAL_STORAGE)
                != PackageManager.PERMISSION_GRANTED){
                    Log.d("GOOGLEDIRVE","NO HAY PERMISO");
                }else{
                    Log.d("GOOGLEDIRVE","SI HAY PERMISO");
                }

                File fileMetadata = new File();
                fileMetadata.setName(name);
                java.io.File filePath = new java.io.File(filepatha);
                FileContent mediaContent = new FileContent("image/jpeg", filePath);
                File googleFile = driveService.files().create(fileMetadata, mediaContent)
                    .setFields("id")
                    .execute();
        
                if (googleFile == null) {
                    throw new IOException("Null result when requesting file creation.");
                }
                return googleFile.getId();
           
            });
        }






    /**
     * Updates the file identified by {@code fileId} with the given {@code name} and {@code
     * content}.
     */
    public Task<Void> saveFile(String fileId, String name, String content) {
        return Tasks.call(mExecutor, () -> {
            // Create a File containing any metadata changes.
            File metadata = new File().setName(name);
            // Convert content to an AbstractInputStreamContent instance.
            ByteArrayContent contentStream = ByteArrayContent.fromString("text/csv", content);
            // Update the metadata and contents.
            driveService.files().update(fileId, metadata, contentStream).execute();
            return null;
        });
    }

        /**
     * Updates the file identified by {@code fileId} with the given {@code name} and {@code
     * content}.
     */
    public Task<Void> saveImage(String fileId, String name, String content) {
        return Tasks.call(mExecutor, () -> {
            // Create a File containing any metadata changes.
            File metadata = new File().setName(name);
            // Convert content to an AbstractInputStreamContent instance.
            byte[] decodedString = Base64.decode(content, Base64.DEFAULT);
           // ByteArrayContent contentStream = ByteArrayContent.fromString("image/jpeg", decodedString);
           // ByteArrayContent decodedString = Base64.decode(content, Base64.DEFAULT);
         //   Bitmap decodedByte = BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
            // Update the metadata and contents.
          //  driveService.files().update(fileId, metadata, contentStream).execute();
            return null;
        });
    }

      

        public Task<String> UpdateFileAAA(Drive mDriveService) {
            return Tasks.call(mExecutor, () -> {
                    File metadata = new File()
                            .setParents(Collections.singletonList("root"))
                            .setMimeType("text/plain")
                            .setName("SOy yo y si estoy reque funcionando");
    
                            File fileMetadata = new File();
                            fileMetadata.setName("photo.jpg");
                            java.io.File filePath = new java.io.File( Environment.getDataDirectory()+"/Download/aaa.jpg");
                            FileContent mediaContent = new FileContent("image/jpeg", filePath);
                            File file = null;
                            try {
                                file = mDriveService.files().create(fileMetadata, mediaContent)
                                        .setFields("id")
                                        .execute();
                            } catch (IOException e) {
                                e.printStackTrace();
                                Log.d("Siino","el erro actula es ++ "+e);
                            }
                           // System.out.println("File ID: " + file.getId());
    
                    return file.getId();
                });
        }

int numeroActual=0;
        public void uploadFile(String fileName, String fileContent) {
            if(adjuntosFotos!=null&&adjuntosFotos.length()>0){
                Log.d("GOOGLEDIRVE","Si hay adjuntos: "+ adjuntosFotos.length());
               numeroActual=0;
                for(int i=0;i<adjuntosFotos.length();i++){

                
                    try {
                    createFileImage(adjuntosFotos.getString(i),fileName+"-"+i+".jpg")
                    .addOnSuccessListener(fileIdo ->{
                        Log.d("GOOGLEDIRVE","ID !-!-!-!-!-!-!-!-!-!-! "+ fileIdo);
                        numeroActual++;
                        if(numeroActual==adjuntosFotos.length()){
                            Log.d("GOOGLEDIRVE","Iniciando subida");
                            createFile()
                                    .addOnSuccessListener(fileId ->{
                                        saveFile(fileId, fileName+".csv", fileContent)
                                                .addOnSuccessListener(fileID -> {Log.d("Siino","El archivo se guardo exitosamente"); 
                                                mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, "El archivo se creo con el ID: "+fileId));
                                             
                                            } )
                                                .addOnFailureListener(exception -> {
                                                    Log.d("Siino","el erro actula es ++ "+exception);
                                                    mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,exception.getLocalizedMessage()));
                                                });
                                    })
                                    .addOnFailureListener(exception -> {
                                        Log.d("Siino","el erro actula es ++ "+exception);
                                        mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,exception.getLocalizedMessage()));
                                    });
                        }
                        
                        /*try {
                    
                            
                        /*  saveImage(fileId, "example.jpeg", adjuntosFotos.getString(0))
                            .addOnSuccessListener(fileID -> {Log.d("Siino","El archivo se guardo exitosamente"); 
                            mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, "El archivo se creo con el ID: "+fileId));
                        
                            })
                            .addOnFailureListener(exception -> {
                                Log.d("Siino","el erro actula es ++ "+exception);

                            });*/
                    /*  } catch (JSONException e) {
                            e.printStackTrace();
                        }*/
                    
                    })
                    .addOnFailureListener(exception -> {
                        Log.d("Siino","el erro actula es ++ "+exception);

                    });
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            }else{
                Log.d("GOOGLEDIRVE","Iniciando subida");
                createFile()
                        .addOnSuccessListener(fileId ->{
                            saveFile(fileId, fileName+".csv", fileContent)
                                    .addOnSuccessListener(fileID -> {Log.d("Siino","El archivo se guardo exitosamente"); 
                                    mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, "El archivo se creo con el ID: "+fileId));
                                 
                                } )
                                    .addOnFailureListener(exception -> {
                                        Log.d("Siino","el erro actula es ++ ll "+exception);
                                        mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,exception.getLocalizedMessage()));
                                    });
                        })
                        .addOnFailureListener(exception -> {
                            Log.d("Siino","el erro actula es ++ xx "+exception);
                            mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,exception.getLocalizedMessage()));
                        });
            }
         
            
        
           
        }


            /**
     * Opens the file identified by {@code fileId} and returns a {@link Pair} of its name and
     * contents.
     */
    public Task<String> readFile(String fileId) {
        return Tasks.call(mExecutor, () -> {
            // Retrieve the metadata as a File object.
            File metadata = driveService.files().get(fileId).execute();
            String name = metadata.getName();

            // Stream the file contents to a String.
            try (InputStream is = driveService.files().get(fileId).executeMediaAsInputStream();
                 BufferedReader reader = new BufferedReader(new InputStreamReader(is))) {
                StringBuilder stringBuilder = new StringBuilder();
                String line;

                while ((line = reader.readLine()) != null) {
                    stringBuilder.append(line);
                }
                //Console.log("se Obtuvo algo:"+ stringBuilder.toString());
                return stringBuilder.toString();
            }
        });
    }

 /**
     * Returns a {@link FileList} containing all the visible files in the user's My Drive.
     *
     * <p>The returned list will only contain files visible to this app, i.e. those which were
     * created by this app. To perform operations on files not created by the app, the project must
     * request Drive Full Scope in the <a href="https://play.google.com/apps/publish">Google
     * Developer's Console</a> and be submitted to Google for verification.</p>
     */
    public Task<FileList> queryFiles() {

        return Tasks.call(mExecutor, () -> 
        
        driveService.files().list()
                .setQ("name = 'Database.csv'")
                .setSpaces("drive")
                .setFields("nextPageToken, files(id, name)")
                .execute());
       
    }

    /**
     * Returns an {@link Intent} for opening the Storage Access Framework file picker.
     */
    public Intent createFilePickerIntent() {
        Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        intent.setType("text/plain");

        return intent;
    }

    /**
     * Opens the file at the {@code uri} returned by a Storage Access Framework {@link Intent}
     * created by {@link #createFilePickerIntent()} using the given {@code contentResolver}.
     */
    public Task<Pair<String, String>> openFileUsingStorageAccessFramework(
            ContentResolver contentResolver, Uri uri) {
        return Tasks.call(mExecutor, () -> {
            // Retrieve the document's display name from its metadata.
            String name;
            try (Cursor cursor = contentResolver.query(uri, null, null, null, null)) {
                if (cursor != null && cursor.moveToFirst()) {
                    int nameIndex = cursor.getColumnIndex(OpenableColumns.DISPLAY_NAME);
                    name = cursor.getString(nameIndex);
                } else {
                    throw new IOException("Empty cursor returned for file.");
                }
            }

            // Read the document's contents as a String.
            String content;
            try (InputStream is = contentResolver.openInputStream(uri);
                 BufferedReader reader = new BufferedReader(new InputStreamReader(is))) {
                StringBuilder stringBuilder = new StringBuilder();
                String line;
                while ((line = reader.readLine()) != null) {
                    stringBuilder.append(line);
                }
                content = stringBuilder.toString();
            }

            return Pair.create(name, content);
        });
    }

    public void cerrarSesion(){
        if(mSignInClient!=null)
        mSignInClient.signOut()
        .addOnSuccessListener(fileID -> {
            Log.d("GoogelDrive","Deslogeo  exitoso");
            driveService=null;
            mSignInClient=null;
            mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, "SI"));
        })
                .addOnFailureListener(exception -> {
                    Log.d("Siino","Erro al cerrar sesion"+exception);
                    mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR,exception.getLocalizedMessage()));
                });
 }

/*
    @Override
    public void onConnectionFailed(ConnectionResult result) {
        // Called whenever the API client fails to connect.
        Log.i(TAG, "GoogleApiClient connection failed: " + result.toString());
        if (!result.hasResolution()) {
            // show the localized error dialog.
            GoogleApiAvailability.getInstance().getErrorDialog(cordova.getActivity(), result.getErrorCode(), 0).show();
            return;
        }
        try {
            Log.i(TAG,"trying to resolve issue...");
            cordova.setActivityResultCallback(this);//
            result.startResolutionForResult(cordova.getActivity(), REQUEST_CODE_RESOLUTION);
        } catch (IntentSender.SendIntentException e) {
            Log.e(TAG, "Exception while starting resolution activity", e);
        }
    }

    @Override
    public void onConnected(Bundle connectionHint) {
        Log.i(TAG, "API client connected.");
        if(mAction.equals("downloadFile")){
            downloadFile(toLocalDest,fileid);
        } else if(mAction.equals("uploadFile")){
            uploadFile(localFPath,appFolder);
        } else if(mAction.equals("fileList")){
            fileList(appFolder);
        } else if(mAction.equals("deleteFile")){
            deleteFile(fileid);
        } else if (mAction.equals("requestSync")){
            requestSync(listOfFiles);
        }
    }

    @Override
    public void onConnectionSuspended(int cause) {
        Log.i(TAG, "GoogleApiClient connection suspended");
    }*/
}