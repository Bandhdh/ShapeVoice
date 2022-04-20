const list = document.querySelector('.header__menu'); 
const btn = document.querySelector('.header__toggle-btn');
btn.addEventListener('click', function(){
  list.classList.toggle('active');
  btn.classList.toggle('active');
})





$(function () {
  $('.reviews__slider').slick({
    appendArrows:('.reviews__box-arrows'),
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
})



const dropDownMenu = document.querySelectorAll('.header__select');
const dropDownLists = document.querySelectorAll('.header__select-list');
const body = document.querySelector('.body');

body.addEventListener('click', function(){
  dropDownLists.forEach(el => {
    el.classList.remove('acctive')
    console.log("body click");
  });
})

dropDownMenu.forEach(el => {
  el.addEventListener('click', function(event){
    const dropDownList = this.querySelector('.header__select-list')
    event.stopPropagation();
    if (dropDownList.classList.contains('acctive')) {
      dropDownList.classList.remove('acctive')
      console.log("if yes");
    } else{
      dropDownLists.forEach(function(item){
      item.classList.remove('acctive')
      dropDownList.classList.add('acctive')
      console.log("in no");
    })
  }})
})


