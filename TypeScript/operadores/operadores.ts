let subtracao = 4 - 1;

let a: number = 6;
let b: number = 1;

a + b; // 8
a - b; // 4
a * b; // 12
a / b; // 3

a > b // true
a < b // false
a > b && b < a // true
a > b || b > a // true

// Operadores Aritméticos

// + (Soma)
let c: number = 2;
let resultado = c + c;

//O resultado será 4
console.log(resultado)

// - (Subtração)
let d: number = 2;
let resultado2= d - d;

//O resultado será 0
console.log(resultado2)

let x: number = 4;
let y = -x;

//O valor será 4
console.log(x);

//O valor será -4
console.log(y);

// * (Multiplicação)
let e: number = 3;
let resultado3 = e * e;

//O resultado será 9
console.log(resultado3)


// / (Divisão)
let f: number = 4;
let g: number = 2
let resultado4 = f / g;

//O resultado será 2
console.log(resultado4)

// % Módulo
let h: number = 10;
let i: number = 3;
let resultado5 = h % i;

//O resultado será 1
console.log(resultado5)

// ++ (Incremento)
//Com o operador depois da variável o resultado da operação
//será o valor antes da soma.

let j: number = 10;

//O valor continuará sendo 10
console.log(j++);

//Apenas aqui o valor será 11
console.log(j);

//Ao utilizar o operador antes da variável o resultado é diferente,
//pois o resultado será mostrado após a soma, sendo assim:

let k: number = 10;

//O valor será 11
console.log(++k);

// -- (Decremento)
//Com o operador depois da variável o resultado da operação
//será o valor antes da subtração.

let l: number = 10;

//O valor contiuará sendo 10
console.log(l--);

//Apenas aqui o valor será 9
console.log(l);

//Ao utilizar o operador antes da variável o resultado é diferente,
//pois o resultado será mostrado após a subtração, sendo assim:

let m: number = 10;

//O valor será 9
console.log(--m);