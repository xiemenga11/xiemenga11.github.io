(function(w,d){
	var list = dom._class('art-list')[0];
	function render(id,title,time){
		var artTitle = dom.create({
			tag:'div',
			_class:'art-title'
		});
		var link = dom.create({
			tag:'a',
			property:{
				href:'viewArt.html?id=' + id
			},
			_class:'art-link',
			content:title
		})
		var time = dom.create({
			tag:'div',
			_class:'art-time',
			content:time
		})
		artTitle.appendChild(link);
		artTitle.appendChild(time);
		list.appendChild(artTitle);
	}
var blog = new DB('article');
blog.initQuery();
blog.findAll({
	success:function(){
		for(var i = 0, len = this.length; i < len ; i++){
			render(this[i].id,this[i].get('title'),this[i].createdAt);
		}
	},
	error:function(){
		alert('获取数据失败');
	}
})
}(window,document))