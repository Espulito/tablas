// Variables

var num = "";
const label = document.getElementById("text");

// ID's resultados en la tabla

var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
var result4 = document.getElementById("result4");
var result5 = document.getElementById("result5");
var result6 = document.getElementById("result6");
var result7 = document.getElementById("result7");
var result8 = document.getElementById("result8");
var result9 = document.getElementById("result9");
var result10 = document.getElementById("result10");

// Validación

function check() {
  num = document.getElementById("num").value;

  if (isNaN(num)) {
    // Si lo ingresado no es un número, se lo alerta al usuario.
    label.innerHTML = "Debes ingresar un número.";
  } else {
    // De lo contrario, si lo ingresado por el usuario es un número que no le alerte nada al usuario y reemplaze los contenidos de la tabla.
    label.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      let cuenta = num * i;
      switch (i) {
        case 1:
          result1.innerHTML = cuenta;
          break;
        case 2:
          result2.innerHTML = cuenta;
          break;
        case 3:
          result3.innerHTML = cuenta;
          break;
        case 4:
          result4.innerHTML = cuenta;
          break;
        case 5:
          result5.innerHTML = cuenta;
          break;
        case 6:
          result6.innerHTML = cuenta;
          break;
        case 7:
          result7.innerHTML = cuenta;
          break;
        case 8:
          result8.innerHTML = cuenta;
          break;
        case 9:
          result9.innerHTML = cuenta;
          break;
        case 10:
          result10.innerHTML = cuenta;
          break;
      }
    }
  }
}
