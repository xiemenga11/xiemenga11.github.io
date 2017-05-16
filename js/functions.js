function each(arr,callback){
	for(var i in arr){
		callback.call(arr[i])
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