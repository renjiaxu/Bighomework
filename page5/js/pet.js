/*
* @Author: JJIXI
* @Date:   2019-12-21 15:19:04
* @Last Modified by:   JJIXI
* @Last Modified time: 2019-12-25 15:48:31
*/
var box = document.getElementById("box");
var slider = document.getElementById("slider");
var oNavlist = document.getElementById("nav").children;
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
	clearInterval(timer);
}
box.onmouseout = function(){
	timer = setInterval(next,3000);
}
//小按钮点击事件
for(var i = 0;i<oNavlist.length;i++){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index + 1;
		navMove();
		animate(slider,{left:-1920*index});
	}
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navMove();
	animate(slider,{left:-1920*index},function(){
		if(index==4){
			slider.style.left = "-1920px";
			index=1;
		}
		isMoving= false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmMove();
	//animate()
	animate(slider,{left:-1920*index},function(){
		if(index==0){
			slider.style.left = "-5760px";
			index=3;
		}
		isMoving= false;
	});
}
function navMove(){
	for(var i = 0;i<oNavlist.length;i++){
		oNavlist[i].id = "";
	}
	if(index > 3){
		oNavlist[0].id = "active";
	}else if(index<=0){
		oNavlist[2].id = "active";
	}else{
		oNavlist[index-1].id = "active";
	}
}
timer = setInterval(next,3000);
window.onload = function(){
	var box = document.getElementById("petlist");
	// var second = document.getElementById("second");
	var arrLI = box.children[0].children;
	var bigbox = document.getElementById("big");
	for (var i = 0; i < arrLI.length; i++) {
		// 鼠标悬浮时，预加载图片插入容器并显示
		arrLI[i].onmouseover = (function(num){
			return function(){
				// 当鼠标在上面移动时。
				this.onmousemove = function(evt){
					// 兼容多个浏览器参数
					var e = evt || event;
					//鼠标到屏幕左侧的距离
					var x = e.clientX;
					var y = e.clientY;
					// var jian = document.body.offsetWidth - bigbox.offstetWidth;
					// 当前页面的宽度减去bigbox的页面宽度。
					// 设置边界处理，防止移出小图片。
					console.log("body="+document.body.offsetWidth);
					console.log("bigbox="+bigbox.offsetWidth);
					console.log(document.body.offsetWidth - bigbox.offsetWidth);
					// console.log(document.body.offsetWidth - bigbox.offsetWidth);

					//console.log(x);

					if (x >= (document.body.offsetWidth - bigbox.offsetWidth)) {
						//设置bigbox的left，top值
						console.log("zuo="+x);
						bigbox.style.left = x - 30 - bigbox.offsetWidth+"px";
						bigbox.style.top = y - 30 +"px";
					}else{
						console.log("you="+x);
						bigbox.style.left = x + 40 +"px";
						bigbox.style.top = y + 40 +"px";
					}
				}
				//显示
				bigbox.style.display = "block";
				var oImg = document.createElement("img");
				oImg.src = "images/shows"+(num+1)+".png";
				bigbox.innerHTML = "";
				bigbox.appendChild(oImg);
			}
		})(i);
		//鼠标离开，隐藏大图。
		arrLI[i].onmouseout = function(){
			bigbox.style.display = "none";
		}
	}
}