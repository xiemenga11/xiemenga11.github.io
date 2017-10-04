(function(w,d){
	var id = location.search.split('=')[1];
	var title = dom.id('title');
	var blog = new DB('article');
	var content;
	var cancel = dom.id('cancel');
	var updateBtn= dom.id('updateBtn');
	blog.initQuery();



	CKEDITOR.on( 'instanceReady', function( ev ) {
		content = CKEDITOR.instances.content;
		blog.find(id,{
			success:function(){
				title.value = this.get('title');
				content.setData(this.get('content'));
			},
			error:function(){
				alert('获取数据失败');
				window.location = "admin.html";
			}
		})

		cancel.onclick = function(){
			w.location = "admin.html";
		}

		updateBtn.onclick = function(){
			blog.find(id,{
				success:function(){
					this.set('title',title.value);
					this.set('content',content.getData());
					this.save(null,{
						success:function(){
							alert('修改成功');
							w.location = 'admin.html';
						},
						error:function(){
							alert('修改失败');
						}
					})
				},
				error:function(){
					alert('获取数据失败');
				}
			})
		}
	});
		
}(window,document))