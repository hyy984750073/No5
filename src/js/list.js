$(function(){
	var $cplist = $('.cplist');
	var pageNum = 1;

	// 全局配置
	$.ajaxSetup({
		url:'../data/goodslist.json',
		data:{pageNo:pageNum},
		dataType:'json',
		success:function(res){
			$.each(res,function(idx,item){
				var $dl = $("<dl/>");
				var $dt = $("<dt/>").html("<a href='http:/myweb/src/html/details.html'><img src='../"+item.imgurl+"'/></a>");
				var $dd = $("<dd/>").after($dt);
				$("<a href='http:/myweb/src/html/details.html'/>").addClass("cpname").html(item.title).appendTo($dd);
				var $p = $("<p/>").html("￥<span>"+item.price+".00</span>").appendTo($dd);
				$("<span/>").html(item.zhekou).addClass("zhekou").appendTo($p);

				// href 设置成 javascript:void(0) 代表什么都不执行，那么忽略链接的跳转
				$("<a href='javascript:void(0)'/>").html("加入购物车").addClass("add").appendTo($dd);
				$("<a href='http:/myweb/src/html/details.html'/>").html("收藏").addClass("collect").appendTo($dd);;

				$dl.append([$dt,$dd]);
				
				$dl.appendTo(".cplist");
			});
		}
	});

	// 页面一加载就请求服务器的数据
	$.ajax();

	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();

		// 懒加载：滚动《快到底部》的时候再加载
		if(scrollTop >= $(document).height() - $(window).height() - 100){
			$.ajax();
		}
	});

	// 手动触发滚动事件
	$(window).trigger('scroll');
});