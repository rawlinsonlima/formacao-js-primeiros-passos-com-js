/*
Elabore um algorítimo que calcule o que deve ser pago por um produto considerando o preço normal de etiqueta e a escolha das condições de pagamento.
Utilioize os Códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

Código Condição de pagamento:
   1 - À vista Débito = recebe 10% de desconto;
   2 - À vista dinheiro ou PIX = recebe 15% de desconto;
   3 - Em duas vezes no Cartão de crédito = preço normal
   4 - Acima de duas vezes = juros  de 10%
*/

let tagPrice = 200;
let paymentForm = 2;
let productCost;
if (paymentForm === 1) {
    productCost = tagPrice - (tagPrice * 0.1);
} else if (paymentForm === 2) {
    productCost = tagPrice - (tagPrice * 0.15);
} else if (paymentForm === 3) {
    productCost = tagPrice;
} else if (paymentForm === 4) {
    productCost = tagPrice + (tagPrice * 0.1);
} else {
    productCost = "Forma de pagamento inexistente, favor corrigir e tentar novamente";
}


console.log(productCost) 