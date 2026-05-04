const express = require('express');
const app = express();
const PORT = 3000;

// Permite recibir datos JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});


app.get('/calculadora', (req, res) => {
    const { num1, num2, op } = req.query;

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    let resultado;

    switch(op) {
        case 'suma':
            resultado = a + b;
            break;
        case 'resta':
            resultado = a - b;
            break;
        case 'multi':
            resultado = a * b;
            break;
        case 'div':
            resultado = b !== 0 ? a / b : 'Error: división por 0';
            break;
        default:
            return res.send('Operación no válida');
    }

    res.send(`Resultado: ${resultado}`);
});