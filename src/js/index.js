// animation title
const animationWrap = document.querySelector('.js-animation-wrap')

if (animationWrap) {
	let title = [...document.querySelectorAll('.js-title-animation')];
	let i = 0
	let number = title.length - 1;
	
	setInterval(() => {
		title[i].classList.remove('show');
		i++;
		console.log(i);
		if (i > number) {
			title[number].classList.remove('show');
			i = 0
			title[i].classList.add('show');
		} else {
			title[i].classList.add('show');
		}
	}, 3900);
}


// choise popup
const choiseCont = document.querySelector('.js-choice-popup');

function popup() {
  const choiseBtn = document.querySelector('.js-choice-btn');
  let choiseClose = document.querySelector('body');

  function showBanner() {
    choiseCont.classList.add('show');
  }

  function removeBanner() {
    choiseCont.classList.remove('show');
  }

  function hideBanner (e) {
    if (e.target.classList.contains('js-close')) {
      removeBanner();
    }
  }

  choiseBtn.addEventListener('click', showBanner);

  choiseClose.addEventListener('click', hideBanner);
}

if (choiseCont) {
	popup();
}

// workshop 
let workshop = [...document.querySelectorAll('.js-list-workshop')];
let workshopPopup = [...document.querySelectorAll('.js-list-popup')];
let workshopClose = document.querySelector('body');

for (let i = 0; i < workshop.length; i++) {
	workshop[i].addEventListener('click', () => {
		workshopPopup.forEach(item => {
			item.classList.remove('show');
		})
		workshopPopup[i].classList.add('show');
	})
}

function whorkshopHide (e) {
	if (e.target.classList.contains('js-workshop-close')) {
		workshopPopup.forEach(item => {
			item.classList.remove('show');
		})
	}
}

workshopClose.addEventListener('click', whorkshopHide);


// reg

let reg = [...document.querySelectorAll('.js-popup-btn')];
let form = document.querySelector('.js-form');
let workshopName = document.querySelector('.js-form-name-workshop');
let teacher = document.querySelector('.js-form-name-teacher');
let formBtn = document.querySelector('.js-form-btn');

reg.forEach(btn => {
	btn.addEventListener('click', () => {
		
		btn.closest('.js-list-popup').remove('.show');
		workshopName.value = btn.dataset.event;
		teacher.value = btn.dataset.name;
	
		form.classList.add('show');
	})
})

formBtn.addEventListener('click', () => {
	form.classList.remove('show');
})

// submit form 

$('.js-form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');


    data.append( 'workshop', 	$('[name="workshop"]', form).val() );
    data.append( 'nameTeacher', $('[name="nameTeacher"]', form).val() );
    data.append( 'name', 		$('[name="name"]', form).val() );
    data.append( 'phone', 		$('[name="phone"]', form).val() );
   

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            // Тут выводим ошибку
        },
        complete: function() {
            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
            console.log('Complete')
            form.reset() 
        }
    });

    return false;
});