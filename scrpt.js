const navLinks = document.querySelectorAll(".navLnk");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () =>
{
    //toggle moblie menu visiability
    document.body.classList.toggle("show-mobile-menu");
});

//close menu when the clsbtn is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//close menu when the navLnk is clicked
navLinks.forEach(link =>{
  link.addEventListener("click", () => menuOpenButton.click())
});
new Swiper('.plns-wrapper', {
  loop: true,
  spaceBewteen: 100,

  // pagination bullets
  pagination: 
  {
    el: '.swpier-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: 
  {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // responsive breakpoints 
  breakpoints:
  {
    0:
    {
        slidesPerView: 1
    },
    
    768:
    {
        slidesPerView: 2
    },

    1024: 
    {
        slidesPerView: 2
    },
  }
});

document.querySelectorAll('.plns-wrapper img') .forEach(image =>
  {
  image.onclick = () =>{
    document.querySelector('.popupImg').style.display = 'block';
    document.querySelector('.popupImg img').src = image.getAttribute('src')
  }
});

document.querySelector('.popupImg span').onclick = () =>
  {
    document.querySelector('.popupImg').style.display = 'none';

}