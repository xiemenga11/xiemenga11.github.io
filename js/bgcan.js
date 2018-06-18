(function(){
	var can = l.id('bgcan').dom.getContext('2d');
	var dotAmount = 100;
	var dotArr = [];

	for(var i = 0; i < dotAmount; i ++){
		dotArr.push({x:Math.random()*1920,y:Math.random()*1100,size:Math.random()*10,speed:Math.random()*5 + 2,opacity:Math.random()})
	}
	function ani(){
		can.clearRect(0,0,1920,1080)

		for(var i = 0; i < dotAmount; i++){
			if(dotArr[i].y > 0){
				dotArr[i].y -= dotArr[i].speed;
				dotArr[i].opacity -= 0.01;
			}else{
				dotArr[i].y = 1100;
				dotArr[i].x = Math.random() * 1920;
				dotArr[i].size = Math.random() * 10;
				dotArr[i].speed = Math.random() * 5 + 2;
				dotArr[i].opacity = 1;
			}
			can.save()
			can.fillStyle = 'rgba(248,201,146,' + dotArr[i].opacity + ')';
			can.beginPath()
			can.arc(dotArr[i].x,dotArr[i].y,dotArr[i].size,0,2*Math.PI)
			can.fill()
			// can.fillRect(dotArr[i].x,dotArr[i].y,10,10)
			can.closePath()
			can.restore()
		}

		l.aniFrm(ani)
	}
	l.aniFrm(ani)
}())