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
	let newPeopleName = document.querySelector('.js-form-name-people');
	let newPeoplePhone = document.querySelector('.js-form-phone');
	let messege = "--Тема:" + workshopName.value + "--Ведущий:" + teacher.value + "--Имя:" + newPeopleName.value + "--Телефон:" + newPeoplePhone.value;
	

	const token = '5030963119:AAEmBBO9py9Lc7gT-KiKTMS4jLK3ff-bi4w';
	let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-728873853&text=';
	let xhttp = new XMLHttpRequest();

	if (newPeopleName.value === '' || newPeoplePhone.value === '') {
		newPeopleName.value === '' ? newPeopleName.classList.add('error') : '';
		newPeoplePhone.value === '' ? newPeoplePhone.classList.add('error') : '';
	} else {
		xhttp.open("GET", url + messege, true)
		xhttp.send();
		form.classList.remove('show');
	}
})

// submit form 

// https://api.telegram.org/bot5030963119:AAEmBBO9py9Lc7gT-KiKTMS4jLK3ff-bi4w/sendMessage?chat_id=-728873853&text=test
