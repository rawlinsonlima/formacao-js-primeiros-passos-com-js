/*
Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre na faculdade calcule e imprima a sua média e a sua classificação conforme a fórmula abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
    - Média menor que 5 = Reprovado
    - Média entre 5 e 7 = Recuperação
    - Média acima de 7 = Aprovado

obs: nesse e nos próximos exercícios trabalharei atribuindo nomes em inglês
*/

let studentName = "Matheus Ramalho"
let testResult1 = 4
let testResult2 = 5
let testResult3 = 5

let average = (testResult1 + testResult2 + testResult3) / 3

let finalresult 
if (average < 5) {
    finalresult = "Reprovado"
} else if (average >= 5 && average <= 7) {
    finalresult = "Para a Recuperação"
} else finalresult = "Aprovado"

console.log(`O aluno ${studentName} ficou com a Média de ${average.toFixed(2)} pontos e o foi ${finalresult}`)