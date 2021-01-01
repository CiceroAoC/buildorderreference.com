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
	if (localStorage.getItem('theme') === 'theme-white') {setTheme('theme-white');}})();
(function () {
	if (localStorage.getItem('theme') === 'theme-sepia') {setTheme('theme-sepia');}})();
(function () {
	if (localStorage.getItem('theme') === 'theme-night') {setTheme('theme-night');}})();
	
function windowPrint() {
	window.print();}