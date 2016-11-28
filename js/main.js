// var cookie_count = 0
// var sugar = document.getElementById('sugar');
// //Cookies.get('sugar');
// //Cookies.set('sugar', 0);
// var cookie_visiter = Cookies.get('sugar')

// sugar.addEventListener("click", function() {
// 	var cookie_count = cookie_count + 1
// 	Cookies.set('sugar', sugar);
// 	document.getElementById("sc").innerHTML = "Sugar Cookies: " + cookie_count;
// 	console.log(cookie_count);
// });


var cookie_visitor = Cookies.get('sugar');
var sugarCount = 0;
var cookie_visitor = Cookies.get('chocolate');
var chocolateCount = 0;
var cookie_visitor = Cookies.get('lemon');
var lemonCount = 0;

function sugarSet() {
	var setSugar = Cookies.set('sugar', sugarCount);
	sugarCount++
	document.getElementById("sc").innerHTML = "Sugar Cookies: " + sugarCount;
}
function chocolateSet() {
	var setChocolate = Cookies.set('chocolate', chocolateCount);
	chocolateCount++
	document.getElementById("cc").innerHTML = "Chocolate Cookies: " + chocolateCount;
}
function lemonSet() {
	var setLemon = Cookies.set('lemon', lemonCount);
	lemonCount++
	document.getElementById("lc").innerHTML = "Lemon Cookies: " + lemonCount;
}
function removeCount() {
	Cookies('sugar', 0);
	document.getElementById("sc").innerHTML = "Sugar Cookies: 0";
	Cookies('chocolate', 0);
	document.getElementById("cc").innerHTML = "Chocolate Cookies: 0";
	Cookies('lemon', 0);
	document.getElementById("lc").innerHTML = "Lemon Cookies: 0";
}