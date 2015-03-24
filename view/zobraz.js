var t=document.getElementById('telo');
var r=document.getElementById('rameno');
var ml=document.getElementById('miskal');
var mp=document.getElementById('miskap');
var vaha=new VAHA(t,r,ml,mp);
vaha.nastavTelo();
var i=parseInt(t.style.top) || 0;
var x=parseInt(t.style.left)+t.width/2; // x os tela
var y=i+108; //y os tela
var lOsX=x-138; //stred tela x- usko misky
var pOsX=x-138-2; //stred tela x- usko misky - kompenzacia
r.style.left=Number(x-r.width/2)+'px';
r.style.top=Number(y-r.height/2)+'px';

i=0;
var j=360
var rychlost=10;
var step=5;
var vshr=true; //toci sa rameno v smere hodinovych alebo protismeru ruciciek
vaha.animujVahu(i,312,lOsX,pOsX,y);
(function rm(smer){
	setTimeout(function(smer){if(i<=360){
			smer=smer || true;
			if(vshr){j=i;}
			vaha.animujVahu(j,312,lOsX,pOsX,y);
			i+=step;
			j-=step;
			rm(smer);
		}
	},rychlost);
})(vshr);

