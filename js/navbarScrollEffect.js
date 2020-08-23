 $(document).ready(function(){
             $('html, body').css({'overflow':'visible'})
             
             $('.navbar-nav>li>a').on('click', function(){
                 $('.navbar-collapse').collapse('hide');
             });
             
             $('.home').click(function()
             {
              var x=$('#home').offset().top;
              $('body,html').animate({scrollTop:x-56},500);
             }); 
 
             $('.about').click(function()
             {
              var x=$('#about').offset().top;
              $('body,html').animate({scrollTop:x-56},500);
             }); 
             
             $('.projects').click(function()
             {
              var x=$('#projects').offset().top;
              $('body,html').animate({scrollTop:x-57},500);
             }); 
             
             $('.blog').click(function()
             {
              var x=$('#blog').offset().top;
              $('body,html').animate({scrollTop:x-57},500);
             });
             
             $('.contact').click(function()
             {
              var x=$('#contact').offset().top;
              $('body,html').animate({scrollTop:x-56},500);
             });
             $(window).scroll(function(){
	            $('nav').toggleClass('scrolledd', $(this).scrollTop() > 50);
             });
        });   