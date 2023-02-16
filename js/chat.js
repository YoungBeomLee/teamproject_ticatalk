document.addEventListener("DOMContentLoaded", function () {
  let chat = document.querySelector('iframe');
  let chatcircle = document.querySelector('.chat-button');
  chatcircle.addEventListener("click",function(){
    if(chat.style.display=="block"){
      chat.style.display="none"
    } else{
      chat.style.display="block"
    }
  });
});