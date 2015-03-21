var VAHA=function(telo,rameno,miskal,miskap){
	this.telo=telo;
	this.rameno=rameno;
	this.miskaLava=miskal;
	this.miskaPrava=miskap;
}
VAHA.prototype.os=function(x,y,objekt){
	objekt.xx=x;
	objekt.yy=y;
}
VAHA.prototype.ramenneOsi=function(x,y,xx,yy){
	var z=this.rameno.xx || Math.round(this.rameno.width/2);
	var w=this.rameno.yy || 0;
	this.rameno.lx=z-x;
	this.rameno.ly=y-w;
	this.rameno.px=xx-z;
	this.rameno.py=yy-w;
}
VAHA.prototype.nastavTelo=function(left,top){
	left=left || Math.round(window.innerWidth/2-this.telo.width/2);
	top=top || Math.round(window.innerHeight/2-this.telo.height/2);
	this.telo.style.left=Number(left)+'px';
	this.telo.style.top=Number(top)+'px';
	this.telo.style.zIndex='-1';
}
VAHA.prototype.nastavRameno=function(rotate){
	var x=Math.round|(this.rameno.height/2);
	var xy=(this.kompenzujOs(rotate,x-this.rameno.yy));
	var z=parseInt(this.telo.style.top) || 0;
	rotate=rotate || 0;
	if(z!=0){
		z=z+this.telo.yy-xy[1];
	}else{
		z=x+this.telo.yy-xy[1];
	}
	x=parseInt(this.telo.style.left)+this.telo.xx-xy[0];
	this.rameno.style.left=Number(x-this.rameno.xx)+'px';
	this.rameno.style.top=Number(z-this.rameno.yy)+'px';
	this.rameno.style.WebkitTransform='rotate('+rotate+'deg)'; 
    this.rameno.style.msTransform='rotate('+rotate+'deg)'; 
    this.rameno.style.transform='rotate('+rotate+'deg)';
    this.rameno.style.zIndex='1';
    //this.nastavMisku(this.rameno.ldeg+rotate,this.rameno.lave,this.miskaLava,x,z);
    //this.nastavMisku(this.rameno.pdeg+rotate,this.rameno.prave,this.miskaPrava,x,z);
}
VAHA.prototype.deg2rad=function(deg){
	return deg*Math.PI/180;
}
VAHA.prototype.rad2deg=function(rad){
	return rad*180/Math.PI;
}
VAHA.prototype.absDeg=function(deg){
	if(deg<0){return 360-deg*-1;}else{return deg;}
}
VAHA.prototype.kompenzujOs=function(deg,p){
	//mohol som to vyriesit aj zmenou obrazka no toto riesenie mi proste nedalo :)
	deg=this.absDeg(deg);
	var x=Math.sin(this.deg2rad(deg))*p || 0;
	var y=Math.sqrt(Math.pow(2*Math.cos(this.deg2rad(90-deg/2))*p,2)-Math.pow(x,2)) || 0;
	return [Math.round(x),Math.round(y)];
}
VAHA.prototype.nastavMisku=function(deg,rameno,miska,x,y){
	deg=this.absDeg(deg);
	//var xy=this.kompenzujOs(deg,rameno);
	//var xy=[Math.round(Math.sin(this.deg2rad(90-deg))*rameno),Math.round(Math.cos(this.deg2rad(90-deg))*rameno)];
	miska.style.left=Number(x-xy[0])+'px';
	miska.style.top=Number(y-xy[1])+'px';
	miska.style.zIndex='0';
}
