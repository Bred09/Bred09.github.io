var mobileMenu = document.querySelector('.mobile-menu');
document.querySelector('.btn-show').onclick = () => {
	mobileMenu.classList.add('show');
};

document.querySelector('.btn-close').onclick = () => {
	mobileMenu.classList.remove('show');
};



var findInputShow = document.querySelector('.find-i');
var find = document.querySelector('.find').onclick = () => {
	var find = document.querySelector('.find');
	findInputShow.classList.add('f-show');
	find.style.right = '180px';
	find.style.transition = 'right 1s';
};

document.querySelector('.btn-close').onclick = () => {
	mobileMenu.classList.remove('show');
};