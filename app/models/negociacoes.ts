import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }
    // a função lista me devolve um array readonly de Negociação, quer dizer que é apenas leitura
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}