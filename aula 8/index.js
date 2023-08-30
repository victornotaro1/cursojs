const nome = 'luiz otavio';
const sobrenome = 'miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos,pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu imc é de ${imc.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);