function setTheme(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;}

function setWhite() {
	setTheme('theme-white');}

function setSepia() {
	setTheme('theme-sepia');}

function setNight() {
	setTheme('theme-night');}

(function () {
	{setTheme(localStorage.getItem('theme'));}})();
	
function windowPrint() {
	window.print();}