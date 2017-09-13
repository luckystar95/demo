var screenAnimateElement={
	'.screen-1':[
	'.screen-1__heading',
	'.screen-1__phone',
	'.screen-1__shadow',
	]
};

function setScreenAnimate(screenCls){
	var screen=document.querySelector(screenCls);
	var screenAnimate=screenAnimateElement[screenCls];
	
	var isScreenAnimate=false;
	var screenAnimateDone=false;
	
	screen.onclick=function(){
		if(isScreenAnimate===false){
			for(var i=0;i<screenAnimate.length;i++){
				var element=document.querySelector(screenAnimate[i]);
				var baseCls=element.getAttribute('class');
				element.setAttribute('class',baseCls+' '+screenAnimate[i].substr(1)+'_animate_init');
			}
			isScreenAnimate=true;
			return;
		}
		
		if(screenAnimateDone===false){
			for(var i=0;i<screenAnimate.length;i++){
				var element=document.querySelector(screenAnimate[i]);
				var baseCls=element.getAttribute('class');
				element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
			}
			screenAnimateDone=true;
			return;
		}
		
		if(screenAnimateDone===true){
			for(var i=0;i<screenAnimate.length;i++){
				var element=document.querySelector(screenAnimate[i]);
				var baseCls=element.getAttribute('class');
				element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
			}
			screenAnimateDone=false;
			return;
		}
	}
}
setScreenAnimate('.screen-1');



