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
	setColors(evt.x, evt.y);
}

function setColors(x, y){
	var color,
		ymin = 0,
		ymax = 555,
		xmin = 0,
		xmax = 318;

	var red = [100, 0, 0],
		green = [0, 100, 0],
		blue = [0, 0, 100];


	if (x > xmax / 3 * 2)
	{
		color = red;
	}
	else if (x > xmax / 3)
	{
		color = green;
	}
	else
	{
		color = blue;
	}

	if (y > ymax / 3 * 2)
	{
		console.log('left: ', color);
		setColorLeft(color);
	}
	else if (y > ymax / 3)
	{
		console.log('middle', color);
		setColorMiddle(color);
	}
	else {
		console.log('right', color);
		setColorRight(color);

	if (y > 370)
	{
		console.log('red');
		setColorAll('red');
	}
	else if (y > 185)
	{
		console.log('green')
		setColorAll('green');
	}
	else
	{
		console.log('blue');
		setColorAll('blue');
	}
}