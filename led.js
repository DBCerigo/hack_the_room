// add whatever functions in!

var element=new BFtObject();
$(function(){
    element.start("172.16.27.34");
}); 

var num_leds = 150;

function setColor(n, color) {
    var maxIntensity = 100,
        r = color.r,
        g = color.g,
        b = color.b;

    if (r > maxIntensity || g > maxIntensity || b > maxIntensity) {
        console.log('value must be between 0 and 100');
        return;
    }

    element.setColorEmbedded(n, r, g, b, 'null');
}

function setColorAll(color) {
    for (var i = 0; i < num_leds; i++) {
        setColor(i, color);
    }
}

function setColors(position, color) {
    console.log("setColors", color.r);

    var i,
        width = 5;

    setColor(position, color);

    for (i = 1; i < width; i++)
    {
        setColor(position + i, color);
        setColor(position - i, color);
    }
}

function setOff() {
    var r = 0;
    var b = 0;
    var g = 0;

    for (var i = 0; i < num_leds; i++) 
    {
        element.setColorEmbedded(i,r,g,b,'null');
    }
}
