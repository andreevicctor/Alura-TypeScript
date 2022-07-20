import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }
    // a função lista me devolve um array readonly de Negociação, quer dizer que é apenas leitura
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}