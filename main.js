/**
Copyright 2016 Jeremiah Fernandez
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var key = 0;
var map = {};

function walk_left(who) {
	var x = document.querySelector(who).getBoundingClientRect().left;
	//if (x > -400) {
		document.querySelector(who).style.transform = 'translateX(' + (x - 20) + 'px)';
	//}
}

function walk_right(who) {
	var x = document.querySelector(who).getBoundingClientRect().left;
	//if (x < 400) {
		document.querySelector(who).style.transform = 'translateX(' + (x + 20) + 'px)';
	//}
}

function thrust(who) {
	document.querySelector(who + " .eyes").innerHTML = "><";
	document.querySelector(who + " .arm").style.animation = 'thrust-arm infinite .75s';
	document.querySelector(who + " .forearm").style.animation = 'thrust-forearm infinite .75s';
	document.querySelector(who + " .arm2").style.animation = 'thrust-arm2 infinite .75s';
	document.querySelector(who + " .forearm2").style.animation = 'thrust-forearm2 infinite .75s';
	document.querySelector(who + " .weapon").style.animation = 'thrust-weapon infinite .75s';
}

function slash(who) {
	document.querySelector(who + " .eyes").innerHTML = "^^";
	document.querySelector(who + " .arm").style.animation = 'slash-arm infinite .75s';
	document.querySelector(who + " .forearm").style.animation = 'slash-forearm infinite .75s';
	document.querySelector(who + " .arm2").style.animation = 'slash-arm2 infinite .75s';
	document.querySelector(who + " .forearm2").style.animation = 'slash-forearm2 infinite .75s';
	document.querySelector(who + " .weapon").style.animation = 'slash-weapon infinite .75s';
}

function block(who) {
	document.querySelector(who + " .eyes").innerHTML = "OO";
	document.querySelector(who + " .person").style.animation = 'block-person reverse infinite .75s';
	document.querySelector(who + " .arm").style.animation = 'block-arm reverse infinite .75s';
	document.querySelector(who + " .forearm").style.animation = 'block-forearm reverse infinite .75s';
	document.querySelector(who + " .arm2").style.animation = 'block-arm2 reverse infinite .75s';
	document.querySelector(who + " .forearm2").style.animation = 'block-forearm2 reverse infinite .75s';
	document.querySelector(who + " .leg").style.animation = 'block-leg reverse infinite .75s';
	document.querySelector(who + " .foreleg").style.animation = 'block-foreleg reverse infinite .75s';
	document.querySelector(who + " .leg2").style.animation = 'block-leg2 reverse infinite .75s';
	document.querySelector(who + " .foreleg2").style.animation = 'block-foreleg2 reverse infinite .75s';
	document.querySelector(who + " .weapon").style.animation = 'block-weapon reverse infinite .75s';
}

function jump(who) {
	document.querySelector(who + " .person").style.animation = 'jump-person infinite .75s';
	document.querySelector(who + " .leg").style.animation = 'jump-leg reverse infinite .75s';
	document.querySelector(who + " .foreleg").style.animation = 'jump-foreleg reverse infinite .75s';
	document.querySelector(who + " .leg2").style.animation = 'jump-leg2 reverse infinite .75s';
	document.querySelector(who + " .foreleg2").style.animation = 'jump-foreleg2 reverse infinite .75s';
}

function detect_collision(){
	if ((Math.abs((document.querySelector(".containercontainer .point").getBoundingClientRect().left) - (document.querySelector(".containercontainer2 .midsection").getBoundingClientRect().left)) == -1) && (Math.abs((document.querySelector(".containercontainer .point").getBoundingClientRect().bottom) - (document.querySelector(".containercontainer2 .midsection").getBoundingClientRect().bottom)) == -1)) {
		score += 1;
		document.querySelector(".containercontainer .score").innerHTML = score;
	}
	
	if ((Math.abs((document.querySelector(".containercontainer .point").getBoundingClientRect().left) - (document.querySelector(".containercontainer2 .head").getBoundingClientRect().left)) < 100) && (Math.abs((document.querySelector(".containercontainer .point").getBoundingClientRect().bottom) - (document.querySelector(".containercontainer2 .head").getBoundingClientRect().bottom)) < 40)) {
		score += 1;
		document.querySelector(".containercontainer .score").innerHTML = score;
	}
}

function go(){
	var i, l = 100;
	for(i = 0; i < l; i ++){
		//pampagalaw sa right nerd
		if (i == 39) {
			if (map[i] == true) {
				walk_right(".containercontainer2");
			}
		}
		
					
		if (i == 37) {
			if (map[i] == true) {
				if (Math.abs((document.querySelector(".containercontainer2 .person").getBoundingClientRect().left) - (document.querySelector(".containercontainer .person").getBoundingClientRect().left)) <= 160) {
					thrust(".containercontainer2");
				} else {	
					walk_left(".containercontainer2");
				}
			} else {
				//cancel_slash(".containercontainer2");
			}
		} 
		
		if (i == 40) {
			if (map[i] == true){
				block(".containercontainer2");
			} else {
				//cancel_jump(".containercontainer2");
			}
		}
		
		if (i == 38) {
			if (map[i] == true){
				jump(".containercontainer2");
				slash(".containercontainer2");
			} else {
				//rest(".containercontainer2");
			}
		}
		
		if ((Math.abs((document.querySelector(".containercontainer2 .point").getBoundingClientRect().left) - (document.querySelector(".containercontainer .midsection").getBoundingClientRect().left)) < 60) && (Math.abs((document.querySelector(".containercontainer2 .point").getBoundingClientRect().bottom) - (document.querySelector(".containercontainer .midsection").getBoundingClientRect().bottom)) < 60)) {
			block(".containercontainer");
			walk_left(".containercontainer");
		}
		 
		
		//pampagalaw sa left nerd
		if (i == 68) {
			if (map[i] == true) {
				if (Math.abs((document.querySelector(".containercontainer2 .person").getBoundingClientRect().left) - (document.querySelector(".containercontainer .person").getBoundingClientRect().left)) <= 160) {

					thrust(".containercontainer");
				} else {	
					walk_right(".containercontainer");
				}
			} else {
				//cancel_slash(".containercontainer");
			}
		}
		
		if (i == 65) {
			if (map[i] == true) {
				walk_left(".containercontainer");
			}
		} 
		
		if (i == 83) {
			if (map[i] == true){
				block(".containercontainer");
			} else {
				//cancel_jump(".containercontainer");
			}
		}
		
		if (i == 87) {
			if (map[i] == true){
				jump(".containercontainer");
				slash(".containercontainer");
			} else {
				//cancel_jump(".containercontainer");
			}
		}
		
		if ((Math.abs((document.querySelector(".containercontainer .point").getBoundingClientRect().left) - (document.querySelector(".containercontainer2 .midsection").getBoundingClientRect().left)) < 60) && (Math.abs((document.querySelector(".containercontainer .point").getBoundingClientRect().bottom) - (document.querySelector(".containercontainer2 .midsection").getBoundingClientRect().bottom)) < 60)) {
			block(".containercontainer2");
			walk_right(".containercontainer2");
		}
	}
}	

function mapKeyDown() {
	map[event.keyCode] = true;
}

function mapKeyUp() {
	map[event.keyCode] = false;
}

window.addEventListener("load", function() {
	window.setInterval(go, 10);
}, false);

window.addEventListener("keyup", mapKeyUp, false);
window.addEventListener("keydown", mapKeyDown, false);

function absorbEvent(event) {
  var e = event || window.event;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}

window.addEventListener("touchstart", absorbEvent, false);
window.addEventListener("touchmove", absorbEvent, false);
window.addEventListener("touchend", absorbEvent, false);
window.addEventListener("touchcancel", absorbEvent, false);

	document.querySelector(".control1").addEventListener('touchstart', handleTouchStart1, false);           
	document.querySelector(".control1").addEventListener('touchmove', handleTouchMove1, false);
	
	var xDown1 = null;                                                        
	var yDown1 = null;                                                        

	function handleTouchStart1(evt) {                                         
		xDown1 = evt.touches[0].clientX;                                      
		yDown1 = evt.touches[0].clientY;                                      
	};                                                

	function handleTouchMove1(evt) {
		if ( ! xDown1 || ! yDown1 ) {
			return;
		}

		var xUp = evt.touches[0].clientX;                                    
		var yUp = evt.touches[0].clientY;

		var xDiff = xDown1 - xUp;
		var yDiff = yDown1 - yUp;

		if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
			if ( xDiff > 0 ) {
				map[37] = true;
				document.querySelector(".control1").addEventListener("touchend", function() {map[37] = false}, false);
			} else {
				map[39] = true;
				document.querySelector(".control1").addEventListener("touchend", function() {map[39] = false}, false);
			}                       
		} else {
			if ( yDiff > 0 ) {
				map[38] = true;
				document.querySelector(".control1").addEventListener("touchend", function() {map[38] = false}, false);
			} else { 
				map[40] = true;
				document.querySelector(".control1").addEventListener("touchend", function() {map[40] = false}, false);
			}                                                                 
		}
	
		xDown1 = null;
		yDown1 = null;                                             
	};
	
	document.querySelector(".control2").addEventListener('touchstart', handleTouchStart2, false);           
	document.querySelector(".control2").addEventListener('touchmove', handleTouchMove2, false);
	
	var xDown2 = null;                                                        
	var yDown2 = null;                                                        

	function handleTouchStart2(evt) {                                         
		xDown2 = evt.touches[0].clientX;                                      
		yDown2 = evt.touches[0].clientY;                                      
	};                                                

	function handleTouchMove2(evt) {
		if ( ! xDown2 || ! yDown2 ) {
			return;
		}

		var xUp = evt.touches[0].clientX;                                    
		var yUp = evt.touches[0].clientY;

		var xDiff = xDown2 - xUp;
		var yDiff = yDown2 - yUp;

		if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
			if ( xDiff > 0 ) {
				map[65] = true;
				document.querySelector(".control2").addEventListener("touchend", function() {map[65] = false}, false);
			} else {
				map[68] = true;
				document.querySelector(".control2").addEventListener("touchend", function() {map[68] = false}, false);
			}                       
		} else {
			if ( yDiff > 0 ) {
				map[87] = true;
				document.querySelector(".control2").addEventListener("touchend", function() {map[87] = false}, false);
			} else { 
				map[83] = true;
				document.querySelector(".control2").addEventListener("touchend", function() {map[83] = false}, false);
			}                                                                 
		}
	
		xDown2 = null;
		yDown2 = null;                                             
	};
	
