/*
PlugIn Name - Simple JS+CSS Carousel
Athour:Mohammad A. Mohaiman
Version:1.0.0
github profile - www.github.com/m4mohaiman
*/


//plngIn for carasol

var carasols = document.querySelectorAll('.carasol .carasols');
var currentcarasols = 0;
var carasolsInterval = setInterval(nextcarasols,1500); // for set time

function nextcarasols(){
	carasols[currentcarasols].className = 'carasols';
	currentcarasols = (currentcarasols+1)%carasols.length;
	carasols[currentcarasols].className = 'carasols showing';
}