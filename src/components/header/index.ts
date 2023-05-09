export class Header extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        const shadowDom = this.attachShadow({mode: "open"});
        const div = document.createElement("div");
        const style = document.createElement("style");

        div.style.backgroundColor = '#FF8282'
        div.style.width = '100%'
        div.style.height = '56px'
        // style.innerHTML = `
        //         width: 100%;
        //         height: 60px;
        //         background-color: #FF8282;
        // `

        // shadowDom.appendChild(style);
        shadowDom.appendChild(div);
    };
}
customElements.define("custom-header", Header)