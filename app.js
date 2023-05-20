function comparar() {
  const contenido1 = document.getElementById("contenido1").value;
  const contenido2 = document.getElementById("contenido2").value;
  const precio1 = document.getElementById("precio1").value;
  const precio2 = document.getElementById("precio2").value;
  const comparacion = document.getElementById("comparisonResult");
  let result;
  let ahorro = 0;

  //Validacion de campos en blanco
  if(contenido1 == "" || contenido2 == ""  || precio1 == ""  || precio2 == ""){
    return 0;
  }
  
  //Pivotes
  let pivote1 = (precio1 * 1) / contenido1;
  let pivote2 = (precio2 * 1) / contenido2;


  if (pivote1 == pivote2) {
    result = "Los dos productos son iguales";
  } else if (pivote2 > pivote1) {
    //Se el ahorro que se tendria
    ahorro = (pivote2 * contenido1) - precio1;
    result = "El producto 1 es mejor";
  } else {
    ahorro = (pivote1 * contenido2) - precio2;
    result = "El producto 2 es mejor";
  }
  comparacion.textContent = result + ", tendrás un ahorro de  $" + ahorro;
}
