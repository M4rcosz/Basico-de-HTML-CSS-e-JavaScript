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
        //    let i = 1;
        //    while(i <=limite){
        //         a = i
        //         i = limite
        //     if(i % 2 !==0){
        //         console.log(i + 'IMPAR');
        //     }
        //     i = a
        // }++i;
        //     while(i <=limite){
        //         b = i
        //         i = limite
        //      if(i % 2 ===0){
        //         console.log(i + 'PAR');
        //     }
        //     i = b
        //     }++i;
        // }





// let i = 5;
    // while(i >=5){
    //     if(i % 2 !==0){
    //         console.log('Biruta Maximo',i)
    //     }--i;