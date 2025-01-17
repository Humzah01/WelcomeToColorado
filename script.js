alert("Get 25% off by signing up!"); 

var colors = ["beige","orangered", "cyan", "charcoal", "purple", "pink","orange","forestgreen","brown"];

function changeBgColor(){
	var randNum = parseInt(Math.random()*colors.length);
	document.body.style.backgroundColor = colors[randNum];
	
}

console.log("All rights reserved © 2025 Humzah Ahmed 10th Grade");