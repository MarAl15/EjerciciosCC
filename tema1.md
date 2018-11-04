# Tema ["Arquitecturas software para la nube"](http://jj.github.io/CC/documentos/temas/Arquitecturas_para_la_nube)


## Ejercicio 1

**Buscar una aplicación de ejemplo, preferiblemente propia, y deducir qué patrón es el que usa. ¿Qué habría que hacer para evolucionar a un patrón tipo microservicios?**

En la asignatura de **Diseño y desarrollo de sistemas de información** realicé, junto con dos compañeros, un pequeño boceto,  con sentencias SQL, disparadores PL/SQL y Django, del proyecto cuyo objetivo principal era desarrollar un sistema que permitiría dar un servicio de _streaming_ de música. 

El modelo MVC que nosotros inicialmente pensamos, se puede transformar en uno basado en microservicios identificando estos de forma sencilla: gestión de usuarios, búsqueda de canciones mediante filtros, gestión de listas de reproducción, reproducción de música, gestión de canciones e interfaces.

## Ejercicio 2

**En la aplicación que se ha usado como ejemplo en el ejercicio anterior, ¿podría usar diferentes lenguajes? ¿Qué almacenes de datos serían los más convenientes?**

Como como se explicó en la [charla de microservicios](http://youtu.be/sh67hQwU14Y), al ser estos independientes se podrían usar un lenguaje diferente para cada uno de ellos.

En el caso del almacenamiento de usuarios se podría utilizar una base de datos SQL ya que los distintos campos son obligatorios, utilizando además un identificador para cada uno de estos. Por otro lado, para el almacenamiento de canciones sería más conveniente una base de datos de tipo NoSQL ya que la estructura y la cantidad de datos puede variar.  

