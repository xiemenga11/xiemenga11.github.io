//selector.js 的拖动插件
var data = {
	drag:function(){
		var This = this,
			mx,
			my
		this.listen("mousedown",down)
		this.listen("mouseup",function(){
			l().unListen("mousemove",move)
		})
		function down(e){
			var e = e || event
			mx = e.clientX - This.offset('left'),
			my = e.clientY - This.offset('top'),
			pl = This.css("paddingLeft").toInt(),
			pt = This.css("paddingTop").toInt()
			This.css({
				position:'fixed',
				left:This.offset('left') + "px",
				top:This.offset('top') + "px"
			})
			l().listen("mousemove",move)	
		}
		function move(e){
			var e = e || event
			This.css({
				left:e.clientX - mx  + "px",
				top:e.clientY - my  + "px"
			})
		}
		
	}
}
l.fn.extend(data)