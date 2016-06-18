// add whatever functions in!

var element=new BFtObject();
$(function(){
    element.start("172.16.27.34");
}); 

var num_leds = 150;

function setColor(n, color) {
    var maxIntensity = 100,
        r = color[0],
        g = color[1],
        b = color[2];

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

function setColors(min, max, color) {
    for (; min < max; min++)
    {
        setColor(i, color);
    }
}

function setColorLeft(color) {
    var min = (num_leds / 3 * 2) + 1;
    var max = num_leds;

    setColors(min, max, color);
}

function setColorRight(color) {
    var min = 1;
    var max = (num_leds / 3) + 1;

    setColors(min, max, color);
}

function setColorMiddle(color) {
    var min = num_leds / 3;
    var max = (num_leds / 3 * 2) + 1;

    setColors(min, max, color);
}

function setOff() {
    var r = 0
    var b = 0
    var g = 0
    for (var i = 0; i < num_leds; i++) {
        element.setColorEmbedded(i,r,g,b,'null');
    }
}



