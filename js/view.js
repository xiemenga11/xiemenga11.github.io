var artId = window.location.search.split("=")[1]
var title = dom.id("title")
var content = dom.id("content")
wilddog.initializeApp({
	syncURL:"https://xiemenga11.wilddogio.com"
})

var ref = wilddog.sync().ref()
ref.child('artical').child(artId).once("value",function(d){
	title.innerHTML = d.val().title
	content.innerHTML = d.val().content
})

