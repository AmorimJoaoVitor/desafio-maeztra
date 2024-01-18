function numeroPossibilidadesOrganizacao(numeroPessoasGrupo) {
    // Valida se o número de pessoas é válido
    if (numeroPessoasGrupo <= 0) {
      return 0;
    }
  
    // Calcula o as possibilidades com base em fatorial.
    var possibilidades = 1;
    for (var i = 1; i <= numeroPessoasGrupo; i++) {
        possibilidades *= i;
    }
    
    return (console.log("Este é número de possibilidades para a fotografia do grupo:"),possibilidades);
  }
  
  // Testando a funcionalidade.
  console.log(numeroPossibilidadesOrganizacao(4)); 
  console.log(numeroPossibilidadesOrganizacao(3)); 
  console.log(numeroPossibilidadesOrganizacao(1)); 
  console.log(numeroPossibilidadesOrganizacao(10)); 
