function ContaQuantasPessoasTrabalhando(matriz) {
    // Foi necessário criar um objeto para contar as pessoas por ano.
    var contaAno = {};
    
    //Faz percorrer a matriz e realizar a contagem de pessoas que estão trabalhando em cada ano.
    for (var i = 0; i < matriz.length; i++) {
      var anoInicio = matriz[i][0];
      var anoAposentadoria = matriz[i][1];
  
      for (var ano = anoInicio; ano <= anoAposentadoria; ano++) {
        if (contaAno[ano]) {
            contaAno[ano]++;
        } else {
            contaAno[ano] = 1;
        }
      }
    }
    
    //Localiza o(s) ano(s) com mais pessoas trabalhando.
    var maximoPessoas = 0;
    var anosMaximoPessoas = [];
    
    //Utilizando o hasOwnProperty pois determina se um objeto tem uma propriedade com o nome especificado.
    for (var ano in contaAno) {
      if (contaAno.hasOwnProperty(ano)) {
        var numPessoas = contaAno[ano];
  
        if (numPessoas > maximoPessoas) {
            maximoPessoas = numPessoas;
            anosMaximoPessoas = [ano];
        } else if (numPessoas === maximoPessoas) {
            anosMaximoPessoas.push(ano);
        }
      }
    }
  
    return anosMaximoPessoas;
  }
  
  // Testando a funcionalidade.
  var matrizPessoas = [[1960,2005],[1945,2008],[1938,1999]];
  var anosMaisPessoas = ContaQuantasPessoasTrabalhando(matrizPessoas);
  console.log("Este foram o(s) ano(s) com mais pessoas trabalhando:");
  console.log(anosMaisPessoas);
