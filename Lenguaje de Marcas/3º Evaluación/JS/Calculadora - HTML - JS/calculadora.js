let operando1 = '';
let operando2 = '';
let operacionActual = null;
let resultado = null;

function agregarNumero(numero) {
  if (operacionActual === null) {
    operando1 += numero;
    actualizarResultado(operando1);
  } else {
    operando2 += numero;
    actualizarResultado(operando2);
  }
}

function operacion(op) {
  if (operacionActual !== null) {
    calcular();
  }
  operacionActual = op;
}

function calcular() {
  const num1 = parseFloat(operando1);
  const num2 = parseFloat(operando2);
  if (isNaN(num1) || isNaN(num2)) {
    return;
  }
  switch (operacionActual) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num1 / num2;
      break;
    default:
      return;
  }
  operando1 = resultado.toString();
  operacionActual = null;
  operando2 = '';
  actualizarResultado(resultado);
}

function borrar() {
  operando1 = '';
  operando2 = '';
  operacionActual = null;
  resultado = null;
  actualizarResultado('0');
}

function actualizarResultado(valor) {
  document.getElementById('resultado').value = valor;
}
