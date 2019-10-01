//
//Demo: Sprite Practical
//Author: Brandon Soler
//Date: 10/1/19
//Due Date: 10/1/19
//

let images = ["img/tile000.png","img/tile001.png","img/tile002.png","img/tile003.png","img/tile004.png","img/tile005.png",
			  "img/tile006.png","img/tile007.png"]; //an array with the images
let imgCtr = 0; //setting the image ctr to 0
let timerID = null; //timerid is null as a placeholder


function open() //onload function
{
	document.getElementById("start").disabled=false; //not disabling the start button onload
	document.getElementById("stop").disabled = true; //disabling the stop button onload

}


function start() //start function
{
	imgCtr++; //incrementing the imgctr by 1

	if (imgCtr == 7) //if the img ctr reaches 7 it resets back to 0
	{
		imgCtr = 0;

	}
		document.getElementById("img").src = images[imgCtr] //changing the source of the first image using an array and indexing

	document.getElementById("start").disabled=true; //disabling the start button
	document.getElementById("stop").disabled =false; //undisabling the stop button

	timerID = setTimeout(start, 150) //the timer is running the start function for every 150 miliseconds

}

function stop() //stop function
{
	clearTimeout(timerID); //clearing the timer
	document.getElementById("img").src="img/tile000.png" //setting the picture back to the default
	document.getElementById("start").disabled=false; //undisabling the start button
	document.getElementById("stop").disabled=true; //disabling the stop button
}

