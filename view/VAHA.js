var VAHA=function(telo,rameno,miskal,miskap,divL,divP){
	this.telo=telo;
	this.rameno=rameno;
	this.miskaLava=miskal;
	this.miskaPrava=miskap;
	this.divL=divL;
	this.divP=divP;
}
VAHA.prototype.nastavTelo=function(left,top){
	left=left || Math.round(window.innerWidth/2-this.telo.width/2);
	top=top || Math.round(window.innerHeight/2-this.telo.height/2);
	this.setXY(this.telo,left,top,'','-1');
}
VAHA.prototype.animujVahu=function(deg,x,lx,px,y){
	deg=deg || 0;
	deg=this.absDeg(deg);
	this.rameno.style.WebkitTransform='rotate('+deg+'deg)'; 
    this.rameno.style.msTransform='rotate('+deg+'deg)'; 
    this.rameno.style.transform='rotate('+deg+'deg)';
    this.rameno.style.zIndex='1';
    this.setXY(this.miskaLava,lx,y,this.xyNaKruznici(deg-20.5,x),'0');
    this.setXY(this.divL,parseInt(this.miskaLava.style.left),parseInt(this.miskaLava.style.top)+this.miskaLava.height-this.divL.height,'','1');
    this.setXY(this.miskaPrava,px,y,this.xyNaKruznici(deg+200.5,x),'0');
    this.setXY(this.divP,parseInt(this.miskaPrava.style.left),parseInt(this.miskaPrava.style.top)+this.miskaPrava.height-this.divP.height,'','1');
}
VAHA.prototype.setXY=function(objekt,x,y,xy,i){
	x=x||0;
	y=y||0;
	xy=xy||[0,0];
	i=i||'-1';
    objekt.style.left=Number(x-xy[0])+'px';
	objekt.style.top=Number(y-xy[1])+'px';
	objekt.style.zIndex=i;
}
VAHA.prototype.deg2rad=function(deg){
	return deg*Math.PI/180;
}
VAHA.prototype.absDeg=function(deg){
	if(deg<0){return 360-deg*-1;}else{return deg;}
}
VAHA.prototype.xyNaKruznici=function(deg,rameno){
	deg=this.absDeg(deg);
	return xy=[Math.round(Math.sin(this.deg2rad(90-deg))*rameno),Math.round(Math.cos(this.deg2rad(90-deg))*rameno)];
}
