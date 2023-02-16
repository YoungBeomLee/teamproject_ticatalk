document.addEventListener("DOMContentLoaded", function () {
 
 //nav-hover 함수
 let nav = document.querySelector('nav');
 let logoImg = document.querySelector('#logo');
 let loginIcon = document.querySelector('#login-icon');
 nav.addEventListener("mouseover",function(){
   logoImg.setAttribute("src","../img/tkt-logo-b.svg");
   loginIcon.setAttribute("src","../img/icon/myicon-black.png");
 })
 nav.addEventListener("mouseout",function(){
   logoImg.setAttribute("src","../img/tkt-logo-w.svg");
   loginIcon.setAttribute("src","../img/icon/myicon-white.png");
 })
 //collapse-remove 함수
 let buttons = document.querySelectorAll('.nav-button button');
 let targets = document.querySelectorAll('.multi-collapse');
 buttons.forEach(function(b){
   b.addEventListener('click',function (){
     remove();
   })
 });
 function remove(){
   for(r=0; r<targets.length; r++){
     targets[r].classList.remove('show');
   }
 };     
 //carousel-indicator-hover함수
 let pagers = document.querySelectorAll('.carousel-indicators button');
 console.log(pagers);
  for(p=0;p<pagers.length;p++){
   pagers[p].addEventListener("mouseover",function(){
     this.nextElementSibling.style.opacity="1";
   });

   pagers[p].addEventListener("mouseout",function(){
     this.nextElementSibling.style.opacity="0";
   
   });



  }
});