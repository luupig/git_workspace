//改变浏览器窗口大小时，页面内容宽高变化
window.onresize=function(){
	var width = $(this).width();
	//resize width
	if( width < 1024){
		$(".tivic_wrap").css("width","1024px")
	}else{
		$(".tivic_wrap").css("width","100%")	
	}
	
	if( width < 1186){
		$(".ContantUs .tivic_wrap").css("width","1186px")
	}else{
		$(".ContantUs .tivic_wrap").css("width","100%")	
	}
	
	if( width < 1196){
		$(".JoinUs .tivic_wrap").css("width","1196px")
	}else{
		$(".JoinUs .tivic_wrap").css("width","100%")	
	}

}