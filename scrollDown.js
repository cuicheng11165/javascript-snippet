var i = 0;
var scrollAction = function(){
	document.body.scrollTop=(i+=1000);
}
var scrollNo=setInterval(scrollAction,2000);