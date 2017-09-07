var dom = {
	id:function(id){
		return document.getElementById(id);
	},
	_class:function(cls,parent){
		var p = parent || document;
		return p.getElementsByClassName(cls);
	},
	tag:function(tag,parent){
		var p = parent || document;
		return p.getElementsByTagNames(tag);
	},
	/**
	 * 创建元素
	 * @param  {obj} data 配置属性
	 * data = {
	 * 	tag:(str)元素名称,
	 * 	property:(obj)元素属性,比如href,src等等,
	 * 	_class:(str)样式名称,
	 * 	style:(obj)行内样式,
	 * 	content:(str)内容
	 * }
	 * @return {dom}      创建的元素
	 */
	create:function(data){
		if(!data.tag) return;
		var _dom = document.createElement(data.tag);
		if(data.property){
			for(var i in data.property){
				_dom[i] = data.property[i];
			}
		}
		if(data._class){
			_dom.className = data._class;
		}
		if(data.style){
			for(var i in data.style){
				_dom[i].style[i] = data.style[i];
			}
		}
		if(data.content){
			_dom.innerHTML = data.content;
		}
		return _dom;
	}
}

var ClassList = function(obj){
	this.obj = obj
	this.cls = this.obj.className.split(" ")
}
ClassList.prototype = {
	contains:function(cls){
		return this.cls.indexOf(cls) == -1 ? false : true
	},
	item:function(index){
		return this.cls[index]
	},
	remove:function(cls){
		for(var i = 0; i < arguments.length; i++){
			var _index = this.cls.indexOf(arguments[i])
			if(_index === -1) continue;
			else delete this.cls[_index];
		}
		this.obj.className = this.cls.join(" ")
	},
	add:function(cls){
		for(var i = 0; i < arguments.length; i++){
			if(this.contains(arguments[i])) continue;
			else this.cls.push(arguments[i]);
		}
		this.obj.className = this.cls.join(" ")
	},
	toggle:function(cls,condition){
		if(this.contains(cls)){
			this.remove(cls)
		}else{
			this.add(cls)
		}
	}
}

function times(times,callback){
	for(var i = 0; i < times; i++){
		var ret = callback.call(i);
		if(ret == "continue"){
			continue;
		}else if(ret == "break"){
			break;
		}
	}
}

function fileURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) {

        url = window.createObjectURL(file)

    }

    else if (window.URL != undefined) {

        url = window.URL.createObjectURL(file)

    }

    else if (window.webkitURL != undefined) {

        url = window.webkitURL.createObjectURL(file)
    }
    
    return url

};


//
//config = {
//	method: str 提交类型,
//	data:multi 提交的数据,
//	url:str 提交的地址,
//	callback:func 回调函数
//}
function ajax(config){
	var xml,
		data = config.data ? config.data : null;
	if(window.XMLHttpRequest){
		xml = new XMLHttpRequest();
	}else{
		xml = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xml.onreadystatechange = function(){
		if(xml.readyState == 4 && xml.status == 200){
			config.callback.call(xml.responseText);
		}
	}
	if(config.method.toLowerCase()=="post"){
		xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	}
	xml.open(config.method,config.url,true)
	xml.send(data)
}

function ajaxFile(data){
	var _formdata = data.form ? data.form : null;
	var form = new FormData(_formdata);
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	
	if(data.data){
		for(var i in data.data){
			form.append(i,data.data[i]);
		}
	}
	if(data.file){
		for(var j in data.file){
			if(data.file[j].length){
				for(var k = 0; k < data.file[j].length; k++){
					form.append(j,data.file[j][k]);
				}
			}else{
				form.append(j,data.file[j]);
			}
		}
	}
	
	xhr.open(data.method,data.url,true);
	xhr.onload=function(){
		data.callback.call(xhr.responseText);
	}
	xhr.send(form);
}

