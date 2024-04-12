/* 
Desafio - Calcular valor de uma viagem

Você terá 3 Variáveis:
    1 - Preço do combustível;
    2 - Consumo médio do Carro;
    3 - Distância em KM;

Imprimir a mensagem com o total no console:
*/

let precoCombustivel = 5.45;
const kmPorLitro = 15;
let distanciaKM = 758;

let totalLitros = distanciaKM / kmPorLitro;
let calculo = totalLitros * precoCombustivel;

console.log(`Na viagem no total de ${distanciaKM} quilometros será gasto o total de ${totalLitros.toFixed(2)} litros de combustível e será pago o valor de R$ ${calculo.toFixed(2)}`)