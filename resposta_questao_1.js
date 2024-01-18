function validaCrescenteDecrescente(valor) {
    var strSequencia = valor.toString(); 
    var tamanho = strSequencia.length;
  
    
    var Crescente = true;
    for (var i = 0; i < tamanho - 1; i++) {
      if (parseInt(strSequencia[i]) > parseInt(strSequencia[i + 1])) {
        Crescente = false;
        break;
      }
    }
  
  
    var Decrescente = true;
    for (var i = 0; i < tamanho - 1; i++) {
      if (parseInt(strSequencia[i]) < parseInt(strSequencia[i + 1])) {
        Decrescente = false;
        break;
      }
    }
  
    
    if (Crescente) {
      return "Valores estão em sequência crescente.";
    } else if (Decrescente) {
      return "Valores estão em sequência decrescente.";
    } else {
      return "Nenhuma sequência identificada.";
    }
  }
  
 
  console.log(validaCrescenteDecrescente(12345678)); 
  console.log(validaCrescenteDecrescente(876543210)); 
  console.log(validaCrescenteDecrescente(152456457)); 
