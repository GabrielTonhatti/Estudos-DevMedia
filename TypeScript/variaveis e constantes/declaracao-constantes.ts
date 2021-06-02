const nome: string = "Marcos";
const aceleracaoGravidade: number = 9.81;

//Aqui ocorrerá um erro de compilação, pois não é possível mudar o valor de uma constante.
// aceleracaoGravidade = 9.8;

//Isso está correto
const aceleracaoGravidade2 = 9.81;

// Isso está incorreto, o valor deve ser definido no momento da declaração
// const aceleracaoGravidade;
// aceleracaoGravidade = 9.81;

//Esse valor nunca será alterado pela aplicação
const aceleracaoGravitacional: number = 9.81;

//Esse valor poderá ser alterado pela aplicação
let velocidadeAtual: number = 0;

velocidadeAtual = 100;