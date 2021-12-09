let listaDePaticipante = {
    Evento01:['Edson', 'Alice', 'Gabriel', 'Paulo', 'Maria', 'Fernanda', 'Madalena', 'Marcio'],
    Evento02:['Daniel', 'FDavi', 'Fabio', 'Jonathan', 'Alex', 'Thomas', 'Matheus', 'Felipe', 'João',  'Marcus Vinicius', 'Alvaro', 'Juan'],
  }
  
  let anoAtual = 2021
  var anoEvento = 2022
  var anoNascParticipante = 2002
  var calcIdade = anoAtual - anoNascParticipante
  
  //Valida cadastro dos Eventos
  
  function cadastraEvento() {
    if (anoAtual == anoEvento) {
      console.log('Evento cadastrado com sucesso.');
    }else {
      console.log('Data inválida para cadastrar evento.');
    }
  
    
  }
  cadastraEvento()
  
  //Valida idade dos participantes
  
  function cadastraParticipante() {
    if(calcIdade >= 18){
      console.log('Cadastro do participante efetuado com sucesso.');
    } else {
      console.log('Idade insuficiente para cadastro.');
    }
  }
  cadastraParticipante()
  
  console.log(listaDePaticipante.Evento01)
  console.log(listaDePaticipante.Evento02)
  
  //Validar quantidade de participantes no evento
  
  var numParticipantes = listaDePaticipante.Evento01.length
  
  function qntParticipante(){
    if (numParticipantes < 100){
      console.log('Cadastro permitido.');
    } else {
      console.log('Evento já possui o número máximo de participantes.');
    }
  }
  qntParticipante()
