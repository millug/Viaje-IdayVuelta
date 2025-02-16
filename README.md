Sistema de Billetes - Ida y Vuelta ✈️
Este repositorio contiene un sistema en JavaScript para crear billetes de embarque para un viaje de ida y vuelta. Cada billete se representa mediante un objeto, uno para el vuelo de ida y otro para el vuelo de vuelta, almacenando información esencial del pasajero y permitiendo gestionar actualizaciones de clase y cálculo de tiempo de vuelo.

📋 Características
Propiedades
Cada billete incluye las siguientes propiedades:

nombre: Nombre del pasajero.
desde: Lugar de origen del vuelo.
hacia: Destino del vuelo.
claseEjecutiva: Booleano que indica si el pasajero viaja en clase ejecutiva (true) o no (false).
horaSalida: Hora de salida (1 a 24, donde 1 es 1 AM y 24 es medianoche).
horaLlegada: Hora de llegada al destino (1 a 24).
Métodos
upgrade(): Permite al pasajero actualizar su billete a clase ejecutiva si aún no lo está. Si ya lo está, muestra el mensaje:
tiempoDeVuelo(): Calcula y muestra el tiempo total de vuelo basado en .horaSalida y .horaLlegada. Ajusta la duración si el vuelo cruza la medianoche.


🔄 Funcionamiento
Se crean dos objetos: billeteIda y billeteVuelta, representando el vuelo de ida y el de vuelta.
Cada objeto incluye propiedades para la información del pasajero y del vuelo.
El método .upgrade() actualiza el billete a clase ejecutiva.
El método .tiempoDeVuelo() calcula el tiempo de vuelo ajustando la duración si cruza la medianoche.
La salida en consola muestra el estado actualizado de cada billete.


🎁 Bonus
Se ha implementado el cálculo del tiempo de vuelo con ajuste para vuelos que cruzan la medianoche.
Los métodos están diseñados para ser reutilizables y claros.

¡Feliz vuelo! 😎
