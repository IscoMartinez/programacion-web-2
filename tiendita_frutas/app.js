let carrito = [];
let x = 0;
while (x<5){
    let fruta = prompt("que fruta quieres agregar? ");
    if (confirm("estas seguro que quieres agregar " + fruta +" al carrito?")){
        carrito.push(fruta);
        x++
    } else {
        console.log("ok");
    }
}

console.log("Carrito: ");
console.log(carrito);