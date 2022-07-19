export class Negociacao {
    constructor(_data, 
    // definindo a propriedade como 'public readonly' torna a propriedade de somente leitura, após a criação
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // retornado a data de um modo que ela não possa ser modificada em tempo de execução
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
