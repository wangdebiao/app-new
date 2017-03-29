function fontSize(fontSize,type){
	var type=type||"x";
	if(type=="x"){
		//获取浏览器宽
	    var cW=document.documentElement.clientWidth;
	    //获取设计图尺寸
	    var fontSize=fontSize||320;
	    //得到比例
	    var bili=cW/fontSize*100;
	}else if(type=="y"){
		//获取浏览器高
	    var cH=document.documentElement.clientHeight;
	    //获取设计图尺寸
	    var fontSize=fontSize||320;
	    //得到比例
	    var bili=cH/fontSize*100;
	}
    //设置根元素（html）的fontSize
    document.getElementsByTagName("html")[0].style.fontSize=bili+"px";
}
//fontSize();