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
	runNavbar();
	runSlick();
	
	/*
	 * Generate the settings panel for SLICK.
	 */
	var settingsForm = createForm("reportSettings", "sensor", null);
	runAjax(settingsForm);
	settingsForm = createForm("reportSettings", "room", null);
	runAjax(settingsForm);

	/*
	 * Since AJAX is asynchronous and the form creation is based on an AJAX
	 * call, the form might not finish being created yet, so before getting the 
	 * settings form, we must make sure it exist first.
	 */
	var formCheck = setTimeout(function reportInterval() {
		if (document.getElementById("reportForm") !== null) {
			clearTimeout(formCheck);
			formDefaultValues();
			formSubmitListeners();
			dropdownListeners();
			windowResizeHandler();
		} else {
			setTimeout(reportInterval, 100);
		}
	}, 100);
	
}

function formDefaultValues() {
	var reportForm = document.getElementById("reportForm");
	var today = new Date();
	var lastWeek = new Date(new Date(today).setDate(today.getDate() - 7));
	
	var dateRegex = /:\d{2}.\d{3}Z/;
	var fromDate = reportForm.fromDate;
	fromDate.value = lastWeek.toISOString().split(dateRegex)[0];
	var toDate = reportForm.toDate;
	toDate.value = today.toISOString().split(dateRegex)[0];
}

/**
 * Add "On Submit" events for the forms in the reports page.
 */
function formSubmitListeners() {
	var reportForm = reportForm = document.getElementById("reportForm");
	reportForm.onsubmit = function() {
		if (reportForm.dataType.value !== "") {
			runAjax(this);
		}
		return false;
	};
};

/**
 * Dropdown click listeners to set the value of the dropdown based on the
 * value clicked.
 */
function dropdownListeners() {
	
	var sensorEntryTimeout = setTimeout(function sensorEntryCallback() { 
		var reportForm = document.getElementById("reportForm");
		var sensorEntries = reportForm.getElementsByClassName("sensorEntry");
		
	
		if (sensorEntries !== null) {
			clearTimeout(sensorEntryTimeout);
			
			for(var index = 0; index < sensorEntries.length; index++) {
				sensorEntries[index].onclick = function(clickEvent) {
					var targetElement = clickEvent.target || clickEvent.srcElement;
					var hiddenElement = document.getElementById("reportForm").dataChoice;
					var containerElement = document.getElementById("reportForm").dataType;
					setValue(hiddenElement, "reportSensors");
					setValue(containerElement, targetElement.textContent || targetElement.innerText);
				};
			}
		} else {
			setTimeout(roomEntryCallback, 300);
		}
	}, 300);
	
	var roomEntryTimeout = setTimeout(function roomEntryCallback() {
		var reportForm = document.getElementById("reportForm");
		var roomEntries = reportForm.getElementsByClassName("roomEntry");
		
		if (roomEntries !== null) {
			clearTimeout(roomEntryTimeout);
			
			for(var index = 0; index < roomEntries.length; index++) {
				roomEntries[index].onclick = function(clickEvent) {
					var targetElement = clickEvent.target || clickEvent.srcElement;
					var hiddenElement = document.getElementById("reportForm").dataChoice;
					var containerElement = document.getElementById("reportForm").dataType;
					setValue(hiddenElement, "reportRooms");
					setValue(containerElement, targetElement.textContent || targetElement.innerText);
				};
			}
		} else {
			setTimeout(sensorEntryCallback, 300);
		}
	}, 300);
}


/*
 * Since Google applies a fixed width (based on it's parent div) whenever they 
 * generate their charts, we make a window listener to regenerate the chart 
 * whenever the window size is altered. 
 */
function windowResizeHandler() {
	/*
	 * For android browsers, it's calling the onscroll event even if you just 
	 * scroll up. This is because of the address bar of the top of the browser.
	 * It fires the resize event whenever it appears/disappears when scrolling.
	 */
	
	var resizeFunction = function () {
		setTimeout(function () {
			var reportForm = document.getElementById("reportForm");
			
			if (reportForm.dataType.value !== "") {
				runAjax(reportForm);
			}
		}, 300);
	};
	
	if (window.addEventListener) { //W3 Standards
		window.addEventListener('resize', resizeFunction, false);
	} else if (window.attachEvent) { //Microsoft Standards
		window.attachEvent('onresize', resizeFunction);
	}
}