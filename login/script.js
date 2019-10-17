// change form
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


// checkbox
var checkBox = document.querySelector('.checkbox');

checkBox.onclick = () => {
	checkBox.classList = checkBox.classList == 'checked' ? 'checkbox' : 'checked';
}

// show password button
var showPass = document.querySelector('.show-pass');
var passShow = document.querySelector('.pass-show');
var passShow1 = document.querySelector('.pass-show1');
showPass.onclick = () => {
	passShow.type = passShow.type == 'text' ? 'password' : 'text';
	passShow1.type = passShow1.type == 'text' ? 'password' : 'text';
}