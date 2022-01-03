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