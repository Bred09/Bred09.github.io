var sUp = document.querySelector('b');
var sIn = document.querySelector('i');

var fIn = document.querySelector('.in');
var fUp = document.querySelector('.up');

sIn.onclick = () => {
	fIn.style.display = 'block';
	fUp.style.display = 'none';
}
sUp.onclick = () => {
	fUp.style.display = 'block';
	fIn.style.display = 'none';
}