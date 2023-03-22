const passagemdoLucas = {
    classe: 'economica',
    linhaAerea: 'Gol',
    escala: 'comUmaEscala',
    mesDoVoo: 'julho',
    destino: 'saoPaulo'
}

const passagemdaPaula = {
    classe: 'executiva',
    linhaAerea: 'Latam',
    escala: 'direto',
    mesDoVoo: 'setembro',
    destino: 'Noronha'
}

function Passagem(classe, linhaAerea, escala, mesDoVoo, destino) {
    this.classe = classe;
    this.linhaAerea = linhaAerea;
    this.escala = escala;
    this.mesDoVoo = mesDoVoo;
    this.destino = destino;
}

const passagemdoLucas2 = new Passagem("economica", "Gol", "comUmaEscala", "julho", "saoPaulo");
const passagemdaPaula2 = new Passagem("executiva", "Latam", "direto", "setembro", "Noronha");

console.log(passagemdoLucas2);
console.log(passagemdaPaula2);


