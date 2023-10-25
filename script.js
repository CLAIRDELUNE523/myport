window.addEventListener('scroll', function() {
   var nav = document.querySelector('nav');
   var header = document.querySelector('header');
   if (window.scrollY > 400) { // スクロール位置の閾値を設定
      header.classList.add('scrolled');
   } else {
      header.classList.remove('scrolled');
   }
   if(window.scrollY > 400){
      nav.style.padding = '10px 30px'
   }else{
      nav.style.padding = '100px 30px'
   }
});