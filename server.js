const  http   =  require ( 'http' ) ;
const  fs     =  require ( 'fs' ) ;
const  path   =  require ( 'ruta' ) ;

http . createServer (  (req ,  res ) => {
  
    if  ( método .res  == 'GET' ) {  
        res . writeHead ( 200 ,  { 'Content-Type' : 'text / html' } ) ;
        fs . createReadStream ( 'index.html' ,  'UTF-8' ) . tubería ( res ) ;

    } else  if ( req . method  ==  'POST' ) {
        res.end =  '' ;

        req . on ( 'datos' ,  fragmento  =>  { body =  fragmento } ) ;
    
        req . on  ( 'fin' ,  ( ) => {
            res . writeHead ( 200 ,  { 'Content-Type' : 'text / html' } ) ;
            res . fin ( '<! DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <meta name = "viewport" content = "ancho = ancho del dispositivo, escalable por el usuario = no, escala inicial = 1.0, escala máxima = 1.0, escala mínima = 1.0">
    <title> RESPUESTA DEL POST </title>
</head>
<body>
    <h1> Datos a agregar </h1>
    <p> $ { body } </p>
</body>
</html>') ;                
                
                       }



    consola . log ( '$ $ req . method } solicita $ { req . url }'  ) ;

    if ( req . url  ==  '/' ) {
            fs. readFile ( 'Index.html' ,  'UTF-8' ,  ( err ,  html )  => {
            res . writeHead ( 200 ,  { 'Content-Type' : 'text / html' } ) ;
            res . fin ( html ) ;
        } ) ;
    } else  if ( req . url . match ( /.css $ / ) ) {
        const  reqPath  =  reqPath. join ( __dirname ,  'public' ,  req . url ) ;
        const  fileStream  =  fs . createReadStream ( reqPath ,  'UTF-8' ) ;

        res . writeHead ( 200 ,  { 'Content-Type' : 'text / css' } ) ;
        fileStream . tubería ( res ) ;
    } else  if ( req . url . match ( /.js $ / ) ) {
        const  f  =  fs. join ( __dirname ,  'public' ,  req . url ) ;
        const  fStream =  fs . createReadStream ( reqPath ,  'UTF-8' ) ;

        res . writeHead ( 200 ,  { 'Content-Type' : 'text / javascript' } ) ;
        fileStream . tubería ( res ) ;
    } else  if ( req . url . match ( /.jpg $ / ) ) {
        const  reqPath  =  reqPath. join ( __dirname ,  'public' ,  req . url ) ;
        const  fileStream  =  fs . createReadStream ( reqPath , 'UTF-8') ;

        res . writeHead ( 200 ,  { 'Content-Type' : 'image / jpg' } ) ;
        fileStream . tubería ( res ) ;
    } else {
        res . writeHead ( 404 ,  { 'Content-Type' : 'text / plain' } ) ;
        res . fin ( '404 ERROR' ) ;
    }

})  .listen ( 3000 ) ;

consola . log ( 'Servidor iniciado ...!' ) ;