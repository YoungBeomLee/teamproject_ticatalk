window.addEventListener('DOMContentLoaded',function(){
  let sec1 = document.querySelector(".sec1-main-wrap");
  let sec1Height = sec1.clientHeight;
  let nav = document.querySelector(".tkt-nav");
  let navBtn = document.querySelectorAll(".tkt-nav-link");
  let navDepth = document.querySelectorAll(".multi-collapse");
  let logoImg = document.querySelector("#logo");
  let loginIcon = document.querySelector("#login-icon");

  // useful function
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
  function navBtnLight() {
    navBtn.forEach((gnbBtns) => {
      gnbBtns.classList.remove("text-dark");
    });
    nav.style.backgroundColor = "transparent";
    nav.style.backdropFilter = "blur(0px)";
  }
  function logoDark() {
    logoImg.setAttribute("src", "img/tkt-logo-b.svg");
    loginIcon.setAttribute("src", "img/icon/myicon-black.png");
  }
  function logoLight() {
    logoImg.setAttribute("src", "img/tkt-logo-w.svg");
    loginIcon.setAttribute("src", "img/icon/myicon-white.png");
  }

  nav.addEventListener("mouseenter", function () {
    logoDark();
    navBtnDark();
  });
  nav.addEventListener("mouseleave", function () {
    logoLight();
    navBtnLight();
    delCName(navBtn, "nav-on");
    delCName(navDepth, "show");
    if (window.scrollY > sec1Height) {
      logoDark();
      navBtnDark();
    }
  });

  navBtn.forEach(function (b) {
    b.addEventListener("click", function () {
      delCName(navBtn, "nav-on");
      delCName(navDepth, "show");
      b.classList.add("nav-on");
    });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY + 100 > sec1Height) {
      logoDark();
      navBtnDark();
    } else {
      logoLight();
      navBtnLight();
    }
  });

  let mainSlideBoxes = document.querySelectorAll(".sec1-main-slide-box");
  mainSlideBoxes.forEach((msbs, index) => {
    msbs.setAttribute("data-rank", index + 1);
  });

  // section5 
  let searchBtn = document.querySelectorAll('.sec5-nav-link');
  searchBtn.forEach((sbbtn)=>{
    sbbtn.addEventListener('click',function(){
      delCName(searchBtn,'search-nav-on');
      sbbtn.classList.add('search-nav-on');
    })
  })

  const kopisUrl = "kopis-trans.json";
  const searchTab=document.querySelector('.search');
  const resultImg=document.querySelectorAll('.search-result .card img');
  const resultDate=document.querySelectorAll('.search-result .date');
  const resultTitle=document.querySelectorAll('.search-result .title');
  let kopisData;

  get_data();
      async function get_data() {
      const response = await fetch(kopisUrl);
          kopisData = await response.json();
          mainSearch(kopisData);
          return kopisData;
      };
  function mainSearch(kopisData){
    kopisData.total.forEach((g)=>{
        let dataGenre = g.genre;
    searchTab.addEventListener('click',function(e){
        let searchGenre = e.target.getAttribute('data-genre');
        if(searchGenre==dataGenre){
            for(k=0;k<6;k++){
                resultImg[k].setAttribute('src',g.sub[k].img)
                resultDate[k].innerText = `${g.sub[k].std}`
                resultTitle[k].innerText = `${g.sub[k].title}`
                };
            };
          });   
      });
  };


  let couponClose = document.querySelector(".coupon-close");
  let purposeClose = document.querySelector(".purpose-close");
  let couponPop = document.querySelector("#coupon-pop");
  let purposePop = document.querySelector("#purpose-pop");

  couponClose.addEventListener("click", function(){
    couponPop.classList.add("d-none");
    couponPop.classList.remove("d-flex");
  });
  purposeClose.addEventListener("click", function(){
    purposePop.classList.add("d-none");
    purposePop.classList.remove("d-flex");
  });
});