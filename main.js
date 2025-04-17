// done document query slector 
// passed in ID
// property on click 
// assing printed out click

// adding a class
// document.querySelector ('#hide-visited').onclick = () => {
// 	console.log('click')
// 	document.querySelector('#pizza-places').classList.add('hide-visited')
// }
// //removing a class
// document.querySelector ('#hide-visited').onclick = () => {
// 	console.log('click')
// 	document.querySelector('#pizza-places').classList.remove('hide-visited')
// }
// // went to coding tutor Viyan Poonamallee showed me how to do this with a text string

// structure for input
// giv the imput
// varibles for imput and output

// const you cant redeclare
// creating a vrible that triggers querseltor for the class input
const input = document.querySelector('.input')
// creating a vrible that triggers querseltor for the class output
const output = document.querySelector('.output')


let ftSlider = document.getElementById("slider-ft")

let scSlider = document.getElementById("slider-sc")

let riverSlider = document.getElementById("slider-river")

// REFRESH THE PAGE AFTER CLICKING A SECTION
// getting leement by ID
// this how you set up one function after another 
// listening for a click on reset then scrolling to slider if this scrolls it will delay for the page to reset before scrolling to the id
document.getElementById('reset').onclick = function() {
	const sliderElement = document.querySelector('.slidersection');
	if (sliderElement) {
	  sliderElement.scrollIntoView({ behavior: 'smooth' });
	}
	setTimeout(() => {
	  window.location.reload();
	//   this is were it is delayed by .5 sec
	}, 500); 
  };

//   hacky way to fix the back buton 

  document.getElementById('back').onclick = function () {
	window.location.href = '../index.html';
  };





// 



// SLIDER VALES
// display slider info
// create a varible ftValueDisplay and assign it to the slider ft value
let ftValueDisplay = document.querySelector("#ft .displayvalue");

// set the current state of the text that is inside of ftValueDisplay
// Update the display when the slider moves

ftSlider.addEventListener("input", () => {
	ftValueDisplay.textContent = `${Math.round(ftSlider.value * 100)}%`;
  });

// repeate for all sliders
// for sc
let scValueDisplay = document.querySelector("#sc .displayvalue");

scSlider.addEventListener("input", () => {
	scValueDisplay.textContent = `${Math.round(scSlider.value * 100)}%`;
  });
// for rivers
let riverValueDisplay = document.querySelector("#rivers .displayvalue");

riverSlider.addEventListener("input", () => {
	riverValueDisplay.textContent = `${Math.round(riverSlider.value * 100)}%`;
  });



// targeting varbile just made for the event lister input and we are chaanging that data to  
input.addEventListener("input", updateValue);
// (e)is the event and we're grabbing the text and spiting it out (later)
function updateValue(e) {
	// creating a varbile for change
	let letterchage = e.target.value;

	// creating an empty string 
	// 

	let textReplace = "";
	for (let i = 0; i < letterchage.length; i++) {



		if (Math.random() < ftSlider.value) {
			if (letterchage[i] == "f") {
				textReplace = textReplace + 't';
			}
			// we want to have an else if that will if the first if is untrue and if it's true it wont run at all
			else if (letterchage[i] == "t") {
				textReplace = textReplace + 'f';

			}
			// else {
			// 	textReplace = textReplace + letterchage[i];
			// }




			// dectection fo rt and f and check value for a coin toss
			// geta a value for 0 and 1 and see if it's a value for .5 


		}
		// slider for s and c
		if (Math.random() < scSlider.value) {
			if (letterchage[i] == "s") {
				textReplace = textReplace + 'c';
			}
			// we want to have an else if that will if the first if is untrue and if it's true it wont run at all
			else if (letterchage[i] == "c") {
				textReplace = textReplace + 's';

			}
			else {
				textReplace = textReplace + letterchage[i];
			}




			// dectection fo rt and f and check value for a coin toss
			// geta a value for 0 and 1 and see if it's a value for .5 

		}
		// 
		else if (Math.random() < riverSlider.value) {
			console.log(riverSlider.value)
			if (letterchage[i] == ` `) {
				console.log('HEllo')
				textReplace = textReplace + `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`;

			}

			else {
				textReplace = textReplace + letterchage[i];
			}



			console.log(riverSlider.value)
			// dectection fo rt and f and check value for a coin toss
			// geta a value for 0 and 1 and see if it's a value for .5 

		}
		//  block of code to be executed if the condition is false

		// make a slider and choose probablity from .0 to .9

		// else if (letterchage[i]=="t")
		// { 
		// 	textReplace = textReplace + 'f';
		// }
		// adding on a regualar caracter if mant rondome isnt true
		else {
			textReplace = textReplace + letterchage[i];
		}
		// t
		// f
		// s
		// c
	

	}



	// goining into the log and seeing what the text content is
	output.innerHTML = textReplace

	
}
// add a scroll to funtion

// scrool to the top of the page after button is clicked


// adding in a const and query selector for input and output
// add event lisiter that 
// structure for output for a string manipulation