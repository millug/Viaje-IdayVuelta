// Billete de ida.

const billeteIda= {
    nombre: "Milangel",
    desde: "Madrid",
    hacia: "Roma",
    claseEjecutiva: false,
    upgrade () {
        if (billeteIda.claseEjecutiva === false) {
        console.log("¡Has sido ascendido a clase ejecutiva.");
        billeteIda.claseEjecutiva = true;
        } else {
        console.log("¡Tu billete ya es de clase ejecutiva!");
        }
    },
    horaSalida: 19,        
    horaLlegada: 22,  
    tiempoDeVuelo() {
        let duracion = billeteIda.horaLlegada - billeteIda.horaSalida;
        if (duracion < 0) {
          duracion += 24;
        }
        console.log("El tiempo de vuelo es de",duracion,"horas.");
      },
};

billeteIda.upgrade();
console.log(billeteIda);
billeteIda.tiempoDeVuelo();

// Billete de vuelta. 

const billeteVuelta= {
    nombre: "Milangel",
    desde: "Roma",
    hacia: "Madrid",
    claseEjecutiva: true,
    upgrade () {
        if (billeteVuelta.claseEjecutiva === false) {
        console.log("¡Has sido ascendido a clase ejecutiva.");
        billeteVuelta.claseEjecutiva = true;
        } else {
        console.log("¡Tu billete ya es de clase ejecutiva!");
        }
    },
    horaSalida: 11,        
    horaLlegada: 14,  
    tiempoDeVuelo() {
        let duracion = billeteVuelta.horaLlegada - billeteVuelta.horaSalida;
        if (duracion < 0) {
          duracion += 24;
        }
        console.log("El tiempo de vuelo es de",duracion,"horas.");
      },
};

billeteVuelta.upgrade();
console.log(billeteVuelta);
billeteVuelta.tiempoDeVuelo();