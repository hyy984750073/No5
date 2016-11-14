
// 当点击“添加到购物车”，就添加 cookie 
$(function() {

	var str = getCookie("arr");

	// 用于存储所有的商品
	var arr = [];
	if (str != "")
	{
		// 说明之前 cookie 中有商品的内容
		// 取出来转换成数组
		arr = JSON.parse(str);
	}

	// 商品由 名称 和 价格组成
	// 例如： {product: XXX, price: 180}

	var $allA = $(".boxbuy .add")?$(".boxbuy .add"):$(".cplist .add");

	for (var i = 0; i < $allA.length; i++)
	{
		$allA.on("click",function(){
			// 获取no5价格
			var $price = $(".this-price span")?$(".this-price span"):$(".zhekou").prev("span");

			// 获取一般价，即市场价
			var $marketPrice = $(".market-price span")?$(".market-price span"):$(".zhekou").prev("span");

			// 获取特价
			var $tPrice = $(".tej-price span")?$(".tej-price span"):$(".zhekou").prev("span");

			// 获取商品规格
			var $norms = $(".part-right h2 span")?$(".part-right h2 span"):$(".zhekou").prev("span");

			// 获取数量
			var $amount = $(".boxbuy input")?$(".boxbuy input"):1;

			// 取出商品名字的标签对象
			var $oSpan = $(".part-right h2")?$(".part-right h2"):$(".cpname");
		
			// 获取商品图片的src
			var $pic = $("#pic-box").find("img").attr("src");
			// [TODO]  创建一个商品对象，并添加到数组中，然后将数组设置到 cookie 中

			var shop = {};
			//将页面中的内容添加到对象中
			shop.product = $oSpan.html();// 商品名称
			shop.norms = $norms.html();// 商品规格
			shop.marketPrice = $marketPrice.html();//一般价，市场价
			shop.price = $price.html();// no5价
			shop.amount = $amount.val();// 数量
			shop.pic = $pic;
			
			arr.push( shop );//将对象压入数组当中

			// 将数组的内容设置到 cookie 中呢？
			// cookie 的名字是 arr, 内容是数组中的商品，过期时间是7天以后
			addCookie("arr",JSON.stringify(arr),7);			

			alert("添加成功");
		});
			
	}
	
	$cart = $(".sum a");
	$cart.on("click",function(){
		location.href = "cart.html";
	});
});

// 将字符串重新执行，那么可以得到原来的数组
// 因为可能存在安全问题

$(function() {
	// 购物车页面
	var $tbody = $(".cart-list tbody");

	// 头部公共页面
	var $shopcart = $(".goodslist");	

	var str = getCookie("arr");

	var arr = JSON.parse(str);
	
	for (var i = 0; i < arr.length; i++)
	{
		// 创建一个商品
		var $tr = $("<tr/>");
		// 序号
		$("<td/>").html(i+1).appendTo($tr);
		// 商品名称
		$("<td/>").addClass("align-left").html("<a href='#'>"+arr[i].product+"</a>").appendTo($tr);
		// 规格
		$("<td/>").html(arr[i].norms).appendTo($tr);
		// 一般价
		$("<td/>").html(arr[i].marketPrice).appendTo($tr);
		// no5价
		$("<td/>").html(arr[i].price).appendTo($tr);
		// 数量
		$("<td/>").html("<input type='text' value='"+arr[i].amount+"' class='total'>").appendTo($tr);
		// 付款小计
		$("<td/>").html(arr[i].price*arr[i].amount).appendTo($tr);
		// 转入收藏夹
		$("<td/>").html("<a href='#''>转入收藏夹</a>").appendTo($tr);
		// 删除
		$("<td/>").html("<a href='#''>删除</a>").appendTo($tr);

		// 取出数组中元素，arr[i] 是一个对象,
		// 再取出这个对象中的产品名 和 价格
		$tr.appendTo($tbody);



		// 头部加入购物车
		$dl = $("<dl/>");
		$("<dt/>").html('<a href="#"><img src="'+arr[i].pic+'"/></a>').appendTo($dl);
		$("<dd/>").addClass("pro-name").html("<a href='html/details.html' target='_blank'>"+arr[i].product+"</a>").appendTo($dl);
		$("<dd/>").addClass("pro-price").html("￥"+arr[i].price+"x"+arr[i].amount+"<a href='javascript:void(0);'>删除</a>").appendTo($dl);
		$dl.appendTo($shopcart);

		$(".trigger strong").html(i+1);
		$(".sum p b").html(i+1);
		
	}

	// 计算购物车总价
	var sum = 0;

	for(var i = 0;i < arr.length ; i++)
	{
		sum += arr[i].price*arr[i].amount;
	}
	console.log(sum);
	$(".price span,.sum em").html("￥"+sum);


	$(function(){
		// 删除
		var $del1 = $(".cart tbody tr");
		
		$del1.each(function(idx,item){
			var $del = $(item).find("td").eq(8).children();

			$del.on("click",function(){

				$(this).parents("tr").remove();

			});

		});
		
	});
});


