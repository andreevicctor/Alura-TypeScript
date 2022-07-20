export class Negociacao {
    constructor(
        private _data: Date,
        // definindo a propriedade como 'public readonly' torna a propriedade de somente leitura não pode ser modificada
        public readonly quantidade: number,
        public readonly valor: number
    ){}
    // retornado a data de um modo que ela não possa ser modificada em tempo de execução
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}