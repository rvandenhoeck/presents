const root = document.documentElement;
const button = document.querySelector('button');


button.addEventListener('click', () => {
	// prevent clicking for 1s
	button.style.pointerEvents = 'none';
	setTimeout(() => {
		button.style.pointerEvents = 'all';
	}, 1000)

	const count = parseInt(button.innerText);
	const newCount = count - 1;
	console.log({newCount})
	
	const audioIndex = 33 - newCount;
	const audio = new Audio(`media/audio${audioIndex}.wav`);
	audio.play();
	button.innerText = newCount;

	// count down
	if (newCount == 0) root.classList.add('is-won');
	
})