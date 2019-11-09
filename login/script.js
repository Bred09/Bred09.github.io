// change form
var sUp = document.querySelector('.up-btn');
var sIn = document.querySelector('.in-btn');

var fIn = document.querySelector('.in');
var fUp = document.querySelector('.up');
var sizeY = document.querySelector('.box');
sIn.onclick = () => {
	fIn.style.left = '5%';
	fUp.style.left = '-100%';
	sizeY.style.height = '420px';
	document.querySelector('h2').innerHTML = 'Вернитесь к нам!';
}
sUp.onclick = () => {
	sizeY.style.height = '500px';
	document.querySelector('h2').innerHTML = 'Станте одним из нас!';
	fIn.style.left = '-100%';
	fUp.style.left = '5%';
}


// checkbox
var checkBox = document.querySelector('.checkbox');

checkBox.onclick = () => {
	checkBox.classList = checkBox.classList == 'checked' ? 'checkbox' : 'checked';
	msg.innerHTML='';
}

// show password button
var showPass = document.querySelector('.show');
var showPassI = document.querySelector('.pass-g1 .i');
var passShow = document.querySelector('.pass-show');
var passShow1 = document.querySelector('.pass-show1');
var passShow1In = document.querySelector('.in .pass1');
var passShowI = document.querySelector('.pass-g1 input');
showPass.onclick = () => {
	passShow.type = passShow.type == 'text' ? 'password' : 'text';
	passShow1.type = passShow1.type == 'text' ? 'password' : 'text';
	showPass.classList = showPass.classList == 'hide' ? 'show' : 'hide';
}
showPassI.onclick = () => {
	passShowI.type = passShowI.type == 'text' ? 'password' : 'text';
	showPassI.classList = showPassI.classList == 'hide h-i' ? 'show i' : 'hide h-i';
}

// proverka inputs
var login = document.querySelector('.login');
var loginIn = document.querySelector('.in .login');

login.oninput = () => {
	if (login.textLength < 3) {
		login.style.borderColor = '#f92f2f';
	} else {
		login.style.borderColor = 'greenyellow';
	}
}
loginIn.oninput = () => {
	if (!loginIn.value) {
		loginIn.style.borderColor = '#f92f2f';
	} else {
		loginIn.style.borderColor = 'greenyellow';
	}
}

let check = document.querySelector('.checkbox');
let msg = document.querySelector('.msg');
passShow1.oninput = function pPass () {
	if (passShow1.value != passShow.value) {
		msg.innerHTML = '<p>Пароли не совпадают</p>';
		passShow.style.borderColor = '#f92f2f';
		passShow1.style.borderColor = '#f92f2f';
	} else {
		msg.innerHTML='';
		passShow.style.borderColor = 'greenyellow';
		passShow1.style.borderColor = 'greenyellow';
	}
};

var btnGo = document.querySelector('.go');
btnGo.onmouseover = () => {
	if (check.classList != 'checked') {
		msg.innerHTML = '<p>Галочку не забыли? :)</p>';
	}
}

passShow1In.oninput = () => {
	let msgI = document.querySelector('.pass-g1 .min');
	if (!passShow1In.value) {
		msgI.innerHTML = '<p style="color: red;margin-top: -10px;">Введите пароль</p>';
		passShow1In.style.borderColor = '#f92f2f';
	} else {
		msgI.innerHTML='';
		passShow1In.style.borderColor = 'greenyellow';
	}
}