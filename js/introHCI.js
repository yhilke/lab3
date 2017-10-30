'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});
	$("a.thumbnail").click(projectClick);

	}
function projectClick(e) {
	console.log("Project Clicked");
	e.preventDefault();

	var. containingProject = $(this).closest("project");

	containingProject.append("<div class='project-description'><p><Description of the project.</p></div>")
	//prevents page from reloading

	$(this).css("background-color", "#7fff00");
}
}
