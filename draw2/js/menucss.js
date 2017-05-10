var menuItems = l('#menuBar .menu-item'),
	menuOptions = l('#optionsBox .menu-item-options')
menuItems.each(function(i){
	l(this).click(function(){
		if(l(this).hasClass('menu-item-active')){
			l(this).rmClass('menu-item-active')
			hideAllMenuOpt()
		}else{
			menuItems.each(function(){
				l(this).rmClass('menu-item-active')
			})
			l(this).addClass('menu-item-active')
			hideAllMenuOpt()
			l('#optionsBox .menu-item-options['+i+']').css({display:'block'})
		}

	})
})
function hideAllMenuOpt(){
	menuOptions.each(function(i){
		l(this).css({display:'none'})
	})
}