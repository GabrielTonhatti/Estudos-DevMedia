// Boolean
let powerYourDreams: boolean = true;

// Number
let decimal: number = 2001;
let hexadecimal: number = 0x7d5; //2005
let binario: number = 0b11111011101; //2013
let octal: number = 0o3744; //2020

// String
let cor: string = "green";

let texto: string = `sala de TypeScript`;
let frase: string = `Seja Bem-vindo à nova ${texto}`;

console.log(frase)
//O resultado será 'Seja Bem-vindo à nova sala de TypeScript


// Array
let numeros: number[] = [3, 6, 0];

let numeros2: Array<number> = [3, 6, 0];

// Tuple
//Variavel do tipo tuple onde o primeiro valor é uma string e o segundo é um number
let x: [string, number];

// OK - Pois o primeiro parâmetro é string e o segundo number
x = ["Seamus", 10];

// Erro - Pois o primeiro parâmetro é number e o segundo string
// x = [10, "Seamus"]; // Erro

// Enum
//Cada item representa um índice. Vermelho = 0, Verde = 1, Azul = 2
enum Cor { Vermelho, Verde, Azul }
//o valor da variável corFundo será '1'.
let corFundo: Cor = Cor.Verde;

// Any
let naoIdentificado: any = 4; //Essa variável é um numero.
naoIdentificado = "Agora é uma string";
naoIdentificado = false; //Agora é um boolean

// Void
function aviso(): void {
    console.log("Esta é uma mensagem de aviso!");
}

// Null e Undefined
//Não há muito o que fazer com esse tipo de variável
let u: undefined = undefined;
let n: null = null;

// Never
// Funções que retornam 'never' devem possuir um final inalcançável
function error(message: string): never {
    throw new Error(message);
}

// O tipo inferido é never
function fail() {
    return error("Algo falhou");
}

// Funções que retornam 'never' devem possuir um final inalcançável
function infiniteLoop(): never {
    while (true) {
    }
}

// Object
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Erro
// create("string"); // Erro
// create(false); // Erro
// create(undefined); // Erro
