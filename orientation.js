
var phone=new BFtObject();
$(function(){
    phone.start("172.16.27.64");
}); 

window.setTimeout(function(){
        phone.registerMagnetometer()
        },
    1000)

var max_r = 100
var max_b = 100
var max_g = 100

var led_n = 1
var led_back = false

var r = 50
var g = 50
var b = 50
var r_back = false
var g_back = false
var b_back = false

var prev_val = 0
var diff = 0


function magnetometerEvent(meter, intensity){
    // turn off previous light
    if (led_back === false){
        element.setColorEmbedded(led_n + 1,0,0,0,'null')
    }
    else if (led_back === true){
        element.setColorEmbedded(led_n - 1,0,0,0,'null')
    }
    // light led
    element.setColorEmbedded(led_n,r,g,b,'null')

    console.log(meter)
    console.log(intensity)

    val = intensity
    //get new diff
    diff = Math.abs(prev_val - val) * 2
    if (diff < 25) {
        diff = 0
    }
    prev_val = val
    console.log(val)
    console.log(diff)
    console.log(prev_val)

    // update led number and new color
    nextLed()
    col_num = Math.floor((Math.random() * 3) + 1);
    if (col_num == 1){
        col_array = nextColor(r, r_back)
        r = col_array[0]
        r_back = col_array[1]
    }
    else if (col_num == 2){
        col_array = nextColor(g, g_back)
        g = col_array[0]
        g_back = col_array[1]
    }
    else if (col_num == 3){
        col_array = nextColor(b, b_back)
        b = col_array[0]
        b_back = col_array[1]
    }
}


function nextLed() {
    if (led_n == 150) {
        led_back = true
    }
    else if (led_n == 1) {
        led_back = false
    }
    if (led_back == false){
        led_n = led_n + 1
    }
    else if (led_back == true) {
        led_n = led_n - 1
    }
}

function nextColor(col, col_back) {
    console.log('diff', diff)
    console.log('col', col)
    console.log('colback', col_back)
    if (col_back == false) {
        col = col + diff
        if (col > 100) {
            col = 100 
            col_back = true
        }
    }
    else if (col_back == true) {
        col = col - diff
        if (col < 0) {
            col = 0 
            col_back = false
        }
    }
    return [col, col_back]
}
