
	var login = prompt('Кто пришел');
	if (login == 'Админ' ){
		var pasw = prompt('Пароль?');
		if (pasw == 'Чёрный Властелин'){
			alert('Добро пожаловать!');
		}else if (pasw == null){
			alert('Вход отменён');
		}else{
			alert('Пароль неверен');
		}
	}
	else if (login == null ){
		alert('Вход отменён');	
	}else{
		alert('Я вас не знаю');	
	}

