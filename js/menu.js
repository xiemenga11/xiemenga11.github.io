var menu = document.getElementById('menu')
var menuItem = menu.getElementsByTagName('li')
var className = "ani fl menu-item "
for(var i = 0; i < menuItem.length; i++){
	menuItem[i].onclick = function(){
		each(menuItem,function(){
			this.className = className
		})
		this.className = className + "active"
	}
}