// 显示当前选项
var sideBoxs = l("#sideBar .side-box")
sideBoxs.each(function(){
	var boxItem = l('.side-box-item',this)
	boxItem.each(function(i){
			this.index = i
			l(this).click(function(){
				boxItem.each(function(){
					l(this).rmClass('side-box-item-active')
				})
				l(this).addClass('side-box-item-active')
			})
	})
})
//折叠面板
var titles = l("#sideBar .side-box-title")
titles.each(function(i){
	this.index = i
	l(this).click(function(){
		var _itemBox = l("#sideBar .item-box["+this.index+"]")
		if(_itemBox.hasClass('hide')){
			_itemBox.rmClass('hide')
		}else{
			_itemBox.addClass('hide')
		}
	})
})
//添加图层
l('#addLayer').click(function(){
	rmAllLayerTitleClass()

	//添加图层标题
	// l('#layerBox')
	// .addElement('div')
	// .addClass('side-box-item side-box-item-active')
	// .html('图层 ' + config.layerCount)
	// .data('index',config.layerCount)
	// .click(function(){
	// 	rmAllLayerTitleClass()
	// 	if(!l(this).hasClass('side-box-item-active')){
	// 		l(this).addClass('side-box-item-active')
	// 	}
	// })
	// .listen('dblclick',function(){
	// 	l(this).canEdit(true)
	// })
	// .listen('blur',function(){
	// 	l(this).canEdit(false)
	// })
	var boxItem = l('#layerBox')
				  .addElement('div')
				  .addClass('side-box-item side-box-item-active')
				  .data('index',config.layerCount)
				  .click(function(){
				  	  var _index = l(this).data('index')
					  rmAllLayerTitleClass()
					  if(!l(this).hasClass('side-box-item-active')){
					  	  l(this).addClass('side-box-item-active')
					  }

					  allCanvasBehind()

					  l("#paintBoard .layer-i["+_index+"]").css({zIndex:2})
				  	  config.currentCan = _index

				  })

		l(boxItem.dom)
		.addElement('span')
		.addClass('layer-name')
		.html('图层 ' + config.layerCount)
		.listen('dblclick',function(){
			l(this).canEdit(true)
		})
		.listen('blur',function(){
			l(this).canEdit(false)
		})

		l(boxItem.dom)
		.addElement('span')
		.addClass('layer-view')
		.data('index',config.layerCount)
		.data('show',1)
		.click(function(e){
			// l(this).data('index').alt()
			l.noBubble(e)
			
			// var _layer = l('#paintBoard layer-i['+l(this).data('index')+']')
			var _layerShow = ''
			var _class = ""
			if(l(this).data('show') == 1){
				l(this).data('show',0).attr({className:'layer-hide'})
				_layerShow = 'none'
			}else{
				l(this).data('show',1).attr({className:'layer-view'})
				_layerShow = 'block'
			}
			// for(var i in _layer){
			// 	document.write(i+":"+_layer[i]+"<br/>")
			// }
			l('#paintBoard .layer-i['+l(this).data('index')+']').css({display:_layerShow})
		})


	allCanvasBehind()
	//添加图层
	l('#paintBoard')
	.addElement('canvas')
	.addClass('layer-i')
	.css({
		zIndex:2,
		border:'1px solid red',
		position:'absolute',
		top:0,
		left:0
	})
	.attr({
		width:config.canWid,
		height:config.canHei
	})
	config.currentCan = config.layerCount
	config.layerCount++
})
