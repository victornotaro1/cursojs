/* primitivos (imutaveis) - string, number, booleanm, undefimed,null(bigint,symbol)
= valor

REFERENCIA (MUTAVEL) - ARRAY, OBJETIC,FUNCTION - PASSADOS POR REFERENCIA
*/


// let a = 'A';
// let b = a; // copia
// console.log(a, b);

// let a = [1,2,3];
// let b = a;
// console.log(a,b);

// a.push(4);
// console.log(a, b);
// b.pop();
// console.log(a, b);

const a = {
    nome:"luiz",
    sobenome:'victor'
};
const b = {...a};
a.nome='joao'
console.log(a,b);

