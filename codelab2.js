const prompt = require("prompt-sync")();

// Code LAb 2 - Jornada do Herói

//História
contSim = 0;
contNao = 0;

console.log("\tBem vindo a 'Jornada do Herói'");
console.log("Você chegou ao fim de sua aventura, bravo aventureiro\n");
console.log("Depois de uma repentina falta de água em sua vila. \n");
console.log(
  "Você resolve subir a montanha parar tentar descobrir o que estava bloqueando o fluxo do rio. \n"
);
console.log("Ao chegar você descobre um plano maqueavélico dos bandidos. \n");
console.log(
  "Eles bloquearam o rio com troncos de madeira e planejavam monopolisar e vender a água do rio. \n"
);

// Perguntas

const perguntas = [
  "Você conseguiu encontrar o covil dos bandidos? ",
  "Você conseguiu derrotar os bandidos? ",
  "Você conseguiu expulsar os bandidos da montanha? ",
  "Você conseguiu retirar os troncos do rio? ",
  "Você conseguiu voltar para a vila? ",
];
// Armazenando os status da missão
const missao = {
  0: "Você falhou miseravelmente.",
  1: "Você falhou, mas conseguiu sair com vida.",
  2: "Você falhou, mas conseguiu sair com vida.",
  3: "Você falhou por pouco.",
  4: "Você obteve sucesso, mas não de maneira perfeita.",
  5: "Você triufa de maneira impecável.",
};

console.log("Responda as perguntas com Sim ou Não: ");

function laco(validacao) {
  for (i = 0; i < perguntas.length; i++) {
    let resposta = prompt(perguntas[i]);

    if (
      resposta == "Sim" ||
      resposta == "SIM" ||
      resposta == "sim" ||
      resposta == "S"
    ) {
      contSim++;
    } else if (
      resposta == "NAO" ||
      resposta == "nao" ||
      resposta == "Nao" ||
      resposta == "N"
    ) {
      contNao++; // criei esse contador para no caso, precisar implementar quantas missões ele falhou
    } else {
      console.log("Resposta inválida.");
      return laco(validacao); //retorna pra função caso a pessoa digite um valor que não seja válido
    }
  }
}
// chama a função que vai fazer as repetições e validar se a resposta está correta
laco();

// testa a quantidade de missões que o heroi acertou
function resultado(contador){
    if (contSim == 0) {
    console.log(missao[contSim]);
    } else if (contSim > 0 && contSim < 3) {
    console.log(missao[contSim]);
    } else if (contSim == 3) {
    console.log(missao[contSim]);
    } else if (contSim == 4) {
    console.log(missao[contSim]);
    } else {
    console.log(missao[contSim]);
    }
}

// mostra o resultado das missões e encerra o programa
resultado(contSim);
console.log("\nFim.")
console.log("\n Obrigado por jogar.")
