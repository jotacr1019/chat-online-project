// import { initWelcome } from "./pages/welcome/index"
import { initRouter } from "./router"
import { state } from "./state"

(function(){
    // state.init()
    const container = document.querySelector(".contenedor");
    initRouter(container)
})()