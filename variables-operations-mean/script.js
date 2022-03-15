document.getElementById("result");

let nome = "Thiago";

function calculate() {
    let notaPrimeiroBimestre = document.getElementById("nota1").value;
    let notaSegundoBimestre = document.getElementById("nota2").value;
    let notaTerceiroBimestre = document.getElementById("nota3").value;
    let notaQuartoBimestre = document.getElementById("nota4").value;

    let notalFinal = (
        (Number(notaPrimeiroBimestre) +
            Number(notaSegundoBimestre) +
            Number(notaTerceiroBimestre) +
            Number(notaQuartoBimestre)) /
        4
    ).toFixed(1);
    let situacao =
        notalFinal > 7
            ? `Aprovado, média ${notalFinal}`
            : notalFinal > 5
            ? `Em recuperação, média ${notalFinal}`
            : `Reprovado, média ${notalFinal}`;

    document.getElementById("result").innerHTML = situacao;
}

// Desafio -> dizer se aluno passou ou não
// Desafio 2 -> estilize fundo
// Desafio 3 -> escreva na página o que você está usando no console
// Desafio 4 -> conversor de temperaturas
// Desafio 5 ->
