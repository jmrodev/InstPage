ANÁLISIS DE SISTEMAS 2/4
========================


Modelado de Datos y Procesos
============================


1 Modelos Lógicos contra Modelos Físicos
----------------------------------------

El modelo lógico muestra lo "qué" el sistema tiene que hacer, sin importar cómo será implementado físicamente. Luego, en la fase de diseño de sistemas, se crea el modelo físico que describe "cómo" se construirá el sistema.

Muchos analistas siguen un enfoque de "cuatro-modelos". Ésto significa que se desarrolla un modelo físico del sistema actual, un modelo lógico del sistema actual, un modelo lógico del nuevo sistema y un modelo físico del nuevo sistema. El mayor beneficio de éste enfoque es que provee una imagen clara del las funciones del sistema actual antes de realizar cualquier modificación o mejora.


2 Diagramas de Flujo de Datos
-----------------------------

Los analistas de sistemas usan distintas técnicas gráficas para describir un sistema informático. Un método popular es el de dibujar un conjunto de diagramas de flujos de datos. El diagrama de flujos de datos ("DFD" del inglés "Data Flow Diagram") usa distintos símbolos para mostrar como el sistema transforma los datos de entrada en información útil.

El DFD muestra como se mueven los datos a través del sistema informático, pero no muestra la programación lógica o los pasos de procesamiento. Un conjunto de DFDs proveen un modelo lógico que muestra lo qué hace el sistema, no cómo lo hace. Ésta distinción es importante porque, en éste momento, enfocarse en los problemas de implementación restringiría la búsqueda del diseño de sistema más eficiente.


3 Símbolos de los DFD
---------------------

### Símbolo del Proceso

Los procesos reciben datos de entrada y generan una salida que tiene diferente contenido y/o forma. Por ejemplo, el proceso para calcular el pago usa dos entradas (la tarifa y las horas trabajadas) para producir una salida (el total a pagar). Los procesos pueden ser muy simples o demasiado complejos. Los procesos contienen la lógica de negocios, también llamada reglas de negocios, que transforman los datos y producen los resultados requeridos.

El nombre de proceso identifica una función especifica y consiste de un verbo y (de ser necesario) un adjetivo, seguido de un sustantivo. Algunos ejemplos de nombres de procesos pueden ser: "APLICAR PAGO DE RENTA", "CALCULAR COMISIÓN", "ASIGNAR NOTA FINAL", "VERIFICAR ORDEN PRINCIPAL", "COMPLETAR ORDEN", ETC.

En los DFDs, al símbolo del proceso se lo puede referir como una caja negra; porque se conocen la entrada, la salida y la función general del proceso; pero la lógica y detalles del proceso se encuentran ocultos. Al mostrar los procesos como cajas negras, el analista puede crear DFDs que muestren como funciona el sistema, evitando detalles y confusiones innecesarias. Cuando el analista quiera mostrar mayor detalle, puede "ampliar" un símbolo de proceso y crear un DFD de mayor profundidad que muestre como funciona internamente el proceso. Éste nuevo DFD, del proceso "ampliado", puede revelar nuevos procesos, flujos de datos y almacenamientos de datos.

### Símbolo del Flujo de Datos

El flujo de datos es la ruta de datos que se mueve desde un punto a otro punto del sistema informático. El flujo de datos, en un DFD, representa uno o más elementos de datos. Por ejemplo, el flujo de datos puede consistir en un solo ítem de datos (como el número de identificación "ID" del estudiante), o puede incluir un conjunto de datos (como un listado de la clase con los IDs de los estudiantes, nombres y fechas de inscripción). Si bien los DFD no muestran el contenido detallado de los flujos de datos, esa información se incluye en el diccionario de datos (descripto más adelante).

El nombre de los flujos de datos consisten en un sustantivo singular y (de ser necesario) un adjetivo. Por ejemplo, "DEPÓSITO", "FACTURA DE PAGO", "CURSO DEL ALUMNO", "ORDEN", "COMISIÓN", etc.

Combinaciones de procesos y flujos de datos que deben evitarse:

* GENERACIÓN ESPONTANEA: Cuando se produce una salida sin ninguna entrada de flujo de datos.
* AGUJERO NEGRO: Proceso que tiene datos de entrada pero no genera ninguna salida.
* AGUJERO GRIS: Al menos tiene una entrada y salida, pero claramente la entrada es insuficiente para generar la salida.

Las tres combinaciones, listadas anteriormente, son lógicamente imposibles en un DFD. Ya que un proceso debe actuar sobre una entrada (representado por un flujo de datos de entrada) y producir una salida (representado por una flujo de datos de salida).

### Símbolo de Almacenamientos de Datos

El almacenamiento de datos representa a los datos que almacena el sistema y que luego necesitarán ser usados por uno o más procesos. Por ejemplo, durante el transcurso del curso los profesores necesitan guardar las notas de los alumnos, para luego poder calcular la nota final al final del ciclo.

Las características físicas de los almacenamientos de datos no son importantes, porque lo único importante en éste punto es el modelo lógico. Al mismo tiempo, tampoco es importante conocer la cantidad de tiempo que los datos son guardados; puede ser unos segundos mientras se procesa una transacción o un periodo de meses mientras se acumula la información para ser procesada a fin de año. Lo importante es que el proceso necesita acceso a los datos en un momento posterior.

El nombre de los almacenamientos de datos consiste de un sustantivo y (de ser necesario) adjetivo. Por ejemplo, "ESTUDIANTES", "PRODUCTOS", "PAGOS DIARIOS", "ÓRDENES DE COMPRA", "CHEQUES PENDIENTES", "PÓLIZAS DE SEGUROS", "EMPLEADOS", etc.

El almacenamiento de datos se debe conectar con un proceso, usando un flujo de datos. Como los almacenamientos de datos representan datos guardados para ser usados más adelante por otros procesos, el almacenamiento de datos tiene al menos un flujo de datos de entrada y otro de salida.

### Símbolo de Entidad

Los DFDs solo muestran entidades externas que proveen datos al sistema o reciben datos del mismo. Los DFDs muestran los limites del sistema y cómo interactúa con el mundo exterior. Por ejemplo, una entidad "cliente" envía una orden a un sistema de procesamiento de órdenes, un "cliente" que provee de datos a un sistema de registros médicos, un "propietario" que recibe los impuestos del sistema de impuestos de propiedad de la ciudad, o un "sistema de cuentas por pagar" que recibe datos del sistema de compras de la compañía.

A las entidades del DFD también se las conocen como "terminadores" (en inglés "terminators") porque son el origen o el destino final de los datos. Los analistas de sistemas llaman "origen" o "fuente" (en inglés "source") a las entidades que proveen los datos y "sumidero" o "destino" (en inglés "sink") a las entidades que reciben datos del sistema. El nombre de una entidad es la forma singular de un departamento, una organización externa, otro sistema informático o una persona. Una entidad externa puede ser un "source", un "sink" o ambos; pero cada entidad debe estar conectada a un proceso por un flujo de datos.

### Usando los Símbolos de los DFD

* [SI] Proceso a Proceso
* [SI] Proceso a Entidad Externa
* [SI] Proceso a Almacenamiento de Datos
* [NO] Entidad Externa a Entidad Externa
* [NO] Entidad Externa a Almacenamiento de Datos
* [NO] Almacenamiento de Datos a Almacenamiento de Datos


4 Dibujando Diagramas de Flujo de Datos
---------------------------------------

Cuando se dibuja un diagrama de contexto u otros DFDs, se deben seguir las siguientes pautas:

* Dibujar el diagrama de tal forma que quepa en una hoja.
* Usar el nombre del sistema informático como nombre de proceso en el diagrama de contexto. Se hace de ésta forma porque el diagrama de contexto muestra todo el sistema informático como si fuese un único proceso. Para los procesos en DFDs de "bajo nivel", usar un verbo seguido de un sustantivo descriptivo, como "ASIGNAR NOTA FINAL", "GENERAR REPORTE DE NOTAS", etc.
* Usar nombres únicos dentro de cada conjunto de símbolos.
* No cruzar las lineas. Una forma de cumplir con ésta pauta es la de restringir el número de símbolos en el DFD. En los diagramas de "bajo nivel", con más de un proceso, no debería haber más de nueve símbolos de procesos. Incluir más símbolos es una señal de que el diagrama es muy complejo y el analista debe replantearlo.
* Proveer a cada proceso de un único nombre y numero de referencia. El diagrama de contexto contiene el "proceso 0", debido a que es el DFD de "alto nivel", el cual representa todo el sistema informático. Para describir el siguiente nivel, dentro del "proceso 0", se crea un DFD llamado "diagrama 0", con nuevos procesos a los cuales habrá que nombrar y numerar.
* Obtener toda sugerencias y comentarios que se pueda de los usuarios. El objetivo principal es el de asegurarse que el modelo es preciso, fácil de entender y cumple con las necesidades de los usuarios.


5 Dibujando un Diagrama de Contexto
-----------------------------------

El primer paso al construir un conjunto de DFDs es el de dibujar un diagrama de contexto. El diagrama de contexto es una vista de alto nivel, de un sistema informático, que muestra el alcance y los limites de un sistema. Para dibujar un diagrama de contexto, hay que comenzar colocando un símbolo de proceso en el centro de la página. Éste símbolo representa a todo el sistema informático y se lo identifica como "proceso 0". Luego se colocan las entidades del sistema alrededor del perímetro de la página y se usan flujos de datos para conectar las entidades con el proceso central. Los almacenamientos de datos no se muestran en el diagrama de contexto porque están contenidos dentro del sistema y permanecen ocultos hasta que se cree un diagrama más detallado.

Para determinar qué entidades y flujos de datos colocar en el diagrama de contexto, hay que comenzar revisando los requerimientos del sistema para identificar todos los orígenes y destinos de los datos. Durante éste proceso, se identifican las entidades, el nombre y contenido de los flujos de datos y las direcciones de los mismos. Si ésto se hace con cuidado y el trabajo de investigación se realizó correctamente en la etapa anterior, dibujar el diagrama de contexto debería ser una tarea relativamente sencilla.


6 Dibujando el Diagrama 0 del DFD
---------------------------------

Para mostrar los detalles dentro de la caja negra (diagrama de contexto), es que se crea el "diagrama 0". El diagrama 0 es un panorama de todos los componentes que interactúan para formar todo el sistema. Éste diagrama hace zoom en el sistema y muestra los principales procesos, flujos de datos y almacenamientos de datos. El diagrama 0 también repite las entidades y flujos de datos que aparecen en el diagrama de contexto. Cuando el diagrama de contexto se expande en el DFD del diagrama 0, todas las conexiones que ingresan y salen del "proceso 0" se deben mantener.

Debido a que el diagrama 0 es una versión ampliada del proceso 0, muestra considerablemente más detalle que el diagrama de contexto. Cuando se desglosa un DFD, al diagrama de alto nivel se lo llama "diagrama padre" y al diagrama de bajo nivel se lo llama "diagrama hijo". Si el sistema es lo suficientemente simple para que no se necesiten DFD adicionales, entonces todas las entidades pueden ser documentadas en el diccionario de datos.

Cuando se crea un conjunto de DFDs para modelar un sistema, la lógica de procesamiento se parte en unidades más pequeñas, llamadas primitivas funcionales, que los programadores usaran para desarrollar el código. Una "primitiva funcional" es un proceso que consiste de una única función que no se sigue desglosando. La lógica de una primitiva funcional se documenta escribiendo una descripción del proceso en el diccionario de datos. Luego, cuando el diseño lógico se implemente en el sistema, los programadores transformarán cada primitiva funcional en código y módulos del programa que cumplirán con los pasos requeridos. Decidir si se sigue desglosando un proceso o si queda como primitiva funcional, es una cuestión de experiencia, criterio e interacción con los programadores que deben transformar el diseño lógico en código.


7 Dibujando DFDs de Bajo Nivel
------------------------------

Para crear un diagrama de bajo nivel, se necesitan usar técnicas de nivelado y balanceo.

* NIVELADO: Es el proceso de dibujar una serie de diagramas donde se van incrementando los detalles, hasta que todas las primitivas funcionales se hayan identificado. Al nivelado también se lo conoce como "explosión" (en inglés "exploding"), "particionado" (en inglés "partitioning") o "desmontado" (en inglés "decomposing").
* BALANCEO: Es el proceso de mantener la consistencia a través de un conjunto de DFDs, al asegurar que los flujo de datos de entrada y salida del DFD padre se mantienen en el DFD hijo.


8 Diccionario de Datos
----------------------

Un conjunto de DFDs produce un modelo lógico del sistema, pero los detalles de éstos DFDs se documentan en un diccionario de datos separado, el cual es el segundo componente del análisis estructurado. Mientras más complejo sea el sistema, más difícil será la tarea de mantener una documentación precisa y completa.

* Documentar los Elementos de Datos
    - Nombre o etiqueta del elemento de datos.
    - Alias.
    - Tipo y longitud.
    - Valor por defecto.
    - Valores aceptados.
    - Procedencia de los datos.
    - Usuario(s) responsables.
    - Descripción y comentarios.
* Documentar los Registros[^registro]
    - Nombre del registro o estructura de datos.
    - Definición o descripción.
    - Nombre(s) alternativo(s).
    - Atributos.
* Documentar los Flujos de Datos
    - Nombre o etiqueta del flujo de datos.
    - Descripción.
    - Nombre(s) alternativo(s).
    - Origen de los datos.
    - Destino de los datos.
    - Registro.
    - Volumen y frecuencia.
* Documentar los Almacenamientos de Datos
    - Nombre o etiqueta del almacenamiento de datos.
    - Descripción.
    - Nombre(s) alternativo(s).
    - Atributos.
    - Volumen y frecuencia.
* Documentar los Procesos
    - Nombre o etiqueta del proceso.
    - Descripción.
    - Número del proceso.
* Documentar las Entidades
    - Nombre de la entidad.
    - Descripción.
    - Nombre(s) alternativo(s).
    - Flujos de datos de entrada.
    - Flujos de datos de salida.
* Reportes del Diccionario de Datos
    - Lista ordenada alfabéticamente de todos los elementos.
    - Reporte donde se describen todos los elementos de datos y se indican los usuarios responsables de su carga, actualización o eliminación.
    - Reporte de todos los flujos de datos y almacenamientos de datos que usan un dato en particular.
    - Reportes detallados que muestren todas las características de los elementos de datos, registros, flujos de datos, procesos o cualquier otro elemento que se haya seleccionado del diccionario de datos.
    - etc.

[^registro] Un registro es una estructura de datos que contiene un conjunto de elementos de datos relacionados que se guardan y procesan juntos. Los flujos de datos y almacenamientos de datos consisten de registros que deben documentarse en el diccionario de datos.


9 Herramientas de Descripción de Procesos en el Diseño Modular
--------------------------------------------------------------

La "descripción de procesos" documenta los detalles de una primitiva funcional y representa un conjunto especifico de pasos de procesamiento y lógica de negocios. Cuando una primitiva funcional es analizada, los pasos de procesamiento se desglosan en unidades más pequeñas en un proceso llamado "diseño modular". Usando un conjunto de herramientas de descripción de procesos, se crea un modelo que sea preciso, completo y conciso. Las herramientas de descripción de procesos más usadas son el "lenguaje (inglés) estructurado", "tablas de decisiones" y "árboles de decisiones".

### Descripción de Procesos en el Desarrollo Orientado a Objetos

Aquí se está tratando el análisis estructurado, pero la descripción de procesos también se puede usar en el desarrollo orientado a objetos ("OO"). En el análisis OO, los datos y procesos que actúan sobre los datos, se combinan para formar lo que se llama "objeto". Un conjunto de objetos similares pueden agruparse en estructuras llamadas clases y a los procesos OO se los llaman métodos. Si bien los programadores OO usan diferentes terminologías, crean la misma clase de estructuras de código modular, con la excepción de que los procesos (o métodos) se guardan dentro de objetos en vez de hacerlo en componentes separados.

### Diseño Modular

El diseño modular está basado en la combinación de tres estructuras lógicas, a veces llamadas estructuras de control, las cuales sirven como cimientos para los procesos. Cada estructura lógica debe tener un solo punto de entrada y salida. La tres estructuras se llaman: secuencia, selección e iteración.

### Lenguaje (Inglés) Estructurado

El lenguaje estructurado es un subconjunto del lenguaje formal que describe los procesos lógicos de una forma clara y precisa.

### Tablas de Decisión

La tabla de decisión es una estructura lógica que muestra todas combinación de condiciones y resultados. Los analistas a menudo usan las tablas de decisión para describir un proceso y asegurar que han considerado todas las situaciones posibles.

* TABLAS CON UNA CONDICIÓN
* TABLAS CON DOS CONDICIONES
* TABLAS CON TRES CONDICIONES
* MÚLTIPLES RESULTADOS

### Árboles de Decisión

Un árbol de decisión es una representación gráfica de las condiciones, acciones y reglas que se encuentran en la tabla de decisión. Los árboles de decisión muestran la estructura lógica en una forma horizontal que se parece a un árbol con la raíces de un lado y las ramas del otro. Cómo los flujo de datos, los árboles de decisión son una manera útil de presentar el sistema a la administración. Los árboles de decisión y las tablas de decisión proveen el mismo resultado pero de formas diferentes. En muchas situaciones, un gráfico es la forma más efectiva de comunicación.
