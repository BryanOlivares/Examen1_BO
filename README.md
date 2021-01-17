En este proyecto vamos hacer uso de Frameword de Angular y Firebase como gestor de base de datos.

Vamos a crear las servicios de autenticaciones(auth) para cada usuario para poder crear un inicio de sesión cada vez que el usuario requiera entrar a chats, 
esto se realiza para que solo personas que esten registradas puede ingresar a los datos del mismo y las personas que no esten se puedan registrar y asi poder realizar chats.

Para esto vamos a crear rutas para que el usuario pueda inicar sesión cada vez que necesite hacer uso del chat, las rutas principales en este caso son 2 home 
y login. El funcionamiento de login es crearse una cuenta o iniciar sesion con una cuenta ya creada, con las credenciales correctas le redirigira a home en donde estara creado 
previamente 2 chats la cual es "Chat deportes", "Clases" en donde podremos ingresar a los chats y se podra subir mensajes a firebase. Si no esta iniciada la sesion y un usuario desea 
dirigirse a la ruta "http://localhost:8100/home" a ver los chats no podra hacer ya que necesita estar registrado o que previamente haber tenido un inicio de sesión.
Ambas rutas estan protegidas para que ningun usuario que no este iniciado la sesión no pueda realizar el envio de chats.Creamos un modelo de message en donde se guardara 
los mensajes que se envien a firebase.
Creamos dos componentes que es login,chat  y registro en donde el login tendra como caracteristicas no permitir a usuarios que no tengan una cuenta creada y le conllevara a permanecer en la misma ruta hasta que pueda iniciar sesión, en la parte de chat vamos a establecer las funcionalidades del button para enviar mensajes, el envio de los datos hacia firebase. Se creo el componente registro para que cada usuario que se registre pasa a la base de firebase y que estoy permitira que cada usuario escribir mensaje y envir.

Funcionalidad:
Al momento que corramosel proyecto vamos a tener que ingresar con un correo ya autorizado o crearse un correo, este usuario autorizado podrá ingresar a la ruta de los chats en donde 
podra dar clic en los chats "Chat deportes", "Clases" y asi ingresar a enviar un mensaje, cuyo mensaje sera enviado a firebase. Por otra parte el usuario se podrá registrar y cuyos usuarios ingresen a firebase, y los usuarios que anteriormente tenian una cuenta podran dirigirse directamente al chat, tendran un icono en donde les permitira retroceder después de enviar un mensaje, tambien encontraran  un pequeño menú en la parte superior derecha para que puedan salir de la sesión. 








