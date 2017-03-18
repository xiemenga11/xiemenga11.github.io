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
					width:200 + op * 1000 + "px"
				})
				BD.css({
					opacity:op2,
					width:300 + op2 * 1000 + "px"
				})
				if( op < 1 ){
					op += 0.1
				}
				if( op2 < 1 ){
					op2 += 0.05
				}
				if( op >= 1 && op2 >= 1 ){
					clearInterval( timer )
				}
			},30 )		
	}