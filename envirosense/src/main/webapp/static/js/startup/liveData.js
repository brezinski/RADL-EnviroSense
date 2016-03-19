/**
 * This startup sequence will contain Javascript functions that will initialize 
 * the DOM elements for the HTML like making button listeners and handling form
 * submits.
 */

/**
 * This is used to bind an "On Load" event onto the window object.
 */
if (window.addEventListener) { //W3 Standards
	window.addEventListener('load', startupController, false);
} else if (window.attachEvent) { //Microsoft Standards
	window.attachEvent('onload', startupController);
}

function startupController() {
	var settingsForm = createForm("ALL", null, null);	
	runAjax(settingsForm);
	
	/*
	 * We put it in a constant loop interval because it might run even
	 * though the "Slick Slides" aren't created yet, thus creating problems.
	 * Once it detects the
	 */
	var counterInterval = setInterval(function () {
		var slickSlides = document.getElementById("slickSlides").childNodes;

		if (slickSlides.length > 1) {
			for (var index = 1; index < slickSlides.length; index++) {
				var sensorType = slickSlides[index].id;
				var mainForm = createForm("liveData", "Sensor", sensorType);
				
				runAjax(mainForm);
				setInterval(runAjax, 1000, mainForm);
			}
			clearInterval(counterInterval);
		}
	}, 300);
}