var config = {
	syncURL:"https://xiemenga11.wilddogio.com"
}
wilddog.initializeApp(config)
var ref     = wilddog.sync().ref()
var post    = dom.id('submit')
var title   = dom.id('title')
var content = dom.id('content')

post.onclick = function(){
	ref.child('artical').push({
		title:title.value,
		content:content.value
	})
}