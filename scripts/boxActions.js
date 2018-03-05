var currentlyExpanded = null;
$(document).ready(function() {

	var topLeft = $("#greenBox").position();
	
	$('.gameBox').click(function() {


		var audioElem = document.createElement('audio');
		switch(this.id) {
			case 'greenBox':
				audioElem.setAttribute('src', '/sounds/simonSound1.ogg');
				$("#greenPage").css("display", "inline-block");
				break;
			case 'redBox':
				audioElem.setAttribute('src', '/sounds/simonSound2.ogg');
				break;
			case 'blueBox':
				audioElem.setAttribute('src', '/sounds/simonSound3.ogg');
				break;
			case 'yellowBox':
				audioElem.setAttribute('src', '/sounds/simonSound4.ogg');
				break;
		}
		audioElem.pause();
		audioElem.currentTime = 0;
		audioElem.play();
		currentlyExpanded = this;
	});
	
});