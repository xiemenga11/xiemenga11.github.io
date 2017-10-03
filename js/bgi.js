(function(){
		var bgi = dom.id('bgi');
		var bg = new Image();
		bg.src = "img/yekong.jpg";
		bgi.height = screen.height;
		bgi.width = screen.width;		

		var Star = function(can){
			this.can = C(can);
			this.r = 1;
			
			var _x = Math.random() * 10 + screen.width / 2 - 10;
			var _y = Math.random() * 10 + screen.height / 2 - 10;
			this.position = [_x,_y];
			this.speed = Math.random() * 3 + 3;
			this.dirX = Math.sin(Math.random() * 6.3);
			this.dirY = Math.sin(Math.random() * 6.3);
		}
		Star.prototype = {
			reborn:function(){
				var _x = Math.random() * 10 + screen.width / 2 - 10;
				var _y = Math.random() * 10 + screen.height / 2 - 10;
				this.position = [_x,_y];
				this.speed = Math.random() * 3 + 3;
				this.r = 1;
				this.dirX = Math.sin(Math.random() * 6.3);
				this.dirY = Math.sin(Math.random() * 6.3);
			},
			show:function(){
				this.can.save()
				.config({
					style:{
						fill:"white"
					}
				})
				.begin()
				.arc({
					center:this.position,
					r:this.r
				})
				.fill()
				.close()
				.init()
			},
			run:function(){
				if(this.position[0] < 0 || this.position[0] > screen.width || this.position[1] < 0 || this.position[1] > screen.height){
					this.reborn();
				}
				this.r += 0.003;
				this.position[0] += this.dirX * this.speed;
				this.position[1] += this.dirY * this.speed;
				this.show();
			}
		}

		var stars = [];
		for(var i = 0; i < 100; i++){
			stars[i] = new Star('bgi');
		}
		bg.onload = function(){
			setInterval(function(){
				C('bgi').clearAll().drawImg({
					start:[0,0],
					data:bg,
					size:[screen.width,screen.height]
				})
				times(100,function(){
					stars[this].run();
				})
			},30);
		}

}())