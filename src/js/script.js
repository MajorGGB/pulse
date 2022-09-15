$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		autoplay: true,
		autoplaySpeed: 800,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/previos.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/next.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
				  dots: true,
				  arrows: false
				}
			}
		]
	  });



	  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this)
		  .index()).addClass('catalog__content_active');
	  });
	  // $('.catalog-item__link').each(function(i){
	  //   $(this).on('click', function(e){
	  //       e.preventDefault();
	  //       $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	  //       $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	  //   })
	  // })
	  // $('.catalog-item__back').each(function(i){
	  //   $(this).on('click', function(e){
	  //       e.preventDefault();
	  //       $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	  //       $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	  //   })
	  // })

	  function toggleSlide(item) {
		$(item).each(function(i){
		  $(this).on('click', function(e){
			  e.preventDefault();
			  $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			  $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		  })
		})
	  }
	  toggleSlide('.catalog-item__link');
	  toggleSlide('.catalog-item__back');

	 


	//modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});
	

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text()); 
			$('.overlay, #order').fadeIn('slow');
		})
	});










	  


	// $('#consultation-form').validate({
	// 	rules : {
	// 		name: "required",
	// 		phone: "required",
	// 		email: {
	// 			required: true,
	// 			email: true
	// 		},
	// 	},
	// 	messages: {
	// 		name: "Пожалуйста, введите свое имя",
	// 		phone: "Пожалуйста, введите свой телефон",
	// 		email: {
	// 		  required: "Пожалуйста, введите свой почтовый адрес",
	// 		  email: "Неправильно введен адрес почты"
	// 		}
	// 	}
	// });
	
	function valideForms(form) {
		$(form).validate({
			rules : {
				name: "required",
				phone: "required",
				email: {
					required: true,
					email: true
				},
			},
			messages: {
				name: "Пожалуйста, введите свое имя",
				phone: "Пожалуйста, введите свой телефон",
				email: {
				  required: "Пожалуйста, введите свой почтовый адрес",
				  email: "Неправильно введен адрес почты"
				}
			}
		});
	}
	valideForms("#consultation-form");
	valideForms("#consultation form");
	valideForms("#order form");
	valideForms("#thanks form");
	$('input[name=phone]').mask("+7 (999) 999-99-99");

	 $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
			
        });
        return false;
    });
	
});



  // var slider = tns({
  //   container: '.carousel__inner',
  //   items: 1,
  //   slideBy: 'page',
  //   controls: false,
  //   nav: false,
  // });
  // document.querySelector('.prev').addEventListener('click',  function () {
  //   slider.goTo('prev');
  // })  
  // document.querySelector('.next').addEventListener('click',  function () {
  //   slider.goTo('next');
  // }) 