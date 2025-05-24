Implementación de Sistemas
==========================


1 Seguro de Calidad
===================

Al realizar rigurosos controles se puede detectar errores durante la etapa de implementación, pero es mucho menos costoso corregir los errores en el anterior proceso de desarrollo. El objetivo principal del seguro de calidad ("QA" del inglés "Quality Assurance") es el de evitar problemas o identificarlos lo antes posible. Una calidad pobre puede ser el resultado de requerimientos imprecisos, problemas de diseño, errores de programación, documentación defectuosa y controles ineficientes.

### Ingeniería de Software

La ingeniería de software es la disciplina de aplicar los principios de ingeniería a la creación de aplicaciones complejas y duraderas. Es una amalgama de personas, procesos y tecnologías. La ingeniería de software es mucho más amplía que solo el desarrollo. Incluye cinco áreas de actividades técnicas: requerimientos, diseño, construcción, control y mantenimiento.

El Instituto de Ingeniería de Software ("SEI" del inglés "Software Engineering Institute") es líder en ingeniería de software y provee estándares de calidad y procedimientos sugeridos para el desarrollo de software y el análisis de sistemas. El primer objetivo del SEI es el de encontrar métodos de desarrollo de software que sean mejores, más rápidos y económicos. Para alcanzar ésta meta, desde 1987 a 1997, el SEI diseño un conjunto de estándares de desarrollo de software que se usan como referencia, los cuales se llaman Modelo de Madurez de Capacidades ("CMM" del inglés "Capability Maturity Model").

En el 2002 el SEI estableció un nuevo modelo, llamado Integración de Modelos de Madurez de Capacidades ("CMMI" del inglés "Capability Maturity Model Integration"), que integra el desarrollo de software y sistemas en un framework más grande.

### Ingeniería de Sistemas

La ingeniería de sistemas no solo construye sobre la ingeniería de software si no que también incluye otras partes del sistema general, como el hardware, las redes y las interfaces. Organizaciones como la INCOSE (International Council on Systems Engineering) y el Consejo de Sistemas IEEE (Institute of Electrical and Electronics Engineers) proveen orientación sobre las mejores prácticas y las tecnologías emergentes en la ingeniería de sistemas.

### Organización Internacional de Normalización

Junto con otros miles de productos y servicios, el software está contemplado por estándares de la Organización Internacional de Normalización ("ISO" del inglés "International Organization for Standardization").

Los estándares ISO incluyen todo desde símbolos reconocidos internacionalmente, hasta el sistema de numeración ISBN. Además, la ISO busca ofrecer un consenso global de lo que constituye buenas prácticas de administración que pueden ayudar a las firmas a entregar consistentemente productos y servicios de alta calidad, incluyendo al software.

En el 2014, la ISO actualizó un conjunto de guías, llamadas ISO 9000-3:2014, que proveyeron un framework de QA para el desarrollo y mantenimiento del software.


2 Desarrollo de Aplicaciones
============================

El desarrollo de aplicaciones es el proceso de construcción de programas y módulos de código que sirven cómo cimientos del sistema informático. Sin importar el método, el objetivo es el de trasladar el diseño en un programa y módulos de código que funcionen correctamente.

### Revisión del Diseño del Sistema

* INGENIERÍA DE REQUERIMIENTOS: Se enfoca en el modelado de requerimientos y cómo usar los Diagramas de Descomposición Funcional ("FDD" del inglés "Functional Decomposition Diagrams") para desglosar complejas operaciones de negocios en unidades o funciones más pequeñas.
* MODELADO DE DATOS Y PROCESOS: Se enfoca en el modelado estructurado de datos y procesos y en los diagramas de flujos de datos ("DFD"). También se discute el desarrollo de descripciones de procesos, para las primitivas funcionales, que documenten la lógica de negocios y los requerimientos de procesamiento.
* MODELADO DE OBJECTOS: Se enfoca en el modelo OO de un sistema nuevo que incluye diagramas de usos de caso, diagramas de clases, diagramas de secuencias, diagramas de transición de estados y diagramas de actividades.
* ESTRATEGIAS DE DESARROLLO: Se enfoca en la selección de una estrategias de desarrollo.
* DISEÑO DE INTERFAZ DE USUARIO: Se enfoca en diseñar la interfaz de usuario.
* DISEÑO DE DATOS: Se enfoca en las cuestiones del diseño de datos, analizando las relaciones entre entidades de sistemas y la elaboración de diagramas de entidad-relación ("ERD").
* ARQUITECTURA DE SISTEMAS: Se enfoca en las consideraciones generales de la arquitectura del sistema.

Todo éste conjunto de tareas produce un diseño general y un plan para la implementación física.

### Tareas del Desarrollo de Aplicaciones

Para éste punto, si se usaron los métodos estructurados o OO durante el diseño del sistema, se puede comenzar con el proceso de trasladar el diseño a una aplicación funcional. Si se ha usado un método de desarrollo ágil, el desarrollo comienza con la planificación del proyecto, seguido del armado de las bases del sistema, el equipo y la interacción con los clientes.

* MÉTODOS TRADICIONALES: La creación de un nuevo sistema requiere una planificación minuciosa. Luego de que se establezca toda la estrategia, se deben diseñar, codificar, probar y documentar los módulos individuales.
* MÉTODOS ÁGILES: Si se decide utilizar un método ágil, comenzará una intensa comunicación y colaboración entre el equipo IT y los usuarios o clientes. El objetivo es el de crear el sistema a través de un proceso iterativo de planeamiento, diseño, codificación y testeo. Los proyectos ágiles usan varios modelos iterativos e incrementales, incluyendo la Programación Extrema ("XP" del inglés "Extreme Programming").

### Herramientas de Desarrollo de Sistemas

Cada enfoque de desarrollo de sistemas tiene su propio conjunto de herramientas que funcionan particularmente bien para éste método. Por ejemplo, el desarrollo estructurado recae profundamente en los DFD y diagramas de estructuras; los métodos OO usan un surtido de diagramas UML, incluyendo diagramas de casos de uso, clases, secuencias y estados de transición; y los métodos ágiles tienden a usar espirales u otros modelos iterativos.


3 Desarrollo Estructurado
=========================

El desarrollo estructurado de aplicaciones usualmente involucra un enfoque "de arriba hacia abajo", el cual procede desde un diseño general hasta una estructura detallada. Luego de que el analista de sistemas documente los requerimientos del sistema, se desglosará el sistema en subsistemas y módulos en un proceso llamado **fraccionamiento** (en inglés "partitioning"). Éste enfoque también es llamado diseño modular y es similar a construir un conjunto de niveles de DFDs. Al asignar los módulos a distintos programadores, se puede proceder con el desarrollo de múltiples áreas al mismo tiempo (en paralelo).

### Diagramas de Estructuras

Los diagramas de estructuras muestran los módulos del programa y la relación entre ellos. Un diagrama de estructuras consiste en rectángulos que representan los módulos del programa, con flechas y otros símbolos que proveen de información adicional.

Normalmente existe un módulo de alto nivel, llamado módulo de control, que dirige a los módulos de bajo nivel, llamados módulos subordinados. Los símbolos que se listan a continuación representan acciones o condiciones.

* MÓDULO: Los módulos son representados por rectángulos. Cuando un rectángulo tiene lineas verticales a sus costados, significa que es una librería. Los módulos de librerías representan código reusable que puede ser invocado desde más de un punto del diagrama.
* PAREJA DE DATOS: Una flecha con un circulo vacío representa una pareja de datos. Una pareja de datos muestra datos que un módulo le pasa a otro módulo.
* PAREJA DE CONTROL: Una flecha con un circulo relleno representa una pareja de control. Una pareja de control muestra un mensaje, también llamado bandera de estado (en inglés "status flag"), que un módulo le envía a otro módulo. Los módulos usan los flags para señalar una condición o acción especifica a otro módulo.
* CONDICIÓN: Una linea con un rombo (diamante) en uno de sus extremos representa una condición. Una linea de condición indica que, dependiendo de una condición especifica, un módulo de control determina a cual de sus módulos subordinados llamará.
* BUCLE: Una flecha curva representa un bucle. Un bucle indica que se repetirán uno o más módulos.

### Cohesión y Acoplamiento

La cohesión y el acoplamiento son herramientas importantes para evaluar el diseño general. Como se explicará en las siguientes secciones, es deseable de tener módulos que tengan una alta cohesión y un bajo acoplamiento. De otra manera, el mantenimiento del sistema se vuelve más costoso debido a las dificultades de realizar cambios.

La cohesión mide el alcance y las características de procesamiento de un módulo. Un módulo que realiza una sola función o tarea tiene un algo grado de cohesión, lo cual es deseable. Porque se enfoca en una sola tarea, un módulo cohesivo es mucho más fácil de codificar y reusar. Si un módulo tiene que ejecutar muchas tareas, se requerirá un código más complejo y será más difícil de crear y mantener. Para hacer a un módulo más cohesivo, hay que dividirlo en unidades más separadas, cada una con una única función.

El acoplamiento describe el grado de interdependencias entre los módulos. Los módulos independientes están débilmente acoplados, lo cual es deseable. Los módulos débilmente acoplados son más fáciles de mantener y modificar, ya que la lógica en un módulo no afectara a otros módulos. Si los módulos están fuertemente acoplados, un módulo estará enlazado con la lógica interna que contenga otro módulo.

### Dibujando un Diagrama de Estructura

Si, durante el diseño del sistema, se uso un método de análisis de estructura, los diagramas de estructuras se basarán en los DFDs creados durante el modelado de datos y procesos.

* PASO 1: REVISAR LOS DFDs
* PASO 2: IDENTIFICAR LOS MÓDULOS Y LAS RELACIONES
* PASO 3: AGREGAR LAS PAREJAS DE DATOS, PAREJAS DE CONTROL, ITERACIONES Y CONDICIONES

En éste punto, el diagrama de estructura está listo para un análisis minucioso. Cada proceso, elemento de dato o método de objeto deberá ser controlado para asegurar que el diagrama refleja toda la documentación previa y que la lógica es correcta. Todos los módulos deben estar fuertemente cohesionados y débilmente acoplados.


4 Desarrollo Orientado a Objetos
================================

El análisis OO hace más fácil el trasladar un modelo de objetos hacia un lenguaje de programación OO. Éste proceso es llamado Desarrollo Orientado a Objetos ("OOD" del inglés "Object-Oriented Development").

### Características del Desarrollo Orientado a Objetos

Cuando se implementa un diseño estructurado, se usa un diagrama estructurado para describir la interacción entre módulos del programa. En contraste, cuando se implementa un diseño OO, las relaciones entre objetos ya existen. Debido a que la interacción de objetos se define durante el proceso de análisis OO, el mismo modelo de objetos representa la estructura de la aplicación.

Los objetos contienen los datos y la lógica del programa. Las instancias individuales de un objeto pertenecen a clases de objetos con similares características. La relación e iteración entre las clases se describen usando un diagrama de clases. El diagrama de clases incluye los atributos de la clase (que describen las características) y los métodos (que representan la lógica del programa).

En adición al diagrama de clases, los programadores reciben una visión de la iteración de los objetos al usar los diagramas de relaciones de objetos que fueron desarrollados durante el procesos de análisis OO.

### Implementación del Diseño Orientado a Objetos

Cuando un programador traduce un diseño OO en una aplicación, analiza las clases, atributos, métodos y mensajes que están documentados en el modelo de objetos. Durante éste proceso, el programador realiza todas las actualizaciones y revisiones necesarias al diagrama de clases, diagrama de secuencias, diagramas de transición de estados y diagramas de actividad.

### Cohesión y Acoplamiento Orientado a Objetos

Los principios de cohesión y acoplamiento también se aplican en el desarrollo de aplicaciones OO. Las clases deben estar acopladas lo menos posible (independiente de otras clases). Así mismo, los métodos de los objetos también tienen que estar débilmente acoplados (independientes de otros métodos) y fuertemente cohesionados (que ejecutan acciones estrechamente relacionadas). Al seguir estos principios, las clases y los objetos serán más fáciles de entender y editar.


5 Desarrollo Ágil
=================

El desarrollo ágil es un método de desarrollo de sistemas distintivamente diferente. Comparte varios de los pasos encontrados en el desarrollo tradicional pero usa un proceso altamente iterativo. El equipo de desarrollo está en constante comunicación con el usuario principal, al cual se lo llama cliente, dándole forma al sistema para que cumpla con las especificaciones de éste. Al desarrollo ágil se lo nombra de ésta manera porque está basado en un proceso de desarrollo ágil y rápido que se adapta fácilmente a los cambios. El desarrollo ágil se enfoca en equipos pequeños, una constante y fluida comunicación e iteraciones de rápido desarrollo.

### Programación Extrema

XP es un método de desarrollo ágil. Es un enfoque iterativo, donde un equipo de usuarios y desarrolladores se sumergen en el desarrollo de sistemas. Los partidarios de XP enfatizan valores como simplicidad, comunicación, retroalimentación, respeto y valor. Para obtener el éxito se requiere un compromiso fuerte al proceso, soporte corporativo y un equipo de miembros dedicados.

XP usa un concepto llamado programación en pareja (en inglés "pair programming"). En la programación en pareja, dos programadores trabajan en la misma tarea usando la misma computadora; uno "conduce" (programa) mientras que el otro "navega" (observa). El espectador examina el código de una forma estratégica para observar el "bosque", mientras que el conductor se enfoca en los "árboles" que tiene en frente de él. Ambos programadores continuamente discutirán sus ideas a través del proceso.

Otro concepto importante de XP es que las pruebas unitarias (en inglés "unit tests") se diseñan antes de que se escriba el código. Éste método de desarrollo basado en pruebas ("TDD" del inglés "Test Driven Development") se enfoca desde el principio en los resultados finales y previene que los programadores se desvíen de sus metas.

Anteriormente, hemos hablado de Scrum. Dentro del desarrollo ágil, Scrum es un marco de trabajo que se centra en la gestión de proyectos y la organización del equipo. Por otro lado, XP (Extreme Programming / Programación Extrema) enfatiza las prácticas técnicas y la calidad del código. Por lo tanto, podemos decir que ambas metodologías son complementarias en lugar de ser competidoras.

### Historias de Usuarios

Una historia de usuario (en inglés "User Story") es una definición de requerimiento simple y corta. Los programadores revisan las historias de usuarios para determinar los requerimientos, las prioridades y el alcance del proyecto.

Las historias de usuarios no entran en detalles técnicos y son tan cortas que usualmente se escriben en fichas (pequeñas tarjetas). A cada historia de usuario se le asigna una prioridad dada por el cliente, de tal forma que se puedan clasificar los requerimientos. Además, los programadores le asignan un puntaje a cada historia de usuario que indique la dificultad de implementación estimada.

### Iteraciones y Lanzamientos

El equipo también tiene que desarrollar un plan de lanzamiento, que especifique cuando se implementarán las historias de usuario y el tiempo de los lanzamientos. Las historias de usuario se implementan en una serie de ciclos de iteraciones. Cada ciclo de iteración incluye planificación, diseño, codificación y los controles de una o más características basadas en las historias de usuarios. Al principio de cada ciclo de iteración, que normalmente es de dos semanas, el equipo realiza una reunión de planeamiento de iteración para desglosar las historias de usuarios en tareas especificas que se asignan a los miembros del equipo. A medida que se agregan nuevas historias de usuarios o características, el equipo revisa y modifica el plan de lanzamiento.


6 Codificación
==============

La codificación es el proceso de transformar la lógica del programa en instrucciones especificas que el sistema computacional pueda ejecutar. Al trabajar desde un diseño especifico, el programador usa un lenguaje de programación para transformar la lógica del programa en instrucciones de código. Un solo programador puede crear un programa pequeño, mientras que los programas grandes normalmente se dividen en módulos donde varios individuos o grupos pueden trabajar simultáneamente.


7 Pruebas
=========

Luego de la codificación, el programador debe probar (en inglés "test") cada programa para asegurarse que funciona correctamente. Luego, los programas se prueban en grupos y finalmente el equipo de desarrollo debe probar el sistema completo.

### Pruebas Unitarias

A las pruebas de un módulo o programa individual se las llama pruebas unitarias (en inglés "Unit Testing"). El objetivo es el de identificar y eliminar los errores de ejecución que pueden causar que el programa termine de forma anormal y los errores de lógica que pueden haber sido pasados por alto durante la revisión de código (en inglés "Code Review"), donde deberían identificarse los errores de lógica.

### Pruebas de Integración

A las pruebas que se realizan sobre dos o más programas, donde dependen unos de otros, se la llama pruebas de integración (en inglés "Integration Testing"). El probar los programas independientemente no garantiza que los datos que se pasan entre ellos sean correctos. Sólo al ejecutar una prueba de integración sobre el conjunto de programas se puede asegurar que los programas funcionan correctamente en conjunto. Los analistas de sistemas usualmente desarrollan los datos que se usaran en las pruebas de integración. Como en todas las formas de pruebas, las de integración deben considerar tanto las situaciones normales como las inusuales.

### Pruebas de Sistemas

Luego de completar las pruebas de integración, se ejecuta la prueba del sistema (en inglés "System Testing"), la cual involucra a todo el sistema informático. Una prueba de sistema incluye todas las posibles situaciones de procesamiento y trata de asegurar a los usuarios, desarrolladores y la gerencia que el programa cumple con todas las especificaciones y que todas las características necesarias fueron incluidas.

Un resultado positivo de la prueba del sistema es la clave para aprobación de los usuarios y la gerencia, y es por lo cual a las pruebas de sistemas se las suele llamar pruebas de validación (en inglés "Acceptance Tests").

Las pruebas pueden ser una forma económicamente efectiva de proveer un producto de calidad. Todo error encontrado durante la etapa de pruebas, elimina potenciales gastos y problemas operativos. Sin embargo, ningún sistema está 100% libre de errores. A menudo los errores no son detectados hasta que el sistema se pone operativo. Los errores que afecten la integridad o precisión de los datos deben ser corregidos de inmediato. Los errores menores, como errores de ortografía en la UI, pueden corregirse luego.


8 Documentación
===============

La documentación describe un sistema informático y ayuda a los usuarios, los administradores y al personal IT que deben interactuar con éste. Una documentación precisa ayuda a disminuir los tiempos muertos del sistema, reducir costos y acelerar las tareas de mantenimiento.

### Documentación del Programa

La documentación del programa describe las entradas, las salidas y la lógica de procesamiento para todos los módulos del programa. El proceso de documentar el programa comienza durante la fase del análisis del sistema y continúa durante la implementación del sistema. En el comienzo del SDLC, los analistas preparan toda la documentación, como las descripciones de procesos y las disposiciones de los reportes. Ésta documentación guía a los programadores, quienes construyen módulos que están respaldados por comentarios internos y externos y descripciones que permiten su fácil entendimiento y mantenimiento.

### Documentación del Sistema

La documentación del sistema describe las funciones del sistema y cómo se implementan. La documentación del sistema incluye las entradas del diccionario de datos, los DFDs, los modelos de objetos, las disposiciones de pantallas, los documentos fuentes y los requerimientos del sistema que iniciaron el proyecto. La documentación del sistema es un material de referencia necesaria para los programadores y analistas, quienes deben dar soporte y mantenimiento al sistema. La mayoría de la documentación de sistema es preparada durante las fases de análisis de sistemas y diseño de sistemas.

### Documentación de Operaciones

Si el entorno del sistema informático involucra servidores centrales o mainframe, el analista debe preparar la documentación para el grupo IT que de soporte a las operaciones centralizadas. La documentación de operaciones contiene toda la información necesaria para el procesamiento, la distribución online y salida de datos.

### Documentación de Usuarios

La documentación de usuarios consiste en instrucciones e información para los usuarios que interactuarán con el sistema. Incluye manuales de usuarios, ayudas de pantallas y tutoriales online.

### Documentación Online

Hoy en día, la mayoría de los usuarios prefieren la documentación online, que provee ayuda inmediata cuando tienen una pregunta o encuentran un problema. Si el sistema incluirá documentación online, ésto tendrá que identificarse como un requerimiento del sistema. Si alguien más que los analistas creara la documentación, éstas personas o grupos necesitan involucrarse lo antes posible para familiarizarse con el software y comenzar a desarrollar la documentación y el material de soporte requeridos.


9 Instalación
=============

Luego de completar las pruebas del sistema, el resultado se presenta a la gerencia. Los resultados de las pruebas deben ser descriptos, se debe actualizar el estado de toda la documentación requerida y se debe resumir las entradas de los usuarios que participaron en las pruebas del sistema. También se debería proveer un cronograma detallado, los costos estimativos y el personal requerido para hacer que el sistema quede operativo. Si las pruebas del sistema no producen problemas técnicos, económicos u operativos, la gerencia coordinará un horario para la instalación del sistema.

### Entornos Operativos y de Pruebas

Recordemos que un entorno, o plataforma, es una combinación especifica de hardware y software. Al entorno para las operaciones del sistema definitivo se lo llama entorno operativo o entorno de producción. Mientras que al entorno que usan los analistas y programadores para desarrollar y mantener programas se lo llama entorno de prueba.

Un entorno de pruebas para un sistema informático contiene copias de todos los programas, procedimientos y archivos de datos de pruebas. Antes de realizar cualquier cambio a un sistema operativo, el analista debe verificar éstos cambios en el entorno de pruebas y obtener la aprobación de los usuarios.

### Cambio de Sistema

El cambio de sistema es el proceso de colocar un sistema informático nuevo y retirar el sistema viejo. Los cambios pueden ser rápidos o lentos, ésto dependerá del método utilizado. Los cuatro métodos de cambios son traspaso directo, implementación en paralelo, implementación piloto e implementación por etapas. El traspaso directo es similar a tener un interruptor que instantáneamente cambia del sistema viejo al nuevo. La implementación en paralelo requiere que ambos sistemas se ejecuten simultáneamente por un periodo especifico. Éste es el método más lento. Los otros dos métodos, implementación piloto y por etapas, están entre medio del traspaso directo y la implementación en paralelo.

### Conversión de Datos

La conversión de datos es una parte importante del proceso de instalación del sistema. Durante la conversión de datos, los datos existentes son cargados en el nuevo sistema. Dependiendo del sistema, la conversión de datos puede hacerse antes, durante o luego de que el entorno operativo se encuentre completo. Un plan de conversión de datos debe desarrollarse tan pronto como sea posible y el proceso de conversión debe ser probado cuando se desarrolle el entorno de pruebas. Cuando un sistema nuevo remplace a un sistema existente, en lo posible, el proceso de conversión de datos debería automatizarse.

### Entrenamiento

Ningún sistema puede ser exitoso sin un entrenamiento adecuado, ya sea que se involucre software, hardware o manufactura. Un sistema informático exitoso requiere entrenamiento para los usuarios, los gerentes y el personal IT. Todo el esfuerzo del desarrollo del sistema puede depender de que tanto las personas entiendan (o no) el sistema y sepan como usarlo eficientemente.

### Tareas Post-Implementación

Una vez que el sistema nuevo se encuentre instalado y operativo, hay que realizar dos tareas adicionales:

* EVALUACIÓN POST-IMPLEMENTACIÓN: Luego de la implementación hay que evaluar la calidad general del sistema informático. La evaluación verifica que el nuevo sistema cumpla con los requerimientos especificados, con los objetivos de los usuarios y que produzca los beneficios anticipados.
* REPORTE FINAL A LA GERENCIA: Al final de cada fase del SDLC, se envía un reporte final a la gerencia y la fase de implementación del sistema no es la excepción. El reporte final para la gerencia marca el final del trabajo de desarrollo de sistemas.
