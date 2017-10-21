window.onload=function(){
	var container=document.getElementById("container");
	var next=document.getElementById("next");
	var prev=document.getElementById("prev");
	var list=document.getElementById("list");
	var imgsize=list.children.length;
	var img=list.children;
	var point=document.getElementById("point").getElementsByTagName("span");
	var index=0;

	function changeImg(){
		for(var i=0;i<imgsize;i++){
//			img[i].style.display = "none";
			img[i].style.opacity = "0";
			point[i].className="";
		}
//		img[index].style.display = "block";
		img[index].style.opacity = "1";
		point[index].className="active";
	}
//	左右点击事件
	next.onclick=function(){		
		index++;
		if(index>=imgsize){
			index=0;
		}
		changeImg()
	}
	prev.onclick=function(){		
		index--;
		if(index<0){
			index=imgsize-1;
		}
		changeImg();
	}
	
	for(var i=0;i<point.length;i++){
		point[i].e=i;
		point[i].onclick=function(){
			index=this.e;
			changeImg();
		}
	}
//	计时器
	function start(){
		timer=setInterval(function(){
			index++;
			if(index>=imgsize){
				index=0;
			}
			changeImg();
		},2000)		
	}
	start()	
	function stop(){
		clearInterval(timer);
	}
	container.onmouseover=function(){stop();};
	container.onmouseout=function(){start();};
	
	
/*	$(document).ready(function(){
		$("#container").mouseover(function(){
			$("img").fadeIn(2000)
		})
		$("#container").mouseout(function(){
			$("img").fadeOut(2000)
		})
	});*/
}
