function recibirFlujoCaja(flujoCaja){
 if (flujoCaja < 0)
 return  -1
 else if (flujoCaja == 0)
 return 0
 else (flujoCaja >1)
 return 1
}

function generarArrayDePlanes() {
    let planesUnificado = [...plan001, ...plan002, ...plan003];
    let planesVersionFinal = añadirCampoInteres(planesUnificado);
    console.log(planesVersionFinal);
    return planesVersionFinal;
  }
  generarArrayDePlanes();