// classe abstrata pois eu não vou precisar criar instância da classe View
export abstract class View<T> {
    // elemento é protected para eu poder acessa-lo nas classes filhas(as que extendem View)
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    // template é uma função abstrata pois eu tenho que implementa-la nas classes filhas(as que extendem View)
    abstract template(model: T): string;

}