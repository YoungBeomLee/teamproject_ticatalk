window.addEventListener('DOMContentLoaded',function(){
  let couponPop = document.querySelector("#coupon-pop");
  let purposePop = document.querySelector("#purpose-pop");
  let couponClose = document.querySelector(".coupon-close");
  let purposeClose = document.querySelector(".purpose-close");
  let purposeToday = document.querySelector('.pp-not-today');
  let couponToday = document.querySelector('.cp-not-today');
  let visited = false;

  function hidePopup(who){
    who.classList.add("d-none");
    who.classList.remove("d-flex");
  }

  function setCookie(name,value,exp){
    let date = new Date();
    date.setDate(date.getDate() + exp);
    let expDate = date.toUTCString();
    let bakeCookie = '';
    bakeCookie += name + '=' + value + ';'
    bakeCookie += 'Expires=' + expDate;
    document.cookie = bakeCookie;
  }

  function findCookie(name){
    let allcookie = document.cookie.split(';');
    allcookie.forEach((eachCookie)=>{
      if(eachCookie.indexOf(name) > -1){
        visited = true;
      }
    })
    if(visited){
      hidePopup(couponPop);
      hidePopup(purposePop);
    }else{
      couponPop.classList.remove("d-none");
      couponPop.classList.add("d-flex");
      purposePop.classList.remove("d-none");
      purposePop.classList.add("d-flex");
    }
  }
  findCookie('purpose');
  findCookie('coupon');

  purposeToday.addEventListener('click',function(){
    setCookie('purpose','pp-popup',1);
    hidePopup(purposePop);
  });
  purposeClose.addEventListener("click", function(){
    hidePopup(purposePop);
  });
  couponToday.addEventListener('click',function(){
    setCookie('coupon','cp-popup',1);
    hidePopup(couponPop);
  });
  couponClose.addEventListener("click", function(){
    hidePopup(couponPop);
  });

})