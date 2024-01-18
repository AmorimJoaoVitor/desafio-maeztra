function localizaRepetidos(array) {
    var numerosRepetidos = [];
    var numerosVerificados = {};
    
    
    for (var i = 0; i < array.length; i++) {
      var numero = array[i];
      
      
      if (numerosVerificados[numero]) {
        if (!numerosRepetidos.includes(numero)) {
          numerosRepetidos.push(numero);
        }
      } else {
        numerosVerificados[numero] = true;
      }
    }
  
    return numerosRepetidos;
  }

  
  var array = [4,5,44,98,4,5,6,7];
  var arayNumerosRepetidos = localizaRepetidos(array);
  console.log(arayNumerosRepetidos); //Resultado.