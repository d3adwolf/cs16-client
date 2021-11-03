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
var titleText = ["|", "A|", "As|", "Ast|", "Asti|", "Astis|" ,"Astis |", "Astis &middot|", "Astis &middot C|", "Astis &middot Co|", "Astis &middot Cou|", "Astis &middot Coun|", "Astis &middot Count|", "Astis &middot Counte|", "Astis &middot Counter|", "Astis &middot Counter-|", "Astis &middot Counter-S|", "Astis &middot Counter-St|", "Astis &middot Counter-Str|", "Astis &middot Counter-Stri|", "Astis &middot Counter-Strike|", "Astis &middot Counter-Strike |", "Astis &middot Counter-Strike 1|", "Astis &middot Counter-Strike 1.|", "Astis &middot Counter-Strike 1.6|", "|"];

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}