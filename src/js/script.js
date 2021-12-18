$(document).ready(function(){
    $('.carousel__inner').slick({
		speed: 1000,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right.svg"></button>',
		responsive: [
			{
				breakpoint: 992, //размер экрана промежутком от 0 до 768px, все, что выше будет дейтсвовать по правилам, которые изначально прописывали выше для десктопной версии. Меньше 768зч убирают стрелки и прописывают точки, потому что стрелки на тач неудобно. Если изображение большое, то промежуток можно увеличить. Например, как здесь.
      			settings: { //настройки, как те, что указывали выше
					dots: true,
					arrows: false,
				}
			}
		]
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

// Формы

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99"); //масска воода номера
});


/*const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
	controls: false,
	nav: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
  });*/

 