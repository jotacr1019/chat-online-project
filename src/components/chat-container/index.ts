import { state } from "../../state"

type Message = {
    user: string,
    message: string
}

class Chat extends HTMLElement {
    connectedCallback(){
        state.subscribe(()=>{
            const currentState = state.getState();
            // console.log(currentState);
            this.messages = currentState;
            // this.messages.user = currentState.user
            console.log(currentState);
            this.render();
        })
        this.render()
        // state.init()
    }

    messages: Message[] = []

    render() {
        const currentState = state.getState();
        this.messages = currentState;
        const chatWindow = document.createElement('div'); // Create a new div element
        chatWindow.id = 'chat-window';
        chatWindow.className = 'messages-container container2 chat-window';
        chatWindow.style.cssText = `
          display: flex;
          flex-direction: column;
          gap: 4px;
          height: 100%;
          padding: 10px 12px;
          border-top: 1px solid;
          overflow-y: scroll;
        `;
      
        const messagesContainer = document.createElement('div'); // Create a new div element to hold the messages
        messagesContainer.style.cssText = `
          display: flex;
          flex-direction: column-reverse; /* Reverse the order of messages */
          gap: 4px;
        `;
      
        // Append the messages in reverse order to the messages container
        this.messages['messages'].reverse().forEach((msj) => {
          const messageDiv = document.createElement('div');
          const userSpan = document.createElement('span');
          const contentDiv = document.createElement('div');
      
          if (currentState.user === msj.user) {
            messageDiv.className = 'div-uni-1';
            userSpan.className = 'span-1';
            userSpan.textContent = msj.user || 'Usuario';
            contentDiv.className = 'msjs-1';
            contentDiv.textContent = msj.message;
          } else {
            messageDiv.className = 'div-uni-2';
            userSpan.textContent = msj.user || 'Usuario';
            contentDiv.className = 'msjs-2';
            contentDiv.textContent = msj.message;
          }
      
          messageDiv.appendChild(userSpan);
          messageDiv.appendChild(contentDiv);
          messagesContainer.appendChild(messageDiv);
        });
      
        // Append the messages container to the chat window
        chatWindow.appendChild(messagesContainer);
        this.innerHTML = '';
        this.appendChild(chatWindow);

        chatWindow.scrollTop = chatWindow.scrollHeight;
      }
      

    // render(){
    //     const currentState = state.getState();
    //     this.messages = currentState;
    //     console.log(this.messages);
    //     // function addMessageToContainer(message) {
    //     //     var container = document.getElementById("chat-window");
    //     //     var messageNode = document.createElement("p");
    //     //     messageNode.textContent = message;
    //     //     container.appendChild(messageNode);
    //     //     container.scrollTop = container.scrollHeight;
    //     //   }          
    //     // console.log(this.messages.map((m)=> m));
    //     this.innerHTML = `
    //     <div id="chat-window" class="messages-container container2 chat-window" style="
    //                                         display: flex;
    //                                         flex-direction: column;
    //                                         gap: 4px;
    //                                         height: 100%;
    //                                         padding: 10px 12px;
    //                                         border-top: 1px solid;
    //                                         overflow-y: scroll;
    //                                         // scroll-snap-type: y proximity;
    //                                         // overscroll-behavior-y: contain;
    //                                         // position : relative; 
    //                                         // bottom:0;
    //                                         // z-index: -1;
    //     ">
    //         ${this.messages['messages'].map((msj)=>{
    //             if(currentState.user === msj.user){
    //                 return `
    //                 <div class="div-uni-1">
    //                     <span class="span-1">${msj.user || "Usuario"}</span>
    //                     <div class="msjs-1">${msj.message}</div>
    //                 </div>
    //                 `
    //             }
    //             else{
    //                 return `
    //                 <div class="div-uni-2">
    //                     <span>${msj.user || "Usuario"}</span>
    //                     <div class="msjs-2">${msj.message}</div>
    //                 </div>
    //                 `
    //             }
    //         }).join("")}
    //     </div>
    //     `
    //     scrollToBottom()
    //     // updateScroll()
    //     // const element = document.querySelector(".messages-container");
    // }
}

customElements.define("custom-chat", Chat)

// function updateScroll(){
//     const element = document.querySelector(".messages-container");
//     element.scrollTop = element.scrollHeight - element.scrollHeight + 1;
// }
function scrollToBottom() {
    var chatWindow = document.getElementById("chat-window");
    if (chatWindow.scrollTop + chatWindow.offsetHeight >= chatWindow.scrollHeight) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }
  
