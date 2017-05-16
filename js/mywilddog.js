var config = {
	syncURL:"https://xiemenga11.wilddogio.com"
}
wilddog.initializeApp(config)
var ref = wilddog.sync().ref()

var username = $("username")
var age  = $("age")
var btn  = $("btn")
var res  = $("res")
function $(id){
	return document.getElementById(id)
}
btn.onclick = function(){
	ref.child('username').push(username.value)
	ref.child('userage').push(age.value)
}
ref.on('value',function(data){
	for(var i in data.val()){
		res.innerHTML += i+":"+data.val()[i]
		for(var j in data.val()[i]){
			console.log(j)
		}
	}
})