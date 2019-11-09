// mobile menu
var mobileMenu = document.querySelector('.mobile-menu');
document.querySelector('.btn-show').onclick = () => {
	mobileMenu.classList.add('show');
};

document.querySelector('.btn-close').onclick = () => {
	mobileMenu.classList.remove('show');
};

// arrow animation
var bArrow = document.querySelector('.b-arrow');

moveArrow()

function moveArrow() {
	bArrow.classList.add('move');

	function recentPositArrow() {
	bArrow.classList.remove('move');
	}

	setTimeout(recentPositArrow, 500);
}

setInterval(moveArrow, 5000);

// change height document
var heightDevice = window.innerHeight;
var phon = document.querySelector('.shadow');

window.onload = () => {
	if (heightDevice > 600) {
		phon.style.height = `${heightDevice}px`;
	}
};