function validaCaracteres(str) {
    var armazenaCaracteresAbertura = []; // Criando uma pilha para armazenar os caracteres de abertura.
    var caracteresAbertos = ['[', '{', '(']; // Criando objeto com os caracteres de abertura.
    var caracteresFechados = [']', '}', ')']; // Criando objeto com os caracteres de fechamento.
  
    // Percorre os caracteres informados.
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
  
      // Valida se o caractere é de abertura
      if (caracteresAbertos.includes(char)) {
        armazenaCaracteresAbertura.push(char);
      }
      // Valida se o caractere é de fechamento
      else if (caracteresFechados.includes(char)) {
        // Verificar se a pilha está vazia
        if (armazenaCaracteresAbertura.length === 0) {
            return "Sequencia Inválida.";
        }
        // Valida se o caractere de fechamento corresponde ao último caractere de abertura.
        var ultimoAberto = armazenaCaracteresAbertura.pop();
        var fechamentoEsperado = caracteresFechados[caracteresAbertos.indexOf(ultimoAberto)];
        if (char !== fechamentoEsperado) {
            return "Sequencia Inválida.";
        }
      }
    }
  
    // Valida se ainda existem caracteres de abertura na pilha.
    if (armazenaCaracteresAbertura.length > 0) {
      return "Sequencia Inválida.";
    }
  
    return "Sequencia Válida.";
  }
  
  // Testando a funcionalidade.
  console.log(validaCaracteres("{ [ ( ) ( ) { } [ ] ] { } }"));
  console.log(validaCaracteres("{ [ ( ( ) ] }"));
  console.log(validaCaracteres("{ } [ ] ( )"));
  