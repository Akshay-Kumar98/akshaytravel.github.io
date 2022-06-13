//  let navbar = document.querySelector('nav');

//  window.addEventListener('scroll',function(){
//      if(window.pageYOffset >= 84){
//          navbar.classList.add('active');
//      }

//      else{
//         navbar.classList.remove('active');
//     }
//  });

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $('nav').addClass('fixedbar');
    }

    else {
      $('nav').removeClass('fixedbar');
    }
  });
});


$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $('#change').addClass('text');
    }

    else {
      $('#change').removeClass('text');
    }
  });
});

function customshow() {

  setTimeout(function () {
    document.getElementById('bttn2').style.backgroundColor = "rgb(255,193,7)"
    document.getElementById('bttn1').style.backgroundColor = "white"
  }, 100);



  setTimeout(function () {
    document.getElementById('showcase').style.transform = "translateX(0)";
  }, 0);

}


function custombelow() {
  document.getElementById('showcase').style.transform = "translateX(-100%)";

  setTimeout(function () {
    document.getElementById('bttn2').style.backgroundColor = "white"
    document.getElementById('bttn1').style.backgroundColor = "rgb(255,193,7)"
  }, 100);

}

$(document).ready(function () {

  $('.brand-logo').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },

    ]
  });

});





$('.count').counterUp({
  delay: 10,
  time: 1000
});


$(document).ready(function () {

  $('.blog_post').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },

    ]
  });

});

$(document).ready(function () {

  $('.menuline').click(function () {
    $('.sidebar').toggleClass('head_nav');
  });

});





$(document).ready(function () {

  $(".scroll_btn").hide(0);
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $(".scroll_btn").show(500);
    } else {
      $(".scroll_btn").hide(500);
    }
  });


});


function moveto() {
  window.scrollTo(0, 0)
}

$(document).ready(function () {
  $('#india').click(function () {
    $('.dest_india').show(500);
    $('.dest_thailand').hide(500);
    $('.dest_australia').hide(500);
    $('.dest_africa').hide(500);
    $('.dest_europe').hide(500);
    $('.dest_america').hide(500);
    $('.dest_asia').hide(500);
    $('.dest_middleeast').hide(500);

  });

  $('#thailand').click(function () {
    $('.dest_india').hide(500);
    $('.dest_thailand').show(500);
    $('.dest_australia').hide(500);
    $('.dest_africa').hide(500);
    $('.dest_europe').hide(500);
    $('.dest_america').hide(500);
    $('.dest_asia').hide(500);
    $('.dest_middleeast').hide(500);

  });

  $('#australia').click(function () {
    $('.dest_india').hide(500);
    $('.dest_thailand').hide(500);
    $('.dest_australia').show(500);
    $('.dest_africa').hide(500);
    $('.dest_europe').hide(500);
    $('.dest_america').hide(500);
    $('.dest_asia').hide(500);
    $('.dest_middleeast').hide(500);

  });

  $('#africa').click(function () {
    $('.dest_india').hide(500);
    $('.dest_thailand').hide(500);
    $('.dest_australia').hide(500);
    $('.dest_africa').show(500);
    $('.dest_europe').hide(500);
    $('.dest_america').hide(500);
    $('.dest_asia').hide(500);
    $('.dest_middleeast').hide(500);

  });

  $('#europe').click(function () {
    $('.dest_india').hide(500);
    $('.dest_thailand').hide(500);
    $('.dest_australia').hide(500);
    $('.dest_africa').hide(500);
    $('.dest_europe').show(500);
    $('.dest_america').hide(500);
    $('.dest_asia').hide(500);
    $('.dest_middleeast').hide(500);

  });

  $('#america').click(function () {
    $('.dest_india').hide(500);
    $('.dest_thailand').hide(500);
    $('.dest_australia').hide(500);
    $('.dest_africa').hide(500);
    $('.dest_europe').hide(500);
    $('.dest_america').show(500);
    $('.dest_asia').hide(500);
    $('.dest_middleeast').hide(500);

  });

  $('#asia').click(function () {
    $('.dest_india').hide(500);
    $('.dest_thailand').hide(500);
    $('.dest_australia').hide(500);
    $('.dest_africa').hide(500);
    $('.dest_europe').hide(500);
    $('.dest_america').hide(500);
    $('.dest_asia').show(500);
    $('.dest_middleeast').hide(500);

  });

  $('#middleeast').click(function () {
    $('.dest_india').hide(500);
    $('.dest_thailand').hide(500);
    $('.dest_australia').hide(500);
    $('.dest_africa').hide(500);
    $('.dest_europe').hide(500);
    $('.dest_america').hide(500);
    $('.dest_asia').hide(500);
    $('.dest_middleeast').show(500);

  });

  $('#all').click(function () {
    $('.dest_india').show(500);
    $('.dest_thailand').show(500);
    $('.dest_australia').show(500);
    $('.dest_africa').show(500);
    $('.dest_europe').show(500);
    $('.dest_america').show(500);
    $('.dest_asia').show(500);
    $('.dest_middleeast').show(500);

  });


});

const openbox = () => {
  document.getElementById('opendiv').style.display = "initial";
}

const closebox = () => {
  document.getElementById('opendiv').style.display = "none";
}


$(document).ready(function () {
  $('.masonary').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
      enabled: true
    }

  });

});



