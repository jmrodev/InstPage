DISEÑO DE SISTEMAS 2/3
======================


Diseño de Datos
===============


1 Conceptos del Diseño de Datos
-------------------------------

### Estructuras de Datos

Las estructuras de datos son un framework ("marco de trabajo") para organizar, almacenar y administrar datos. Las estructuras de datos consisten en archivos o tablas que interactúan de varias formas. Cada archivo o tabla contiene datos sobre personas, lugares, cosas o eventos. Por ejemplo, un archivo o tabla puede contener datos sobre los clientes y otros archivos o tablas pueden almacenar datos sobre productos, compras, proveedores o empleados.

Muchos de los programas antiguos utilizaban el procesamiento de archivos, ya que funcionaba muy bien con el hardware de la época y la entrada en lote. Algunas compañías aún usan éste método para procesar regularmente grandes cantidades de estructuras de datos, ya que puede ser económico bajo ciertas circunstancias. Un ejemplo podría ser el de una empresa de tarjetas de créditos que envía miles de transacciones desde el archivo "TRANSACCIONES" al archivo "CLIENTES", donde se representa el balance de las cuentas. Para éste método, el procesamiento de archivos puede ser una buena opción.

A través del tiempo, las **Bases de Datos Relacionales** modernas se han convertido en un estándar para los desarrolladores de sistemas.

### Sistemas de Administración de Bases de Datos

Las bases de datos proveen un framework general que evita la redundancia de datos y da soporte a entornos dinámicos y de tiempo real. Un Sistema de Administración de Bases de Datos ("DBMS" del inglés "Database Management System") es una colección de herramientas, características e interfaces que le permiten a los usuarios el agregar, actualizar, administrar, acceder y analizar datos.

Entre las principales ventajas de los DBMS se encuentran:

* ESCALABILIDAD: La escalabilidad significa que el sistema puede ampliarse, modificarse o reducirse fácilmente; De ésta forma podrá cumplir con las necesidades de la industria de los negocios que cambian rápidamente.
* ECONOMÍA DEL CRECIMIENTO: El diseño de bases de datos permite utilizar el hardware de mejor manera. Si una compañía mantiene una base de datos corporativa, para que su procesamiento sea menos costoso, se deben usar servidores potentes y redes de comunicación. Se llama economía del crecimiento a la eficiencia inherente de procesar un alto volumen de datos en grandes computadoras.
* APLICACIONES EMPRESARIALES: Generalmente, los DBMS, son administrados por una persona llamada Administrador de Bases de Datos ("DBA" del inglés "Database Administrator"). Los DBA evalúan los requerimientos generales y mantienen las bases de datos para el beneficio de toda la compañía, en lugar de hacerlo para un solo departamento o usuario. Los sistemas de bases de datos soportan aplicaciones empresariales de manera más eficiente que los sistemas de procesamiento de archivos.
* ESTÁNDARES FUERTES: Una administración de bases de datos efectiva ayuda a asegurar que los estándares de nombres de datos, formatos y documentación se cumplan uniformemente a lo largo y ancho de la organización.
* MEJOR SEGURIDAD: Los DBA pueden definir procesos de autorización para asegurar que sólo los usuarios legítimos puedan acceder a la bases de datos y que diferentes usuarios tengan diferentes niveles de acceso.
* INDEPENDENCIA DE DATOS: Los sistemas que interactúan con los DBMS son relativamente independientes de cómo se mantienen los datos físicamente. Éste diseño le provee al DBA una flexibilidad para alterar las estructuras de datos sin modificar los sistemas informáticos que usan los datos.


2 Componentes de los DBMS
-------------------------

Los DBMS proveen una interfaz entre la base de datos y los usuarios que necesitan acceder a los datos. Si bien a los usuarios les interesa principalmente las interfaces fáciles de usar y el soporte para sus requerimientos de negocios, los analistas de sistemas deben entender todos los componentes de los DBMS. Ademas de las interfaces para usuarios, DBAs y sistemas relacionados; los DBMS también tienen un lenguaje de manipulación de datos, un esquema, sub-esquema y un repositorio físico de datos.

###  Interfaces para Usuarios, DBAs y Sistemas Relacionados

Cuando los usuarios, los DBAs y los sistemas informáticos relacionados solicitan datos y servicios, el DBMS procesa la petición, manipula los datos y provee una respuesta. Para éste fin, la mayoría de los DBMS usan un **lenguaje de manipulación de datos** ("DML" del inglés "Data Manipulation Language"), siendo **SQL** ("Structured Query Language" traducido "Lenguaje de Consulta Estructurada") el más usado. El DML controla las operaciones de la base de datos, incluyendo la creación, lectura, actualización y borrado de los datos ("CRUD" del inglés "Create, Read, Update and Delete"). Algunos DBMS también proveen un entorno gráfico que permiten realizar las operaciones a través de la GUI.

### Esquema

El esquema es la definición completa de la base de datos, incluyendo la descripción de todos los campos, tablas y relaciones. Uno o más sub-esquemas pueden ser definidos. Un sub-esquema es una vista de la base de datos usada por uno o más usuarios. El sub-esquema define aquellas porciones de la base de datos que necesita (o se les permite acceder) un usuario o sistema en particular.

### Repositorio de Datos Físico

En el "Modelado de Datos y Procesos" se trató el diccionario de datos, el cual describe todos los elementos de datos incluidos en el diseño lógico. En está etapa del proceso de desarrollo de sistemas, el diccionario de datos se transforma en un repositorio de datos físico, el cual contiene el esquema y los sub-esquemas. El repositorio físico puede estar centralizado o puede estar distribuido en diferentes ubicaciones. Además, los datos guardados pueden estar administrados por un solo DBMS, o por varios sistemas. Para solucionar potenciales problemas de conectividad y acceso, las compañías usan software compatible con ODBC ("Open Database Connectivity" traducido "Conectividad de Base de Datos Abierta") que permite la comunicación entre varios sistemas y DBMS. El ODBC es un protocolo industrial estandarizado que hace posible que el software de diferentes proveedores interactúen y compartan datos. ODBC usa declaraciones SQL que los DBMS entienden y pueden ejecutar.


3 Diseño Basado en la WEB
-------------------------

Para los DBMS, al usar un diseño WEB, Internet es el front-end o la interfaz. Las tecnologías de Internet proveen gran poder y flexibilidad ya que los sistemas informáticos relacionados no están atados a una combinación especifica de hardware o software. Para acceder a la base de datos sólo se requiere un navegador y una conexión a Internet. Los sistemas WEB son populares porque ofrecen un acceso fácil, una conectividad mundial y son efectivos económicamente; todo ésto es vital para la compañías que deben competir en una economía global.

Para acceder a los datos en una sistema WEB, la base de datos debe estar conectada a Internet o a la Intranet de la compañía. Sin embargo, las bases de datos e Internet hablan dos idiomas diferentes. Las bases de datos se crean y administran usando lenguajes y comandos que no tienen nada que ver con HTML, el lenguaje de la WEB. Para contrarrestar ésta diferencia, teniendo en cuenta que el objetivo es el de conectar la bases de datos con la WEB y permitir que se puedan ver y editar los datos, es necesario usar un middleware; el cual es un software que integra diferentes aplicaciones y les permite intercambiar datos. Los middlware conocen cómo interpretar las peticiones desde la WEB y transformarlas en comandos que una base de datos puede ejecutar. Cuando la base de datos responde a los comandos, el middleware transforma los resultados en páginas HTML que pueden mostrase en los navegadores de los usuarios. Un sitio WEB escrito con PHP es un ejemplo de middleware.

Los datos WEB deben estar bien asegurados, sin embargo también deber ser fáciles de acceder para los usuarios autorizados. Para que ésto se pueda llevar a cabo, los sistemas bien diseñados proveen medidas de seguridad en tres niveles: en la base de datos, en el sistema web y en el servidor web que provee del contenido y los enlaces (HTTPS).


4 Términos del Diseño de Datos
------------------------------

### Definiciones

* ENTIDAD: Una entidad es una persona, un lugar, una cosa o un evento del cual se colectan y mantienen sus datos (ej. CLIENTE, COMPRA, PRODUCTO, PROVEEDOR). Cuando se prepararon los DFDs, durante la fase de análisis de sistemas, se identificaron varias entidades y repositorios de datos. Ahora se considerarán las relaciones entre las entidades.
* TABLA O ARCHIVO: Los datos se organizan en tablas o archivos. Una tabla (o archivo) contiene un conjunto de registros relacionados que guardan datos sobre una entidad específica. Las tablas y archivos se muestran como estructuras de dos dimensiones formadas por columnas (verticales) y filas (horizontales). Cada columna representa un campo o característica de la entidad; mientras que cada fila representa un registro, el cual es una instancia u ocurrencia de la entidad.
* CAMPO: Un campo, también llamado atributo, es una característica o dato sobre una entidad.
* REGISTRO: Un registro, también llamado tupla, es un conjunto de campos relacionados que describen una instancia u ocurrencia de una entidad.

### Campos Claves

Durante la fase de diseño de sistemas, los campos claves son usados para organizar, acceder y mantener las estructuras de datos.

* CLAVES PRIMARIA: Una clave primaria esta compuesta por uno o más campos que identifican inequívocamente un único miembro de una entidad, por lo tanto las claves primarias deben ser únicas. A la clave primaria formada por múltiples campos se la puede llamar clave compuesta, clave concatenada o clave multivalor.
* CLAVE CANDIDATA: A veces se puede contar con más de un campo del cual elegir una clave primaria. A cualquier campo que pueda servir como clave primaria se lo llama clave candidata. Como sólo puede existir una clave primaria, se debe elegir al campo que contenga la menor cantidad de datos y que se el más fácil de usar.
* CLAVE FORÁNEA: Teniendo en cuenta que existen campos comunes en más de una tabla y pueden ser usados para crear relaciones (o enlaces) entre las tablas, una clave foránea es un campo en una tabla que debe coincidir con el valor de la clave primaria de otra tabla; creando, de ésta forma, una relación entre dos tablas. A diferencia de las claves primarias, las claves foráneas no necesitan ser únicas.
* CLAVE SECUNDARIA: Una clave secundaria es un campo (o combinación de campos) que puede ser usado para recuperar registros. Los valores de las claves secundarias no son únicos. Por ejemplo, para recuperar los registros de los usuarios mayores de edad, el campo de la fecha de nacimiento sería usado como clave secundaria. Las claves secundarias también pueden ser usadas para clasificar o mostrar los registros en un cierto orden.

### Integridad Referencial

Los controles de validación ayudan a evitar los errores de entrada. Un tipo de validación, llamado integridad referencial, es un conjunto de reglas que evitan la inconsistencia de datos y problemas de calidad. En una base de datos relacional, la integridad referencial significa que el valor de una clave foránea no puede ingresarse en una tabla si no coincide con el valor de una clave primaria de otra tabla. La integridad referencial también puede prevenir el borrado de un registro, si éste tiene una clave primaria que coincide con la clave foránea de un registro en otra tabla.


5 Diagramas de Entidad-Relación
-------------------------------

Recordemos que una entidad puede ser una persona, un lugar, una cosa o un evento para la cual se recogen y mantienen datos. Los sistemas informáticos deben reconocer las relaciones entre las entidades. Un Diagrama de Entidad-Relación ("ERD" del inglés "Entity-Relationship Diagram") es un modelo que muestra las relaciones lógicas y las interacciones entre las entidades del sistema. Un ERD provee una vista general del sistema y un plano para la creación de la estructura física de datos.

### Dibujando un ERD

El primer paso es el de listar las entidades que fueron identificadas durante la fase del análisis de sistemas y considerar la naturaleza de las relaciones que hay entre ellas. En ésta etapa se puede usar un método simplificado para mostrar las relaciones entre las entidades. Si bien hay diferentes formas de dibujar un ERD, un método popular es el de representar las entidades como rectángulos y a las relaciones como rombos. A los rectángulos (entidades) se los etiqueta con sustantivos singulares y a los rombos (relaciones) se los etiqueta con verbos. Normalmente de dibuja de arriba hacia abajo y de izquierda a derecha. A diferencia de los DFD, los ERD describen relaciones y no datos o flujos de información.

### Tipos de Relaciones

* RELACIÓN **UNO A UNO** (abreviado 1:1): Ésta relación se da cuando, para cada instancia de la primera entidad, existe exactamente una instancia de la segunda entidad.
* RELACIÓN **UNO A MUCHOS** (abreviado 1:M): Ésta relación existe cuando una ocurrencia de la primera entidad se puede relacionar con muchas instancias de la segundad entidad. Pero cada instancia de la segundad entidad sólo se puede asociar con una instancia de la primera entidad.
* RELACIÓN **MUCHOS A MUCHOS** (abreviado M:M): Ésta relación existe cuando una instancia de la primera entidad puede relacionarse con muchas instancias de la segunda entidad y una instancia de la segunda entidad puede relacionarse con muchas instancias de la primera entidad.

Cabe mencionar que la relación **M:M** es diferente a las relaciones **1:1** o **1:M**, ya que el evento (o transacción) que vincula dos entidades es una tercer entidad. A ésta tercer entidad se la llama entidad asociativa, la cual tiene sus propias características.

A éstas relaciones se las llaman cardinalidades. El analista debe entender la cardinalidad para poder crear un diseño de datos que refleje con precisión todas las relaciones entre las entidades del sistema.

### Cardinalidad

Luego de que el analista dibuje un ERD inicial, se deben detallar las relaciones usando una técnica llamada cardinalidad. La cardinalidad describe la relación numérica entre dos entidades y muestra como las instancias de una entidad se relacionan con las instancias de otra entidad.

El analista puede modelar ésta interacción al agregar notaciones de cardinalidad, las cuales usan símbolos especiales para representar las relaciones.

* Una barra vertical indica **uno**
* Dos barras verticales indica **uno y solo uno**
* Un circulo y una barra vertical indica **cero o uno**
* Una "pata de cuervo" (tres rayas) indica **muchos**
* Una barra vertical y una "pata de cuervo" indica **uno o muchos**
* Un circulo y una "pata de cuervo" indica **cero o muchos**


6 Normalización de Datos
------------------------

La normalización es el proceso de crear diseños de tablas al asignarles campos o atributos específicos a cada tabla de la base de datos. Un diseño de tabla se encarga de especificar los campos e identifica la clave primaria en una tabla o archivo particular. La normalización es usada para desarrollar un diseño general (de la base de datos) que sea simple, flexible y libre de redundancia de datos.

### Formato de Notación Estándar

El diseño de tablas se facilita al usar el formato de notación estándar para mostrar la estructura de las tablas, los campos y las claves primarias. A continuación veremos unos ejemplos de un sistema de **PEDIDOS** (en inglés **ORDER**); en éstos el formato de notación estándar comienza con el nombre de la tabla, seguido por una lista de nombres de campos separados por comas y encerrados dentro de paréntesis. Los campos que son claves primarias se encierran entre asteriscos. Por ejemplo:

    TABLE NAME (*FIELD 1*, FIELD 2, FIELD 3)

Durante el diseño de datos, el analista debe ser capaz de reconocer cuando un grupo de campos se repite. Un grupo de repeticiones es un conjunto de uno o más campos que puede aparecer una o más veces en un registro, teniendo cada ocurrencia un valor diferente.

Un diseño de tabla que contiene un grupo de repeticiones es llamado **desnormalizado**. El método de notación estándar para representar un diseño desnormalizado es el de agrupar el grupo de repeticiones dentro de un segundo grupo de paréntesis. A continuación se muestra un ejemplo de una tabla desnormalizada:

    TABLE NAME (*FIELD 1*, FIELD 2, FIELD 3, (REPEATING FIELD 1, REPEATING FIELD 2))

Siguiendo las pautas de notación, el diseño para ORDER puede describirse como a continuación:

    ORDER (*ORDER*, DATE, (*PRODUCT NUMBER*, DESCRIPTION, NUMBER ORDERED, SUPPLIER NUMBER, SUPPLIER NAME, ISO))

La notación indica que el diseño de la tabla `ORDER` contiene ocho campos, los cuales se listan dentro de los paréntesis exteriores. El campo `ORDER` se encuentra dentro de asteriscos para mostrar que es una clave primaria. Los campos `PRODUCT NUMBER`, `DESCRIPTION`, `NUMBER ORDERED`, `SUPPLIER NUMBER`, `SUPPLIER NAME` e `ISO`, se enmarcan dentro de unos paréntesis internos para indicar que son campos dentro de un grupo de repeticiones. Cabe mencionar que el campo `PRODUCT NUMBER` también se encuentra dentro de asteriscos, ya que actúa como clave primaria del grupo de repeticiones.

### Primera Forma Normal

Una tabla se encuentra en su primera forma normal ("1NF" del inglés "First Normal Form") si no contiene un grupo de repeticiones. Para convertir un diseño desnormalizado a 1NF, la primera clave de la tabla debe expandirse para incluir la clave primaria del grupo de repeticiones.

    ORDER (*ORDER*, DATE, *PRODUCT NUMBER*, DESCRIPTION, NUMBER ORDERED, SUPPLIER NUMBER, SUPPLIER NAME, ISO)

Cuando se elimina el grupo de repeticiones, aparecen registros adicionales; uno para cada combinación de un pedido especifico y un producto especifico. El resultado son más registros pero con un diseño más simple. También hay que notar que la clave primaria, en el diseño 1NF, es la combinación de los dos campos: `ORDER` y `PRODUCT NUMBER`.

### Segunda Forma Normal

Para comprender la segunda forma normal ("2NF" del inglés "Second Normal Form") hay que entender el concepto de dependencias funcionales. Por ejemplo, el campo **A** es funcionalmente dependiente del campo **B** si el valor de **A** depende de **B**. Por ejemplo, en la anterior "1NF" el valor de `DATE` es funcionalmente dependiente de `ORDER`; porque para un número de pedido especifico, sólo puede existir una fecha. En contraste, la descripción del producto no es dependiente del número de pedido. Para un número de pedido especifico, pueden existir muchas descripciones de productos (una para cada producto dentro del pedido).

Un diseño de tabla se encuentra en 2NF si está en 1NF y todos los campos, que no son parte de la clave primaria, sean funcionalmente dependientes de (toda) la clave primaria. Si algunos de los campos en la tabla 1NF depende solo de una parte de los campos de una clave primaria combinada (y no de todos), entonces la tabla no se encuentra en 2NF.

Examinemos el diseño 1NF de la tabla `ORDER`. Recordemos que la clave primaria es la combinación del número de pedido y el número de producto. El campo `NUMBER ORDER` depende de toda la clave primaria porque se refiere a un número de producto especifico y a un número de pedido especifico. En contraste, el campo `DATE` depende del número de pedido, que solo es una parte de la clave primaria. De forma similar, el campo `DESCRIPTION` depende del número de producto, que también es parte de la clave primaria. Debido a que algunos campos no dependen de toda la clave primaria, el diseño no se encuentra en 2NF.

Existe un proceso estándar para convertir una tabla de 1NF a 2NF. El objetivo es el de desglosar la tabla original en dos o más tablas y reasignar los campos para que cada campo, que no sea una clave primaria, dependa de toda la clave primaria de la tabla en la que es asignado.

1. Crear y nombrar una tabla separada para cada campo de la clave primaria.

        ORDER (*ORDER*, ...)
        PRODUCT (*PRODUCT NUMBER*, ...)

2. Crear una nueva tabla para cada posible combinación de los campos de la clave primaria original.

        ORDER LINE (*ORDER*, *PRODUCT NUMBER*)

3. Estudiar las nuevas tablas y ubicar cada campo con la clave primaria apropiada, que es la clave con la cual tiene una dependencia funcional. Cuando todos los campos hayan sido reubicados, eliminar las tablas que no hayan recibido ningún campo. Las tablas resultantes serán la versión 2NF de la tabla original.

        ORDER (*ORDER*, DATE)
        PRODUCT (*PRODUCT NUMBER*, DESCRIPTION, SUPPLIER NUMBER, SUPPLIER NAME, ISO)
        ORDER LINE (*ORDER*, *PRODUCT NUMBER*)

¿Por qué es importante ir de un diseño 1NF a un diseño 2NF? A continuación se listan cuatro problemas existentes en el diseño 1NF pero que no se encuentran en el diseño 2NF:

1. Considerar el trabajo necesario para cambiar la descripción de un producto en particular.
2. Las tablas 1NF pueden contener datos inconsistentes. Debido a que se debe introducir la descripción del producto en cada registro, nada previene que un producto tenga diferentes descripciones en distintos registros.
3. Agregar un nuevo producto es un problema. Ya que la clave primaria debe incluir un número de pedido y un número de producto, se necesitan ambos valores para poder agregar un registro.
4. Eliminar un producto también es un problema. Por una razón similar al punto anterior.

### Tercera Forma Normal

Una regla de oro popular es que un diseño está en su tercera forma normal ("3NF" del inglés "Third Normal Form") si cada campo que no sea una clave primaria depende de la clave, toda la clave y nada más que la clave. Un diseño 3NF evita la redundancia y los problemas de integridad de datos que pueden aún existir en el diseño 2NF.

Continuando con el ejemplo de los pedidos, ahora revisaremos el diseño de la tabla `PRODUCT`.

La tabla `PRODUCT` esta en 1NF porque no tiene grupos de repeticiones. También está en 2NF porque la clave primaria es un único campo. Pero la tabla tiene cuatro potenciales problemas:

1. Para cambiar el nombre de un proveedor, cada registro donde aparezca deberá actualizarse.
2. El diseño 2NF permite que un proveedor tenga diferentes nombres o estados ISO en diferentes registros.
3. Debido a que el nombre del proveedor se referencia desde la tabla `ORDER`, es necesario crear un registro de pedido ficticio cuando haya que ingresar un proveedor que aún no ha recibido pedidos.
4. Si se borran todos los pedidos de un proveedor, se perderá el nombre y número de éste proveedor.

Éstos potenciales problemas son causados porque el diseño no se encuentra en 3NF. Un diseño de tabla está en 3NF si está en 2NF y todo campo que no sea clave **no depende** de otro campo que no sea clave.

La tabla `PRODUCT` no está en 3NF porque dos campos que no son clave (`SUPPLIER NAME` e `ISO`) dependen de otro campo que no es clave (`SUPPLIER NUMBER`). Para convertir la tabla a 3NF, todos los campos de la tabla 2NF que dependen de un campo no clave deben eliminarse y reubicarse en una nueva tabla que use el campo no clave como clave primaria. En el ejemplo de `PRODUCT`, `SUPPLIER NAME` e `ISO` deben removerse e incluirse en una nueva tabla que use a `SUPPLIER NUMBER` como clave primaria. El diseño 3NF divide a la versión 2NF en dos tablas 3NF separadas:

    PRODUCT (*PRODUCT NUMBER*, DESCRIPTION, SUPPLIER NUMBER)
    SUPPLIER (*SUPPLIER NUMBER*, SUPPLIER NAME, ISO)


7 Códigos
---------

Un código es un conjunto de números o letras que representan un elemento de datos. Los códigos pueden usarse para simplificar los formatos de datos, de entrada y de salida.

### Revisión de Códigos

Debido a que los códigos pueden representar datos, se encuentran constantemente en la vida cotidiana. Por ejemplo, los números de estudiantes son un código único para identificar estudiantes en un sistema de registro escolar. Tres estudiantes con el mismo nombre pueden ser inscriptos en la misma escuela, pero sólo uno de ellos tendrá el código `1234`. Otro ejemplo común es el código postal.

Los códigos pueden usarse de distintas maneras. Ya que los códigos son más cortos que los datos a los que representan, reducen espacio de almacenamiento y costos, reducen los tiempos de transmisión de datos y los tiempos de edición.

Finalmente, los códigos pueden reducir los errores de la entrada de datos en situaciones donde los códigos son más fáciles de recordar e ingresar en lugar de los datos a los que representan.

### Tipos de Códigos

1. CÓDIGO DE SECUENCIA: Son números o letras asignados en un orden especifico. Los códigos de secuencia no contienen otra información que la indicación del orden de entrada en el sistema.
2. CÓDIGO DE BLOQUE DE SECUENCIA: Se usan bloques de números para diferentes clasificaciones.
3. CÓDIGO ALFABÉTICOS: Se usan letras del alfabeto para distinguir un elemento de otro, basados en una categoría, una abreviación o un valor fácil de recordar, llamado código mnemotécnico.
4. CÓDIGO DE DÍGITO SIGNIFICATIVO: Se usan para distinguir elementos al usar una serie de sub-grupos de dígitos.
5. CÓDIGO DE DERIVACIÓN: Combina los datos desde diferentes atributos o características del elemento.
6. CÓDIGO CIFRADO: Se usa una palabra clave para cifrar un número.
7. CÓDIGO DE ACCIÓN: Indica que acción se debe realizar con el elemento asociado.

### Diseño de Códigos

* CÓDIGOS CONCISOS: No crear códigos que sean más largos que lo necesario.
* PERMITIR LA EXPANSIÓN: Un sistema de códigos debe permitir un crecimiento razonable en el número de códigos asignados.
* MANTENER LOS CÓDIGOS ESTABLES: El cambio de códigos puede generar problemas de consistencia y requerir la actualización de los datos.
* LOS CÓDIGOS DEBEN SER ÚNICOS: Para que los códigos de identificación tengan sentido, éstos deben ser únicos.
* USAR CÓDIGOS QUE SE PUEDAN ORDENAR: Si, por ejemplo, usando códigos de tres dígitos ubicamos un tipo de datos en el rango de códigos de 0 a 99y  otro tipo de datos en el rango de 100 a 199; al ordenar los registros por el código en forma ascendente, también se estaría clasificando el resultado por tipos de datos.
* USAR UNA ESTRUCTURA SIMPLE.
* EVITAR CONFUSIONES: Es fácil confundir el número cero (0) con la letra 'o' mayúscula (O).
* QUE LOS CÓDIGOS TENGAN SIGNIFICADO: Los códigos deben ser fácil de recordar, amigables, convenientes y fácil de interpretar.
* USAR UN CÓDIGO PARA UN SOLO PROPÓSITO: No usar un código para clasificar atributos que no estén relacionados.
* MANTENER LA CONSISTENCIA DE LOS CÓDIGOS: Usar el mismo esquema de códigos a través de diferentes sistemas.


8 Almacenamiento y Acceso de Datos
----------------------------------

### Técnicas y Herramientas

* ALMACÉN DE DATOS: Las grandes firmas mantienen muchas bases de datos, las cuales pueden o no estar vinculadas en una estructura general. Para garantizar un acceso rápido a la información, las compañías usan paquetes de software que organizan y almacenan los datos en una configuración especial llamada "almacén de datos" (en inglés "data warehouse"). Un almacén de datos es una colección integrada de datos que pueden incluir información aparentemente no relacionada, sin importar donde se almacene en la compañía. Debido a que puede enlazar varios sistemas informáticos y bases de datos, el almacén de datos provee una vista corporativa para dar soporte al análisis de gestión y la toma de decisiones.
* PROCESAMIENTO DE DATOS: El software de procesamiento de datos busca patrones de datos significativos y relacionados. Por ejemplo, éste tipo de software podría ayudar a una firma de productos de consumo a identificar potenciales clientes basados en sus compras anteriores. La información sobre el comportamiento de los clientes es muy valiosa, pero al mismo tiempo el procesamiento de datos trae consigo inquietudes relacionadas con la ética y la privacidad.

### Almacenamiento Físico contra Almacenamiento Lógico

Es importante entender la diferencia entre el almacenamiento físico y el almacenamiento lógico. El almacenamiento lógico se refiere a los datos que un usuario puede ver, entender y acceder, sin importar cómo o dónde se esta guardando la información. En contraste, el almacenamiento físico está estrictamente relacionado con el hardware, porque involucra los procesos de lectura y escritura de datos binarios a medios físicos como discos duros, CD/DVD o dispositivos de almacenamiento en red (entre otros).

### Codificación de Datos

Las computadoras representan los datos como bits (abreviación de "dígitos binarios", en inglés "binary digits") que tienen sólo dos valores posibles: 1 y 0. Las computadoras ven a los grupos de bits como código digital que puede ser transmitido, recibido y almacenado.

* EBCDIC, ASCII y BINARIO: EBCDIC y ASCII requieren ocho bits (o un byte) para cada letra. Comparado con los formatos basados en letras, el formato binario ofrece un método de almacenamiento más eficiente porque representa los números como valores binarios, en lugar de dígitos numéricos codificados.
* UNICODE: Éste es un estándar de codificación reciente que usa dos bytes por letra, en lugar de uno. Éste sistema expandido le permite al Unicode representar más de 65.000 letras plurilingües. Debido a que virtualmente soporta todas las lenguas, el Unicode se convirtió en un estándar global.
* ALMACENAMIENTO DE FECHAS: ¿Cual es la mejor forma de guardar una fecha? La respuesta depende en cómo se muestren las fechas y si serán usadas dentro de cálculos de fechas. A finales del siglo XX, muchas firmas que usaban sólo dos dígitos para representar el año se enfrentaron a un gran problema llamado Y2K.


9 Control de Datos
------------------

De la misma forma que es importante asegurar la parte física del sistema, el control de archivos y base de datos debe incluir todas las medidas necesarias para asegurar que el almacenamiento de datos es correcto, completo y seguro. El control de archivos y bases de datos también está relacionado con las técnicas de entrada y salida que se describieron antes.

Para un correcto mantenimiento de datos, un DBMS bien diseñado debe proveer características de control y seguridad; incluyendo sub-esquemas, contraseñas, cifrado, auditoría de archivos de seguimiento y procedimientos de copias de respaldo y recuperación de las mismas. La principal responsabilidad de los analistas es la de asegurar que las características del DBMS sean usadas correctamente.
