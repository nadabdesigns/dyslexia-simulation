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
const input = document.querySelector ('.input')
// creating a vrible that triggers querseltor for the class output
const output = document.querySelector ('.output')

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

		

		if (letterchage[i]=="f") 
		{ 
			if(Math.random() < .5)
			{
				textReplace = textReplace + 't';
			}
			else{
				textReplace = textReplace + letterchage[i];	
			}
			

			// dectection fo rt and f and check value for a coin toss
			// geta a value for 0 and 1 and see if it's a value for .5 

		  
		}//  block of code to be executed if the condition is false

		// else if (letterchage[i]=="t")
		// { 
		// 	textReplace = textReplace + 'f';
		// }
			
		else 
		{
			textReplace = textReplace + letterchage[i];	
		}
		// t
		// f
		// s
		// c
		
		


		
	  }



	// goining into the log and seeing what the text content is
  output.innerHTML = textReplace}



// adding in a const and query selector for input and output
// add event lisiter that 
// structure for output for a string manipulation
