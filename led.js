// add whatever functions in!

var element=new BFtObject();
$(function(){
    element.start("172.16.27.34");
}); 

var num_leds = 200

function setColorAll(color) {
    var r = 0
    var b = 0
    var g = 0
    if (color == 'red') {
       r = 100 
    }
    else if (color == 'blue') {
       b = 100 
    }
    else if (color == 'green') {
       g = 100 
    }
    else {
        console.log('color must red, green or blue')
        return
    }
    for (var i = 0; i < max_num; i++) {
        element.setColorEmbedded(i,r,g,b,'null');
    }
}

function setOff() {
    var r = 0
    var b = 0
    var g = 0
    for (var i = 0; i < max_num; i++) {
        element.setColorEmbedded(i,r,g,b,'null');
    }
}

