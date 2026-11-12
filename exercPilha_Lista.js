function menu() {
  var fila = [];
  var pilha = [];
  var limite = 5;

  while (true) {
    var escolha = prompt(
      "ROMANEIO E CARREGAMENTO DO CAMINHÃO\n\n" +
      "Escolha uma opção:\n" +
      "1 - Incluir pacote no romaneio\n" +
      "2 - Retirar da fila e carregar no caminhão\n" +
      "3 - Retirar pacote do caminhão\n" +
      "4 - Mostrar romaneio e caminhão\n" +
      "0 - Encerrar"
    );

    if (escolha === null) {
      alert("Saindo do programa...");
      break;
    }

    var opcao = Number(escolha);

    switch (opcao) {
      case 1:
        if (fila.length >= limite) {
          alert("O romaneio está cheio!\nMáximo de 5 pacotes.");
          break;
        }

        var codigo = prompt("Digite o código do pacote:");

        if (codigo === null || codigo.trim() === "") {
          alert("Código inválido!");
          break;
        }

        fila.push(codigo);

        alert(
          "Pacote " + codigo +
          " incluído no romaneio!"
        );

        break;

      case 2:
        if (fila.length === 0) {
          alert("A fila do romaneio está vazia!");
          break;
        }
        if (pilha.length >= limite) {
          alert(
            "O caminhão está cheio!\n" +
            "O pacote continuará no romaneio."
          );
          break;
        }

        var pacote = fila.shift();

        pilha.push(pacote);

        alert(
          "Pacote " + pacote +
          " carregado no caminhão!"
        );

        break;

      case 3:
        if (pilha.length === 0) {
          alert("Não há pacote para retirar do caminhão!");
          break;
        }

        var retirado = pilha.pop();

        alert(
          "Pacote retirado do caminhão: " +
          retirado
        );

        break;

      case 4:
        var mensagem = "ROMANEIO\n\n";

        if (fila.length === 0) {
          mensagem += "Fila vazia.";
        } else {
          mensagem += "Frente -> ";
          for (var i = 0; i < fila.length; i++) {
            mensagem += fila[i];
            if (i < fila.length - 1) {
              mensagem += " -> ";
            }
          }
          mensagem += " <- Fim";
        }

        mensagem += "\n\n-------------------------\n\n";
        mensagem += "CAMINHÃO\n\n";

        if (pilha.length === 0) {
          mensagem += "Caminhão vazio.";
        } else {
          mensagem += "Base -> ";
          for (var i = 0; i < pilha.length; i++) {
            mensagem += pilha[i];
            if (i < pilha.length - 1) {
              mensagem += " -> ";
            }
          }
          mensagem += " <- Topo";
        }

        alert(mensagem);

        break;

      case 0:
        alert("Saindo do programa...");
        return;

      default:

        alert("Opção inválida!");
        break;
    }
  }
}
menu();