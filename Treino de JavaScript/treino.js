// Início do treino de JavaScript

console.log('Teste')

// 1 - Váriaveis:

    // let nome = 'Marcos';' {STRING LITERAL}'
    // let idade = 18; '{NUMBER LITERAL}'
    // let altura = 1.65;
    // console.log(nome,idade,altura)

// 2 - Valor das váriaveis 'let' podem sempre mudar:

    // let valorQuePodeMudar = 10;
    // valorQuePodeMudar = 20;
    // console.log(valorQuePodeMudar)

// 3 - Constantes, valor constante que não precise de mudança, use const em geral, a não ser que precise fazer mudanças:

    // const valorQueNãoPodeMudar = 10;
    // valorQueNãoPodeMudar = 20; '{ERROR}'
 
// 4 - Tipos Primitivos; Tipos de Referência e Tipos de Valores

// 5 - TIPOS DE VALOR

    // let nome = 'Marcos'; '{STRING LITERAL}'
    // let idade = 18; '{NUMBER LITERAL}'
    // let maiorDeIdade = True; '{Boolean}'
    // let sobrenome = undefined; '{Undefined - Pouco Utilizado}'
    // let corSelecionada = null; '{Redefinir um valor - Ex: Alterar de fundo} [Object]'

// 6 - Tipagem Dinâmica

    // typeof nome {Comando no CONSOLE para descobrir qual a tipagem de uma váriavel}
    // 'string' {Tipagem do váriavel "nome" utilizado no ultimo 'exercício'}

// 7 - TIPOS DE REFERÊNCIA - [Objetos/Arrays/Functions]
// 7.1 - OBJETOS [Classes]

//  keyValour [key = valor] - Dentro da Classe
    //  let pessoa = {
    //     nome: 'Marcos',
    //     idade: 18,
    //     maiorDeIdade: true,
    //     sobrenome: 'paulo'
    // };
    // console.log(pessoa)

// 7.2 - ARRAYS

    // let family = ['Marcos',18,'Gustavo',19,true];
    // console.log(family); - 'TODOS AS VÁRIAVEIS'
    // console.log(family[0]); - 'Váriavel em Ordem, (0)'
    // console.log(family[2]); - 'Váriavel em Ordem, (2)'
    // console.log(family.length); - 'Identificar o tamanho do conjunto, =(5)'

// 7.3 - FUNCTIONS

// Nome funções = Verbo(ação) + Substantivo(O que faz essa ação)
// Ex: resetarCor, alterarImagem, alterarTamanho

    // let corSite = 'azul';
    // function resetarCor(){
    //     corSite = '';
    // }
    // console.log(corSite)
    // resetarCor();
    // console.log(corSite);

 // ADICIONANDO PARÂMETROS ÀS FUNÇÕES (Alterar)

    // let corSite = 'azul';
    // let corFolha = 'Branca;'
    // function resetarCor(cor){
    //     corSite = cor;
    //     corFolha = cor;
    // }
    // console.log(corSite,corFolha);
    // resetarCor('vermelho');
    // console.log(corSite,corFolha);

// ADICIONANDO DOIS PARÂMETROS

    // let corSite = 'azul';
    // let corFolha = 'Branca;'
    // function resetarCor(cor,tonalidade){
    //     corSite = cor + ' ' + tonalidade;
    //     corFolha = cor;
    // }
    // console.log(corSite,corFolha);
    // resetarCor('vermelho','escuro');
    // console.log(corSite,corFolha);

// 8 - TIPOS DE FUNÇÕES
// 8.1 - Realizar uma tarefa, não devolve nada('SEM RETORNO')
    // function dizernome(){
    //     console.log('Marcos');
    // }
    // dizernome(); - 'Dentro da função, o objetivo disso foi apenas transmitir/dizer esse nome'
// 8.2 - Realizar um cálculo ou operação com retorno
    // function multiplicarPorTres(valor){
    //     return valor* 3;
    // }
    // // console.log (multiplicarPorTres(10)) - 'ex: 1'
    // resultado = multiplicarPorTres(20);
    // console.log(resultado)
// 9 - OPERADORES
    // - Operadores Aritiméticos (matemáticos)
    // - Operadores de Atribuição
    // - Operadores de Comparação
    // - Operadores Lógicos
    // - Operadores Bitwise
// 9.1 - Operadores Aritiméticos
// (+),(-),(*),(/),(**) - Cálculos
    // let salario = 1400;
    // console.log(salario + salario);
    // console.log(salario - salario);
    // console.log(salario * salario); 
    // console.log(salario / salario); 
    // console.log(5 ** 5); 
// (++),(--) - Incrementando/Decrementando
    // let idade = 18;
    // console.log(idade++);
    // console.log(idade); - '19'
    // console.log(idade--);
    // console.log(idade); - '17'
    // console.log(++idade); - '19'
    // console.log(--idade); - '17'
// 9.2 - Operadores de Atribuição
    // valorPcGamer = 5000;
    // valorPcGamer += valorPcGamer; - 'Isso seria a mesma coisa de valorPcGamer = valorPcGamer + valorPcGamer;'
    // console.log(valorPcGamer);
    // valorPcGamer -= valorPcGamer; - 'Isso seria a mesma coisa de valorPcGamer = valorPcGamer - valorPcGamer;'
    // console.log(valorPcGamer);
// 9.3 - Operadores de Igualdade (Comparação)
// Igualdade estrita - (Mais Recomendado)
//     console.log( 1 === 1); '(True)'
//     console.log('1' === 1); '(False)'
// Igualdade solta - (Menos Recomendado devido a sua complexidade e variações!)
//     console.log(1 == 1); '(True)'
//     console.log('1' == 1); '(True)'
// 9.4 - Operador Ternário
    // MD10 ranked, se tiver jogado 10 partidas >= com rank : sem rank;
    // (let 'atributo' = 'atributocomparado' '+-=/*' 'valorcomparado' '?' 'True' : 'False';)
        // let partidas = 11
        // let rank = partidas >= 10 ? 'com rank' : 'sem rank';
        // console.log(rank);
// 9.5 - Operadores Lógicos
    // Operador Lógico 'e/and' (&&)
    // Retorna True se todos os operando forem true
        // let maiorDeIdade = true;
        // let carteiraDeTrabalho = true;
        // let podeAplicar = maiorDeIdade && carteiraDeTrabalho;
        // console.log(podeAplicar); 'Todas condições devem ser true, caso contrario, resultado será false'
            // let maiorDeIdade = false;
            // let carteiraDeTrabalho = true;
            // let serInteligente =  true;
            // let podeAplicar = maiorDeIdade && carteiraDeTrabalho && serInteligente;
            // console.log(podeAplicar); 
    // Operador Lógico 'ou/or' (||)
        // let maiorDeIdade = false;
        // let carteiraDeTrabalho = true;
        // let podeAplicar = maiorDeIdade || carteiraDeTrabalho;
        // console.log(podeAplicar); 'Apenas uma das condições precisam ser true para o resultado ser true'
        // 'Caso nenhuma delas forem true, ou seja, todas serem falsas, o resultado também será falso'
    // Junção de Operadores Lógicos (&& e ||)
            // let maiorDeIdade = false;
            // let carteiraDeTrabalho = false;
            // let serInteligente =  true;
            // let podeAplicar = maiorDeIdade || carteiraDeTrabalho && serInteligente;
            // console.log(podeAplicar);
    // Operador Lógico NOT (!) 
            // let maiorDeIdade = false;
            // let carteiraDeTrabalho = false;
            // let serInteligente =  true;
            // let podeAplicar = maiorDeIdade || carteiraDeTrabalho && serInteligente;
            // console.log(podeAplicar);
            // let candidatoResucado = !podeAplicar;    'candidatoRecusado =(CASO) !(NOT/NÃO)podeAplicar;'
            // console.log(candidatoResucado);
                // 'MEU EXEMPLO:'
                // let dominarHTML = true;
                // let dominarCSS = true;
                // let dominarJS = false;
                // let qualificadoSerProgramador = dominarHTML && dominarCSS && dominarJS;
                // console.log(qualificadoSerProgramador);
                // let nãopoderTrabalharComoDev = !qualificadoSerProgramador;
                // console.log(nãopoderTrabalharComoDev);
// 9.6 - Comparações não boleanos
    // Falsy 
        // undefined
        // null
        // false
        // 0
        // ' '
        // NaN Not a Number (Valor inválido em cálculos matemáticos)
    // Truthy
        // Qualquer valor ou atributo que não seja um Falsy
        // Ex: false || 'rafael' ('rafael')
        // Ex2: false || 1 (1)
        // Ex3: false || 1 || 3 (1) - { (||) ou/or sempre vai retornar o primeiro valor verdadeiro e ignorar o resto.}
        // let corPersonalizada = 'vermelho';
        // let corPadrao = 'azul';
        // let corPerfil = corPersonalizada || corPadrao;
        // console.log(corPerfil);
// 9.7 - Invertendo valores finais
    // let a = 'vermelho';
    // let b = 'azul';
    
    // let c = a;
    // a = b;
    // b = c;

    // console.log(a);
    // console.log(b);
// 10 - If..Else
    // Se a hora estiver entre 06:00 até 12:00 será 'Bom Dia', se a hora estiver entre 12:00 até 18:00 será
    // 'Boa Tarde', caso contrario, será Boa Noite.
    // let hora = 7;
    //  if(hora > 6 && hora < 12) {
    //     console.log('Bom Dia');
    //  }
    // else if(hora >12 && hora <18) {
    //     console.log('Boa Tarde');
    // }
    // else {
    //     console.log('Boa Noite')
    // }
// 11 - Switch..Case
    // let permissao = 'adm'
    //     switch (permissao){
    //         case 'usuario':
    //             console.log('Bom Dia Usuário');
    //         break
    //         case 'desenvolvedor':
    //             console.log('Bom Dia Criador');
    //             break
    //         case 'adm':
    //             console.log('Bom Dia Administrador!')
    //         break
    //         default: console.log('Usuário não identificado')
    //     }
// 12 - Loop/Laço
    // For
    // While
    // Do.. while
    // For.. in
    // For..off
// For
        // for(let i = 1; i <=7; i++) {
        //     console.log('EU VÁRIAS VEZES',i);
        // }
        // for(let i = 1; i <8; i++){
        //    if(i % 2 !==0) {
        //     console.log('ESTOU BIRUTA', i);
        //     }
        // }
            // CUIDADO, LOOP INFITO KKK
            // for(let i = 20; i >8; i++){
            //     if(i % 2 !==0) {
            //      console.log('ESTOU BIRUTA', i);
            //      }
// While loop
    // let i = 5;
    // while(i >=5){
    //     if(i % 2 !==0){
    //         console.log('Biruta Maximo',i)
    //     }--i;
// Do..While
    // let i = 2
    //     do{
    //         console.log('NÃO CAIA EM UM LOOPING PFV', i); 
    //     i++;
    //     } while(i<=10)
// Loop For..in
    // const pessoa = {
    //     nome: 'Marcos' ,
    //     idade: 18 , 
    //     altura: 1.60
    // };
    
    // for(let chave in pessoa){
    //     console.log(chave, pessoa.nome)
    // }
    // const cores = ['Vermelho', 'Azul' , 'Rosa']
    
    // for(let indice in cores)
    // console.log(indice, cores[indice])
// Loop For..of
    // const cores = ['Rosa','Roxo','Preto','Branco'];
    // for(let cor of cores){
    //     console.log(cor)
    // }
// Retorne o valor maior
    // let oValor = valorMaior(15,9);
    // console.log(oValor);
    // function valorMaior(numero1, numero2){
    //     if(numero1 > numero2){
    //   return numero1
    // }
    // else return numero2
    // }
    
    
    // let oValor = valorMaior(15,9);
    // console.log(oValor);
    // function valorMaior(numero1, numero2){
    //   return numero1 > numero2? numero1 : numero2;
    // }
// FizzBuzz
        // Divisível por 3 => Fizz
        // Divisível por 5 => Buzz
        // Divisível por 3 e 5 => FizzBuzz
        // Não é divisível por 3 e 5 => entrada
        // Não é um número => 'não é um número'
            // const resultado = fizzbuzz('oi');
            // console.log(resultado);

            // function fizzbuzz(entrada){
            
            //     if(typeof entrada !=='number')
            //         return 'não é um número'
            //     if(entrada % 3 ===0 && entrada % 5 ===0)
            //         return 'FizzBuzz';
            //     if(entrada % 3 !==0 && entrada % 5 !==0)
            //         return entrada;          
            //     if(entrada % 3 ===0)
            //         return 'Fizz';
            //     if(entrada % 5 ===0)
            //     return 'Buzz';
            // }
// Medidor de velocidade
    // Velocidade maxima de até 70km
    // a cada 5km acima do limite você ganha 1 ponto
    // Math.Floor()
    // caso pontos maior que 12 -> Carteira Suspendida
        // verificadorDeVelocidade(1000);

        // function verificadorDeVelocidade(velocidade){
        //     if(velocidade <= 70 )
        //     console.log('ok');
        //     if(Math.floor((velocidade - 70) / 5 )>=12)
            
        //     console.log('Carteira Suspendida');
        //     else if (velocidade >70)
        //     console.log('Pontos:'+ Math.floor(((velocidade - 70) / 5)));
        // }
    // ATRIBUINDO CONSTANTES E LIMPANDO/SIMPLIFICANDO O CÓDIGO
        //     verificadorDeVelocidade(129);

        //     function verificadorDeVelocidade(velocidade){
        //         const velocidadeMaxima = 70;
        //         const kmPorPonto = 5
        //         const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto))
        //         if(velocidade <= velocidadeMaxima )
        //         console.log('ok');
        //         if(pontos >= 12)
        //         console.log('Carteira Suspendida');
        //         else if (velocidade >velocidadeMaxima)
        //         console.log('Pontos:'+ pontos);
        // }
//Par ou Impar
    // Receber uma quantidade de valores para avaliar
    // função exibe se cada valor é impar ou par
        // exibirTipo(5);
        // function exibirTipo(limite){
        // for(let i = 0; i<= limite; i++){
        //     if(i % 2 ===0)
        //     console.log(i,'PAR')
        //     else 
        //     console.log(i,'IMPAR')
        // }
        // }
// Encontre o string
    // Criar um método para ler propriedades de um objeto e
    // exibir somente as propriedades do tipo string que estão nesse objeto
    // const filme = {
    //     titulo: 'Vingadores',
    //     ano: 2018,
    //     diretor: 'Robin',
    //     personagem: 'Thor'
    // }
    // exibirPropriedades(filme)
    // function exibirPropriedades(obj){
    //     for(let prop in obj){
    //         if(typeof obj[prop] ==='string')
    //         console.log(prop,obj[prop])
    //     }
    // }
// Multiplos de 3 e 5
    // Criar função somar que retorna a
    // soma de todos os multiplos de 3 e 5

    // Multiplos de 3
    // 3,6,9...
    // Multiplos de 5
    // 5,10...

    // Somando os multiplos
    // armazenar os multiplos de 3
    // armazenar os multiplos de 5
    // somar os dois
        // somar(20);
        // function somar(limite){
        //     let mult3 = 0;
        //     let mult5 = 0;
        //     for(i = 0; i<= limite; i++){
        //         if(i % 3 ===0)
        //         mult3 += i;
        //         if(i % 5 ===0)
        //         mult5 += i;
        //     }
        //     console.log(mult3 + mult5);
        // }
// Exercíicio média escolar
    // obter a média a partir de um array
    // 0-59 F
    // 60-69 D
    // 70-79 C
    // 80-89 B
    // 90-100 A
        // const array = [70,70,80];

        // console.log(mediaDoAluno(array));

        // function mediaDoAluno(notas){      
        // const media = calcularMedia(notas);
            
        //     if(media < 59) return 'F';
        //     if(media < 69) return 'D';
        //     if(media < 79) return 'C';
        //     if(media < 89) return 'B';
        //     if(media > 90) return 'A';
        // } 
        // function calcularMedia(array){
        //     let soma = 0;
        //     for(let valor of array){
        //     soma += valor;
        //     }
        //     return soma/(array.length);
        // }
// Contador de Asteriscos
    // Criar uma função que exibe a quantidade de * que aquela linha possui
    // exibirAsteriscos(5);

    //     function exibirAsteriscos(linhas){
            // let padrao = '';             
            // for(let linha = 0;linha <= linhas; linha++){ 
            //     padrao += '*';      
            //     console.log(padrao);
            // }
                // for(let linha = 1; linha<= linhas; linha++){
                //     let padrao = '';
                //     for(let i = 0; i < linha; i++)
                //     padrao += '*';
                //     console.log(padrao)
                // }
         // }
// Números Primos
    // Criar uma função para mostrar todos os números dentro de um limite selecionado
        // exibirNumerosPrimos(15);

        //     function exibirNumerosPrimos(limite){
        //         for(let numero = 2; numero<= limite; numero++){
        //             if(numeroPrimo(numero)) console.log(numero);
        //         }
        //     }
        //     function numeroPrimo(numero){
        
        //         for(let divisor = 2; divisor < numero; divisor++){
        //             if(numero % divisor ===0) {
        //                 return false;
        //             }
        //         }
        //         return true;
        //     }
// 12 - Factory Function
    // const pcGamer = {
    //     processador: 'Ryzen 3 3200G',
    //     placaMae: 'A320 Asus',
    //     capacidadeMemoriaRAM: 16 + '' +'GB',
    //     fonte: 500 +  'W' + ' ' + 'GameMax',
    //     ligar : function(){
    //         console.log('Ligando Computador...')
    //     }
    // }
// PASSANDO PARA FACTORY FUNCTION (Facilitador de 'Criação')
    // function criarPcGamer(processador,placaMae,capacidadeMemoriaRAM,fonte){
    //    return {
    //     processador,
    //     placaMae,
    //     capacidadeMemoriaRAM: capacidadeMemoriaRAM + ' ' + 'GB' + ' ' + 'RAM',
    //     fonte,
    //     ligar(){
    //         console.log('Ligando Computador...')
    //     }
    // }
    // }
    // const pcGamer1 = criarPcGamer('Ryzen 5 5600G','Tomahawk B540', 32, 800 + ' ' + 'GameMax');
    // console.log(pcGamer1);
// 13 - Constructor Functions
            // camelCase - umDoisTresQuatroCinco
                // function criarPcGamer(processador,placaMae,capacidadeMemoriaRAM,fonte){
                //    return {
                //     processador,
                //     placaMae,
                //     capacidadeMemoriaRAM: capacidadeMemoriaRAM + ' ' + 'GB' + ' ' + 'RAM',
                //     fonte,
                //     ligar(){
                //         console.log('Ligando Computador...')
                //     }
                // }
                // }
                // const pcGamer1 = criarPcGamer('Ryzen 5 5600G','Tomahawk B540', 32, 800 + ' ' + 'GameMax');
                // console.log(pcGamer1);
            // Palcal Case - UmDoisTresQuatroCinco
                // function PC_Gamer(processador,placaMae,capacidadeMemoriaRAM,fonte){
                //     this.processador = processador,
                //     this.placaMae = placaMae,
                //     this.capacidadeMemoriaRAM = capacidadeMemoriaRAM + 'GB' + ' ' + 'RAM',
                //     this.fonte = fonte,
                //     this.ligar = function (){
                //         console.log('Ligando Computador...')
                //     }
                // }
                // const pc = new PC_Gamer('Ryzen 3 2200G','AsRock B320',8, '500W Gigabyte')
                // console.log(pc);
// 14 - Natureza dinâmica dos objetos
    // const pessoa = {
    //     altura: 1.70,
    //     nome: 'Messi',
    //     nacionalidade: 'Argentino'
    // }
    // pessoa.peso = 65;
    // pessoa.contatar = function(){
    //     console.log('contatando Messi');
    // }
    // delete pessoa.altura;
    // delete pessoa.peso;
    // delete pessoa.contatar;
    // pessoa.idade = 35 + ' ' + 'Anos';
    // console.log(pessoa);
// 15 - Clonar Objetos
    // Objeto Alvo:
        // const pcGamer = {
        //     processador: 'Ryzen 3 3200G',
        //     placaMae: 'A320 Asus',
        //     capacidadeMemoriaRAM: 16 + '' +'GB',
        //     fonte: 500 +  'W' + ' ' + 'GameMax',
        //     ligar : function(){
            //     console.log('Ligando Computador...')
        //     }
        // }
    // Método 1
        // const clonePcGamer = Object.assign({
        //     placaVideo: 'RTX 3080 Gigabyte'- 'Capacidade de alteração'
        // },pcGamer);
        // console.log(clonePcGamer);
    // Método 2
        // const clonePcGamer2 = {...pcGamer};
        // console.log(clonePcGamer2);
// 16 - Math - Utilizar o site guia (Mozilla)
    // Existem diversas funcionalidade com Math
    // Alguns exemplos são:
    // Math.random() - Gera um valor aleatório, e pode ser configurado com um valor max e um valor min
    // Math.floor() - Arredonda um valor 'não exato', como número decimal para o valor mais baixo desse decimal
    // Ex: 4.2 ===> 4
    // Existem inumeros outros com diversas funcionalidades que podem ser utilizadas
// 17 - String Objeto - Utilizar o site guia (Mozilla)
    // Tipo Primitivo
        // const mensagem = 'minha primeira mensagem';
    // Tipo Objeto
        // const outraMensagem = new String('bom dia');
// Funcionalidades do console
    // Tudo abaixo seria usado no console (-) = mensagem do console
        //typeof mensagem - "string"
        //typeof outraMensagem - "object"
        //outraMensagem.length - 7 (COMPRIMENTO)
        //outraMensagem[2] - "m" (indice da mensagem)
        //mensagem.includes('primeira') - true
        //mensagem.includes('vermelho') - false
        //mensagem.startsWith('verde') - false
        //mensagem.startsWith('minha') - true
        //mensagem.endsWith('mensagem') - true 
        //mensagem.indexOf('primeira') - 6 [indice de quando x mensagem na string]
        //mensagem.replace('minha','sua') - "sua primeira mensagem"
        //mensagem.trim() - "minha primeira mensagem" [Esse comando remove espaços excedentes na string]
        //mensagem.split(' ') - 0: "minha"/ 1: "primeira"/ 2: "mensagem" [Divide/separa as palavras com espaço entre elas]
// 18 - Template Literal
    // Sequências de Escape
        // '[\n = Quebra de linha]' [Metodo antigo e poluído]
            // const mensagem = 'Primeira Linha\nSegunda \'Linha\''; - 
            // console.log(mensagem)
        // Object {}
        // Boolean true,false
        // string '',""
    // Template (``)[Novo metodo, mais limpo e literal]
//     const mensagemLiteral =
// `Minha mensagem
// de forma 'literal'

// mantendo a formatação

// sem poluir`;
//     console.log(mensagemLiteral);
    // Substituir váriavel com Template [DESTAQUE]
//     const nome = 'Marcos';
//     const mensagem = 
// `Olá ${nome}, tenho ${10+8} anos.`; - 'Substituindo ou colocando valores com o Template'
// console.log(mensagem);
// 19 - Data 
    // const data1 = new Date();
    // console.log(data1);
    // const data2 = new Date('April 06 2023 18:30');
    // console.log(data2);
    // const data3 = new Date(2023,02,16,18,32);
    // console.log(data3);
    // data2.setFullYear(2024);
    // console.log(data2);
        // [NO CONSOLE]
            // data2.toDateString() - [Transformar data em string]
            // 'Sat Apr 06 2024' 
            // data2.toTimeString() - [Transformar hora em string]
            // '18:30:00 GMT-0300 (Horário Padrão de Brasília)'
            // data2.toISOString() - [Transformar data em informações/dados para usar em Banco de Dados]
            // '2024-04-06T21:30:00.000Z'
// Objeto endereço
    // Criar um objeto endereço que contenha:
    // Rua
    // Cidade
    // CEP
    // exibirEndereço(Endereço)
        // const endereco1 = {
        //     rua: 'José Antônio de Magalhães',
        //     cidade: 'Caldas Novas',
        //     CEP: 82537 + '-' + '091'
        // };
        // exibirEndereco(endereco1)
        
        // function exibirEndereco(endereco){
        //     for(chave in endereco)
        //     console.log(chave,endereco[chave]);
        // }
// Encontre a igualdade
    //     function Endereco(rua,cidade,cep){
    //         this.rua = rua,
    //         this.cidade = cidade,
    //         this.cep = cep
    //     };

    //     const endereco1 = new Endereco('A','B','C')
    //     const endereco2 = new Endereco('A','B','C')

    //     function saoIguais(endereco1,endereco2){
    //         // [COMPARANDO SE AS PROPRIEDADES SÃO IGUAIS]
    //       return endereco1.rua === endereco2.rua &&
    //             endereco1.cidade === endereco2.cidade &&
    //             endereco1.cep === endereco2.cep
    //     }
    //     console.log(saoIguais(endereco1,endereco2));

    //     function temEnderecoMemoriaIgual(endereco1,endereco2){
    //         // [COMPARANDO SE A REFERÊNCIA DO OBJETO APONTA PARA O MESMO 'LOCAL NA MEMORIA'!]
    //         return endereco1 === endereco2
    //     }
    // console.log(temEnderecoMemoriaIgual(endereco1,endereco2));
// Postagem
    // let postagem = {
    //     titulo: 'a',
    //     mensagem: 'b',
    //     autor: 'c',
    //     visualizacoes: 10,
    //     comentarios: [
    //         {autor: 'a', mensagem: 'b'},
    //         {autor: 'a', mensagem: 'b'}
    //     ],
    //     estaAoVivo: true

    // };
    // console.log(postagem);
// Postagem com construction function
    // function Postagem(titulo,mensagem,autor){
    //     this.titulo = titulo,
    //     this.mensagem = mensagem,
    //     this.autor = autor,
    //     this.visualizacoes = 0,
    //     this.comentario = [],
    //     this.estaAoVivo = false
    // };
    // let postagem1 = new Postagem('The Title','The Message','The Author');
    // console.log(postagem1);
    // for(info in postagem1){
    //     console.log(info,postagem1[info])
    // };
// Faixa de preços
    // tooltips/minimo/maximo
    // Primeira Opção
        // let faixa = [
        //     {tooltips: 'Até R$700',minimo: 0,maximo:700},
        //     {tooltips: 'de R$700 a R$1000',minimo: 700,maximo:1000},
        //     {tooltips: 'R$1000 ou mais',minimo: 1000,maximo:99999}
    
        // ]
        // for(info in faixa){
        //     console.log(info,faixa[info])
        // };
    // Segunda Opção (Factory Function)
        //     function faixaDePreco(tooltips,minimo,maximo){
        //         return{
        //             tooltips,
        //             minimo,
        //             maximo
        //         };
        //     };
        //    let faixa2 = [
        //     faixaDePreco('Até R$700',0,700),
        //     faixaDePreco('de R$700 a R$1000',700,1000),
        //     faixaDePreco('R$1000 ou mais',1000,99999)
        //    ];
        //     console.log(faixa2);
    // Terceira Opção (Constructor Function)
        // function Faixa(tooltips,minimo,maximo){
        //     this.tooltips = tooltips,
        //     this.minimo = minimo,
        //     this.maximo = maximo
        // };
        // let faixa3 = [
        //     new Faixa('Até R$700',0,700),
        //     new Faixa('de R$700 a R$1000',700,1000),
        //     new Faixa('R$1000 ou mais',1000,99999)
        // ];
        // console.log(faixa3);
// 20 - ARRAYS
    // Add Novos Elementos
    // Encontrar Elementos
    // Remover Elementos
    // Dividir Elementos
    // Dividir Arrays
    // Combinar Arrays
//20.1 Adicionando elementos em um Array
    // const numeros = [1,2,3];
    //     // Add no inicio
    //         numeros.unshift(0); - 'Adicionando um elemento no começo'
    //         console.log(numeros);
    //     // Add no meio
    //         numeros.splice(2,0,'a'); - 'Primeiro elemento é a posição que deseja inserir um no elemento (2)'
    //                                    'Segundo elemento é quantos elementos seriam substituidos/deletados apos o novo valor inserido(0)'
    //                                    'Terceiro elemento é o que valor/elemento que deseja atribuir'
    //         console.log(numeros);
    //     // Add no final
    //         numeros.push('ultimo'); - 'Adicionando um elemento no final'
    //         console.log(numeros);
//20.2 Encontrando elementos dentro de um array (Tipo Primitivo)
    // const numeros = [1,2,3,4];
    // console.log(numeros.indexOf(3)); - 'Encontra um elemento dentro de um array e diz qual o seu indice'
    // // Outra situação
    // console.log(numeros.indexOf(5)); - 'O valor não (5) não foi encontrado, logo foi respondido com -1'
    // // Situação 2
    // const numeros = [1,2,3,4];
    // console.log(numeros.indexOf('1')); - 'Valor não foi encontrado, pq a busca pelo valor também verifica a propriedade, se é um numero ou não e etc.'
    // // Encontrando o ultimo elemento alvo
    // const numeros = [1,2,3,4,1,5];
    // console.log(numeros.lastIndexOf(1)); - 'Vai procurar e encontrar o ultimo valor alvo, caso possua mais de um em uma array'
    // // Numero existe ou não
    // const numeros = [1,2,3,4];
    // console.log(numeros.indexOf(2) !==-1); - 'Maneira antiga e mais complicada'
    // // Maneira mais facil e atualizada
    // console.log(numeros.includes(2));
//20.3 Encontrando elementos dentro de um array do Tipos Referência
    // const marcas = [
    //     {id: 1, nome: 'A'},
    //     {id: 2, nome: 'B'}
    // ];
    // console.log(marcas.find(function(marca){
    //     return marca.nome === 'A';
    // }));
// Arrow Functions (Funções de seta) - Forma mais simplificada de encontrat um elemento dentro de um array do tipo referência
    // const comment = [
    //     {user: 1, msg: 'Oi'},
    //     {user: 2, msg: 'Olá'}
    // ];
    // console.log(comment.find((message) => message.msg === 'Olá' )); - 'Funciona apenas se houver apenas um elemento dentro do (function) [message]'
// 20.4 - Removendo elementos dentro de um array
    // const numeros = [2,2,3,4];
    // // Inicio - Removendo o primeiro elemento
    // const primeiro = numeros.shift(); - 'constante primeiro foi utilizada para mostrar o numero que foi removido no console'
    // console.log(primeiro); - 'numero removido no console'
    // console.log(numeros);
    // // Meio
    // const meio = numeros.splice(3,1);
    // console.log(meio);
    // console.log(numeros);
    // // Final - Removendo último elemento
    // const ultimo = numeros.pop();
    // console.log(ultimo);
    // console.log(numeros);
// 20.5 - Esvaziando um array
    // //Solução 1 - 'Apaga apenas as referências do array (numeros) e não de todos'
    // let numeros = [1,2,3,4,5,6];
    // let outros = numeros;
    // numeros = [];
    // console.log(numeros); - 'Apaga apenas as referências do array (numeros) e não de todos'
    // console.log(outros);

    // //Solução 2 - 'Apaga a referência de todos os arrays' (MAIS RECOMENDADO E LIMPO)
    // let numeros = [1,2,3,4,5,6];
    // let outros = numeros;
    // numeros.length = 0;
    // console.log(numeros);
    // console.log(outros);

    // // Solução 3 - Utilizando o splice
    // let numeros = [1,2,3,4,5,6];
    // let outros = numeros;
    // numeros.splice(0,numeros.length);
    // console.log(numeros);
    // console.log(outros);
//20.6 - Combinando e Dividindo Arrays 
    // const primeiro = [1,2,3,4];
    // const segundo = [5,6,7,8];
    // //COMBINAR - Escolhe o array base + o array que deseja combinar
    // const combinado = primeiro.concat(segundo);
    // console.log(combinado);
    // //DIVIDIR - Indice onde vai comecar a divisão + limite
    // const dividir = combinado.slice(1); - 'Se não for colocado um limite, dividirá tudo após o indice'
    // console.log(dividir);
    // //DIVIDIR - (COM LIMITE
    // const dividir = combinado.slice(1,6); - 'Começa no indice indicado e termina uma posição antes do indice limite'
    // console.log(dividir);
// ATENÇÃO COM ARRAYS DE OBJETOS:
    // const primeiro = [{id:1}];
    // const segundo = [5,6,7,8];

    // primeiro[0].id = 10; - 'ALTERA O VALOR EM TODAS AS REFERÊNCIAS'
    // const combinar = primeiro.concat(segundo);
    // console.log(combinar);

    // const clonar = combinar.slice();
    // console.log(clonar);
// 20.7 Operador Spread - NOVA FORMA DE CLONAR/COMBINAR
    // const primeiro = [1,2,3,4];
    // const segundo = [5,6,7,8];
    // //COMBINAR
    // const combinado = [...primeiro,...segundo];
    // console.log(combinado);
    // //ADICIONANDO COM SPREAD
    // const add = [...primeiro,'TO NO MEIO',...segundo,'TO NO FIM'];
    // console.log(add);
    // //CLONANDO COM SPREAD
    // const clone = [...primeiro];
    // console.log(clone);
// 20.8 fotEach - Iterando um Array
    // // Antiga Maneira
    // const numeros = [1,2,3,4,5];
    // for(numero of numeros)
    //     console.log(numero);
    // // Maneira forEach
    // const numeros = [1,2,3,4,5,6];
    // numeros.forEach((numero,indice) => console.log(numero,indice));
    // const numerosAoContrario = [9,8,7,6,5];
    // numerosAoContrario.forEach((numero,indice) => console.log(numero,indice));
// 20.9 join - Juntando Arrays
    // const numeros = [1,2,3,4,5];
    // const combinado = numeros.join('.');
    // console.log(combinado);
    // const numeros2 = [1,2,3,4,5];
    // const combinado2 = numeros2.join('-');
    // console.log(combinado2);
    // const numeros3 = [1,2,3,4,5];
    // const combinado3 = numeros3.join(' ');
    // console.log(combinado3);
    
    // // SEPARAR - SPLIT
    // const frase = 'Bom Dia, Meu Nobre';
    // const separado = frase.split(' ');
    // console.log(separado);

    // // Slug - URL de SITES
    // const frase = 'Bom Dia, Meu Nobre';
    // const separado = frase.split(' ');
    // console.log(separado);
    // separado.splice(1,1,'Dia');
    // console.log(separado.join('-'));
// INPUT no Console
    // let idade = prompt('Qual sua idade ?')
    // if(idade < 18){
    // alert('Você é menor de idade!')
    // }
// DOM 
    // Manipulação do HTML usando o JavaScript
    // document.getElementById('campoDeComentario').innerText = 'Esse é o meu com';
    // document.getElementById('TESTE').innerText = 'Testzão';
    // document.getElementById('TESTE').innerText = 'TESTE' - [NO CONSOLE[FORMA QUE CONSEGUI]]
