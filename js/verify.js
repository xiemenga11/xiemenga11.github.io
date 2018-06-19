(function(){
	var verify = l.id('verify');
	var can = l.create({
		tag:'canvas',
		attr:{
			width:80,
			height:20
		}
	})
	var con = can.dom.getContext('2d')
	
	window.verify = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('').shuffle().slice(0,4).join('')
	con.font = '20px Arial'
	con.moveTo(0,0)
	con.lineTo(100,20)
	con.stroke()
	con.fillText(window.verify,20,20)
	verify.attr('src',can.dom.toDataURL())

	verify.click(function(){
		window.verify = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('').shuffle().slice(0,4).join('')
		con.clearRect(0,0,100,20)
		con.font = '20px Arial'
		con.moveTo(0,0)
		con.lineTo(100,20)
		con.stroke()
		con.fillText(window.verify,20,20)
		l(this).attr('src',can.dom.toDataURL())
	})
}())