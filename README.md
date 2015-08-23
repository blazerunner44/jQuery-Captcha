# jQuery CAPTCHA
A simple jQuery CAPTCHA plugin.

#What is it?
This plugin is a jQuery alternative to Google's new reCAPTCHA. It works by creating a div shaped like a check box that, when clicked, allows the form to be submitted. The theory behind it is that a spam bot wouldn't recognize that the div needed to be clicked before the form can be submitted. A user should have no trouble recognizing the button needs to be clicked because the text "I'm not a robot!" is displayed next to the check mark div.

#Installation
To install the slider plugin, simply include the JavaScript file AFTER jQuery

`<script type="text/javascript" src="captcha.jquery.js"></script>`

You should also include the CSS file. Feel free to change the styles as you see fit.

`<link rel="stylesheet" type="text/css" href="style.css">`

To initialize the plugin, simply call the function on the form that you want the CAPTCHA to be attached to (clicked before the form will submit)

```
 <form class="form1" method="get">
		<input type="text" placeholder="Form Field">

		<div class="captcha"></div>
		<button type="submit">Submit</button>
	</form>
```
		
`$('.form1').captcha();`

#Use
If your form uses HTML to submit (ex. `<form action="action.php">`) then this plugin will automatically prevent the form from being submitted if the user hasen't done the CAPTCHA.

If your form uses AJAX to submit, you can use the function verifyCaptcha() to verify if the CAPTCHA has been clicked or not. Pass a jQuery identifier to the function, so for our example code above, `verifyCaptcha('.form1');` The function will return true if the CAPTCHA has been completed or false if it has not. 

#Demo
You can see the contents of the example folder live at http://blazerunner44.me/github/jQuery-Captcha
