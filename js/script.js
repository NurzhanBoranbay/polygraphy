window.addEventListener('DOMContentLoaded', () => {

   const burger = document.querySelector('.burger');
   burger.addEventListener('click', () => {
      const clickHeaderList = document.querySelector('.header__item');
      if (!clickHeaderList.classList.contains('active')) {
         clickHeaderList.classList.add('active');
      } else {
         clickHeaderList.classList.remove('active');
      }
   });

});

