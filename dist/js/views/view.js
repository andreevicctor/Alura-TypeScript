// classe abstrata pois eu não vou precisar criar instância da classe View
export class View {
    // '?' Parâmetros opcionais devem ser sempre os últimos parâmetros.
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>\s\S*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
