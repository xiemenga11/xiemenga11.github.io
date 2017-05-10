onmessage = function(ev){
	if(ev.data == 'start'){
		var i = 0;
		setInterval(function(){
			i++
			postMessage(i)
		},1000)
	}else{
		postMessage(ev.data)
	}
}