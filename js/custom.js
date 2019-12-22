$(".s-btn2").click(function(){
    $(".search-form").toggle();   
});

$(document).ready(function(){
    $('.mixit-all-content').mixItUp(); 
    $('.mixit-single-content').magnificPopup({
		  delegate: 'a',
		  type: 'image',	
          gallery: {
              enabled: true
            },   
	   }); // mixit & magnificPopUp initialization
    
    $('#bar1').barfiller({
        barColor:'#1cb9c7',
        duration:1000
    }); // barfiller1 initialiation
    $('#bar2').barfiller({
        barColor:'#1cb9c7',
        duration:1500
    }); // barfiller2 initialiation
    $('#bar3').barfiller({
        barColor:'#1cb9c7',
        duration:2000
    }); // barfiller3 initialiation
    $('#bar4').barfiller({
        barColor:'#1cb9c7',
        animateOnResize:true,
        duration:500
    }); // barfiller4 initialiation
    var swiper = new Swiper('.swiper-container', {
              slidesPerView: 4,
              spaceBetween: 30,
              autoHeight:true,
              loop: true,
              loopFillGroupWithBlank: true,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
              breakpoints: {
                1024: {
                  slidesPerView:4,
                  spaceBetween: 30,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
                575: {  
                  slidesPerView: 1,
                  centeredSlides:true
                },
                320: {
                  slidesPerView: 1,
                  centeredSlides: true,
                } 
              } 
            }); // swiper carousel
           
        
        // scrolling Top
        
        $(window).scroll(function(){
            if($(this).scrollTop() >40){
                $('#topbtn').fadeIn();
            } else{
                $('#topbtn').fadeOut();
            }
        });
        
        $("#topbtn").click(function(){
            $('html ,body').animate({scrollTop :0},800);
        });
    
});