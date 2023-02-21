window.addEventListener('DOMContentLoaded',function(){
  let nav = document.querySelector(".tkt-nav");
  let navBtn = document.querySelectorAll(".tkt-nav-link");
  let navDepth = document.querySelectorAll(".multi-collapse");
  let logoImg = document.querySelector("#logo");
  let loginIcon = document.querySelector("#login-icon");
  
  function delCName(target, clName) {
    target.forEach((targetAll) => {
      targetAll.classList.remove(clName);
    });
  }
  function navBtnDark() {
    navBtn.forEach((gnbBtns) => {
      gnbBtns.classList.add("text-dark");
    });
    nav.style.backgroundColor = "#f2f4f5b2";
    nav.style.backdropFilter = "blur(10px)";
  }
  function logoDark() {
    logoImg.setAttribute("src", "../img/tkt-logo-b.svg");
    loginIcon.setAttribute("src", "../img/icon/myicon-black.png");
  }

  nav.addEventListener("mouseenter", function () {
    logoDark();
    navBtnDark();
  });
  nav.addEventListener("mouseleave", function () {
    delCName(navBtn, "nav-on");
    delCName(navDepth, "show");
  });

  navBtn.forEach(function (b) {
    b.addEventListener("click", function () {
      delCName(navBtn, "nav-on");
      delCName(navDepth, "show");
      b.classList.add("nav-on");
    });
  });

});