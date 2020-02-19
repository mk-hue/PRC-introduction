var li = document.getElementsByClassName("li-1");//备用图片
var pre = document.getElementById("btn-pre");//按钮
var next = document.getElementById("btn-next");
var circles = document.getElementsByClassName("circle");//获取所有圆圈
var index = 0;
var timer=null;


//清空样式
function clearli()
{
	for(var i = 0;i<li.length;i++)
	{
		li[i].className = "li-1";
		circles[i].className = "circle";
	}
}	
//添加样式
function goindex()
{
	clearli();
	li[index].className = "li-1 active";
	circles[index].className = "circle styles";
}	
//返回上一张图片	
function gopre()
{
	if(index==0) index=2;			
	else index--;
	goindex();
}
//加click事件，执行gopre函数
pre.addEventListener("click",function()
{
	gopre();
})
	
//进入下一张图片	
function gonext()
{
	if(index==2) index=0;		
	else index++;	
	goindex();
}
//加click事件，执行gonext函数
next.addEventListener("click",function(){
    gonext();
})
//小圆圈的样式和图片切换
for(a=0;a<circles.length;a++)
{
	circles[a].addEventListener("click",function()
	{
		var data_index = this.getAttribute("data-index");
		index = data_index;
		goindex();
	})
}
//自动轮播效果
timer=setInterval(function() //打开定时器
{        
    gonext();
},4000);   //2000为切换照片的时间

//点击科技强国板块的事件概述跳转到其他网页
/*
rig_1.addEventListener("click",function()
{
	window.open('http://www.dzwww.com/2018/lh/news/201802/t20180227_17088119.htm ');
})

rig_2.addEventListener("click",function()
{
	window.open('http://www.sohu.com/a/256891279_100098920');
})

rig_3.addEventListener("click",function()
{
	window.open('https://baijiahao.baidu.com/s?id=1599892361785077935&wfr=spider&for=pc');
})*/
