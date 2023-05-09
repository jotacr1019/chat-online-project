// import { state } from "../../../state"
import "../../components/header/index" 
import "../../components/text/index"
import "../../components/form-u/index"
import { state } from "../../state";


export function initWelcome (params){
    const div = document.createElement("div");

    // const currentState = state.getState();
    div.innerHTML = `
        <custom-header class="header-welcome"></custom-header>
        <div class="container">
            <custom-text class="text-welcome" variant="title" label="Bienvenido(a) al chat"></custom-text>
            <custom-form-u class="form-welcome" label="Tu nombre:" placeHolder="Ingresa tu nombre" textBtn="Agregar"></custom-form-u>
            <button class="btn">Comenzar</button>
        </div>
        `
    div.className = "root-welcome";    

    const btnEl = div.querySelector(".btn");
    if(btnEl){
        btnEl.addEventListener("click", ()=>{
            const currentState = state.getState()
            if (currentState.user === ""){
                // state.setUser("Usuario")
            }
            params.goTo("/chat")
        })
    }

    return div;
}