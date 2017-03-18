var animate = {
	scale : function(config){
		var This = this,
			css = {},
			dir = 1
		var timer = setInterval(function(){
			css[config.proper] = This.offset(config.proper) + config.speed * dir + "px"
			This.css(css)
			if(This.offset(config.proper) < config.dis){
				if(This.offset(config.proper) + config.speed > config.dis){
					config.speed = This.offset(config.proper) + config.speed - config.dis
				}
				dir = 1
			}else if(This.offset(config.proper) > config.dis){
				if(This.offset(config.proper) - config.speed < config.dis){
					config.speed = This.offset(config.proper) - config.dis
				}
				dir = -1
			}else{
				if(config.callback){
					config.callback.call(This)
				}
				clearInterval(timer)
			}
		},config.interval)
		return this
	},
	move : function(){
		
	}
}
l.fn.extend(animate)