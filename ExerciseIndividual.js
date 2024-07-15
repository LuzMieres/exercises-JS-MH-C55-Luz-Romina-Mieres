//Exercise1
// 1. Crea una aplicación que muestre un cuadrado gris. Debe tener un botón “Cambiar”, que al hacer clic en él, el color de relleno del 
//cuadrado debe cambiar a azul claro.
// Características adicionales:
// Al hacer clic nuevamente, el color del cuadrado debe cambiar a rojo.
// Asegúrese de que cada vez que haya un cambio de color, el nombre del color aparezca dentro del cuadrado.
let buttonChangeColor = document.getElementById('buttonChange');
let container1 = document.getElementById('divChangeColor');
let colorName = document.getElementById('colorName');

buttonChangeColor.addEventListener('click', function(){
    let colorRed = 'bg-red-400';
    let colorBlue = 'bg-blue-400';
    let classDiv = container1.classList;

    if (classDiv.contains(colorRed)) {
        container1.classList.remove(colorRed);
        container1.classList.add(colorBlue);
        colorName.innerText = 'Blue';
    } else {
        container1.classList.remove(colorBlue);
        container1.classList.add(colorRed);
        colorName.innerText = 'Red';
    }
}); 

//Exercise2
// 2. Crea una aplicación que muestre un cuadrado gris. Debe tener una entrada de texto y al escribir en ella, 
// lo que se escribe debe aparecer impreso dentro del cuadrado.

// Características adicionales:
// Crea un botón para borrar el contenido del cuadrado.

let buttonReset = document.getElementById('reset');
let container2 = document.getElementById('divTextReset');
let inputText = document.getElementById('text');

inputText.addEventListener('input', function(){
    let textEntered = document.getElementById('text').value;
    document.getElementById('divTextReset').innerHTML = textEntered;
});

buttonReset.addEventListener('click', function () {
    document.getElementById("divTextReset").innerHTML = '';
    document.getElementById("text").value = '';
})

function sentForm(event) {
event.preventDefault();
}

//Exercise 3
// 3. Crea una aplicación que calcule el índice de masa corporal. Al pulsar el botón “calcular”, debería mostrar el resultado
//  en la entrada correspondiente.
document.getElementById('buttonCalculate').addEventListener('click', function () {
    let weight = document.getElementById('weight').value;
    let heigth = document.getElementById('heigth').value;
    let resultInput = document.getElementById('result');

    if (weight && heigth) {
        let heightInMeters = heigth / 100;
        let imc = weight / (heightInMeters * heightInMeters);
        resultInput.value = 'Su IMC es: ' + imc.toFixed(2);''
    } else {
        resultInput.value = 'Por favor, ingrese su peso y estatura.';
    }
});

//Exercise 4
// 4. Crear una aplicación de conversión de monedas.
// Tomando por defecto 1 dólar = 500 (peso argentino, chileno, uruguayo, etc.).

// El usuario debe poder ingresar un monto en moneda local y éste debe ser convertido a su equivalente en dólares.

// Características adicionales:
// El programa también debe poder convertir de dólares a moneda local y también debe incluirse un botón para borrar las entradas.
const exchangeRate = 500; // 1 dólar = 500 moneda local

// Función para convertir de moneda local a dólares
document.getElementById('buttonConvert').addEventListener('click', function convertToDollars() {
    const localCurrencyInput = document.getElementById('localCurrency');
    const localCurrency = localCurrencyInput.value.trim();

    // Verificar si la cadena no contiene puntos ni comas
    if (!localCurrency.includes('.') && !localCurrency.includes(',')) {
        // Convertir a número solo si no hay puntos ni comas
        const localCurrencyNum = parseInt(localCurrency);

        if (!isNaN(localCurrencyNum)) {
            const result = localCurrencyNum / exchangeRate;
            document.getElementById('resultDollars').value = result.toFixed(2);
        } else {
            alert('Por favor, ingrese un monto válido en moneda local.');
        }
    } else {
        alert('Por favor, ingrese un monto válido en moneda local (sin puntos ni comas).');
        localCurrencyInput.value = ''; // Limpiar el campo en caso de entrada no válida
    }
});

// Función para borrar entradas
document.getElementById('buttonDelete').addEventListener('click', function deleteEntriesLocalCurrency() {
    document.getElementById('localCurrency').value = '';
    document.getElementById('resultDollars').value = '';
})

document.getElementById('convert').addEventListener('click', function convertToLocalCurrency() {
    const amountDollarsInput = document.getElementById('dollar');
    const amountDollars = amountDollarsInput.value.trim();

    // Verificar si la cadena no contiene puntos ni comas
    if (!amountDollars.includes('.') && !amountDollars.includes(',')) {
        // Convertir a número solo si no hay puntos ni comas
        const amountDollarsNum = parseFloat(amountDollars);
        
        if (!isNaN(amountDollarsNum)) {
            const result2 = amountDollarsNum * exchangeRate;
            document.getElementById('resultLocalCurrency').value = result2.toFixed(2);
        } else {
            alert('Por favor, ingrese un monto válido en dólares.');
        }
    } else {
        alert('Por favor, ingrese un monto válido en dólares (sin puntos ni comas).');
        amountDollarsInput.value = ''; // Limpiar el campo en caso de entrada no válida
    }
});

// Función para borrar entradas
document.getElementById('delete').addEventListener('click', function deleteEntriesDollars() {
    document.getElementById('resultLocalCurrency').value = '';
    document.getElementById('dollar').value = '';
})