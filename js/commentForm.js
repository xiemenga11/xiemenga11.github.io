(function(){
	var submit = l.id('submitComment')
	var verifyVal = l.id('verifyValue')
	verifyVal.on('keyup',function(){
		if(l(this).val() != verify){
			l(this).css('boxShadow','0 0 10px red')
		}else{
			l(this).css('boxShadow','0 0 10px green')
		}
	})

	submit.click(function(){
		if(verifyVal.val() != verify) return
		alert('submit')
	})
}())