
function popup () {
    const choiseBtn = document.querySelector('.js-choice-btn');
    const choiseCont = document.querySelector('.js-choice-popup');
    let choiseClose = document.querySelector('body');
    
    function showBanner () {
        choiseCont.classList.add('show');
    }
    
    function removeBanner () {
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

popup();