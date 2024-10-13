

// ========================================
// sticky navigation
// ========================================
const heroSection  = document.querySelector(".hero-section");

const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];

  if(ent.isIntersecting == false){
    document.body.classList.add("sticky")
  } else{
    document.body.classList.remove("sticky")

  }
console.log(ent)

}, 
{root:null, 
  threshold: 0,}
)
// when the hero section end part reached then we need to show the sticky navigation
observer.observe(heroSection);



// ========================================
//  how to add swiper in JS
// ========================================


new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ========================================
//  how to add media queries in JS
// ========================================

const myJsmedia = (widthSize) => {
  if(widthSize.matches) {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
    else{
      new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
    });
  }
};

const widthSize = window.matchMedia("(max-width:780px)");

myJsmedia(widthSize);

widthSize.addEventListener('change', myJsmedia);

// ========================================
//  scroll to top
// ========================================


const footer = document.querySelector(".footer-section");
      
const scrollElem = document.createElement("div");
scrollElem.classList.add("scrol-top-style");

// I am adding the button element inside the div element
scrollElem.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footer.before(scrollElem);

const scrollToTop = () => {
heroSection.scrollIntoView({behavior:"smooth"})
};
scrollElem.addEventListener('click', scrollToTop);


// hamburger

const navbar_lists = document.querySelector(".header");
const mobile_navbar_btn = document.querySelector(".mobile-navbar-btn");


mobile_navbar_btn.addEventListener('click',()=> {
  navbar_lists.classList.toggle("active")
})


// ========================================
// creating a portfolio tabbed component
// ========================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const image_overlay = document.querySelectorAll(".image-overlay");


p_btns.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;

    p_btn.forEach((curElem) => 
    curElem.classList.remove("p-btn-active"))
    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum;
const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)
image_overlay.forEach((curElem) => curElem.classList.add("p-btn-inactive"))

img_active.forEach((curElem) => curElem.classList.remove("p-btn-inactive"));

}
     )





      

     