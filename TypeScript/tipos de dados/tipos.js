// Boolean
var powerYourDreams = true;
// Number
var decimal = 2001;
var hexadecimal = 0x7d5; //2005
var binario = 2013; //2013
var octal = 2020; //2020
// String
var cor = "green";
var texto = "sala de TypeScript";
var frase = "Seja Bem-vindo \u00E0 nova " + texto;
console.log(frase);
//O resultado será 'Seja Bem-vindo à nova sala de TypeScript
// Array
var numeros = [3, 6, 0];
var numeros2 = [3, 6, 0];
// Tuple
//Variavel do tipo tuple onde o primeiro valor é uma string e o segundo é um number
var x;
// OK - Pois o primeiro parâmetro é string e o segundo number
x = ["Seamus", 10];
// Erro - Pois o primeiro parâmetro é number e o segundo string
// x = [10, "Seamus"]; // Erro
// Enum
//Cada item representa um índice. Vermelho = 0, Verde = 1, Azul = 2
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
//o valor da variável corFundo será '1'.
var corFundo = Cor.Verde;
// Any
var naoIdentificado = 4; //Essa variável é um numero.
naoIdentificado = "Agora é uma string";
naoIdentificado = false; //Agora é um boolean
// Void
function aviso() {
    console.log("Esta é uma mensagem de aviso!");
}
// Null e Undefined
//Não há muito o que fazer com esse tipo de variável
var u = undefined;
var n = null;
// Never
// Funções que retornam 'never' devem possuir um final inalcançável
function error(message) {
    throw new Error(message);
}
// O tipo inferido é never
function fail() {
    return error("Algo falhou");
}
// Funções que retornam 'never' devem possuir um final inalcançável
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Erro
// create("string"); // Erro
// create(false); // Erro
// create(undefined); // Erro
