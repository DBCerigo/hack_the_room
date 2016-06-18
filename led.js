// add whatever functions in!

var element=new BFtObject();
$(function(){
    element.start("172.16.27.34");
}); 

var num_leds = 150;

function setColor(n, color) {
    var r = 0,
        g = 0,
        b = 0;

    if (color == 'red')
    {
        r = 100;
    }
    else if (color == 'blue')
    {
        b = 100;
    }
    else if (color == 'green')
    {
        g = 100;
    }
    else {
        console.log('color must red, green or blue')
        return
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



