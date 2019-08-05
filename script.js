var btnShow = document.querySelector('.btn-show');
var mobileMenu = document.querySelector('.mobile-menu');

btnShow.onclick = function () {
	mobileMenu.style.display = mobileMenu.style.display == 'block' ? '' : 'block';
	btnShow.style.marginRight = '150px';
};
