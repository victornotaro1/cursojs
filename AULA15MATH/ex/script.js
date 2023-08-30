
const num1 = Number(prompt('Digite um Número'));
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num1;
texto.innerHTML += `<p>a raiz quadrada de 55 é: <strong>${num1 ** 0.5}</strong> </p>`;
texto.innerHTML += `<p>o ${num1} é inteiro: <strong>${Number.isInteger(num1)}</strong><p>`;
texto.innerHTML += `<p>é NaN: <strong> ${Number.isNaN(num1)}</strong><p>`;
texto.innerHTML += `<p>arredondado para baixo: <strong>${Math.floor(num1)} </strong><p>`;
texto.innerHTML += `<p>arredondado para cima: <strong>${Math.ceil(num1)}</strong></p>`
texto.innerHTML += `<p>com duas casas decimais: <strong> ${num1.toFixed(2)} </strong><p>`