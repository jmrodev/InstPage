ANÁLISIS DE SISTEMAS 1/4
========================


Ingeniería de Requerimientos
============================


1 Requerimientos del Sistema
----------------------------

Durante la primer parte de la fase del análisis de sistemas del SDLC, los analistas de sistemas deben identificar y describir todos los requerimientos del sistema. Un requerimiento de sistema es una característica o prestación que debe incluirse en un sistema informático para satisfacer los requerimientos del negocio y ser aceptable para los usuarios. Los requerimientos de sistema sirven como punto de referencia para medir la aprobación general del sistema terminado.

### Tipos de Requerimientos

Los requerimientos serán principalmente para los usuarios del sistema, en cuyo caso se los referencia como "definiciones de requerimientos". Los requerimientos también pueden ser para el equipo de ingeniería, en cuyo caso se los referencia como "especificaciones de requerimientos".

A los requerimientos de sistema también se los puede clasificar como:

* REQUERIMIENTO FUNCIONAL: Declaración de los servicios que provee el sistema.
* REQUERIMIENTOS NO-FUNCIONALES: Declaración de las restricciones del sistema operacional. También conocido como "atributos de calidad".

### Desafíos de los Requerimientos

* IMPRECISIÓN: A menudo, los requerimientos son imprecisos porque usualmente se representan usando el lenguaje natural. El lenguaje natural es expresivo, pero es propenso a malinterpretarse.
* ACUERDO: Uno de los principales problemas con los requerimientos es lograr que todos se pongan de acuerdo en el significado exacto de la descripción del requerimiento.
* ARRASTRE: Hay muchos factores sociales y de la organización que influyen en los requerimientos del sistema. Ésto es particularmente cierto para los proyectos de larga vida, donde el personal involucrado cambia a lo largo del tiempo.

### Consideraciones Adicionales

* ESCALABILIDAD: La escalabilidad se refiere a la habilidad del sistema de, en un futuro, poder manejar un incremento en las transacciones y en el volumen de negocios.
* SEGURIDAD: En la actualidad la seguridad es tan importante, para los sistemas conectados en red, que ha cambiado de "requerimiento no funcional" a "requerimiento funcional".
* COSTO TOTAL DE PROPIEDAD: Ademas de los costos directos, los desarrolladores de sistemas deben identificar y documentar todos los gastos indirectos que contribuyan al Costo Total de Propiedad ("TCO" del inglés "Total Cost of Ownership").


2 Técnicas basadas en Equipos
-----------------------------

La meta del departamento IT es la de entregar el mejor sistema informático que se pueda, al menor costo y tiempo posible. Para lograr mejores resultados, los desarrolladores de sistemas pueden ver a los usuarios como socios en el proceso de desarrollo. Una mayor intervención de los usuarios, usualmente conlleva a una mejor comunicación, un desarrollo más rápido y usuarios más satisfechos.

### Desarrollo de Aplicaciones Conjuntas

El Desarrollo de Aplicaciones Conjuntas ("JAD" del inglés "Joint Application Development") es una popular técnica de investigación que incorpora a los usuarios en el proceso de desarrollo como participantes activos.

* PARTICIPACIÓN DEL USUARIO: Los usuarios juegan una parte vital en el sistema informático y deberían participar completamente en el proceso de desarrollo.
* PARTICIPANTES Y ROLES: Un equipo JAD usualmente se reúne en el transcurso de días o semanas en una sala de conferencia o en un lugar externo (como un café). En cualquier caso, los participantes del equipo JAD deben estar aislados de las operaciones del día a día. El objetivo es el de analizar el sistema existente, obtener la información y expectativas de los usuarios y documentar los requerimientos de los usuarios para el nuevo sistema.
* VENTAJAS Y DESVENTAJAS: Comparado con los métodos tradicionales, JAD es más caro y puede resultar incómodo si el grupo es muy grande en relación al tamaño del proyecto. Cuando se usa adecuadamente, JAD puede resultar en una declaración de los requerimientos del sistema más precisa, una mejor comprensión de las metas comunes y un mayor compromiso con el éxito del nuevo sistema.

### Desarrollo Rápido de Aplicaciones

El Desarrollo Rápido de Aplicaciones ("RAD" del inglés "Rapid Application Development") es una técnica basada en equipos que acelera el desarrollo de sistemas informáticos y produce un sistema funcional. Como JAD, RAD usa un esquema de grupos pero va más allá. Mientras que el producto final de JAD es el modelo de requerimientos, el producto final de RAD es un nuevo sistema informático.

El modelo RAD consiste en cuatro fases:

* PLANEAMIENTO DE REQUERIMIENTOS: La fase de planeamiento de requerimientos combina elementos de las fases de planificación de sistemas y análisis de sistemas del SDLC.
* DISEÑO DE USUARIO: Durante la fase de diseño de usuario, los usuarios interactúan con los analistas de sistemas y desarrollan modelos y prototipos que representen todos los procesos del sistema, las entradas y salidas.
* CONSTRUCCIÓN: La fase de construcción se enfoca en las tareas de desarrollo de la aplicación. Similar al SDLC, pero con participación de los usuarios.
* TRANSICIÓN: La fase de transición se parece a las tareas finales en la fase de implementación del SDLC, incluyendo la conversión de datos, pruebas, transición al nuevo sistema y entrenamiento de usuarios.

Comparado con los métodos tradicionales, todo el proceso está comprimido. Como resultado, el nuevo sistema se construye, entrega y se pone en operación en menos tiempo.

* OBJETIVOS: El objetivo principal de todos los enfoques RAD es el de reducir el tiempo y gastos del desarrollo al involucrar a los usuarios en todas las fases del desarrollo del sistema. Debido a que es un proceso continuo, RAD permite que el equipo de desarrollo pueda hacer rápidamente las modificaciones necesarias a medida que el diseño evoluciona.
* VENTAJAS Y DESVENTAJAS: La principal ventaja es que los sistemas se pueden desarrollar a mayor velocidad con un ahorro significativo de los gastos. Un riesgo es que el sistema puede funcionar bien en el corto tiempo, pero puede que no se cumplan los objetivos corporativos y a largo plazo. Otra potencial desventaja es que el acelerado tiempo de desarrollo deja menos tiempo para desarrollar los estándares de calidad, consistencia y diseño.

### Métodos Ágiles

Los métodos ágiles intentan desarrollar un sistema de manera incremental, al construir una serie de prototipos y ajustarlos constantemente a los requerimientos de los usuarios. A medida que avanza el proceso ágil, los desarrolladores revisan, extienden y combinan la primeras versiones en lo que será el producto final. Un esquema ágil incentiva una continua comunicación y retroalimentación y cada paso incremental está afectado por lo que se aprendió en el paso anterior.

Muchos desarrolladores ágiles prefieren no usar herramientas CASE y en su lugar usar pizarrones donde colocar y organizar notas en papel. Éste enfoque, creen quienes lo utilizan, refuerza la estrategia ágil: simple, rápida, flexible y orientada al usuario.

Scrum es una de las estrategias ágiles, cuyo nombre proviene del Rugby. Las sesiones de scrum tienen unas pautas especificas que enfatizan los bloques de tiempo, la interacción y las actividades en equipo que resulten en un software para entregar. Un equipo ágil usa al scrum para pausar la actividad y permitir a los jugadores reajustar el plan de juego, que se mantiene efectivo hasta el próximo scrum.

* VENTAJAS Y DESVENTAJAS: Los métodos ágiles, o adaptados, son muy flexibles y eficientes al lidiar con el cambio. Sin embargo, existen algunos potenciales problemas. Los miembros del equipo necesitan tener un alto nivel de habilidades técnicas e interpersonales. La falta de estructura y documentación puede introducir factores de riesgo. El proyecto general puede estar sujeto a cambios significativos en alcance a medida que los requerimientos de usuario continúen evolucionando durante el proyecto.


3 Reuniendo Requerimientos
--------------------------

La recolección de requerimientos es el primer paso en el proceso de ingeniería de requerimientos. Éste paso también es conocido como obtención de requerimientos o investigación (recolección de información).

Ya sea que se trabaje solo o como parte de un equipo, durante la recolección de requerimientos, el analista de sistemas usará varias técnicas, incluyendo las entrevistas, revisión de documentos, observación, encuestas y cuestionarios, muestrarios e investigación.

Primero se debe identificar la información. Normalmente ésta actividad comienza al realizar una serie de preguntas.

Para obtener las respuestas a éstas preguntas, el analista desarrolla un plan de investigación, que implica responder a cinco preguntas familiares: ¿Quién?, ¿Qué?, ¿Cuándo?, y ¿Cómo? Para cada una de éstas preguntas, también se debería hacer una pregunta muy importante: ¿Por qué?

Hay una diferencia entre preguntar lo que se está haciendo y lo que se debería hacer. El analista de sistemas primero debe entender la situación actual. Recién entonces se podrá responder la pregunta a qué se debe hacer.


4 Recolectando Requerimientos por medio de Entrevistas
------------------------------------------------------

1. DETERMINAR LAS PERSONAS A ENTREVISTAR: Para tener una visión precisa, el analista debe seleccionar a las personas correctas para entrevistar y realizarles las preguntas correctas.
2. ESTABLECER LOS OBJETIVOS PARA LA ENTREVISTA: Los objetivos para la cesión deben ser establecidos. Primero, se deben determinar las áreas generales a discutir y luego se deben listar los puntos a recolectar. También es una buena idea solicitar ideas, sugerencias y opiniones durante la entrevista.
3. DESARROLLAR LAS PREGUNTAS DE LA ENTREVISTA: Crear una lista estándar de preguntas para la entrevista ayuda a mantener el foco, un lineamiento y evitar dispersiones innecesarias.
4. PREPARARSE PARA LA ENTREVISTA: Una preparación cuidadosa es esencial, ya que una entrevista es una reunión importante y no una conversación casual. Cuando se agenda la entrevista, hay que sugerir un día y hora específicos y hacerle conocer al entrevistado cuanto tiempo se espera que dure la entrevista. También, para recordar sobre la entrevista, es una buena idea el mandar un correo electrónico o realizar una llamada el día previo.
5. DIRIGIR LA ENTREVISTA: Se debe desarrollar un plan especifico para la reunión. Cuando se dirige la entrevista, se comienza con una introducción, se describe el proyecto y se explican los objetivos de la entrevista.
6. DOCUMENTAR LA ENTREVISTA: Si bien el tomar notas durante la entrevista tiene sus ventajas y desventajas, se debe mantener a un mínimo. Es una buena idea la de escribir algunas notas para recordar los puntos importantes luego de la entrevista, pero hay que evitar escribir todo lo que se haya dicho. Al escribir en exceso se distrae al entrevistado y no se le permite compenetrarse.
7. EVALUAR LA ENTREVISTA: Ademas de registrar la información obtenida de la entrevista, hay que tratar de identificar posibles parcialidades. Por ejemplo, un entrevistado que trata de proteger su propia área o función, puede proporcionar respuestas incompletas o abstenerse de brindar información voluntaria. O, un entrevistado con fuertes opiniones sobre el sistema presente o futuro, puede distorsionar la información. Algunos entrevistados pueden responder con buenas intenciones, aún cuando no tengan la experiencia necesaria para brindar información precisa.


5 Recolectando Requerimientos con otras Técnicas
------------------------------------------------

* REVISIÓN DE DOCUMENTACIÓN: La revisión de documentación puede ayudar al analista a entender cómo se supone que funciona el sistema actual. Hay que recordar que la documentación del sistema puede estar desactualizada.
* OBSERVACIÓN: La observación de los procedimientos operativos que se encuentran en uso, es otra técnica de investigación. Al observar el sistema en funcionamiento se obtiene mayor perspectiva y un mejor entendimiento de los procedimientos del sistema.
* ENCUESTAS Y CUESTIONARIOS: En los proyectos donde se desea obtener información de un gran numero de personas, los cuestionarios pueden ser una herramienta de gran ayuda. Los cuestionarios y encuestas son documentos que contienen un numero de preguntas estándar y pueden ser enviados a muchos individuos.
* ENTREVISTAS VS CUESTIONARIOS: Cuando se busca información de un grupo grande de personas, los cuestionarios son una herramienta de mucha ayuda. Por otro lado, si se requiere información detallada de un pequeño grupo de personas, se debería realizar una entrevista individual a cada una de las personas. ¿Qué método es mejor? Cada situación es diferente, hay que considerar el tipo de información que se quiere obtener, las restricciones de tiempo y los costos.
* TORMENTA DE IDEAS: La tormenta o lluvia de ideas (en inglés "brainstorming") es otro método popular para obtener información. Al usar éste método, un pequeño grupo de personas se reúnen para discutir sobre un tema, oportunidad o problema.
* MUESTREO: Cuando se estudia un sistema informático, se debe recolectar documentos del sistema actual usando un proceso llamado muestreo. Las muestras puede incluir registros, reportes, datos operativos, documentos de entrada de datos, resúmenes de quejas y peticiones de trabajo entre otras formas.
* INVESTIGACIÓN: La investigación es otra técnica de reconocimiento. La investigación incluye Internet, revistas y libros IT para obtener información de contexto, material y noticias técnicas sobre desarrollo y tendencias de la industria. También puede ayudar mucho, en la resolución de problemas, el atender reuniones de profesionales, seminarios y debates con otros profesionales IT.


6 Recolectando Requerimientos en Proyectos Ágiles
-------------------------------------------------

Al usar métodos ágiles en la captura de requerimientos, se usa una variación de entrevistas enfocadas en las "características" (en inglés "features"), historias de usuarios (en inglés "user stories"), escenarios y "guiones gráficos" (en inglés "storyboards").

* Una "feature", a veces llamada "épica" (en inglés "epic"), es una definición de alto nivel de un requerimiento.
* Las "user stories" representan requerimientos más detallados. Agrupándolos, un conjunto de "user stories" conforman una "feature".
* Un escenario es un ejemplo del mundo real de como interactuarán los usuarios con el sistema. El escenario describe una serie particular de pasos o eventos que deben ocurrir mientras se usa el sistema para una función especifica.
* El "storyboard" es una simple organización gráfica que ayuda a los analistas de sistemas a visualizar el estado del proyecto. El storyboard puede ser tan simple como una pared con notas adhesivas.


7 Representando los Requerimientos
----------------------------------

Los analistas deben documentar su trabajo acorde con los siguientes principios:

* Registrar la información tan pronto como se obtiene.
* Usar el método de registro más simple que se pueda.
* Realizar los registros de tal manera que cualquier otra persona lo entienda.
* Organizar la documentación para que el material relacionado se encuentre fácilmente.

Técnicas

* LENGUAJE NATURAL: La gran mayoría de requerimientos se representan usando lenguaje natural desestructurado, que es lo mismo que decir, Castellano o Inglés. Ésta representación es fácil de crear pero es propenso a problemas como la imprecision y la falta de entendimiento compartido.
* DIAGRAMAS: Muchas personas son más visuales que textuales. Para ellas, los diagramas son una muy buena opción para representar los requerimientos de sistemas. Los diagramas ayudan a los usuarios, administradores y profesionales IT a entender el diseño del sistema.
    - DIAGRAMAS DE DESCOMPOSICIÓN FUNCIONAL
    - DIAGRAMAS DE PROCESOS DE NEGOCIO
    - DIAGRAMAS DE FLUJOS DE DATOS
    - DIAGRAMAS DE CASOS DE USO
    - DIAGRAMAS DE SECUENCIAS
* MODELOS: Los modelos brindan una representación más formal de los requerimientos del sistema. A menudo se representan de forma gráfica, por lo tanto comparten algunas características de las técnicas de los diagramas. Pero los modelos tienen una característica adicional: El lenguaje subyacente tiene semántica, que quiere decir que el diagrama tiene un significado que puede analizarse automáticamente por una herramienta CASE.


8 Validando y Verificando los Requerimientos
--------------------------------------------

La validación y verificación delos requerimientos ("V&V") se enfoca en demostrar que los requerimientos definen el sistema que el cliente realmente quiere. Debido a que los costos de los errores de requerimientos son altos, la V&V es muy importante; es mucho más costoso corregir el sistema en una etapa avanzada del SDLC, que lo que cuesta corregir un error durante la ingeniería de requerimientos.


9 Herramientas
--------------

* [Paquete de Software de Oficina](https://es.wikipedia.org/wiki/LibreOffice) (local o web)
* [Leanote](https://github.com/leanote)
* [Laverna](https://github.com/Laverna/laverna)
* [Rational DOORS](https://en.wikipedia.org/wiki/Rational_DOORS)
* [Reqflow](https://github.com/goeb/reqflow/)
* [Doorstop](https://github.com/doorstop-dev/doorstop)
* [rmToo](https://github.com/florath/rmtoo)
