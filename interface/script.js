// Show mobile menu
var mobileMenu = document.querySelector('.mobile-menu');
document.querySelector('.btn-show').onclick = () => {
	mobileMenu.classList.add('show');
};

document.querySelector('.btn-close').onclick = () => {
	mobileMenu.classList.remove('show');
};


// Show find form
var findI = document.querySelector('.find-i');
var findB = document.querySelector('.find-b');
var findH = document.querySelector('.fuck');
findB.onclick = () => {
	findI.style.width = findI.style.width == '90%' ? '0' : '90%';
	findH.style.transform = findH.style.transform == 'rotateZ(-360deg)' ? 'rotate(0)' : 'rotateZ(-360deg)';
	findH.style.transition = '1s';
};