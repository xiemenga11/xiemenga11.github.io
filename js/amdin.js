(function(w,d){
	var contents = dom._class('content'),
		titles = dom._class('title'),
		navItems = dom._class('nav-item');
	function allHide(){
		for(var i = 0 , len = contents.length; i < len ; i++){
			contents[i].style.display = 'none';
			navItems[i].style.backgroundColor = '';
		}
	}
	for(var i = 0; i < navItems.length; i++){
		(function(index){
			navItems[index].onclick = function(){
				allHide();
				contents[index].style.display = 'block';
				this.style.backgroundColor = 'rgba(0,0,255,0.3)'
			}
		}(i))
	}


	//post article
	var blog = new DB('article');
	var postBtn = dom.id('postBtn');
	var artContent = dom.id('article');
	var artTitle = dom.id('artTitle');
	postBtn.onclick = function(){
		var ck = CKEDITOR.instances.article;
		blog.save({
			data:{
				title:artTitle.value,
				content:ck.getData()
			},
			callback:{
				success:function(ret){
					alert('<<' + artTitle.value + '>>\n发布成功');
					w.location = "admin.html";
				},
				error:function(ret){
					console.dir(ret);
				}
			}
		})
	}

	//article list
	var artList = dom.id('articleList');
	function render(id,title,time){
		var _title = dom.create({
			tag:'div',
			_class:'title'
		});
		var t = dom.create({
			tag:'div',
			content:title
		});
		var ti = dom.create({
			tag:'span',
			content:time,
			_class:"fr"
		})
		var methods = dom.create({
			tag:'div',
			_class:'methods'
		});
			var check = dom.create({
				tag:'a',
				property:{
					href:'viewArt.html?id=' + id,
					target:'blank'
				},
				content:'查看'
			});
			var del = dom.create({
				tag:'span',
				content:'删除',
				property:{
					alt:id
				}
			})
			del.onclick = function(){
				blog.find(this.alt,{
					success:function(){
						var _t = this.get('title');
						this.destroy({
							success:function(){
								alert('〈 ' + _t + ' 〉\n删除成功');
								window.location = 'admin.html';
							},
							error:function(){
								alert('删除失败');
							}
						})
					},
					error:function(){
						alert('获取数据失败');
					}
				})
			}
			var update = dom.create({
				tag:'span',
				content:'修改',
				property:{
					alt:id
				}
			})
			update.onclick = function(){
				window.location = 'update.html?id=' + this.alt;
			}

			methods.appendChild(check);
			methods.appendChild(del);
			methods.appendChild(update);

			t.appendChild(ti);

			_title.appendChild(t);
			_title.appendChild(methods);

			artList.appendChild(_title);

	}
	blog.initQuery();
	blog.findAll({
		success:function(){
			for(var i = 0 , len = this.length; i < len; i++){
				console.dir(this[i].get('title'));
				render(this[i].id,this[i].get('title'),this[i].createdAt);
			}
		},
		error:function(){
			alert('获取数据失败');
		}
	})
}(window,document))