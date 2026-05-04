document.getElementById("btnGenerar").addEventListener("click", generarListas);

function generarListas() {
    let n = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(n) || n <= 0) {
        resultado.innerHTML = "Ingresa un número válido";
        return;
    }

    let lista1 = [];

    for (let i = 1; i <= n; i++) {
        lista1.push(i);
    }

    resultado.innerHTML = `
        <h3>Números del 1 al ${n}</h3>
        ${lista1.join(", ")}
    `;
}