/*
* @Author: 骆雨
* @Date:   2018-09-04 11:35:59
* @Last Modified by:   name
* @Last Modified time: 2018-09-10 11:09:05
*/
'use strict';
$(function(){
  //网站建设
  function tabs(obj, swiperObj, className) {
    var tabSwiper = new Swiper(swiperObj, {
      autoHeight: true,
      onSlideChangeStart: function() {
        $(obj + "." + className).removeClass(className);
        $(obj).eq(tabSwiper.activeIndex).addClass(className);
      }
    });
    $(obj).on('touchstart mousedown', function(e) {
      e.preventDefault();
      $(obj + "." + className).removeClass(className);
      $(this).addClass(className);
      tabSwiper.slideTo($(this).index());
    });
    $(obj).click(function(e) {
      e.preventDefault();
    });
  }
  $('.case_c >.hd > a').eq(0).addClass('on');
  tabs('.case_c >.hd > a', '.case_c', 'on');
  //网站建设结束
  //服务优势
  var advantage = new Swiper('.advantage_c_5_6', {
    pagination: '.advantage-pagination_5_6',
    paginationClickable: true,
    slidesPerView: 5,
    spaceBetween: 24,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  })
  //服务优势
  var i=0;
  //首页影藏菜单
  $(".change_logo_5").click(function(){
    $(".navbar_box_5_change_u").toggle();
  });

  //首页影藏菜单结束
  //计时器
  var iCount = setInterval(GetBack,1);
  function GetBack(){
    i++;
    if(i==3){
      i=0;
    }
    if ($(document).width()>760){
      $(".navbar_box_5_change_u").css({"display":"none"});
    }
    if ($(document).width()>760){
      $(".process dt").css({"pointer-events":"none"});
      $(".process dd").css({"display":"block"});
    }else{
      $(".process dl").css({"pointer-events":""});
    }
  }
  //计时器结束
  //服务领域
  var service = new Swiper('.service_c_5_6', {
    pagination: '.service-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  })
  //服务领域
  //点击显示合作流程
  $(".process dl").click(function(){
    $(this).children().toggle();
    $(".process dt").css({"display":"block"});
  })
  //点击显示合作流程结束
  //底部影藏电话
  $(".nav_r_box_5 a:nth-child(1)").hover(function(){
    $(".phone_number_5").toggle();
  })
  $(".nav_r_box_5 a:nth-child(2)").hover(function(){
    $(".phone_number_5_1").toggle();
  })
  $(".top_box_5_1 a:nth-child(1)").hover(function(){
    $(".Two-dimensional_code_5").toggle();
  })
  //底部影藏电话结束
  //主页轮播
  var n_hot = new Swiper('.carousel_5', {
    spaceBetween: 0,
    pagination: '.dian_5-pagination',
    paginationClickable: true,
    autoplay:2000,
    loop:true,
    autoplayDisableOnInteraction:false
  });
  //主页轮播结束
  //全网营销
  var n_hot = new Swiper('.tab_bd_5', {
    spaceBetween: 0,
    pagination: '.tab-pagination_5',
    paginationClickable: true,
    paginationType: 'progress',
    autoHeight: true,
    onSlideChangeEnd: function(swiper) {
      var j = swiper.activeIndex;
      $('.tab_hd_5 li').removeClass('on_5').eq(j).addClass('on_5');
    }
  });
  $('.tab_hd_5 li').on('click', function() {
    var i = $(this).index();
    $('.tab_hd_5 li').removeClass('on_5').eq(i).addClass('on_5');
    n_hot.slideTo(i, 1000, false);
  })
    //全网营销结束
    //易站通案例
    var market4_c = new Swiper('.market4_c_5', {
      pagination: '.m4-pagination_5',
      paginationClickable: true,
      slidesPerView: 3,
      spaceBetween: 15,
      breakpoints: {
        991: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 1
        }
      }
    })
    //易站通案例结束
    //花轮播
    var web1_c = new Swiper('.construction1_c', {
      pagination: '.service-pagination',
      paginationClickable: true,
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    })
    var case_img = new Swiper('.case_img', {
      slidesPerView: 3,
      spaceBetween: 15,
      nextButton: '.case_next',
      prevButton: '.case_prev',
      touchRatio: 0.2,
      centeredSlides: true,
      slideToClickedSlide: true,
      loop: true,
      loopedSlides: 3,
      breakpoints: {
        1199: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
    })
    var case_bimg = new Swiper('.case_bimg', {
      spaceBetween: 0,
      autoHeight: true,
      nextButton: '.case_bnext',
      prevButton: '.case_bprev',
      loop: true,
        // slidesPerView: 1,
        loopedSlides: 3,
      });
    case_img.params.control = case_bimg;
    case_bimg.params.control = case_img;
    //花轮播结束
  })




/*
* @Author: 王启华
* @Date:   2018-09-04 11:35:59
* @Last Modified by:   雷鑫
* @Last Modified time: 2018-09-07 20:10:11
*/

'use strict';
$(function(){
})

function tabs(obj,swiperObj,className) {
  var tabSwiper = new Swiper(swiperObj, {
    autoHeight: true,
    onSlideChangeStart : function() {
      $(obj+"."+className).removeClass(className);
      $(obj).eq(tabSwiper.activeIndex).addClass(className);
    }
  });
  $(obj).on('touchstart mousedown', function(e) {
    e.preventDefault();
    $(obj+"."+className).removeClass(className);
    $(this).addClass(className);
    tabSwiper.slideTo($(this).index());
  });
  $(obj).click(function(e) {
    e.preventDefault();
  });
}

$(function(){
  var service = new Swiper('.service_c',{
    pagination: '.service-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  })
  $('.case_c >.hd > a').eq(0).addClass('on');
  tabs('.case_c >.hd > a','.case_c','on');


  var advantage = new Swiper('.advantage_c',{
    pagination: '.advantage-pagination',
    paginationClickable: true,
    slidesPerView: 5,
    spaceBetween: 24,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  })

  var case_img = new Swiper('.case_img',{
    slidesPerView: 3,
    spaceBetween: 15,
    nextButton: '.case_next',
    prevButton: '.case_prev',
    touchRatio: 0.2,
    centeredSlides : true,
    slideToClickedSlide:true,
    loop : true,
    loopedSlides :3,
    breakpoints: {
      1199: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  })

  var case_bimg = new Swiper('.case_bimg', {
    spaceBetween: 0,
    autoHeight: true,
    nextButton: '.case_bnext',
    prevButton: '.case_bprev',
    loop : true,
        // slidesPerView: 1,
        loopedSlides :3,
      });
  case_img.params.control = case_bimg;
  case_bimg.params.control = case_img;

  var n_hot = new Swiper('.n_hot', {
    spaceBetween: 0,
    pagination: '.hot-pagination',
    paginationClickable: true
  });

  var web1_c = new Swiper('.web1_c',{
    pagination: '.service-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  })

  var n_hot = new Swiper('.tab_bd', {
    spaceBetween: 0,
    pagination: '.tab-pagination',
    paginationClickable: true,
    paginationType:'progress',
    autoHeight: true,
    onSlideChangeEnd: function (swiper) {
      var j=swiper.activeIndex;
      $('.tab_hd li').removeClass('on').eq(j).addClass('on');
    }
  });
  $('.tab_hd li').on('click',function(){
    var i=$(this).index();
    $('.tab_hd li').removeClass('on').eq(i).addClass('on');
    n_hot.slideTo(i,1000,false);
  })

  var market4_c = new Swiper('.market4_c',{
    pagination: '.m4-pagination',
    paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 15,
    breakpoints: {
      991: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 1
      }
    }
  })

  var we1_c = new Swiper('.we1_c',{
    pagination: '.we1-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 50,
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 40
      }
      ,
      640: {
        slidesPerView: 1,
        spaceBetween: 1
      }
    }
  })

  var tel1_c = new Swiper('.tel1_c',{
    pagination: '.tel1-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 50,
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 40
      }
      ,
      640: {
        slidesPerView: 1,
        spaceBetween: 1
      }
    }
  })

  var we3_c = new Swiper('.we3_c',{
    pagination: '.we3-pagination',
    paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 40
      }
      ,
      640: {
        slidesPerView: 1,
        spaceBetween: 1
      }
    }
  })
  var seo2_c = new Swiper('.seo2_c',{
    pagination: '.seo2-pagination',
    paginationClickable: true,
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      1199:{
        slidesPerView: 4,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 1
      }
    }
  })
  var seo3_c = new Swiper('.seo3_c',{
    pagination: '.seo3-pagination',
    paginationClickable: true,
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      1199:{
        slidesPerView: 4,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 1
      }
    }
  })

})


/*
* @Author: 余聪
* @Date:   2018-09-04 11:35:59
* @Last Modified by:   雷鑫
* @Last Modified time: 2018-09-07 20:10:11
*/

'use strict'
$(function(){
  var n_hot = new Swiper('.n_hot', {
    spaceBetween: 0,
    pagination: '.hot-pagination',
    paginationClickable: true,
    autoplay:2000,
    loop:true,
    autoplayDisableOnInteraction:false
  });
})