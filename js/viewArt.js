(function(w,d){
	var id      = location.search.split('=')[1];
	var blog    = new DB('article');
	var title   = dom.id('artTitle');
	var time    = dom.id('time');
	var content = dom.id('artContent');
	var mask    = dom.id('mask');
	//加载动画
	var loadImg = new Image();
	loadImg.src = "img/load.gif"
	
	blog.initQuery();
	blog.find(id,{
		success:function(){
			title.innerHTML = this.get('title');
			content.innerHTML = this.get('content');
			time.innerHTML = this.createdAt;
			d.title = this.get('title');
			mask.style.display = "none";
		},
		error:function(){
			alert('获取数据错误');
			w.location = 'index.html'
		}
	})
}(window,document))