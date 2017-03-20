window.onload = function(){
		var BN = l("#blogName"),
			BD = l("#blogDes"),
			op = 0,
			op2 = 0

			BN.css({
				opacity:0
			}).attr({
				className:'show text-right'
			})
			BD.css({
				opacity:0
			}).attr({
				className:'show text-right'
			})
		var	timer = setInterval( function(){
				BN.css({
					opacity:op,
					width:op * 98 + "%"
				})
				BD.css({
					opacity:op2,
					width:op2 * 98 + "%"
				})
				if( op < 1 ){
					op += 0.1
				}
				if( op2 < 1 ){
					op2 += 0.1
				}
				if( op >= 1 && op2 >= 1 ){
					clearInterval( timer )
				}
			},30 )		
	}