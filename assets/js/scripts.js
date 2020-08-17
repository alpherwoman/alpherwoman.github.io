$(document).ready(function() {
    // $('.select').niceSelect();
	var input1 = document.querySelector(".phone");
    window.intlTelInput(input1, {
      preferredCountries: ['ng'],
      utilsScript: "assets/js/utils.js",
    });
})