//jQuery plugin code
$.fn.captcha = function(){
	var captcha = this;
	captcha.attr('captcha', false);
	captcha.find('.captcha').html('<div class="check"> </div> <span>I\'m not a robot</span>');

	// Verify box clicked
	captcha.find('.captcha .check').on('click', function(){
		captcha.attr('captcha', true);
		if(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)){
			captcha.find('.captcha .check').html('<div class="wrapper"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 98.5 98.5" enable-background="new 0 0 98.5 98.5" xml:space="preserve"><path class="checkmark" fill="none" stroke-width="8" stroke-miterlimit="10" d="M81.7,17.8C73.5,9.3,62,4,49.2,4 C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"/></svg></div>');
		}else{
			captcha.find('.captcha .check').css('background-color', '#336604');
		}
	});

	//Form Submitted
	captcha.on('submit', function(e){
		if(captcha.attr('captcha') == 'false'){
			e.preventDefault();
		}
	});
}

//Function for verifying if captcha has been clicked
function verifyCaptcha(formId){
	if($(formId).attr('captcha') == 'true'){
		return true;
	}
	return false;
}
