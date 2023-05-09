import { state } from "../../state";
import "../text/index";

export class Form extends HTMLElement {
    shadowDom = this.attachShadow({mode: "open"});
    constructor(){
        super();
        this.render();
    }
    render(){
        // const texto = this.getAttribute('label') || "";
        // const placeholder = this.getAttribute('placeHolder');
        const btnText = this.getAttribute('textBtn');
        this.shadowDom.innerHTML = `
            <Form class="form" style="
                                display: flex;
                                flex-direction: column;
                                gap: 8px;
                                padding: 4px;
                                // border: solid 1px #000;
                                border-radius: 4px;
            ">
                <div style="
                            display: flex;
                            flex-direction: column;
                            gap: 6px;
                    ">
                    <custom-text label="email"></custom-text>
                    <input type="text" name="email" placeholder="Ingresa un email" style="
                                                                                    box-sizing: border-box;
                                                                                    font-size: 1.2rem;
                                                                                    font-weight: 500;
                                                                                    height: 50px;
                                                                                    width: 100%;
                                                                                    padding: 0 8px;
                                                                                    color: var(--color-principal);
                                                                                    // background-color: #e1f3f0;
                                                                                    border: 2px solid #000;
                                                                                    border-radius: 4px;
                    "></input>
                </div>
                <div style="
                            display: flex;
                            flex-direction: column;
                            gap: 6px;
                    ">
                    <custom-text label="Tu nombre:"></custom-text>
                    <input type="text" name="name" placeholder="Ingresa un nombre" style="
                                                                                    box-sizing: border-box;
                                                                                    font-size: 1.2rem;
                                                                                    font-weight: 500;
                                                                                    height: 50px;
                                                                                    width: 100%;
                                                                                    padding: 0 8px;
                                                                                    color: var(--color-principal);
                                                                                    // background-color: #e1f3f0;
                                                                                    border: 2px solid #000;
                                                                                    border-radius: 4px;
                    "></input>
                </div>
                <div style="
                            display: flex;
                            flex-direction: column;
                            gap: 6px;
                    ">
                    <custom-text label="Room" for="room-select"></custom-text>    
                    <select class="id" name="rooms" id="room-select" style="
                                                            box-sizing: border-box;
                                                            font-size: 1.2rem;
                                                            font-weight: 500;
                                                            height: 50px;
                                                            width: 100%;
                                                            padding: 0 8px;
                                                            color: var(--color-principal);
                                                            // background-color: #e1f3f0;
                                                            border: 2px solid #000;
                                                            border-radius: 4px;
                    ">
                        <option value="">--Elige una opción--</option>
                        <option value="nuevo">Nuevo room</option>
                        <option value="existente">Room existente</option>
                    </select>
                </div>
                <div class="div-id" style="
                            display: flex;
                            flex-direction: column;
                            gap: 6px;
                            visibility: hidden;
                    ">
                    <custom-text label="Room id:"></custom-text>
                    <input type="text" name="id" placeholder="Ingresa un id" style="
                                                                                    box-sizing: border-box;
                                                                                    font-size: 1.2rem;
                                                                                    font-weight: 500;
                                                                                    height: 50px;
                                                                                    width: 100%;
                                                                                    padding: 0 8px;
                                                                                    color: var(--color-principal);
                                                                                    // background-color: #e1f3f0;
                                                                                    border: 2px solid #000;
                                                                                    border-radius: 4px;
                    "></input>
                </div>
                <button style="
                    font-family: 'Roboto';
                    font-size: 1.3rem;
                    font-weight: 500;
                    height: 50px;
                    width: 100%;
                    margin-top: 14px;
                    color: #000;
                    background-color: #9CBBE9;
                    border: none;
                    border-radius: 4px;
        ">${btnText}</button>
            </Form>
        `

        const formEl = this.shadowDom.querySelector(".form");
        const idDiv:any = formEl.querySelector(".id")
        const idEl:any = this.shadowDom.querySelector(".div-id")
        
        idDiv.addEventListener('change', (e)=>{
            const f = e.target as any;
            if(f.value === 'existente'){
                idEl.style.visibility = 'visible'
            }
        })
        
        formEl?.addEventListener("submit", (e)=>{
            e.preventDefault();
            // const f = e.target as any;
            // const value = f.text.value;
            const data = new FormData(e.target as any);
            const value = Object.fromEntries(data.entries());
            console.log(value);
            if(value.rooms === 'existente'){
                state.setRoomId(value.id)
                state.setUser(value.name, value.email)
                state.authUser(()=>{
                    state.getRoom()
                })
            } else {
                state.setUser(value.name, value.email)
                state.createUserInDB(()=>{
                    state.createRoom()
                })
            }
            // if (value !== ""){
            //     this.shadowDom.innerHTML = `
            //         <div style="
            //                 display: flex;
            //                 justify-content: center;
            //                 align-items: center;
            //                 gap: 8px;
            //                 height: 50px;
            //         ">
            //             <h3 style="
            //                     font-size: 1.8rem;
            //                     margin: 0;
            //                     color: var(--color-principal);
            //             ">Nombre guardado</h3>
            //         </div>
            //     `
            // }
            // console.log(state.getState());
        })
    };
}
customElements.define("custom-form-u", Form)