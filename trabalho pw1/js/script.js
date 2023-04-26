const jogadores = [];
let times = [];
let contratacao = [];

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
    time1.fundador = ["Roneldino","Kaka"];
    

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
    time2.fundador = ["Jao Jorge", "Abel Braga","Renato Gaucho"];


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
    if(nome == null){
        return alert("Cadastro encerrado!");
    }
    newJogador.nome = nome;

    let cpf = prompt("Digite o CPF do jogador");
    if(cpf == ''){
        return alert('O campo "CPF" não pode ficar em branco.')
    }
    if(cpf == null){
        return alert("Cadastro encerrado!");
    }
    newJogador.cpf = cpf;

    let dataNasc = prompt("Digite a data de nascimento do jogador");
    if(dataNasc == ''){
        return alert('O campo "Data de Nascimento" não pode ficar em branco.')
    }
    if(dataNasc == null){
        return alert("Cadastro encerrado!");
    }
    newJogador.dataNasc = dataNasc;
    

    let sexo = prompt("Digite o sexo do jogador");
    if(sexo == ''){
        return alert('O campo "Sexo" não pode ficar em branco.')
    }
    if(sexo == null){
        return alert("Cadastro encerrado!");
    }
    newJogador.sexo = sexo;

    let peso = prompt("Digite o peso do jogador");
    if(peso == ''){
        return alert('O campo "Peso" não pode ficar em branco.')
    }
    if(peso == null){
        return alert("Cadastro encerrado!");
    }
    newJogador.peso = peso;

    let altura = prompt("Digite a altura do jogado");
    if(altura == ''){
        return alert('O campo "Altura" não pode ficar em branco.')
    }
    if(altura == null){
        return alert("Cadastro encerrado!");
    }
    newJogador.altura = altura;

    let email = prompt("Digite o email do jogador");
    if(email == ''){
        return alert('O campo "Email" não pode ficar em branco.')
    }
    if(email == null){
        return alert("Cadastro encerrado!");
    }
    newJogador.email = email;

    let telefone = prompt("Digite o telefone do jogador");
    if(telefone == ''){
        return alert('O campo "Telefone" não pode ficar em branco.')
    }
    if(telefone == null){
        return alert("Cadastro encerrado!");
    }
    newJogador.telefone = telefone;

    let posicao = prompt("Digite a posicao do jogador");
    if(posicao == ''){
        return alert('O campo "Posicao" não pode ficar em branco.')
    }
    if(posicao == null){
        return alert("Cadastro encerrado!");
    }
    newJogador.posicao = posicao;

    jogadores.push(newJogador);
}




function cadastrarTime(){
    let newTime = {};
    let fundadores = [];

    let nome = prompt("Digite o nome do time"); 
    if(nome == ''){
        return alert('O campo "Nome" não pode ficar em branco.');
    }
    if(nome == null){
        return alert("Cadastro encerrado!");
    }
    newTime.nome = nome;

    let codigo = prompt("Digite o codigo do time");
    if(codigo == ''){
        return alert('O campo "Código" não pode ficar em branco.')
    }
    if(codigo == null){
        return alert("Cadastro encerrado!");
    }
    newTime.codigo = codigo;

    let dataFundacao = prompt("Digite a data de fundação do time");
    if(dataFundacao == ''){
        return alert('O campo "Data da Fundação" não pode ficar em branco.')
    }
    if(dataFundacao == null){
        return alert("Cadastro encerrado!");
    }
    newTime.dataFundacao = dataFundacao;

    let logradouro = prompt("Digite o logradouro do time");
    if(logradouro == ''){
        return alert('O campo "Logradouro" não pode ficar em branco.')
    }
    if(logradouro == null){
        return alert("Cadastro encerrado!");
    }
    newTime.logradouro = logradouro;

    let nro = prompt("Digite o número do logradouro do time");
    if(nro == ''){
        return alert('O campo "Número" não pode ficar em branco.')
    }
    if(nro == null){
        return alert("Cadastro encerrado!");
    }
    newTime.nro = nro;

    let cep = prompt("Digite o CEP do time");
    if(cep == ''){
        return alert('O campo "CEP" não pode ficar em branco.')
    }
    if(cep == null){
        return alert("Cadastro encerrado!");
    }
    newTime.cep = cep;

    let cidade = prompt("Digite a cidade do time");
    if(cidade == ''){
        return alert('O campo "Cidade" não pode ficar em branco.')
    }
    if(cidade == null){
        return alert("Cadastro encerrado!");
    }
    newTime.cidade = cidade;

    let estado = prompt("Digite o estado do time");
    if(estado == ''){
        return alert('O campo "Estado" não pode ficar em branco.')
    }
    if(estado == null){
        return alert("Cadastro encerrado!");
    }
    newTime.estado = estado;

    let telefone = prompt("Digite o telefone do time");
    if(telefone == ''){
        return alert('O campo "Telefone" não pode ficar em branco.')
    }
    if(telefone == null){
        return alert("Cadastro encerrado!");
    }
    newTime.telefone = telefone;

    let cadFundadores;
    cadFundadores = cadastrarFundadores();
    

    function cadastrarFundadores(){
        let qtdFundadores = prompt("Digite a quantidade de fundadores do time.");
    
        if (isNaN(qtdFundadores)) {
            return alert("A entrada digitada não é um número inteiro válido.");
        } 

        if((qtdFundadores <= 0) || (qtdFundadores == '')){
            return alert("Entrada inválida.")
        }

        qtdFundadores = parseInt(qtdFundadores);

        for(let i = 0; i < qtdFundadores; i++){
            let fundador
            if(i == 0){
                fundador = prompt("Digite o nome do 1º fundador");
                if(fundador == ''){
                    return alert('O campo "Fundador" não pode ficar em branco.')
                }
                if(fundador == null){
                    return alert("Cadastro encerrado!");
                }

                fundadores.push(fundador);

            }else{
                fundador = prompt('Digite o neme do proximo fundador')
                if(fundador == ''){
                    return alert('O campo "Fundador" não pode ficar em branco.')
                }
                if(fundador == null){
                    return alert("Cadastro encerrado!");
                }

                fundadores.push(fundador);
            }
            
        }

        newTime.fundador = fundadores;
    }

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
            "<br>Fundador: " 
        );
        countFundador = 0;
        let array = time.fundador;
        array.forEach(element => {
            ++countFundador;
            if(countFundador == array.length){
                string += element + "<br>";
            }else{
                string += element + ", ";
            }
            
        });

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





function excluirContratacao(){

    contratoCadasdtrado = false;
    let cpfJogador = prompt("Digite o cpf do jogador"); 
    contratacao.forEach(contrato => {
        if(contrato.cpfJogador == cpfJogador){
            contratacao.splice(contrato,1);
            contratoCadasdtrado = true;
            return alert("contrato removido com sucesso")
        }
    });

    if(!contratoCadasdtrado){ 
        return alert("contrato não cadstrado.");
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




function listarContratacao(){
    document.getElementById("show").innerHTML = "";
    let cpfJogador = prompt("Digite o cpf do jogador");
    let string = "";
    let contratoCadasdtrado = false;
    contratacao.forEach(contrato => {
        if(contrato.cpfJogador == cpfJogador){
            string = (
                "<br>CONTRATO" +
                "<br>CPF Jogador : " + contrato.cpfJogador +
                "<br>CODIGO Time : " + contrato.codTime + 
                "<br>Dt Início: " + contrato.dataInicio + 
                "<br>Salário: R$" + contrato.salario + 
                "<br>Motivo Saida: " + contrato.motivoSaida
            );
            contratoCadasdtrado = true;
            return document.getElementById("show").innerHTML = string;
        }            
    });

    if(!contratoCadasdtrado){ 
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




function editarContratacao(){
    
    let cpfJogador = prompt("Digite o CPF do jogador");
    let contratoCadasdtrado = false;
    contratacao.forEach(contrato => {
        if(contrato.cpfJogador == cpfJogador){
            contratoCadasdtrado = true;
            let novoCodTime = prompt("Digite o novo codigo de time");
            if (!novoCodTime == "") {
                contrato.codTime = novoCodTime;
            }
            
            let novaDtInicio = prompt("Digite a nova data de inicio");
            if (!novaDtInicio == "") {
                contrato.dataInicio = novaDtInicio;
            }

            let novoSalario = prompt("Digite o novo salario");
            if (!novoSalario == "") {
                contrato.salario = novoSalario;
            }

            let novoMotivoSaida = prompt("Digite o novo motivo de saida");
            if (!novoMotivoSaida == "") {
                contrato.motivoSaida = novoMotivoSaida;
            }

            document.getElementById("show").innerHTML = "";

            string = (
                "<br>CONTRATO" +
                "<br>CPF Jogador : " + contrato.cpfJogador +
                "<br>CODIGO Time : " + contrato.codTime + 
                "<br>Dt Início: " + contrato.dataInicio + 
                "<br>Salário: R$" + contrato.salario + 
                "<br>Motivo Saida: " + contrato.motivoSaida
            );

            document.getElementById("show").innerHTML = string;
        }
    });
    
    if(!contratoCadasdtrado){ 
        return alert("Jogador não cadstrado.");
    }
}














function menu(){
    window.location.href = "menu.html";
}
