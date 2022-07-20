export class Negociacao {
    constructor(_data, 
    // definindo a propriedade como 'public readonly' torna a propriedade de somente leitura não pode ser modificada
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
    // Métodos estáticos podem ser acessados diretamente pela classe sem precisarmos de uma instância desta mesma classe.
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}
