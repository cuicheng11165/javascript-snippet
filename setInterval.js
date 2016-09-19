var className='zg-btn zg-btn-follow zm-rich-follow-btn small nth-0';
var fuck=function(){
	document.getElementsByClassName(className)[0].click();
}
var interNo1=setInterval(fuck,5000);


var i = 0;
var scrollAction = function(){
	document.body.scrollTop=(i+=1000);
}
var scrollNo=setInterval(scrollAction,2000);


