function getStyle(obj,style) {  
	if(obj.currentStyle) {  
    	return obj.currentStyle[style];  
	} 
	else {  
    	return getComputedStyle(obj)[style];  
	} 
}
var row = document.getElementById("row");
var a;
window.onload=doing();
function doing(){
	a = setInterval(function(){
		var now = parseInt(getStyle(row,"left"));
		row.style.left=now-1+"px";
		if(now<=-1340){
			row.style.left=0+"px";
		}
	},15)
}
row.setAttribute("onmouseover", "clearInterval(a)");
row.setAttribute("onmouseout", "doing()");

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
for(var i = 0;i<oNavlist.length;i++){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index + 1;
		navmove();
		animate(slider,{left:-1920*index});
	}
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
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
	navmove();
	animate(slider,{left:-1920*index},function(){
		if(index==0){
			slider.style.left = "-5760px";
			index=3;
		}
		isMoving= false;
	});
}
function navmove(){
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

var sight = document.getElementById("sight");
var first = document.getElementById("first");
var img1 = document.getElementById("img1");
var one = document.getElementById("one");
var second = document.getElementById("second");
var img2 = document.getElementById("img2");
var two = document.getElementById("two");
var last = document.getElementById("last");
var img3 = document.getElementById("img3");
var three = document.getElementById("three");
function change1(){
	img1.style.display="none";
	one.style.display="block";
	sight.style.display="block";
	sight.setAttribute("onmouseover", "newchange1()");
	sight.setAttribute("onmouseout", "unchange1()");
}
function unchange1(){
	img1.style.display="block";
	one.style.display="none";
	sight.style.display="none";
}
function change2(){
	img2.style.display="none";
	two.style.display="block";
	sight.style.display="block";
	sight.setAttribute("onmouseover", "newchange2()");
	sight.setAttribute("onmouseout", "unchange2()");
}
function unchange2(){
	img2.style.display="block";
	two.style.display="none";
	sight.style.display="none";
}
function change3(){
	img3.style.display="none";
	three.style.display="block";
	sight.style.display="block";
	sight.setAttribute("onmouseover", "newchange3()");
	sight.setAttribute("onmouseout", "unchange3()");
}
function unchange3(){
	img3.style.display="block";
	three.style.display="none";
	sight.style.display="none";
}
function newchange1(){
	img1.style.display="none";
	one.style.display="block";
	sight.style.display="block";
}
function newchange2(){
	img2.style.display="none";
	two.style.display="block";
	sight.style.display="block";
}
function newchange3(){
	img3.style.display="none";
	three.style.display="block";
	sight.style.display="block";
}
first.setAttribute("onmouseover", "change1()");
one.setAttribute("onmouseover", "change1()");
first.setAttribute("onmouseout", "unchange1()");
one.setAttribute("onmouseout", "unchange1()");
second.setAttribute("onmouseover", "change2()");
two.setAttribute("onmouseover", "change2()");
second.setAttribute("onmouseout", "unchange2()");
two.setAttribute("onmouseout", "unchange2()");
last.setAttribute("onmouseover", "change3()");
three.setAttribute("onmouseover", "change3()");
last.setAttribute("onmouseout", "unchange3()");
three.setAttribute("onmouseout", "unchange3()");

var zhuan = document.getElementById("zhuan").children;
var doing1 = document.getElementById("doing1");
var doing2 = document.getElementById("doing2");
var doing3 = document.getElementById("doing3");
var doing4 = document.getElementById("doing4");
var now = 1;
function oneout(){
	setTimeout(function(){
		animate(zhuan[0],{top:313});
	},0);
	setTimeout(function(){
		animate(zhuan[1],{top:313});
	},60);
	setTimeout(function(){
		animate(zhuan[2],{top:313});
	},120);
	setTimeout(function(){
		animate(zhuan[3],{top:313});
	},180);
	setTimeout(function(){
		animate(zhuan[4],{top:313});
	},240);
}
function onein(){
	setTimeout(function(){
		animate(zhuan[0],{top:0});
	},0);
	setTimeout(function(){
		animate(zhuan[1],{top:0});
	},60);
	setTimeout(function(){
		animate(zhuan[2],{top:0});
	},120);
	setTimeout(function(){
		animate(zhuan[3],{top:0});
	},180);
	setTimeout(function(){
		animate(zhuan[4],{top:0});
	},240);
}
function twoout(){
	setTimeout(function(){
		animate(zhuan[5],{left:500});
	},0);
	setTimeout(function(){
		animate(zhuan[6],{left:500});
	},60);
	setTimeout(function(){
		animate(zhuan[7],{left:500});
	},120);
	setTimeout(function(){
		animate(zhuan[8],{left:500});
	},180);
	setTimeout(function(){
		animate(zhuan[9],{left:500});
	},240);
}
function twoin(){
	setTimeout(function(){
		animate(zhuan[5],{left:0});
	},0);
	setTimeout(function(){
		animate(zhuan[6],{left:0});
	},60);
	setTimeout(function(){
		animate(zhuan[7],{left:0});
	},120);
	setTimeout(function(){
		animate(zhuan[8],{left:0});
	},180);
	setTimeout(function(){
		animate(zhuan[9],{left:0});
	},240);
}
function threeout(){
	setTimeout(function(){
		animate(zhuan[10],{left:-500});
	},0);
	setTimeout(function(){
		animate(zhuan[11],{left:-500});
	},60);
	setTimeout(function(){
		animate(zhuan[12],{left:-500});
	},120);
	setTimeout(function(){
		animate(zhuan[13],{left:-500});
	},180);
	setTimeout(function(){
		animate(zhuan[14],{left:-500});
	},240);
}
function threein(){
	setTimeout(function(){
		animate(zhuan[10],{left:0});
	},0);
	setTimeout(function(){
		animate(zhuan[11],{left:0});
	},60);
	setTimeout(function(){
		animate(zhuan[12],{left:0});
	},120);
	setTimeout(function(){
		animate(zhuan[13],{left:0});
	},180);
	setTimeout(function(){
		animate(zhuan[14],{left:0});
	},240);
}
function fourout(){
	setTimeout(function(){
		animate(zhuan[15],{top:-313});
	},0);
	setTimeout(function(){
		animate(zhuan[16],{top:-313});
	},60);
	setTimeout(function(){
		animate(zhuan[17],{top:-313});
	},120);
	setTimeout(function(){
		animate(zhuan[18],{top:-313});
	},180);
	setTimeout(function(){
		animate(zhuan[19],{top:-313});
	},240);
}
function fourin(){
	setTimeout(function(){
		animate(zhuan[15],{top:0});
	},0);
	setTimeout(function(){
		animate(zhuan[16],{top:0});
	},60);
	setTimeout(function(){
		animate(zhuan[17],{top:0});
	},120);
	setTimeout(function(){
		animate(zhuan[18],{top:0});
	},180);
	setTimeout(function(){
		animate(zhuan[19],{top:0});
	},240);
}
function done1(){
	if(now==2){
		twoout();
	}
	else if(now==3){
		threeout();
	}
	else if(now==4){
		fourout();
	}
	setTimeout(function(){
		onein();
	}, 500);
	now=1;
}
function done2(){
	if(now==1){
		oneout();
	}
	else if(now==3){
		threeout();
	}
	else if(now==4){
		fourout();
	}
	setTimeout(function(){
		twoin();
	}, 500);
	now=2;
}
function done3(){
	if(now==1){
		oneout();
	}
	else if(now==2){
		twoout();
	}
	else if(now==4){
		fourout();
	}
	setTimeout(function(){
		threein();
	}, 500);
	now=3;
}
function done4(){
	if(now==1){
		oneout();
	}
	else if(now==2){
		twoout();
	}
	else if(now==3){
		threeout();
	}
	setTimeout(function(){
		fourin();
	}, 500);
	now=4;
}
doing1.setAttribute("onclick", "done1()");
doing2.setAttribute("onclick", "done2()");
doing3.setAttribute("onclick", "done3()");
doing4.setAttribute("onclick", "done4()");

var aa = document.getElementById("aa").children;
var up = document.getElementById("up");
var up1 = document.getElementById("up1");
var key = true;
function getout1(){
	if(key){
		up1.style.display="block";
		up1.style.background="#5eb0de";
		animate(up1,{opacity:100});
		key=false;
	}
	else{
		animate(up1,{opacity:0});
		setTimeout(function(){
			up1.style.display="none";
		},1500);
		key=true;
	}
}
function getout2(){
	if(key){
		up1.style.display="block";
		up1.style.background="#86cad7";
		animate(up1,{opacity:100});
		key=false;
	}
	else{
		animate(up1,{opacity:0});
		setTimeout(function(){
			up1.style.display="none";
		},1500);
		key=true;
	}
}
function getout3(){
	if(key){
		up1.style.display="block";
		up1.style.background="#e9bab3";
		animate(up1,{opacity:100});
		key=false;
	}
	else{
		animate(up1,{opacity:0});
		setTimeout(function(){
			up1.style.display="none";
		},1500);
		key=true;
	}
}
function getout4(){
	if(key){
		up2.style.display="block";
		up2.style.background="#cac69e";
		animate(up2,{opacity:100});
		key=false;
	}
	else{
		animate(up2,{opacity:0});
		setTimeout(function(){
			up2.style.display="none";
		},1500);
		key=true;
	}
}
function getout5(){
	if(key){
		up2.style.display="block";
		up2.style.background="#abc2df";
		animate(up2,{opacity:100});
		key=false;
	}
	else{
		animate(up2,{opacity:0});
		setTimeout(function(){
			up2.style.display="none";
		},1500);
		key=true;
	}
}
function getout6(){
	if(key){
		up2.style.display="block";
		up2.style.background="#bdbad7";
		animate(up2,{opacity:100});
		key=false;
	}
	else{
		animate(up2,{opacity:0});
		setTimeout(function(){
			up2.style.display="none";
		},1500);
		key=true;
	}
}
aa[0].setAttribute("onclick", "getout1()");
aa[1].setAttribute("onclick", "getout2()");
aa[2].setAttribute("onclick", "getout3()");
aa[3].setAttribute("onclick", "getout4()");
aa[4].setAttribute("onclick", "getout5()");
aa[5].setAttribute("onclick", "getout6()");