// classe abstrata pois eu não vou precisar criar instância da classe View
export abstract class View<T> {
    // elemento é protected para eu poder acessa-lo nas classes filhas(as que extendem View)
    protected elemento: HTMLElement;
    private escapar = false;
    // '?' Parâmetros opcionais devem ser sempre os últimos parâmetros.
    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        }else {
            throw Error (`O seletor ${seletor} não existe no DOM.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>\s\S*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
    // template é uma função protected para permitir que ela seja chamada nela mesma ou nas filhas
    // template é uma função abstrata pois eu tenho que implementa-la nas classes filhas(as que extendem View)
    protected abstract template(model: T): string;

}