<!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title>maker</title>
	<style>
		input{
			text-align: left;
			padding:10px;
			width:80%;
			margin:10px;
		}
		*{
			text-align: right;
		}
	</style>
</head>
<body>
	题目：<input type="text" id="title"><br>
	选项：<br> A : <input type="text" class="prop"><br> B : <input type="text" class="prop"><br> C : <input type="text" class="prop"><br> D : <input type="text" class="prop"><br>
	答案：<input type="text" id="a"><br>
	<input type="button" value="submit" id="btn">
	<script src="js/leo.js"></script>
	<script>
	var t = l(l.id('title'));
	var p = l._class('prop');
	var a = l(l.id('a'));
	var btn = l(l.id('btn'));
	document.onkeydown = function(ev){
		var ev = ev || event;
		if(ev.keyCode == 13){
			var props = [];
			
			if(!a.val()){
				a.dom.focus();
			}
			l.times(p.length,function(i){
				if(p[this].value){
					props.push(p[this].value)
				}else{
					props.length = 0;
					p[this].focus();
					return;
				}
			})
			if(!t.val()){
				t.dom.focus();
			}
			if(props.length < 4 || !a.val() || !t.val()){
				return;
			}
			l.ajax({
				url:'worker.php',
				data:{
					title:t.val(),
					p:l.jsonToStr(props),
					a:a.val()
				},
				callback:function(){
					
				},
				method:'POST'
			})

			t.dom.value = '';
			for(var i = 0,len = p.length; i < len; i++){
					p[i].value = "";
			}
			a.dom.value = '';
			t.dom.focus();
		}
	}
	
	</script>
</body>
</html>