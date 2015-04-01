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
	this.setXY(this.telo,left,top);
}
VAHA.prototype.animujRameno=function(deg,x,lx,px,y){
	deg=deg || 0;
	deg=Math.absDeg(deg);
	this.rameno.style.WebkitTransform='rotate('+deg+'deg)'; 
    this.rameno.style.msTransform='rotate('+deg+'deg)'; 
    this.rameno.style.transform='rotate('+deg+'deg)';
    this.setXY(this.miskaLava,lx,y,Img.circlePoint(deg-20.5,x));
    this.setXY(this.divL,parseInt(this.miskaLava.style.left),parseInt(this.miskaLava.style.top)+this.miskaLava.height-this.divL.height);
    this.setXY(this.miskaPrava,px,y,Img.circlePoint(deg+200.5,x));
    this.setXY(this.divP,parseInt(this.miskaPrava.style.left),parseInt(this.miskaPrava.style.top)+this.miskaPrava.height-this.divP.height);
}
VAHA.prototype.animujMisku=function(element,x,y,xy){
	var x=Math.round|(this.rameno.height/2);
	var xy=(Img.compAxis(rotate,x-this.rameno.yy));
	var z=parseInt(this.telo.style.top) || 0;
	rotate=rotate || 0;
	if(z!=0){
		z=z+this.telo.yy-xy[1];
	}else{
		z=x+this.telo.yy-xy[1];
	}
	x=parseInt(this.telo.style.left)+this.telo.xx-xy[0];
}
VAHA.prototype.setXY=function(element,x,y,xy){
	x=x||0;
	y=y||0;
	xy=xy||[0,0];
    element.style.left=Number(x-xy[0])+'px';
	element.style.top=Number(y-xy[1])+'px';
}

/* trieda na animaciu obrazkov x je horizontal a y je vertikal
* poskytuje zlucovanie elementov do jedneho celku
* oznacenie osi objektu pri kruhovych pohyboch
* vektor pohybu
* pohyb po kruznici
*/
Img.prototype.fixIt(spodok,sxy,vrch,vxy){
//spaja elementy do jedneho nemenneho objektu ktory sa potom moze posuvat ako jeden celok

}
Img.prototype.moveIt(obj,xy){
//zmeni poziciu objektu ktoreho moze tvorit jeden alebo viac elementov podla xy ktore definuje novy vektor

}
Img.prototype.fixOs(spodok,sxy,vrch,vxy){
//zadefinuje sa bod vramci kazdeho obrazka ktore sa pri pohybe zosynchronizuju do jedneho spolocneho xy podla spodku a vytvoria kladku

}
Img.prototype.per2Pix(elm,per,isWidht){
//konvertuje percenta na pixle vramci elementu
	
}
Img.prototype.circlePoint=function(deg,radius){
//podla deg (stupnov) a radiusu (polomer) vracia hodnotu posuvu osi xy
	deg=Math.absDeg(deg);
	return [Math.round(Math.sin(Math.deg2rad(90-deg))*radius),Math.round(Math.cos(Math.deg2rad(90-deg))*radius)];
}
Img.prototype.compAxis=function(deg,radius){
//podla deg (stupnov) a radiusu (polomer) kompenzuje vychilenie osi ak nieje v strede obrazka o xy
	deg=Math.absDeg(deg);
	return [Math.round(Math.sin(Math.deg2rad(deg))*radius),Math.round(Math.sqrt(Math.pow(2*Math.cos(Math.deg2rad(90-deg/2))*radius,2)-Math.pow(x,2)))];
}
Math.prototype.deg2rad=function(deg){
//preratava stupne na radiany
	return deg*Math.PI/180;
}
Math.prototype.absDeg=function(deg){
//zaporne stupne preratava na absolutnu hodnotu
	if(deg<0){return 360-deg*-1;}else{return deg;}
}
