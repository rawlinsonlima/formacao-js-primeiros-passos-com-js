/*
O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição  de peso de uma pessoa adulta

Fómula do IMC:
IMC = peso /  (altura * altura)

Elabore um algorítimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição
    - Abaixo de 18.5 = Abaixo do peso;
    - Entre 18.5 e 25 = Peso normal;
    - Entre 25 e 30 = Acima do peso;
    - Entre 30 e 40 = Obeso;
    - Acima de 40 = Obesidade Grave.

obs: nesse e nos próximos exercícios trabalharei atribuindo nomes em inglês
*/

let name = "Francisco Chico";
let weight = 106;
let heightInMeters = 1.80;

let BMI = weight / Math.pow(heightInMeters,2) ; // Math.pow() Biblioteca nativa para usar calculos matematicos.


let bmiCondition ;
if (BMI  < 18.5) {
    bmiCondition = "Abaixo do peso"
}else if ( BMI >= 18.5 && BMI <= 25 ){
    bmiCondition = "com Peso Normal"
}else if (BMI > 25 && BMI <= 30){
    bmiCondition = "Acima do peso"
}else if (BMI > 30 && BMI <= 40){
    bmiCondition = "Obeso"
} else {
    bmiCondition = "Obesidade grave"
}
//console.log(BMI) >>> Usado na condição de teste anteriormente
//console.log(bmiCondition) >>> Usado na condição de teste anteriormente

console.log(`O Paciente ${name} está com o IMC de ${BMI.toFixed(2)} e se classifica na condiçao de ${bmiCondition}`)