let url = window.location.toString();
let arr = url.split('=');
let userName = arr[1];
if (userName == undefined) {
	 userName = 'GoodDimon';
} 
//console.log(arr);


/*fetch(`https://api.github.com/users/${userName}`)
	.then(res => res.json())
	.then(json => {
		console.log(json);
		
		const img = document.createElement('img');
		img.src = json.avatar_url;
		img.alt = 'Avatar';
		document.body.append(img);
		const div = document.createElement('div');
		document.body.append(div);
		const name = document.createElement('a');
		if (json.name == null) {
			name.textContent = 'Имя пользователя недоступно.'
		} else {
			name.textContent = json.name;
			name.href = json.html_url;
		}
		div.append(name);
		const bio = document.createElement('p');
		if (json.bio == null) {
			bio.textContent = 'Информация о пользователе недоступна.'
		} else {
			bio.textContent = json.bio;
		}
		 div.append(bio)

	}
	)
	.catch(err => console.log(err))*/

	let timeStart = new Promise((resolve, redject) => {
		setTimeout(date => {
			date = new Date()
			resolve(date)	
			
		})
	})
	
	
	
	let timeEnd = new Promise((resolve, redject) => {
		setTimeout(date => {
			date = new Date()
			resolve(date)
	}	,6000)
})

	
	
	
	Promise.all([timeStart, timeEnd])
	   .then(() => fetch(`https://api.github.com/users/${userName}`))
	   .then(res => res.json())
	   .then(json => {
		//console.log(json);
		
		const img = document.createElement('img');
		img.src = json.avatar_url;
		img.alt = 'Avatar';
		document.body.append(img);
		const div = document.createElement('div');
		document.body.append(div);
		const name = document.createElement('a');
		if (json.name == null) {
			name.textContent = 'Имя пользователя недоступно.'
		} else {
			name.textContent = json.name;
			name.href = json.html_url;
		}
		div.append(name);
		const bio = document.createElement('p');
		if (json.bio == null) {
			bio.textContent = 'Информация о пользователе недоступна.'
		} else {
			bio.textContent = json.bio;
		}
		 div.append(bio)

	}
	)
	    timeStart.then(date => {
		    const time = document.createElement('p');
		    time.textContent = date
		    document.body.append(time);
	   })


	    timeEnd.then(date => {
		    const time = document.createElement('p');
		    time.textContent = date
		    document.body.append(time);
	   })  
	    .catch(err => console.log(err))

	window.onload = function() {
		document.querySelector('.preloader').classList.add("preloader-remove");
	};	
	
 

