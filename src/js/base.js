$(function(){

	// 轮播图
	(function(){		
		// 图片序号
		var $bannerNum = $(".banner-no li");
		// 图片
		var $bannerPic = $(".banner-pic li");
		// 广告
		var $bannerAdvert = $(".banner-ad")
		var i = -1;
		var t = 3700;// 设定法间隔时间
		var timer;
		showPic();
		
		function showPic(){	
			i++;
			if(i>6)
			{
				i = 0;
			}
			$bannerNum.eq(i).addClass("select").siblings().removeClass("select");
			$bannerPic.eq(i).fadeIn().siblings().fadeOut();
			$bannerAdvert.find("li").eq(i).show().siblings().hide();
		}		
		timer = setInterval(showPic,t);	
		// 鼠标经过的时候清除定时器，然后又要创建
		$bannerPic.on("mouseenter",function(){
			clearInterval(timer);
		}).on('mouseleave',function(){
			timer = setInterval(showPic,t);
		});
		
		// 点击小图标的时候翻页
		$bannerNum.on("click mouseenter",function(){
			i = $(this).index();
			$bannerNum.eq(i).addClass("select").siblings().removeClass("select");
			$bannerPic.eq(i).fadeIn().siblings().fadeOut();
			$bannerAdvert.find("li").eq(i).show().siblings().hide();
		});	
	})();


	// 我的账户
	(function(){
		$(".myaccount").on("mouseenter",function(){
			$(".hide").show();
		}).on("mouseleave",function(){
			$(".hide").hide();
		});
	})();

	// 回到顶部和联系客服
	(function(){
		$(window).on("scroll",function(){
			if($(window).scrollTop()>=500)
			{
				$(".to-top,.floatButtons").css("visibility","visible");
			}else{
				$(".to-top").css("visibility","hidden");
			}
		});

		$(".to-top").on("click",function(){
			$("body").animate({'scrollTop':0},1000);
			//$(document).scrollTop(0);
		});
	})();

	// 导航悬浮
	(function(){
		$(window).on("scroll",function(){
			if($(window).scrollTop()>=900)
			{
				$(".head-nav").addClass("alwayhere");
			}else{
				$(".head-nav").removeClass("alwayhere");
			}
		});
	})();


	// 二级菜单
	(function(){

		$(".total-nav").on("mouseenter",function(){

			$(".first-menu").slideDown();

			
		}).on("mouseleave",function(){

			$(".first-menu,.second-menu").hide();
			
		});

		$(".first-menu").on("mouseenter","li",function(){
			$(this).addClass("hover").siblings().removeClass("hover");
			$(".second-menu").show();
			$(".second-menu>li").eq($(this).index()).show().siblings().hide();

		});

		$(".second-menu").on("mouseleave",function(){
			$(".first-menu li").removeClass("hover");
		});

	})();


	// 鼠标经过的实现显示商品信息
	(function(){
		$(".list_show").on("mouseenter","li",function(){
			$(".list_show li").removeClass("hover");
			$(this).addClass("hover");
		}).on("mouseleave","li",function(){
			$(this).siblings("li").removeClass("hover");
		});
	})();
	


	// 首页tab切换
	(function(){

		$(".saletabs-list").on("mouseenter","li",function(){
			var idx = $(this).index();
			var move = (idx-1)*234;
			$(".tab-arrow").css("left",move +"px")
			$(".saleboxs>div").eq(idx-1).css("display","block").siblings().css("display","none");
		});

	})();


	// 列表页tab切换
	(function(){

		$(".type-list").on("click.open","h3",function(){

			var $switchopen = $(this).find("span").eq(0);

			if($switchopen.hasClass("switch-style-open"))
			{
				
				$switchopen.removeClass("switch-style-open").addClass("switch-style-close");

				$(this).next("ul").css("display","none");

			}else{

				$(this).next("ul").css("display","block");

				$switchopen.removeClass("switch-style-close").addClass("switch-style-open");
			}
			
		});

	})();



	// 限时抢购倒计时
	(function(){

		var timer = setInterval(function(){
			
			var time_start = new Date().getTime(); //设定当前时间
		    var time_end =  new Date("2016/9/25 00:00:00").getTime(); //设定目标时间
		    // 计算时间差 
		    var time_distance = time_end - time_start; 
		    // 时
		    var int_hour = Math.floor(time_distance/3600000); 
		    time_distance -= int_hour * 3600000; 
		    // 分
		    var int_minute = Math.floor(time_distance/60000) ;
		    time_distance -= int_minute * 60000; 
		    // 秒 
		    var int_second = Math.floor(time_distance/1000); 

		    // 时分秒为单数时、前面加零 
		    if(int_hour < 10){ 
		        int_hour = "0" + int_hour; 
		    } 
		    if(int_minute < 10){ 
		        int_minute = "0" + int_minute; 
		    } 
		    if(int_second < 10){
		        int_second = "0" + int_second; 
		    } 
			if( int_hour==0 && int_minute==0 && int_second==0 )
		    {
		    	console.log("清除定时器");
		    	clearInterval(timer);
		    }

		    // 显示时间                                                
		    $(".limitbuy dt").html("剩余 <b>"+int_hour+"</b> 小时 <b>"+int_minute+"</b> 分 <b>"+int_second+"</b> 秒");   

		},1000); 

	})();


	// 详情页点击+-的时候改变商品的数量
	(function(){
		var $span = $(".boxbuy span");

		var $reduce = $span.find("img").eq(0);
		// 点击减号
		$reduce.on("click",function(){
			var oldnum = parseInt($(this).next().val());
			if( oldnum <= 1 )
			{
				alert("商品数量必须大于1")
			}else{
				//$(this).next().val(oldnum-1);
				$span.find("input").val(oldnum-1);
			}
		});

		var $add = $span.find("img").eq(1);
		// 点击加号
		$add.on("click",function(){

			var oldnum = parseInt($(this).prev().val());

			$span.find("input").val(oldnum+1);	

		});

	})();
	
});