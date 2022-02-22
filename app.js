/* Project Requirements
Change the background color by generating random rbg color by clicking a button */

// steps

// step 1 - create onload handler
window.onclick = () => {
	main();
}
function main() {
	const root = document.getElementById('root');
	const ChangeBtn = document.getElementById('change-btn');
	ChangeBtn.addEventListener('click', function() {
		const rgbColor = genrateRGBColor();
	})
}
// step 2 - random color generator function
function genrateRGBColor() {
	// rgb(0, 0, 0); rgb(255, 255, 255)
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
	return `rgb(${red}, ${green}, ${blue})`;
}
// step 3- collect all necessary references

// step 4- handle the event click