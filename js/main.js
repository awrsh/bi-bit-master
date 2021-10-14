(function($) {
    "use strict";
    init_index_slider()
    /*****************************
     * Commons Variables
     *****************************/
    var $window = $(window),
        $body = $('body');

    /****************************
     * Sticky Menu
     *****************************/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });


    /*****************************
     * Off Canvas Function
     *****************************/
    (function() {
        var $offCanvasToggle = $('.offcanvas-toggle'),
            $offCanvas = $('.offcanvas'),
            $offCanvasOverlay = $('.offcanvas-overlay'),
            $mobileMenuToggle = $('.mobile-menu-toggle');
        $offCanvasToggle.on('click', function(e) {
            e.preventDefault();
            var $this = $(this),
                $target = $this.attr('href');
            $body.addClass('offcanvas-open');
            $($target).addClass('offcanvas-open');
            $offCanvasOverlay.fadeIn();
            if ($this.parent().hasClass('mobile-menu-toggle')) {
                $this.addClass('close');
            }
        });
        $('.offcanvas-close, .offcanvas-overlay').on('click', function(e) {
            e.preventDefault();
            $body.removeClass('offcanvas-open');
            $offCanvas.removeClass('offcanvas-open');
            $offCanvasOverlay.fadeOut();
            $mobileMenuToggle.find('a').removeClass('close');
        });
    })();




    /**************************
     * Offcanvas: Menu Content
     **************************/
    function mobileOffCanvasMenu() {
        var $offCanvasNav = $('.offcanvas-menu'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.mobile-sub-menu');

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<div class="offcanvas-menu-expand"></div>');

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, .offcanvas-menu-expand', function(e) {
            var $this = $(this);
            if ($this.attr('href') === '#' || $this.hasClass('offcanvas-menu-expand')) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                    $this.parent('li').find('li').removeClass('active');
                    $this.parent('li').find('ul:visible').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    mobileOffCanvasMenu();

    $(".swap-box .buy, .swap-box .sell").click(e=>{
      $(".swap-box .buy, .swap-box .sell").removeClass("active");
      $(e.currentTarget).addClass("active");
    });

    if($("#particles-js").length > 0)
      init_particle()

     
})(jQuery);
const navToggle = document.querySelector('.offcanvas-toggle');
const nav = document.querySelector('#mobile-menu-offcanvas');
const navoverlay = document.querySelector('.nav-overlay');
const close = document.querySelector('.offcanvas-close');

navToggle.addEventListener('click', function() {
    navShow();
})

close.addEventListener('click', function() {
    navHide();
})

navoverlay.addEventListener('click', function() {
    navHide();
})

function navShow() {
    navoverlay.classList.add('offcanvas-open')
    nav.classList.add('offcanvas-open')
}


function navHide() {
    navoverlay.classList.remove('offcanvas-open')
    nav.classList.remove('offcanvas-open')
}

// Menu_overlay



//------------------------------- particle-js
/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */


//------------------------------ particle-js
// Accordian 
const accor = document.querySelectorAll('.accordion-title');
accor.forEach(item => {
    item.addEventListener('click', function(){
        item.classList.toggle('active');
        const content = item.nextElementSibling;
        if(content.style.height){
            content.style.height = null
        }else{
            content.style.height = content.scrollHeight + 'px';
        }
    })
})
function init_particle() {
  particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
}
function init_index_slider() {
  const swiper1 = new Swiper('.swiper.btc-swiper', {
    effect: 'coverflow',
    slidesPerView: 3,
    autoplay:true,
    initialSlide: 2,
    spaceBetween: -100,
    centeredSlides:true,
    multipleActiveThumbs:false,
    autoScrollOffset:5,
    loop: true,
    coverflowEffect: {
      rotate: 70,
      depth: 400,
      modifier: 1,
      slideShadows:false
    },
    breakpoints:{
      320:{
        spaceBetween: 2,
        coverflowEffect: {
          rotate: 45,
          depth: 100,
          modifier: 1,
          slideShadows:false
        },
      }
    }
  });
  const swiper = new Swiper('.swiper.blog-swiper', {
    slidesPerView:4,  
    loop: true,
    autoplay:true,
    spaceBetween: 20,

    breakpoints:{
      320: {
        slidesPerView:1,
      },
      578: {
        slidesPerView:2,
      },
      1000: {
        slidesPerView:4,
      },
      1500: {
        slidesPerView:4,
      },
    }
  })
}
function ToggleMenu(e) {
  $(e.currentTarget).siblings(".menu").toggleClass('active')
}