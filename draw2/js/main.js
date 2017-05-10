window.onload = function(){
	//网格
	gridLayer()
	
	//画图
	l('#paintBoard').click(function(e){
		var e = e || event,
			target = e.target || e.srcElement
		if(l(target).hasClass('layer-i')){
			drawBlock(target,e.offsetX,e.offsetY)
		}
	}).listen('mousedown',function(){
		l(this).listen('mousemove',mouseMove)
	}).listen('mouseup',function(){
		l(this).unListen('mousemove',mouseMove)
	})


	function mouseMove(e){
		var e = e || event
			target = e.target || e.srcElement
		if(l(target).hasClass('layer-i')){
			drawBlock(target,e.offsetX,e.offsetY)
		}
	}

	//改变颜色
	l('#color').listen('change',function(){
		config.color = l(this).val()
	})

	l().listen('keydown',function(e){
		var e = e || event,
			_layer = l('#paintBoard .layer-i['+ (e.keyCode - 49) +']') 
		_layer.css({display:'none'})
	})

	//橡皮擦
	l('#eraser').click(function(){
		config.eraser = !config.eraser
		var color
		if(config.eraser){
			color = 'red'
		}else{
			color = 'black'
		}
		l(this).css({color:color})
	})
	//清除当前图层内容
	l().listen('keydown',function(e){
		var e = e || event,
			conf
		if(e.keyCode == 68){
			conf = confirm('确认要清除当前图层吗？')
			if(conf){
				C(l('#paintBoard .layer-i['+config.currentCan+']').dom).clear({start:[0,0],size:[config.canWid,config.canHei]})
			}
		}
	})
}
