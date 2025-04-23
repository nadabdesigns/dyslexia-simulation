// added defer so that it would play on older browsers
		// created 3 varbiles - one hidden one for the video and one to turn in off 
		// used and event lisener to select both video using brackts[0] and [1] to specify both 
		// swiched them to display non on toggle click

		const highlightClass = 'hidden' // “Strings” (like a class name) are wrapped in quotes.
		let buttonVideo = document.querySelectorAll('video') // Any selector.
		let switchButton = document.querySelector('#off')
		const newButtonStyle = 'offAfterClick'
		const changeText = document.querySelector("#change-text");
		// listening for clicks
		switchButton.onclick = () => {

			// targeting the the first video to toggle
			buttonVideo[0].classList.toggle(highlightClass)
			// the second viddeo to toggle
			buttonVideo[1].classList.toggle(highlightClass)

			// now for the button itself
			// change style
			// I looked up how to change text content with javascript I found the .textConent poperty in shecodes.
			// === means it's checking to see if it's true
			// .textContent is checking the conent of the switchButton and itchanging it to off but if it's already off it will change it to on. After these are triggered the orginal text does not exists
			// basically toggling between the off off and on text the reference is down below

			// https://www.shecodes.io/athena/10151-how-to-change-text-when-clicking-in-javascript#google_vignette
			switchButton.classList.toggle(newButtonStyle)

			if (switchButton.textContent === "Off") {
				switchButton.textContent = "On";
			} else {
				switchButton.textContent = "Off";
			}








		}