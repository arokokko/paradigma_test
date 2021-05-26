$(document).ready(function(){
	const mapTrigger = document.querySelector('.map_link');
	const mapDestination = document.querySelector('#google_map');
    const overlay = document.querySelector('.overlay');
    const image = document.createElement('img');

	// maps
	function showMap(e) {
        const target = e.target;
        if(target.hasAttribute('data-src')) {
            mapDestination.src = target.getAttribute('data-src');
        } 
			
	}

	function cleanIframe() {
		mapDestination.src = "";
	}

	// modal map appear
	$('.map_link').on('click', function(e){
        e.preventDefault();
		$('.overlay, #map').fadeIn('slow');
        $('#consultation').hide();
		showMap(e);
	});

	
	// Modal windows
	$('.btn-consult').on('click', function(){
		$('.overlay, #consultation').fadeIn('slow');
        $('#map').hide();
	});

	
	// close modal window
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #map').fadeOut();
		cleanIframe();
	});

	// close modal window with click by empty field
	$(window).on('click', function(e) {
        if (e.target.classList.contains('overlay')) {
            $('.overlay, #consultation, #map').fadeOut();
            if(image) {
                image.remove();
            }
			cleanIframe();
        }
	});

    // burger menu
    $('.burger').on('click', function() {
        $('.nav').toggleClass('menu__active');
    });

    $('.menu__close').on('click', function() {
        $('.nav').removeClass('menu__active');
    });

    // slider
    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: `<img class="slick-prev" src="../img/arrow_left.png">`,
        nextArrow: `<img class="slick-next" src="../img/arrow_right.png">`,
    });

    // images 
    $('.slider__wrapper').on('click', function(e) {
        const target = e.target;
        const pictures = document.querySelectorAll('.slider__item img');
        

        pictures.forEach((item, i) => {
            if(item === target) {
                $('.overlay').fadeIn('slow');
                $('#map, #consultation').hide();
                image.setAttribute('src', item.getAttribute('src'));
                image.setAttribute('class', 'center');
                $('.overlay').append(image);
            }
        })
    });
	

});