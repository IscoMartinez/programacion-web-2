function generarNumero() {
    const numRandom = Math.floor(Math.random() * 10) + 1;
    return numRandom;
}




let numeroRandom = generarNumero()
let vida = 3
console.log(numeroRandom);

while (vida > 0){
    numero = parseInt(prompt("Adivina el número entre 1 y 10: "));
    if (numeroRandom == numero){
        console.log("Lo lograste!")
        break;
    }
    else{
        vida--
    }
    
}
if (vida == 0){
    console.log("Perdiste, el numero era " + String(numeroRandom))
}

