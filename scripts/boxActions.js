var currentlyExpanded = null;
$(document).ready(function() {
	
	$('.gameBox').click(function() {

		//$(this).css({"position":"fixed","left":"0", "top":"10%"});
		//$(this).animate({"width":"99%", "height":"100%"}, 1000);

		var audioElem = document.createElement('audio');
		switch(this.id) {
			case 'greenBox':
				audioElem.setAttribute('src', '/sounds/simonSound1.ogg');
				currentlyExpanded = $("#greenPage")
				break;
			case 'redBox':
				audioElem.setAttribute('src', '/sounds/simonSound2.ogg');
				currentlyExpanded = $("#redPage")
				break;
			case 'blueBox':
				audioElem.setAttribute('src', '/sounds/simonSound3.ogg');
				currentlyExpanded = $("#bluePage")
				break;
			case 'yellowBox':
				audioElem.setAttribute('src', '/sounds/simonSound4.ogg');
				currentlyExpanded = $("#yellowPage")
				break;
		}
		audioElem.pause();
		audioElem.currentTime = 0;
		audioElem.play();

		$(currentlyExpanded).css({"display":"block"});
		$(currentlyExpanded).animate({"height":"82%"}, 1000);
	});
	
	$('.collapse').click(function() {
		$(currentlyExpanded).animate({"height":"0"}, 1000, "swing", function(){$(currentlyExpanded).css({"display":"none"});})
	});


});