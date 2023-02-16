document.addEventListener("DOMContentLoaded", function () {
let chat = document.querySelector('iframe');
let chatcircle = document.querySelector('.chat-button');
chatcircle.addEventListener("click",function(){
  if(chat.style.height="0"){
    chat.classList.add("on");
  } else{
    chat.classList.remove("on");
    
  }
  
    
  })

});