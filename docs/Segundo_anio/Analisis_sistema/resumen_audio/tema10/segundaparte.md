2 La Evolución de la Arquitectura del Sistema
---------------------------------------------

Cada sistema informático de negocios debe cumplir con tres funciones principales:

* Gestionar aplicaciones que ejecuten la lógica de procesamiento.
* Manejar el almacenamiento de los datos y el acceso a los mismos.
* Proveer una interfaz que permita, a los usuarios, interactuar con el sistema.

Dependiendo de la arquitectura, éstas funciones se pueden ejecutar en un servidor, en el cliente o pueden dividirse entre servidor y cliente. Durante el diseño del sistema, el analista debe determinar dónde se llevara a cabo la función y cerciorarse de las ventajas y desventajas de cada diseño.

### Arquitectura de Unidad Central

Un **servidor** es una computadora que provee datos, servicios de procesamiento o da soporte a otras computadoras llamadas **clientes**. A los primeros servidores se les llamó computadoras de unidad central (en inglés **mainframe**) y al diseño de sistemas donde el servidor ejecuta todo el procesamiento se lo suele llamar arquitectura mainframe. Si bien los servidores de hoy en día no necesitan ser un mainframe, el término de arquitectura mainframe normalmente describe un entorno multiusuario donde el servidor es significativamente más potente que los clientes.

### El Impacto de la Computadora Personal

Cuando la tecnología de la computadora personal ("PC" del inglés "Personal Computer") explotó en la década del 90, se observó un rápido crecimiento de potentes microcomputadores en los escritorios corporativos. Los usuarios encontraron que podían ejecutar un procesador de texto, hojas de cálculos y aplicaciones de bases de datos en un modo llamado computación independiente (en inglés "Stand-Alone Computing"). Las compañías conectaron las computadoras independientes en redes que les permitió compartir datos con los clientes y ejecutar procesamiento local.

Cuando un usuario individual trabaja en modo independiente, la estación de trabajo ejecuta todas las funciones del servidor al almacenar, acceder y procesar los datos. Si bien las computadoras independientes mejoraron la productividad de los empleados y le permitió a los usuarios ejecutar tareas que previamente requerían de asistencia del departamento IT, la computación independiente puede ser ineficiente y costosa. Aún peor, al mantener datos en estaciones de trabajo individuales se disparan las preocupaciones sobre la seguridad, integridad y consistencia de los datos.

### La Evolución de las Redes

A medida que la tecnología se volvió accesible, las compañías resolvieron los problemas de la computación individual al conectar los clientes en una red de área local ("LAN" del inglés "Local Area Network") que permite compartir datos y recursos de hardware. Una red de área amplia ("WAN" del inglés "Wide Area Network") cubre grandes distancias y hasta puede conectar LANs separadas por continentes. A los sistemas corporativos que conectan una o más LANs o WANs se los llama sistemas distribuidos. Comparados con la arquitectura de mainframe, los sistemas distribuidos incrementaron las preocupaciones sobre la seguridad e integridad de los datos.



-------------------------------
