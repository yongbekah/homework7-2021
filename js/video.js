var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime)
	volume.innerText = '100%';
});

// progressively slower make it work later
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old speed is" + video.playbackRate);
	video.playbackRate = video.playbackRate*0.95;
	console.log("New speed is" + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old speed is" + video.playbackRate);
	video.playbackRate = video.playbackRate*1.05;
	console.log("New speed is" + video.playbackRate);

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// hope this is currect
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location:" + video.currentTime);
	if (video.currentTime + 15 < video.duration){
	video.currentTime += 15;
	}
	else{
	video.currentTime = 0;
	}
	console.log("New location:" + video.currentTime);

});

// document.querySelector("#skip").addEventListener("click", function() {
// 	console.log("Original location:" + video.currentTime);
// 	if (video.currentTime < 67.403333){
// 	video.currentTime += 15;
// 	}
// 	else{
// 	video.currentTime = 0;
// 	}
// 	console.log("New location:" + video.currentTime);

// });

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		mute.innerText = 'Unmute';
	}
	else {
		video.muted = false;
		mute.innerText = 'Mute';
	};
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log('Before: ' + video.volume * 100 + "%");
	video.volume = this.value / 100;
	console.log('After: ' + video.volume * 100 + "%");
	volume.innerText =  this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log('Oldschool');
	video.classList.add("oldSchool");


});

document.querySelector("#orig").addEventListener("click", function() {
	console.log('orig');
	video.classList.remove("oldSchool");


});
