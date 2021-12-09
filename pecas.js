//Sistema de Cadastro de Peças Logica
//-Permitir apenas se pesar masi de 100g
//-Nuemro de peças na lista deve ser de apenas 10uni  caaso tenha 
//10ou masi peça o usuario recebera a mensagem lista completa
//-validar se o nome da peça possui mas de 3 caracteres

let peso = 50;
let nomePeca = ''
var listaDePeca = [
  "Filtro de ar",
  "Motor",
  "Armotecedor",
]

// verificar tamanho da lista
if (listaDePeca.length < 10) {
  console.log('É possivel cadastrar mais peças')
} else {
  console.log('Não tem mais espaço na lista');
}

// verificar o peso
if (peso < 100) {
  console.log('A peça deve pesar no mínimo 100 gramas');
} else {
  console.log('A peça possui peso adequado');
}

// Verificar o nome da peça
if (nomePeca.length > 3) {
  console.log('Nome de peça está adequado para cadastro!')
}
else if (nomePeca.length == 0) {
  console.log('O nome da peça não pode ser vazio');
} else {
  console.log('O nome deve ter mais de 3 caracteres, digite nome mais adequado');
}

switch(nomePeca.length){
  case 0:
    console.log("o nome da peça não pode ser vazio.");
  break;
  
  case 1, 2, 3:
    console.log('O nome deve ter mais de 3 caracteres, digite nome mais adequado');
  break

  default: 
    console.log('Nome de peça está adequado para cadastro!');
}
