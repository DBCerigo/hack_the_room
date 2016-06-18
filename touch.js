var phone = new BFtObject();
$(function(){
    phone.start("172.16.27.64");
    window.setTimeout(function(){start()} , 1000);
}); 

function start()
{
	phone.registerTouch();
}

function buttonPressed(evt)
{
		console.log("setColors");

	var color = colorFromX(evt.x, evt.y);
	console.log(color);
	var position = positionFromY(evt.x, evt.y);
	setColors(position, color);
}

function colorFromX(x, y)
{
	var color = {r: 0, g: 0, b: 0},
		fraction,
		xmin = 0,
		xmax = 318,
		colormax = 100;

			console.log("colorFromX");


	fraction = x / xmax;

	color.r = fraction * colormax;
	color.g = 10;
	color.b = (1 - fraction) * colormax;
	console.log(fraction, color.r, color.b);
	return color;
}

function positionFromY(x, y)
{
	var position,
		ymin = 0,
		ymax = 555,
		ledMax = 150,
		fraction = y / ymax;

	position = Math.round(fraction * ledMax);

	return position;
}