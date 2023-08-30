console.log(100 / 0);
// let num2 = Math.floor(num1); pra baixo
// let num2 = Math.ceil(num1); pra cima
// let num2 = Math.round(num1); ele arredonda automatico
//console.log(Math.min(1,2,3,4,5,-10,20,1500,13));
// console.log(Math.max(1,2,3,4,5,-10,20,1500,13));
// const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
const num1 = prompt('digite seu numero:');
document.body.innerHTML += `a raiz quadrada de 55 é: <strong>${num1 ** 0.5}</strong> <br />`;
document.body.innerHTML += `o 55 é inteiro: <strong>${Number.isInteger(num1)}</strong></br>`;
document.body.innerHTML += `é NaN: <strong>${Number.isNaN(num1)}</strong></br>`;
document.body.innerHTML += `arredondado para baixo: <strong>${Math.floor(num1)} </strong></br>`;
document.body.innerHTML += `arredondado para cima: <strong>${Math.ceil(num1)}</strong></br>`
document.body.innerHTML += `com duas casas decimais: <string> ${Math.floor(num1 * 0.0)/0.0} </string></br>`