if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", function() {
		loaded();
	});
} else if (document.attachEvent) {
	document.attachEvent("onreadystatechange", function() {
		loaded();
	});
}

function loaded() {
	setInterval(loop, 260);
}
var x = 0;
var titleText = ["|", "F|", "F3|" ,"F3 |", "F3 &middot|", "F3 &middot C|", "F3 &middot Co|", "F3 &middot Cou|", "F3 &middot Coun|", "F3 &middot Count|", "F3 &middot Counte|", "F3 &middot Counter|", "F3 &middot Counter-|", "F3 &middot Counter-S|", "F3 &middot Counter-St|", "F3 &middot Counter-Str|", "F3 &middot Counter-Stri|", "F3 &middot Counter-Strike|", "F3 &middot Counter-Strike |", "F3 &middot Counter-Strike 1|", "F3 &middot Counter-Strike 1.|", "F3 &middot Counter-Strike 1.6|", "|"];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
