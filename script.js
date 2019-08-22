// document.querySelector('.btn-show').onclick = function() {
//   var mobileMenu = document.querySelector('.mobile-menu');
//   mobileMenu !== null && b("show").removeClass(form, d)
// }
// document.querySelector('.btn-show').onclick = function() {
//   var mobileMenu = document.querySelector('.mobile-menu');
//   mobileMenu.addClass('show');
// }



var btnShow = document.querySelector('.btn-show');
var mobileMenu = document.querySelector('.mobile-menu');

btnShow.onclick = function () {
	mobileMenu.classList.add('show');


	setTimeout(f1, 3000);
};

function f1() {
	var btnClose = document.querySelector('.btn-close');

	btnClose.onclick = function () {
		mobileMenu.classList.remove('show');
		btnShow.classList.remove('close');
	}
}