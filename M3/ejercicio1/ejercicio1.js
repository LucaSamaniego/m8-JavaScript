const movimientosCaja = [
    { mes: "enero",
      ingreso: Number(prompt('declare su ingreso de Enero')),
      egreso: Number(prompt('declare su egreso de Enero')) },
    { mes: "febrero", 
      ingreso: Number(prompt('declare su ingreso de Febrero')),
      egreso: Number(prompt('declare su egreso de Febrero')) },
    { mes: "marzo", 
      ingreso: Number(prompt('declare su ingreso de Marzo')),
      egreso: Number(prompt('declare su egreso de Marzo')) },
    { mes: "abril", 
      ingreso: Number(prompt('declare su ingreso de Abril')),
      egreso:  Number(prompt('declare su egreso de Abril')) },
    { mes: "mayo", 
      ingreso: Number(prompt('declare su ingreso de Mayo')),
      egreso: Number(prompt('declare su egreso de Mayo')) },
    { mes: "junio", 
      ingreso: Number(prompt('declare su ingreso de Junio')),
      egreso: Number(prompt('declare su egreso de Junio')) },
    { mes: "julio", 
      ingreso: Number(prompt('declare su ingreso de Julio')),
      egreso: Number(prompt('declare su egreso de Julio')) },
    { mes: "agosto", 
      ingreso: Number(prompt('declare su ingreso de Agosto')),
      egreso: Number(prompt('declare su egreso de Agosto')) },
    { mes: "septiembre", 
      ingreso: Number(prompt('declare su ingreso de Septiembre')),
      egreso: Number(prompt('declare su egreso de Septiembre')) },
    { mes: "octubre", 
      ingreso: Number(prompt('declare su ingreso de Octubre')),
      egreso: Number(prompt('declare su egreso de Octubre')) },
    { mes: "noviembre", 
      ingreso: Number(prompt('declare su ingreso de Noviembre')),
      egreso: Number(prompt('declare su egreso de Noviembre')) },
    { mes: "diciembre", 
      ingreso: Number(prompt('declare su ingreso de Diciembre')),
      egreso: Number(prompt('declare su egreso de Diciembre')) }
  ];

  function determinarFlujoCaja(movimientosCaja) {
    let ingresos = 0;
    let egresos = 0;
    for (let i = 0; i < movimientosCaja.length; i++) {
      ingresos += movimientosCaja[i].ingreso;
      egresos += movimientosCaja[i].egreso;
    }
    let saldo = ingresos - egresos;
    if (saldo > 0) {
      return "El flujo de caja es positivo.";
    } else if (saldo < 0) {
      return "El flujo de caja es negativo.";
    } else {
      return "El flujo de caja es 0.";
    }
  }
  
  alert (determinarFlujoCaja(movimientosCaja))