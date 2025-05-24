ANÁLISIS DE SISTEMAS 3/4
========================


Modelado de Objetos
===================

De la misma forma que el análisis estructurado, el análisis orientado a objetos es otra forma de representar y diseñar un sistema informático.


1 Análisis Orientado a Objetos
------------------------------

Las opciones más populares de desarrollo de sistemas son el análisis estructurado, el análisis orientado a objetos ("OO") y los métodos ágiles. La metodología OO es popular porque se integra fácilmente con lenguajes OO como PHP, Ruby, Python, C++, Java, etc. A los programadores también les gusta OO porque es modular, reusable y fácil de mantener.

El análisis OO describe un sistema informático al identificar cosas llamadas "objetos". Un objeto representa algo real como una persona, un lugar, un evento o una transacción. Por ejemplo, cuando un paciente saca un turno para ver a un médico, el paciente se representa como objeto, el doctor se representa como objeto y el mismo turno también se representa como objeto.

El análisis OO es un enfoque popular en el cual se ve al sistema desde el punto de vista de los objetos y de cómo funcionan e interactúan. El producto final de un análisis OO es un modelo de objetos, el cual representa el sistema informático en términos de objetos y conceptos OO.


2 Objetos
---------

Un objeto representa una persona, un lugar, un evento, una transacción o cualquier cosa que sea significativa para el sistema informático. Los DFD se crearon para tratar a los datos y procesos por separado. Sin embargo, los objetos contienen datos y procesos que afectan los datos a procesar.


3 Atributos
-----------

Un objeto tiene ciertos atributos, a los que podemos ver como características que describen al objeto. Si los objetos son similares a los "sustantivos", los atributos son similares a los "adjetivos" que describen las características de un objeto.

Los analistas de sistemas definen los atributos de los objetos durante el proceso del diseño del sistema. En un sistema OO, los objetos pueden **heredar** ciertos atributos de otros objetos.


4 Métodos
---------

Un objeto también tiene métodos, los cuales son tareas o funciones que el objeto ejecuta cuando recibe un mensaje para hacerlo. Por ejemplo, un auto ejecuta el método llamado "ENCENDER LIMPIAPARABRISAS" cuando se le manda un mensaje a través de la palanca del limpiaparabrisas y también puede "FRENAR" cuando se manda el mensaje al presionar el pedal de freno. Los métodos definen tareas especificas que los objetos pueden llevar a cabo. De la misma forma que los objetos son similares a los "sustantivos" y los atributos son similares a los "adjetivos", los métodos se parecen a los "verbos" que describen **qué** hacen los objetos y **cómo**.


5 Mensajes
----------

Un mensaje es un comando, que le dice al objeto, que tiene que ejecutar cierto método. Por ejemplo, el mensaje "JUNTAR LOS JUGUETES" le ordena al objeto "NIÑO" que realice todos los pasos necesarios para juntar los juguetes. El objeto "NIÑO" entiende el mensaje y ejecuta el método. Si se manda el mismo mensaje a dos objetos diferentes, se puede obtener resultados diferentes. Se llama "polimorfismo" al concepto en el cual un mensaje tiene diferentes significados con diferentes objetos.

Los objetos se pueden ver como cajas negras, porque los mensajes a los objetos disparan cambios dentro del mismo sin especificar cómo se llevan a cabo.

El concepto de caja negra es un ejemplo de encapsulamiento, que significa que todos los datos y métodos están auto-contenidos. Una caja negra no quiere o necesita interferencia externa. Al limitar el acceso a los proceso internos, los objetos previenen que su código interno sea modificado por otros objetos o procesos. El encapsulamiento le permite a los objetos ser usados como componentes modulares en cualquier parte del sistema, debido a que los objetos envían y reciben mensajes pero no alteran los métodos internos de otros objetos.

El diseño OO se implementa generalmente con lenguajes OO. La mayor ventaja de los diseños OO es que los analistas de sistemas pueden ahorrar tiempo y evitar errores al usar objetos modulares; y los programadores pueden trasladar el diseño a código, trabajando con módulos reusables que ya han sido testeados y verificados.


6 Clases
--------

Un objeto pertenece a un grupo (o categoría) llamado **clase**. Un objeto es una instancia de una clase y miembro especifico de ésta.

Todos los objetos que pertenecen a una clase comparten atributos y métodos en común. A una clase se la puede describir como un plano o una plantilla para todos los objetos de ésta clase. A los objetos de una clase se los puede agrupar en subclases, las cuales son categorías más especificas de la clase.


7 Relaciones entre Objetos y Clases
------------------------------------

Las relaciones permiten que los objetos se comuniquen e interactúen a medida que ejecutan funciones de negocios y transacciones requeridas por el sistema. Las relaciones describen qué es lo que los objetos necesitan saber sobre los otros, cómo responden los objetos a los cambios en otros objetos y los efectos de pertenecer a clases, superclases y subclases. Algunas relaciones son más fuertes que otras (de la misma forma que la relación entre familiares es más fuerte que la relación entre conocidos). A la relación más fuerte se la llama **herencia**. La herencia le perite a un objeto, llamado "hijo", obtener (heredar) uno o más de sus atributos de otro objeto llamado "padre".

Luego de haber identificado los objetos, las clases y las relaciones; se puede preparar un diagrama de relaciones de objetos para proporcionar una descripción general del sistema. Éste modelo es usado como guía para crear diagramas adicionales y también la documentación.


8 Lenguaje Unificado de Modelado
--------------------------------

De la misma manera que el análisis estructurado usa los DFDs para modelar datos y procesos, los analistas de sistemas usan el Lenguaje Unificado de Modelado ("UML" del inglés "Unified Modeling Language") para describir los sistemas OO. El UML usa un conjunto de símbolos para representar gráficamente varios componentes y relaciones del sistema. Si bien el UML puede ser usado para el modelado de procesos de negocios y el modelado de requerimientos, se usa principalmente para dar soporte al análisis de sistemas OO y desarrollar modelos de objetos.

### Modelado de Casos de Uso

Un caso de uso representa los pasos en funciones o procesos de negocios específicos. Una entidad externa, llamada actor, inicia el caso de uso al pedir al sistema que ejecute una función o proceso.

Hay que notar que el símbolo UML para los caso de uso es un óvalo con una etiqueta que describe la acción o evento. El actor se muestra como un monigote con una etiqueta que identifica el rol del actor. A la linea que va desde el actor al caso de uso se la llama asociación, porque vincula a un actor particular con un caso de uso.

Los casos de uso también pueden interactuar con otros casos de uso. Cuando el resultado de un caso de uso es incorporado por otro caso de uso, se dice que el segundo caso usa al primero. El UML indica la relación con una flecha que apunta al caso de uso que está en uso.

Para crear casos de uso, hay que comenzar revisando la información que se recolectó durante la fase de modelado de requerimientos. El objetivo es el de identificar a los actores y las funciones o transacciones que inician los actores. Para cada caso de uso, hay que elaborar una descripción de caso de uso en la forma de tabla. Una descripción de caso de uso incluye el nombre del caso de uso, el actor, una descripción, una lista de tareas y acciones requeridas que hay que seguir (paso a paso) para terminar exitosamente, una descripción de cursos de acción alternativos, pre-condiciones, post-condiciones y suposiciones.

Cuando se identifican los casos de uso, todas las transacciones relacionadas deben agruparse en un único caso de uso. Por ejemplo, cuando el cliente de un hotel reserva una habitación, el sistema de reserva bloquea una habitación, actualiza el pronostico de ocupación y envía una confirmación al cliente. Esos eventos son todos parte de un único caso de uso llamado (por ejemplo) "RESERVA DE HABITACIÓN" y las acciones especificas son las tareas (paso a paso) dentro del caso de uso.

### Diagramas de Casos de Uso

Un diagrama de caso de uso es un resumen visual de varios casos de uso relacionados dentro de un sistema o subsistema.

Cuando se crea un diagrama de caso de uso, el primer paso es el de identificar el límite del sistema, el cual se representa con un rectángulo. El límite del sistema muestra lo que se incluye en el sistema (dentro del rectángulo) y lo que no se incluye (fuera del rectángulo). Luego de identificar el límite del sistema, se ubican los casos de uso en el diagrama, se agregan los actores y las relaciones.

### Diagramas de Clases

Un diagrama de clases muestra las clases y relaciones de objetos involucrados en un caso de uso. Un diagrama de clase es un modelo lógico, de la misma forma que un DFD, el cual evoluciona en un modelo físico y finalmente se convierte en un sistema informático funcional. En el análisis estructurado, las entidades, los repositorios de datos y los procesos se transforman en estructuras de datos y código de programa. De manera similar, los diagramas de clases evolucionan en módulos de código, objetos de datos y otros componentes del sistema.

En un diagrama de clases, cada clase aparece como un rectángulo, con el nombre de la clase arriba, seguido por los atributos y métodos. Las lineas muestran las relaciones entre clases y tienen etiquetas que identifican la acción que relaciona dos clases. Para crear un diagrama de clase, hay que revisar el caso de uso e identificar las clases que participan en el proceso de negocio subyacente.

El diagrama de clases también incluye un concepto llamado cardinalidad, el cual describe cómo las instancias de una clase se relacionan con las instancias de otras clases.

### Diagramas de Secuencias

Un diagrama de secuencias es un modelo dinámico de un caso de uso, el cual muestra la interacción entre clases durante un periodo de tiempo especifico. El diagrama de secuencia documenta gráficamente el caso de uso al mostrar las clases, los mensajes y el tiempo de los mensajes. Los diagramas de secuencia incluyen símbolos que representan clases, lineas de vida, mensajes y bucles (repetición de bloques de código).

### Diagramas de Transición de Estado

La palabra "estado" hace referencia al estado actual del objeto. Un diagrama de transición de estado muestra como cambia un objeto de un estado a otro, dependiendo de los eventos que afectan al objeto. En el diagrama se deben documentar todos los posibles estados. Por ejemplo, una cuenta bancaria puede ser creada como "NUEVA", luego cambiar a cuenta "ACTIVA" y eventualmente terminar como cuenta "CERRADA"; otro posible estado podría ser "BLOQUEADA" si la misma se encuentra en revisión por cuestiones legales.

### Diagramas de Actividades

Un diagrama de actividades se parece a un diagrama de flujos horizontal que muestra las acciones y eventos a medida que ocurren. Los diagramas de actividad muestran el orden en el que las acciones toman lugar e identifica los resultados.

Los diagramas de secuencia, diagramas de transición de estado y diagramas de actividades son herramientas de modelado dinámico que pueden ayudar a los analistas de sistema a entender como se comportan los objetos e interactúan con el sistema.

### Modelado del Proceso de Negocio

En complemento a los diagramas de secuencia y diagramas de actividad, el modelado de procesos de negocio ("BPM" del inglés "Business Process Modeling") se puede usar para representar las personas, eventos e interacciones en un sistema. BPM funciona bien con el modelado de objetos, porque ambos métodos se enfocan en los actores y la forma en la que se comportan.


9 Herramientas
--------------

* [draw.io](https://github.com/jgraph/drawio)
* [Dia](https://gitlab.gnome.org/GNOME/dia/)
* [LibreOffice Draw](https://www.libreoffice.org/discover/draw/)
* [PlantUML](https://github.com/plantuml/plantuml)
* [Umbrello](https://apps.kde.org/umbrello/)
* [UMLet](https://github.com/umlet/umlet) 
* [Eclipse Papyrus](https://www.eclipse.org/papyrus/index.php)
* [UMLGraph](https://github.com/dspinellis/UMLGraph)
* [TikZiT](https://github.com/tikzit/tikzit)
* [ZenUML](https://github.com/ZenUml)
