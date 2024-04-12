/* 
Desafio - Calcular valor de uma viagem

Você terá 5 Variáveis:
    1 - Preço do etanol;
    2 - Preço gasolina;
    3 - Qual combustível esta no carro
    4 - Consumo médio do Carro;
    5 - Distância em KM;

Imprimir a mensagem com o total no console:
*/

let precoEtanol = 4.45;
let precoGasolina = 6.9;
const kmPorLitroEtanol = 8;
const kmPorLitroGasolina = 10;
let distanciaKM = 100;
let tipoCombustivel = "etanol";

let precoCombustivel;
let kmPorLitro;

switch (tipoCombustivel) {
    case "etanol":
        precoCombustivel = precoEtanol
        kmPorLitro = kmPorLitroEtanol
        break;
    case "gasolina":
        precoCombustivel = precoGasolina
        kmPorLitro = kmPorLitroGasolina
        break;
}

let totalLitros = distanciaKM / kmPorLitro;
let calculo = totalLitros * precoCombustivel;


console.log(`Na viagem no total de ${distanciaKM} quilometros será gasto o total de ${totalLitros.toFixed(2)} litros de combustível e será pago o valor de R$ ${calculo.toFixed(2)}`);
