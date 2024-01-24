	// Ввод
	let data = "Pellentesque ex eros, +380665433321 porttitor eu bibendum ac, aliquam tincidunt urna. Mauris tristique lobortis orci, nec varius magna convallis interdum. Etiam 5363 4567 8765 3454 pharetra tempor ex, vel eleifend (067) 678 44 21 odio lacinia (0562) 35-30-38 eget. Morbi maximus libero vitae aliquet facilisis. Vivamus 5674-2346-8945-0012 vitae quam nisi. Quisque 12/45 quis venenatis 5192722517688913 lacus. Sed ac lorem (050)567-45-33 nec leo pharetra 4556796335044346 dapibus sed eu +38067432112 ex. In hac 4913-8185-2881-4543  habitasse platea dictumst. In dignissim 5461158320267908 suscipit rutrum. Ut 4916 8494 1754 2904 luctus  sapien in risus 56th street auctor, ac placerat 067-678-44-21  quam malesuada. Pellentesque (056) 7783322 bibendum justo  5363 4567 87653 3455 tempus purus convallis, a viverra nunc ullamcorper. Nulla 5213 9203 2475 5355 eget lectus gravida, porta eros vitae, semper erat +39-926-1234567.  Aenean volutpat vehicula dui ut pharetra.";
	
	// Алгоритм
	let regex = /(\d{4})[ -]?(\d{4})[ -]?(\d{4})[ -]?(\d{4})/g;

	let match;
	let validCards = [];
	
	// Поиск и проверка карт
	while ((match = regex.exec(data)) !== null) {
		let cardNumber = match[0].replace(/[ -]/g, '');
		if (isValidCardNumber(cardNumber)) {
			validCards.push(match[1] + ' ' + match[2] + ' ' + match[3] + ' ' + match[4]);
		}
	}

	// Валидность
	function isValidCardNumber(number) {
		let nCheck = 0;
		let bEven = false;
		for (let n = number.length - 1; n >= 0; n--) {
			let cDigit = number.charAt(n);
			let nDigit = parseInt(cDigit, 10);
			if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
			nCheck += nDigit;
			bEven = !bEven;
		}
		return (nCheck % 10) == 0;
	}
	
	// Вывод
	let cardContainer = document.getElementById('cardContainer');
	validCards.forEach(card => {
		let cardElement = document.createElement('p');
		cardElement.textContent = card;
		cardContainer.appendChild(cardElement);
	});