$(function(){

	var ok1=false;
    var ok2=false;
    var ok3=false;
    var ok4=false;
    var ok5=false;
    var ok6=false;

	var yzm = parseInt(Math.random()*9000)+999;
	$(".yanzm").html(yzm);

	// 验证码
	$(".yzm input").on("blur",function(){

		$(this).removeClass("input-focus");

		var val = parseInt($(this).val());
		if( val != yzm )
		{
			$(this).addClass("input_failure").parents("label").siblings("span").addClass("warning").html("请您输入验证码！");

		}else{

			$(this).parents("label").siblings("img").css("display","block");
			ok5=true;
		}
	});


	// 用户名
	$(".username input").on("focus",function(){
		$(this).addClass("input-focus");
		$(this).parents("p").find("span").html('3~30位，由汉字、字母、数字、点、减号、下划线及"@"组成').removeClass("warning");
	}).on("blur",function(){
		if($(this).val().length >= 3 && $(this).val().length <=30 && $(this).val()!=''){
            $(this).parents("label").siblings("img").css("display","block").siblings("span").html("");
            ok1=true;
            console.log("asdfa");
        }else{
            $(this).addClass("input_failure").parents("p").find("span").html('用户名的长度应为3~30个字符之间(汉字占两个字符)').addClass("warning");
        }
	});

	// 输入密码
	$(".pass input").on("focus",function(){
		$(this).addClass("input-focus");
		$(this).parents("p").find("span").html('6~16位，建议使用字母、数字、特殊字符组合').removeClass("warning");
	}).on("blur",function(){
		if($(this).val().length >= 6 && $(this).val().length <=16 && $(this).val()!=''){
            $(this).parents("p").find("img").css("display","block").siblings("span").html("");
            ok2=true;
        }else{
            $(this).addClass("input_failure").parents("p").find("span").html('密码的长度应该为6~16个字符之间！').addClass("warning");
        }
	});

	$(".password input").on("focus",function(){
		$(this).addClass("input-focus");
	}).on("blur",function(){
		$(this).removeClass("input-focus");

		if($(this).val().length >= 6 && $(this).val().length <=16 && $(this).val()!=''){
            
            ok2=true;
        }
	});

	// 重新输入密码
	$(".pass2 input").on("focus",function(){
		$(this).addClass("input-focus");
	}).on("blur",function(){
        if($(this).val().length >= 6 && $(this).val().length <=20 && $(this).val()!='' && $(this).val() == $('input[name="pass"]').val()){
            $(this).parents("p").find("img").css("display","block").siblings("span").html("");
            ok3=true;
        }else{
        	$("p.pass").find("img").css("display","none");
        	$("p.pass").find(".tishi").html('两次密码不一致！').addClass("warning");
        	$("p.pass").find("input").addClass("input_failure");
        }
    });

	// 邮箱
	$(".email").find("img").css("display","none");
	$(".email input").on("focus",function(){
		$(this).addClass("input-focus");
		$(this).parents("p").find("span").html("");
	}).on("blur",function(){
		if($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1){
            $(this).addClass("input_failure");
            $(this).parents("p").find("span").html('请您输入邮件地址').addClass("warning");
        }else{                  
           	$(this).parents("p").find("img").show();
            ok4=true;
        }
	});

	// 验证码
	$(".yzm input").on("focus",function(){
		$(this).parents("label").siblings("span").html("");
		$(this).addClass("input-focus");
	});

	$(".yzm1 input").on("focus",function(){
		$(this).addClass("input-focus");
	});
	$(".yzm1 input").on("blur",function(){
		$(this).removeClass("input-focus");
	});

	// 注册按钮
	//提交按钮,所有验证通过方可提交 
    $('#btn-enroll').on("click",function(){
    	location.href="../index.html";
        if(ok1 && ok2 && ok3 && ok4 && ok5){
            //$('.enroll form').submit();
            location.href="../index.html";
        }else{
            return false;
        }
        alert("注册成功！");
    });

    // 登录
    // 用户名
	$(".username1 input").on("focus",function(){
		$(this).addClass("input-focus");
	}).on("blur",function(){
		$(this).removeClass("input-focus");

		if($(this).val().length >= 3 && $(this).val().length <=30 && $(this).val()!=''){
            //$(this).parents("label").siblings("img").css("display","block").siblings("span").html("");
            ok6=true;
        }
  		
	});

	// 输入密码
	$(".pass3 input").on("focus",function(){
		$(this).addClass("input-focus");
	}).on("blur",function(){
		$(this).removeClass("input-focus");

		if($(this).val().length >= 6 && $(this).val().length <=16 && $(this).val()!=''){
           //$(this).parents("p").find("img").css("display","block").siblings("span").html("");
            ok2=true;
        }
	});

	// 登录按钮
	$("#btn-login").on("click",function(){
		location.href="../index.html";
		if(ok2 && ok5 && ok6){
            //$('.login form').submit();
            location.href="../index.html";
        }else{
            return false;
        }
        alert("登录成功！");
	});
    
})