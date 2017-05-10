var config = {
	color:'black',
	canWid:localStorage ? (l.store.get('canWid') ? l.store.get('canWid') : 500):500,
	canHei:localStorage ? (l.store.get('canHei') ? l.store.get('canHei') : 500):500,
	blockSize:localStorage ? (l.store.get('blockSize') ? l.store.get('blockSize') : 10):10,
	eraser:false,
	bgColor:false,
	gridLayerShow:true,
	currentCan:0,
	layerCount:0,
	setWid:function(wid){
		l.store.add('canWid',wid)
		this.width = wid
	},
	setHei:function(hei){
		l.store.add('canHei',hei)
		this.height = hei
	},
	setBlockSize:function(size){
		l.store.add('blockSize',size)
		this.blockSize = size
	}
}