var mobileMenu = document.querySelector('.mobile-menu');
document.querySelector('.btn-show').onclick = () => {
	mobileMenu.classList.add('show');
};

document.querySelector('.btn-close').onclick = () => {
	mobileMenu.classList.remove('show');
};

var bArrow = document.querySelector('.b-arrow');

f1()

function f1() {
	bArrow.classList.add('move');

	function f2() {
	bArrow.classList.remove('move');
	}

	setTimeout(f2, 500);
}

setInterval(f1, 5000);