export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // a função lista me devolve um array readonly de Negociação, quer dizer que é apenas leitura
    lista() {
        return this.negociacoes;
    }
}
