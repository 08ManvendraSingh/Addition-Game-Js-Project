var a=document.getElementById('one');
var b=document.getElementById('two');
var c=document.getElementById('output');
a=a.value=Math.floor(Math.random()*10);
b=b.value=Math.floor(Math.random()*10);
	var adds=a+b;
function add(){
	if(c.value==adds){
		var a= alert('right answer');
		location.reload();
		sum+=1;
	}
	else{
		alert('wrong answer');
	}
}