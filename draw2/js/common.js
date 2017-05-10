//将所有的图层放到底层
function allCanvasBehind(){
	l('#paintBoard .layer-i').each(function(i){
		l(this).css({zIndex:1})
	})
}
//将所有的图层标题样式去掉
function rmAllLayerTitleClass(){
	if(l('#layerBox .side-box-item').length == 1){
		l('#layerBox .side-box-item').rmClass('side-box-item-active')
	}else{
		l('#layerBox .side-box-item').each(function(i){
			l(this).rmClass('side-box-item-active')
		})
	}
}
//网格线
function gridLayer(){
	l("#gridLayer")
	.attr({
		width:l("#paintBoard").offset('width')-20,
		height:l("#paintBoard").offset('height')-20
	})

	var gridLayer = C('gridLayer'),
		GLWidCount = gridLayer.width / config.blockSize,
		GLHeiCount = gridLayer.height / config.blockSize
	
	for(var i = 0; i < GLWidCount; i++){
		gridLayer
		.save()
		.begin()
		if(i % 10 == 0){
			gridLayer.setSClo('#aaa')
		}else{
			gridLayer.setSClo('#ddd')
		}
		gridLayer
		.moveTo(i * config.blockSize,0)
		.lineTo(i * config.blockSize,gridLayer.height)
		.moveTo(0,i * config.blockSize)
		.lineTo(gridLayer.width,i * config.blockSize)
		.stroke()
		.close()
		.init()
	}

}
//控制网格显示
l('#showGridLayer').click(function(){
	if(config.gridLayerShow){
		l('#gridLayer').css({display:'none'})
	}else{
		l('#gridLayer').css({display:'block'})
	}
	config.gridLayerShow = !config.gridLayerShow
})

//画方块
function drawBlock(obj,x,y){
	var x = parseInt(x / config.blockSize) * config.blockSize,
		y = parseInt(y / config.blockSize) * config.blockSize
	if(!config.eraser){
		C(obj)
		.save()
		.begin()
		.setFClo(config.color)
		.frec({
			start:[x,y],
			size:[config.blockSize,config.blockSize]
		})
		.close()
		.init()
	}else{
		C(obj)
		.clear({
			start:[x,y],
			size:[config.blockSize,config.blockSize]
		})
	}
}
