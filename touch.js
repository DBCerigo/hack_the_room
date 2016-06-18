var phone = new BFtObject();
$(function(){
    phone.start("172.16.27.64");

    window.setTimeout(function(){phone.registerTouch()} , 1000);
}); 


function buttonPressed(evt)
{
	console.log(evt);
}