// check if document is loaded
document.addEventListener( 'DOMContentLoaded', function() {
    console.log( 'Script loaded!' );
});


let username = document.getElementById("username");
let showpass = document.getElementById('c-input-password-show');
let hidepass = document.getElementById('c-input-password-hide');

username.addEventListener('focusout',function(){
		// debug if triggered
		console.log("unfocus username active");

		let isfloating = "is-floating";
		let userlabel = document.getElementById("js-floating-label");

		// check if there is a value
		if(this.value != ""){
			console.log("value finded: "+this.value);
			userlabel.classList.add(isfloating);
		}

		else{
			console.log("value is empty");
			userlabel.classList.remove(isfloating);
		};
	});

showpass.addEventListener('click',function(){
	// show if clicked
	console.log("show password");
	let hide = "c-input-password-icon--hide";

	let passinput = document.getElementById("password");
	passinput.type = "text";
	showpass.classList.add(hide);
	hidepass.classList.remove(hide);
});

hidepass.addEventListener('click',function(){
	// show if clicked
	console.log("hide password");
	let hide = "c-input-password-icon--hide";

	let passinput = document.getElementById("password");
	passinput.type = "password";
	showpass.classList.remove(hide);
	hidepass.classList.add(hide);
});




document.addEventListener( 'DOMContentLoaded', handleQualityRange());

function handleQualityRange(){
	console.log("slider active");
	let slider = document.getElementById("quality");
	let sliderHolder = document.getElementById("js-range-holder");
	//let sliderHolder = window.getComputedStyle(document.querySelector('#js-range-holder'), ':after');
	

	slider.addEventListener('input',function(){
		console.log("slider changed");
		let value = slider.value;
		sliderHolder.dataset.value = value;
		
		sliderHolder.style.transform = "translateX(calc("+value+"% - 16px)";
		//sliderHolder.style.width = "calc(100% - "+value+"%)";
		
		
	})
}

let dropButton = document.getElementById("js-dropdown-button");
let clicked = 0;

dropButton.addEventListener('click',function(){
	let dropContent = document.getElementById("js-dropdown-content");
	if(clicked == 0){
		dropContent.classList.remove("hidden");
		clicked = 1;
	}
	else{
		dropContent.classList.add("hidden");
		clicked = 0;
	}
})