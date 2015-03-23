var t=document.getElementById('telo');
var r=document.getElementById('rameno');
var ml=document.getElementById('miskal');
var mp=document.getElementById('miskap');
var vaha=new VAHA(t,r,ml,mp);
vaha.nastavTelo();
var i=parseInt(t.style.top) || 0;
var x=parseInt(t.style.left)+t.width/2; // x os tela
var y=i+108; //y os tela
var ramenoX=r.width/2;
var ramenoY=r.height/2;
var lOsX=x-139+11; //stred tela x- usko misky + kraj ramena na lavej strane
var pOsX=x-139-11; //stred tela x- usko misky - kraj ramena na pravej strane
var lpOsY=y+ramenoY-10; //stred tela y + rameno zaves y- usko misky zhora
r.style.left=Number(x-ramenoX)+'px';
r.style.top=Number(y-ramenoY)+'px';

i=0;
var j=360
var rychlost=10;
var vshr=true; //toci sa rameno v smere hodinovych alebo protismeru ruciciek
vaha.animujVahu(i,ramenoX,lOsX,pOsX,lpOsY);
(function rm(vshr){
	setTimeout(function(vshr){if(i++<=360){
			vshr=vshr || true;
			//if(i==15 || i==345){vaha.nastavRameno(i);}
			if(vshr){j=i;}else{j--;}
			vaha.animujVahu(i,ramenoX,lOsX,pOsX,lpOsY);
			rm(vshr);
		}
	},rychlost);
})(vshr);

