$(document).ready( function(){
	
/*
  设置页面内容最小宽度和高度
*/
	if( $(window).width() < 1024 ){
		$(".tivic_wrap").css("width","1024px")
	}else{
		$(".tivic_wrap").css("width","100%")	
	}
	/*
	//Auto Set
	if( $(window).height() < 590 ){
		$(".tivic_content").css("height","345px")
		$(".main_part .sideA").css("height","345px")
		$(".main_part .sideB").css("height","345px")
	}else{
		$(".tivic_content").css("height",($(window).height() - 245) + "px")
		$(".main_part .sideA").css("height",($(window).height() - 245) + "px")
		$(".main_part .sideB").css("height",($(window).height() - 245) + "px")
	}
	
	
	
	//AboutUs
	if( ($(window).height() - 245) < 450){
		$(".AboutUs .tivic_content").css("height","450px")
		$(".AboutUs .main_part .sideA").css("height","450px")
		$(".AboutUs .main_part .sideB").css("height","450px")
	}
	
	//JoinUs
	if( ($(window).height() - 245) < 485){
		$(".JoinUs .tivic_content").css("height","485px")
		$(".JoinUs .main_part .sideA").css("height","485px")
		$(".JoinUs .main_part .sideB").css("height","485px")
	}
	
	//QandA
	if( ($(window).height() - 245) < 405){
		$(".QandA .tivic_content").css("height","405px")
		$(".QandA .main_part .sideA").css("height","405px")
		$(".QandA .main_part .sideB").css("height","405px")
	}
	//Contant Us
	if( ($(window).height() - 245) < 670 ){
		$(".ContantUs .tivic_content").css("height","670px")
		$(".ContantUs .main_part .sideA").css("height","670px")
		$(".ContantUs .main_part .sideB").css("height","670px")
	}
	*/
/*
   END
*/	
	
	
	var __DOWN_LOAD_URL__ = "http://192.168.1.149/yangjy/templates/test_tengyp/api/down_load_counter.php"
	
	var data_temp = ""

	//Onload_event()

	$("#downloadBox_JS").click(function(){
		Request_event(download_event);
	})
	
	
	function Onload_event(){
		Request_event(showNumber_event)
	}
	
	//显示
	function showNumber_event(){
		$("#counter_JS").html(data_temp);
	}
	
	//显示加跳转
	function download_event(){
		$("#counter_JS").html(data_temp);
		window.open('http://www.baidu.com');
	}
	
	//请求
	function Request_event(fn){
		$.ajax({
			url : __DOWN_LOAD_URL__,
			type : "POST",
			timeout : 30000, 
			dataType : "text",
			success  : function( data){
				data_temp = data;
				fn.call(this)
				//alert("成功")
			},
			error    : function(){
				//alert("失败")
			}
		});
	}
	
	/*了解TIVIC 打开和收起
	$("#tivic_more_JS").click(function(){
		if( $("#tivic_part_JS").is(":hidden")){
			$("#tivic_part_JS").show();
			$("#tivic_more_JS").addClass("tivic_more_close");
			$(".tivic_footer").addClass("tivic_footer_open");
		}else{
			$("#tivic_part_JS").hide();
			$("#tivic_more_JS").removeClass("tivic_more_close");
			$(".tivic_footer").removeClass("tivic_footer_open");
		}
	})
	$("#tivic_part_JS").click(function(){
		$("#tivic_part_JS").hide();
		$("#tivic_more_JS").removeClass("tivic_more_close");
		$(".tivic_footer").removeClass("tivic_footer_open");
	})
	
	$("#MessageBoard_Enter_JS").click(function(){
		$("#MessageBoard_wrap_JS").show();
	})
	$("#MessageBoard_Enter_JS").hover(function(){
		$(this).addClass("M_E_hover")
	},function(){
		$(this).removeClass("M_E_hover")
	})
	$("#MessageBoard_wrap_JS .cha").live("click",function(){
		$("#MessageBoard_wrap_JS").hide();	
	})
	*/
	
	PIC_Rolling();       //ipad图片轮换
	AD_Rolling();
	
	
})

function AD_Rolling(){
	var times = 1;
	function changeImage(){
		if(times == 2){
			times = 1;
		}
		$("#main_part_1").toggle();
		$("#main_part_2").toggle();
		$(".main_part_btn a").toggleClass("hover");
		times++;
	}
	var interval = window.setInterval(function(){
		changeImage();
	}, 6000);
	$(".main_part_btn a").each(function(index){
		$(this).hover(
			function(){
				$(".main_part_btn a").removeClass("hover");
				$(this).addClass("hover");
				clearInterval(interval);
				if( $(this).html() == "1"){
					$("#main_part_1").show();
					$("#main_part_2").hide();
					times = 2;
				}else{
					$("#main_part_2").show();
					$("#main_part_1").hide();
					times = 1;
				}	
			},
			function(){
				interval = window.setInterval(function(){
					changeImage();
				}, 6000);	
			}); 
	});
}

//ipad图片轮换
function PIC_Rolling(){
	var arryImgs = ["images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg"];
	$(".clickButton a").attr("href","javascript:return false;"); 
	var times = 1;
	function changeImage(){
		if (times == 6) {
			times = 1;
		}
		$(".clickButton a").removeClass("active");
		$(".clickButton a:nth-child(" + times + ")").addClass("active");
		$(".imgs img").attr("src",arryImgs[times-1]);
		times++;
	}
	var interval = window.setInterval(function(){
		changeImage();
	}, 1500);
	$(".clickButton a").each(function(index){
		$(this).hover(
			function(){
				$(".clickButton a").removeClass("active");
				$(this).addClass("active");
				clearInterval(interval);
				$(".imgs img").attr("src",arryImgs[index]);
				times = index+1;	
			},
			function(){
				interval = window.setInterval(function(){
					changeImage();
				}, 1500);	
			}); 
	});
}