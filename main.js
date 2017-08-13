var key = 0;
var map = {};

function walk_left(who) {
	var x = document.querySelector(who).getBoundingClientRect().left;
	document.querySelector(who).style.transform = 'translateX(' + (x - 20) + 'px)';
}

function walk_right(who) {
	var x = document.querySelector(who).getBoundingClientRect().left;
	document.querySelector(who).style.transform = 'translateX(' + (x + 20) + 'px)';
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
		//controls	 right nerd
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
				// do nothing
			}
		} 
		
		if (i == 40) {
			if (map[i] == true){
				block(".containercontainer2");
			} else {
				// do nothing
			}
		}
		
		if (i == 38) {
			if (map[i] == true){
				jump(".containercontainer2");
				slash(".containercontainer2");
			} else {
				// do nothingggg
			}
		}
		
		if ((Math.abs((document.querySelector(".containercontainer2 .point").getBoundingClientRect().left) - (document.querySelector(".containercontainer .midsection").getBoundingClientRect().left)) < 60) && (Math.abs((document.querySelector(".containercontainer2 .point").getBoundingClientRect().bottom) - (document.querySelector(".containercontainer .midsection").getBoundingClientRect().bottom)) < 60)) {
			block(".containercontainer");
			walk_left(".containercontainer");
		}
		 
		
		//controls for the left nerd
		if (i == 68) {
			if (map[i] == true) {
				if (Math.abs((document.querySelector(".containercontainer2 .person").getBoundingClientRect().left) - (document.querySelector(".containercontainer .person").getBoundingClientRect().left)) <= 160) {

					thrust(".containercontainer");
				} else {	
					walk_right(".containercontainer");
				}
			} else {
				// do nothingggg
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
				// exactly
			}
		}
		
		if (i == 87) {
			if (map[i] == true){
				jump(".containercontainer");
				slash(".containercontainer");
			} else {
				// same here
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

//stuff to prevent default browser behaviour
function absorbEvent(event) {
  var e = event || window.event;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}
