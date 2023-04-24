const jogadores = [];
let times = [];
let contratacao = [];
let mostrarJogador = false;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////FUNÇÕES MENUS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let jogador1 = {}
    jogador1.nome = "joao";
    jogador1.cpf = "4567891235",
    jogador1.dataNasc = "14/12/1222",
    jogador1.sexo = "M",
    jogador1.peso = "96",
    jogador1.altura = "177",
    jogador1.email = "joaojoaoao@gmail.com",
    jogador1.telefone = "7878445512",
    jogador1.posicao = "meia";

let jogador2 = {}
    jogador2.nome = "arnoldo";
    jogador2.cpf = "4124234125",
    jogador2.dataNasc = "14/12/1232",
    jogador2.sexo = "M",
    jogador2.peso = "73",
    jogador2.altura = "167",
    jogador2.email = "joaojoaaaddoao@gmail.com",
    jogador2.telefone = "787844554589",
    jogador2.posicao = "lateral";


let time1 = {}
    time1.nome = "Sao carlinos fc";
    time1.codigo = "001",
    time1.dataFundacao = "14/12/1222",
    time1.logradouro = "Rio Paraguai",
    time1.nro = "96",
    time1.cep = "17712-836",
    time1.cidade = "São Carlos",
    time1.estado = "SP",
    time1.telefone = "7878445512",
    time1.fundador = "Roneldino";
    

let time2 = {}
    time2.nome = "Ibatistas fc";
    time2.codigo = "002",
    time2.dataFundacao = "15/10/1230",
    time2.logradouro = "Miguel Petroni",
    time2.nro = "912",
    time2.cep = "22813-504",
    time2.cidade = "São Carlos",
    time2.estado = "SP",
    time2.telefone = "7215345512",
    time2.fundador = "Jao Jorge";


let contrato1 = {}
    contrato1.cpfJogador = "4567891235";
    contrato1.codTime = "002",
    contrato1.dataInicio = "15/10/2010",
    contrato1.salario = "3000",
    contrato1.motivoSaida = "Briga";


let contrato2 = {}
    contrato2.cpfJogador = "4124234125";
    contrato2.codTime = "001",
    contrato2.dataInicio = "18/1/2011",
    contrato2.salario = "3500",
    contrato2.motivoSaida = "Fim do contrato";    
    
    
jogadores.push(jogador1);
jogadores.push(jogador2);

times.push(time1);
times.push(time2);

contratacao.push(contrato1);
contratacao.push(contrato2);


//     //CPF, Nome, Data de Nascimento, Sexo, Peso, Altura, E-mails, Telefones,
// // Posições em jogo

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////FUNÇÕES CADASTRAR
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function cadastrarJogador(){
    let newJogador = {};

    let nome = prompt("Digite o nome do jogador"); 
    if(nome == ''){
        return alert('O campo "Nome" não pode ficar em branco.');
    }
    newJogador.nome = nome;

    let cpf = prompt("Digite o cpf do jogador");
    newJogador.cpf = cpf;

    let dataNasc = prompt("Digite a data de nascimento do jogador");
    newJogador.dataNasc = dataNasc;

    let sexo = prompt("Digite o sexo do jogador");
    newJogador.sexo = sexo;

    let peso = prompt("Digite o peso do jogador");
    newJogador.peso = peso;

    let altura = prompt("Digite a altura do jogado");
    newJogador.altura = altura;

    let email = prompt("Digite o email do jogador");
    newJogador.email = email;

    let telefone = prompt("Digite o telefone do jogador");
    newJogador.telefone = telefone;

    let posicao = prompt("Digite a posicao do jogador");
    newJogador.posicao = posicao;

    jogadores.push(newJogador);
}




function cadastrarTime(){
    let newTime = {};

    let nome = prompt("Digite o nome do time"); 
    if(nome == ''){
        return alert('O campo "Nome" não pode ficar em branco.');
    }
    newTime.nome = nome;

    let codigo = prompt("Digite o codigo do time");
    newTime.codigo = codigo;

    let dataFundacao = prompt("Digite a data de fundação do time");
    newTime.dataFundacao = dataFundacao;

    let logradouro = prompt("Digite o logradouro do time");
    newTime.logradouro = logradouro;

    let nro = prompt("Digite o número do logradouro do time");
    newTime.nro = nro;

    let cep = prompt("Digite o CEP do time");
    newTime.cep = cep;

    let cidade = prompt("Digite a cidade do time");
    newTime.cidade = cidade;

    let estado = prompt("Digite o estado do time");
    newTime.estado = estado;

    let telefone = prompt("Digite o telefone do time");
    newTime.telefone = telefone;

    let fundador = prompt("Digite o fundador do time");
    newTime.fundador = fundador;

    times.push(newTime);
}




function cadastrarContratacao(){
    let newContrato = {};

    let cpfJogador = prompt("Digite o CPF do jogador"); 
    if(cpfJogador == ''){
        return alert('O campo "CPF do jogador" não pode ficar em branco.');
    }
    newContrato.cpfJogador = cpfJogador;

    let codTime = prompt("Digite o codigo do time");
    newContrato.codTime = codTime;

    let dataInicio = prompt("Digite a data de início");
    newContrato.dataInicio = dataInicio;

    let salario = prompt("Digite o salario");
    newContrato.salario = salario;

    let motivoSaida = prompt("Digite o motivo da saida");
    newContrato.motivoSaida = motivoSaida;

    contratacao.push(newContrato);
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////FUNÇÕES LISTAR TODOS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function listarJogadores(){
    let count = 0;
    document.getElementById("show").innerHTML = "";
    if(jogadores.length == 0){
        return alert("Nenhum jogador cadastrado")
    }

    jogadores.forEach(jogador => {
        
        let string = (
            "<br>JOGADOR - " + ++count  +
            "<br>Nome: " + jogador.nome +
            "<br>CPF: " + jogador.cpf + 
            "<br>Dt Nascimento: " + jogador.dataNasc + 
            "<br>Sexo: " + jogador.sexo + 
            "<br>Peso: " + jogador.peso +
            "<br>Altura: " + jogador.altura +
            "<br>E-mail: " + jogador.email +
            "<br>Telefone: " + jogador.telefone +
            "<br>Posição: " + jogador.posicao + "<br>"
        );

    document.getElementById("show").innerHTML += string;
            
    });
}


function listarTimes(){
    let count = 0;
    document.getElementById("show").innerHTML = "";
    if(times.length == 0){
        return alert("Nenhum time cadastrado")
    }

    times.forEach(time => {
        
        let string = (
            "<br>TIME - " + ++count  +
            "<br>Nome: " + time.nome +
            "<br>CODIGO: " + time.codigo + 
            "<br>Dt Fundação: " + time.dataFundacao + 
            "<br>Logradouro: " + time.logradouro + 
            "<br>Número: " + time.nro +
            "<br>CEP: " + time.cep +
            "<br>Cidade: " + time.cidade +
            "<br>Estado: " + time.estado +
            "<br>Telefone: " + time.telefone +
            "<br>Fundador: " + time.fundador + "<br>"
        );

    document.getElementById("show").innerHTML += string;
            
    });
}


function listarContratacoes(){
    let count = 0;
    document.getElementById("show").innerHTML = "";
    if(contratacao.length == 0){
        return alert("Nenhuma contratação cadastrada")
    }

    contratacao.forEach(contrato => {
        
        let string = (
            "<br>CONTRATO - " + ++count  +
            "<br>CPF Jogador : " + contrato.cpfJogador +
            "<br>CODIGO Time : " + contrato.codTime + 
            "<br>Dt Início: " + contrato.dataInicio + 
            "<br>Salário: R$" + contrato.salario + 
            "<br>Motivo Saida: " + contrato.motivoSaida + "<br>"
        );

    document.getElementById("show").innerHTML += string;
            
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////FUNÇÕES EXCLUIR
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function excluirJogador(){

    jogadorCadasdtrado = false;
    let cpf = prompt("Digite o cpf do jogador"); 
    jogadores.forEach(jogador => {
        if(jogador.cpf == cpf){
            jogadores.splice(jogador,1);
            jogadorCadasdtrado = true;
            return alert("Jogador removido com sucesso")
        }
    });

    if(!jogadorCadasdtrado){ 
        return alert("Jogador não cadstrado.");
    }
}


function excluirTime(){

    timeCadasdtrado = false;
    let codigo = prompt("Digite o codigo do time"); 
    times.forEach(time => {
        if(time.codigo == codigo){
            times.splice(time,1);
            timeCadasdtrado = true;
            return alert("Time removido com sucesso")
        }
    });

    if(!timeCadasdtrado){ 
        return alert("Time não cadstrado.");
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////FUNÇÕES LISTAR UM
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function listarJogador(){
    document.getElementById("show").innerHTML = "";
    let cpf = prompt("Digite o cpf do jogador");
    let string = "";
    let jogadorCadasdtrado = false;
    jogadores.forEach(jogador => {
        if(jogador.cpf == cpf){
            string = (
                "<br>JOGADOR "  +
                "<br>Nome: " + jogador.nome +
                "<br>CPF: " + jogador.cpf + 
                "<br>Dt Nascimento: " + jogador.dataNasc + 
                "<br>Sexo: " + jogador.sexo + 
                "<br>Peso: " + jogador.peso +
                "<br>Altura: " + jogador.altura +
                "<br>E-mail: " + jogador.email +
                "<br>Telefone: " + jogador.telefone +
                "<br>Posição: " + jogador.posicao
            );
            jogadorCadasdtrado = true;
            return document.getElementById("show").innerHTML = string;
        }            
    });

    if(!jogadorCadasdtrado){ 
        return alert("Jogador não cadstrado.");
    }
}


function listarTime(){
    document.getElementById("show").innerHTML = "";
    let codigo = prompt("Digite o código do time");
    let string = "";
    let timeCadasdtrado = false;
    times.forEach(time => {
        if(time.codigo == codigo){
            string = (
                "<br>TIME "  +
                "<br>Nome: " + time.nome +
                "<br>CODIGO: " + time.codigo + 
                "<br>Dt Fundação: " + time.dataFundacao + 
                "<br>Logradouro: " + time.logradouro + 
                "<br>Número: " + time.nro +
                "<br>CEP: " + time.cep +
                "<br>Cidade: " + time.cidade +
                "<br>Estado: " + time.estado +
                "<br>Telefone: " + time.telefone +
                "<br>Fundador: " + time.fundador 
            );
            timeCadasdtrado = true;
            return document.getElementById("show").innerHTML = string;
        }            
    });

    if(!timeCadasdtrado){ 
        return alert("Jogador não cadstrado.");
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////FUNÇÕES EDITAR
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function editarJogador(){
    
    let cpf = prompt("Digite o cpf do jogador");
    let jogadorCadasdtrado = false;
    jogadores.forEach(jogador => {
        if(jogador.cpf == cpf){
            jogadorCadasdtrado = true;
            let novoNome = prompt("Digite o novo nome");
            if (!novoNome == "") {
                jogador.nome = novoNome;
            }
            
            let novaDtNasc = prompt("Digite a nova data de nascimento");
            if (!novaDtNasc == "") {
                jogador.dataNasc = novaDtNasc;
            }

            let novoSexo = prompt("Digite o novo sexo");
            if (!novoSexo == "") {
                jogador.sexo = novoSexo;
            }

            let novoPeso = prompt("Digite o novo peso");
            if (!novoPeso == "") {
                jogador.peso = novoPeso;
            }

            let novaAltura = prompt("Digite a nova altura");
            if (!novaAltura == "") {
                jogador.altura = novaAltura;
            }

            let novoEmail = prompt("Digite o novo email");
            if (!novoEmail == "") {
                jogador.email = novoEmail;
            }

            let novoTel = prompt("Digite o novo telefone");
            if (!novoTel == "") {
                jogador.telefone = novoTel;
            }

            let novaPosicao = prompt("Digite a nova posição");
            if (!novaPosicao == "") {
                jogador.posicao = novaPosicao;
            }

            document.getElementById("show").innerHTML = "";

            string = (
                "<br>JOGADOR EDITADO "  +
                "<br>Nome: " + jogador.nome +
                "<br>CPF: " + jogador.cpf + 
                "<br>Dt Nascimento: " + jogador.dataNasc + 
                "<br>Sexo: " + jogador.sexo + 
                "<br>Peso: " + jogador.peso +
                "<br>Altura: " + jogador.altura +
                "<br>E-mail: " + jogador.email +
                "<br>Telefone: " + jogador.telefone +
                "<br>Posição: " + jogador.posicao
            );

            document.getElementById("show").innerHTML = string;
        }
    });
    
    if(!jogadorCadasdtrado){ 
        return alert("Jogador não cadstrado.");
    }
}




// function editarTime(){
    
//     let codigo = prompt("Digite o codigo do time");
//     let timeCadasdtrado = false;
//     times.forEach(time => {
//         if(time.codigo == codigo){
//             timeCadasdtrado = true;
//             let novoNome = prompt("Digite o novo nome");
//             if (!novoNome == "") {
//                 time.nome = novoNome;
//             }
            
//             let novaDtfundac = prompt("Digite a nova data de fundação");
//             if (!novaDtfundac == "") {
//                 time.dataFundacao = novaDtfundac;
//             }

//             let novoLogradouro = prompt("Digite o novo logradouro");
//             if (!novoLogradouro == "") {
//                 time.logradouro = novoLogradouro;
//             }

//             let novoNRO = prompt("Digite o novo número");
//             if (!novoNRO == "") {
//                 time.nro = novoNRO;
//             }

//             let novoCEP = prompt("Digite o novo CEP");
//             if (!novoCEP == "") {
//                 time.cep = novoCEP;
//             }

//             let novaCidade = prompt("Digite o novo email");
//             if (!novaCidade == "") {
//                 time.cidade = novaCidade;
//             }

//             let novoEstado = prompt("Digite o novo estado");
//             if (!novoEstado == "") {
//                 time.estado = novoEstado;
//             }

//             let novoTel = prompt("Digite o novo telefone");
//             if (!novoTel == "") {
//                 time.telefone = novoTel;
//             }

//             let novofundador = prompt("Digite o novo fundador");
//             if (!novofundador == "") {
//                 time.fundador = novofundador;
//             }

//             document.getElementById("show").innerHTML = "";

//             string = (
//                 "<br>TIME EDITADO "  +
//                 "<br>Nome: " + time.nome +
//                 "<br>CODIGO: " + time.codigo + 
//                 "<br>Dt Fundação: " + time.dataFundacao + 
//                 "<br>Logradouro: " + time.logradouro + 
//                 "<br>Número: " + time.nro +
//                 "<br>CEP: " + time.cep +
//                 "<br>Cidade: " + time.cidade +
//                 "<br>Estado: " + time.estado +
//                 "<br>Telefone: " + time.telefone +
//                 "<br>Fundador: " + time.fundador 
//             );

//             document.getElementById("show").innerHTML = string;
//         }
//     });
    
//     if(!timeCadasdtrado){ 
//         return alert("Jogador não cadstrado.");
//     }
// }














function menu(){
    window.location.href = "menu.html";
}
