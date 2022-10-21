function verificar() {
    var n = Number(prompt("Digite o número que deseja verificar:"));

    var resposta = document.getElementById('resposta');

    if (n %2 == 0) {
        return resposta.innerHTML = (`O número ${n} é <mark>PAR</mark>!`);
    } else {
        return resposta.innerHTML = (`O número ${n} é <mark>ÍMPAR</mark>!`);
    }
}
