7 Modelos de Redes
------------------

### El Modelo OSI

Dentro de la discusión sobre la arquitectura del sistema se introdujeron términos básicos de redes como cliente, servidor, LAN, WAN, arquitectura cliente/servidor, capas, middleware y computación en la nube. Para entender completamente cómo se configuran las redes, se necesita entender el modelo de Interconexión de Sistemas Abiertos ("OSI" del inglés "Open Systems Interconnection").

El modelo OSI describe como se se mueven los datos de una aplicación en una computadora conectada a otra aplicación en otra computadora. El modelo OSI consiste de siete capas y cada capa tiene una función especifica. El modelo OSI provee estándares de diseño físicos que aseguran una conexión de red perfecta, sin importar el entorno de hardware especifico.

### Topología de Red

A la forma en la que una red es configurada se la llama topología de red. La topología se puede referir a una vista física o lógica de la red. Por ejemplo, la topología física describe el cableado y las conexiones de la red, mientras que la topología lógica describe la forma en que interactúan los componentes.

Las redes LAN y WAN normalmente están organizadas en cuatro patrones: árbol, bus, anillo y estrella. Los conceptos son los mismos sin importar el tamaño de la red; pero la implementación física es diferente para una WAN de gran escala, que abarca todo el negocio de una empresa, comparada con la implementación que necesita una LAN chica, ubicada en un sólo departamento.

* RED EN ÁRBOL: En una red en árbol (en inglés "Tree Network") uno o más servidores controlan toda la red. Servidores departamentales controlan los niveles inferiores de procesamiento y dispositivos de red. Un ejemplo de una red en árbol puede ser el de una cadena de venta de indumentaria; con una computadora central que almacena los datos sobre las ventas y el inventario, y con computadoras locales que administran las transacciones de cada local.  
  Una desventaja de una red en árbol es que si un negocio agrega más niveles de procesamiento, la red se vuelve más compleja y costosa para operar y mantener. Las redes en árbol normalmente fueron usadas en los sistemas mainframe tradicionales, los cuales ya no son tan comunes hoy en día.
* RED BUS: En una red bus (en inglés "Bus Network") hay un único camino de comunicación que conecta el servidor central, los servidores de los departamentos, las estaciones de trabajo y los dispositivos periféricos. La información se transmite en cualquier dirección entre los dispositivos conectados y todos los mensajes viajan sobre el mismo bus central. Las redes bus requieren menor cableado que otras topologías, ya que se usa un solo cable. Los dispositivos también pueden ser conectados o desconectados de la red en cualquier punto sin generar disturbios en el resto de la red. Ademas, una falla en una estación de trabajo no afectará necesariamente al resto de las estaciones de trabajo.  
  Una desventaja importante de las redes bus es que si el bus central se daña, se corta toda la red. Otra desventaja es que el rendimiento general decae a medida que se agregan más usuarios y dispositivos, ya que todo el tráfico debe fluir a través del bus central.  
  La red bus es una de las topologías de red LAN más viejas y es una forma muy simple de conectar múltiples estaciones de trabajo.
* RED EN ANILLO: Si bien las redes en anillo (en inglés "Ring Network") aún se pueden seguir viendo, se las puede considerar anticuadas. IBM fue el líder en lo que concierne a topologías de redes de anillo, ya que ellos introdujeron su LAN Token Ring y las grandes compañías que usaban mainframes de IBM implementaron su diseño de red. Una red en anillo se asemeja a un círculo donde los datos fluyen en un sólo sentido desde un dispositivo al siguiente. En funcionamiento, a una red en anillo se la puede ver como a una red bus con su final conectado.  
  Una desventaja de las red en anillo es que si un dispositivo conectado falla, los dispositivos que le sigan no podrán conectarse con la red.
* RED EN ESTRELLA: Debido a su velocidad y versatilidad, las redes en estrella (en inglés "Star Network") son una topología LAN muy popular. Una red en estrella tiene un dispositivo central llamado switch, que administra la red y se comporta como un conducto de comunicación para todo el tráfico de la red. Un switch funciona como un alargue eléctrico con múltiples enchufes, pero en lugar de enchufar dispositivos eléctricos (como la heladera, el microondas, la batidora, etc) se enchufan servidores, estaciones de trabajos, impresoras, etc.  
  Una configuración en estrella provee un alto control de la red, ya que todo el tráfico fluye a través del switch. Una desventaja inherente del diseño en estrella es que toda la red depende del switch.
* RED EN MALLA: En una red en malla (en inglés "Mesh Network"), cada nodo se conecta con cualquier otro nodo. Mientras éste diseño es extremadamente confiable, también es más caro de instalar y mantener. Una red en malla se asemeja a Internet en que un mensaje puede viajar a través de múltiples caminos. Teniendo en cuenta que la red en malla fue desarrollada originalmente para aplicaciones militares, la principal ventaja es la redundancia, ya que múltiples caminos proveen de respaldo si aparece un problema de comunicación o si algunos nodos se vuelven inoperables.

### Dispositivos de Red

Las redes como las LAN y WAN pueden interconectarse usando dispositivos llamados enrutadores (en inglés "Routers"). Un router es un dispositivo que conecta segmentos de una red, determina el camino más eficiente para los datos y guía el flujo de éstos.

Usando un router, cualquier topología de red puede conectarse a una red más grande y diferente como Internet. A ésta conexión se la llama puerta de enlace (en inglés "Gateway"). También existe un dispositivo llamado servidor intermedio (en inglés "Proxy Server") que provee de conexión a Internet a los usuarios internos de una LAN. La gran mayoría de las redes de negocios usan routers para integrar toda la arquitectura de la red.


8 Dispositivos Inalámbricos
---------------------------

Una red de área local inalámbrica ("WLAN" del inglés "Wireless Local Area Network") es relativamente económica de instalar y se ajusta muy bien a los grupos de trabajo y a los usuarios que no están asignados a un escritorio o lugar especifico.

De la misma forma que con sus contrapartes cableadas, las redes inalámbricas tienen ciertos estándares y topologías que se verán a continuación.

### Estándares

Las redes inalámbricas se basan en varios estándares y protocolos que aún siguen evolucionando. El más popular de éstos se llama IEEE 802.11, el cual es una familia de estándares desarrollados por el Instituto de Ingenieros Eléctricos y Electrónicos ("IEEE" del inglés "Institute of Electrical and Electronics Engineers") para las LAN inalámbricas.

Las redes inalámbricas actuales están basadas en variaciones del estándar original 802.11. Existen muchas versiones, o correcciones, que intentan mejorar el ancho de banda, el rango de alcance y la seguridad. El conjunto de estándares de la IEEE 802.11 cambia rápidamente, en gran parte debido a la presión que ejercen los grupos de consumidores y a los líderes de la industria que se mueven hacia redes inalámbricas cada vez más rápidas. La velocidad de las redes inalámbricas se mide en Megabits por Segundo ("Mbps" del inglés "Megabits Per Second") o Gigabits por Segundo ("Gbps" del inglés "Gigabit Per Second").

### Topologías

De la misma forma que con las redes cableadas, las redes inalámbricas también pueden agruparse en diferentes topologías. De las topologías disponibles para las WLAN IEEE 802.11, las dos más comunes son el Conjunto de Servicios Básicos ("BSS" del inglés "Basic Service Set") y el Conjunto de Servicios Extendidos ("ESS" del inglés "Extended Service Set").

A la topología BSS también se la conoce como el modo de infraestructura. En ésta configuración, un dispositivo cableado central, llamado Punto de Acceso Inalámbrico ("WAP" del inglés "Wireless Access Point"), es usado para servir a todos los dispositivos inalámbricos. El WAP es similar al switch de la topología estrella de la LAN, con la excepción de que provee servicios de red a clientes inalámbricos en lugar de a clientes cableados. Debido a que los WAP usan un único medio de comunicación, el aire, éstos transmiten todo el tráfico a todos los clientes. Normalmente, el WAP está conectado a una red cableada, de tal forma que los clientes inalámbricos puedan acceder a la red cableada.

La segunda topología, ESS, está compuesta por dos o más redes BSS. De ésta forma, al usar una topología ESS, el acceso inalámbrico puede expandirse para tener mayor cobertura. Cada WAP provee servicios inalámbricos en un rango limitado. A medida que un cliente se mueve fuera del alcance de un WAP y entra en el área de cobertura de otro WAP, automáticamente se produce un proceso llamado Itinerancia (en inglés "Roaming") que hace que los clientes se conecten con el WAP más fuerte, permitiendo un servicio ininterrumpido.

### Tendencias

La tecnología inalámbrica trajo un cambio explosivo a la industria IT y continuará afectando a los negocios, los individuos y la sociedad. Aún en el constantemente cambiante mundo IT, será difícil encontrar otra área más dinámica que la de la tecnología inalámbrica.

Con la creciente popularidad del 802.11, muchas compañías ofrecen productos, servicios e información en red. Uno de los grupos más significativos es el de la Alianza Wi-Fi, que mantiene el sitio [www.wi-fi.org](). El objetivo de ésta alianza es el de mejorar la experiencia de usuario a través de la interoperabilidad entre productos.

Si bien disponen de muchas ventajas, las redes inalámbricas también tienen limitaciones y desventajas. Por ejemplo, los dispositivos que usan la banda de frecuencia de 2.4 GHz pueden recibir interferencias de dispositivos como los microondas y teléfonos inalámbricos que usan la misma frecuencia. Aún más importante, las redes inalámbricas generan preocupaciones de seguridad ya que las transmisiones inalámbricas son mucho más susceptibles a ser interceptadas e interferidas que las redes cableadas.

Además de las Wi-Fi, existe otra forma de transmisión inalámbrica llamada Bluetooth, la cual es popular para comunicaciones inalámbricas de corta distancia y que no requieran de mucha energía.



-----------------------------------
