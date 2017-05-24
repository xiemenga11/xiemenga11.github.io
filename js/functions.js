function each(arr,callback){
	for(var i in arr){
		callback.call(arr[i])
	}
}
function times(time,callback){
	for(var i = 0; i < time; i++){
		var condition = callback.call(i)
		if(condition && condition == 1){
			continue
		}
		if(condition && condition == 2){
			break
		}
	}
}
var dom = {
	id:function(id){
		return document.getElementById(id)
	},
	class:function(cls,par){
		var d = par || document
		return d.getElementsByClassName(cls)
	},
	tag:function(tag,par){
		var d = par || document
		return d.getElementsByTagName(tag)
	}
}
function createEle(tag){
	return document.createElement(tag)
}
window.onload = function(){
	var command = ""
	document.onkeydown = function(e){
		var e = e || event
		if(command.length < 10){
			command += String(e.keyCode)
			
		}else{
			command = ""
		}
		if(command == "6568777378"){
			window.location = "admin.html"
			command = ""
		}
	}
}

var UIScroll = function(ele,con){
	this.scrollConfig = {
		position:"absolute",
		width:"10px",
		backgroundColor:"rgba(0,0,0,0.4)",
		right:"0px",
		top:"0px",
		height:"50px",
		borderRadius:"5px"
	}
	this.wrap = document.getElementById(ele)
	this.wrap.style.position = "relative"
	this.wrap.style.overflow = "hidden"
	this.content = con ? this.wrap.getElementById(con) : this.wrap.children[0]
	this.content.style.position = "absolute"
	this.content.style.top = "0px"
	this.content.style.left = "0px"
	this.wrapHei = this.wrap.offsetHeight
	this.wrapWid = this.wrap.offsetWidth
	this.scrollBar = document.createElement("div")
	this.wrap.appendChild(this.scrollBar)
	
}
UIScroll.prototype = {
	run:function(){
		var scrHei = parseInt(this.wrapHei)/this.content.offsetHeight*parseInt(this.wrapHei)
		for(var i in this.scrollConfig){
			this.scrollBar.style[i] = this.scrollConfig[i]
		}
		this.scrollBar.style.height = scrHei+"px"
		var wrapHei = this.wrapHei
		var con = this.content
		this.scrollBar.addEventListener("mousedown",function(e){
			var e = e || event
			var my = e.clientY
			var top = parseInt(this.style.top)
			var that = this
			document.onmousemove = function(e){
				var e = e || event
				if(e.clientY < my){
					that.style.top = "0px"
				}else if(e.clientY - my > parseInt(wrapHei) - that.offsetHeight){
					that.style.top = parseInt(wrapHei) - that.offsetHeight + "px"
				}else{
					that.style.top = top + e.clientY - my + "px"
					con.style.top = (e.clientY - my)/parseInt(wrapHei) * -con.offsetHeight + "px"
				}
			}
		})
		document.addEventListener("mouseup",function(){
			document.onmousemove = null	
		})
	}
}
//js title
//js toggle

