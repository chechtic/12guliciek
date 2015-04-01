var t=document.getElementById('telo');
var r=document.getElementById('rameno');
var ml=document.getElementById('miskal');
var mp=document.getElementById('miskap');
var divl=document.getElementById('divl');
var divp=document.getElementById('divp');
divl.height=48;
divl.width=280;
divp.height=48;
divp.width=280;
var vaha=new VAHA(t,r,ml,mp,divl,divp);
vaha.nastavTelo();
var i=parseInt(t.style.top) || 0;
var x=parseInt(t.style.left)+t.width/2; // x os tela
var y=i+108; //y os tela
var lOsX=x-138; //stred tela x- usko misky
var pOsX=x-138-2; //stred tela x- usko misky - kompenzacia
var rameno=312; //rameno od osi k miske
vaha.animujRameno(0,rameno,lOsX,pOsX,y);

r.style.left=Number(x-r.width/2)+'px';
r.style.top=Number(y-r.height/2)+'px';

function vaz(){
	var i=0;
	var j=360
	var rychlost=10;
	var step=5;
	var vshr=true; //toci sa rameno v smere hodinovych alebo protismeru ruciciek
	(function rm(smer){
		setTimeout(function(smer){if(i<=360){
				smer=smer || true;
				if(vshr){j=i;}
				vaha.animujRameno(j,rameno,lOsX,pOsX,y);
				i+=step;
				j-=step;
				rm(smer);
			}
		},rychlost);
	})(vshr);
}

function zobrazgulicky(pole,tag,id){
	var el=document.body.getElementsByTagName(tag);
	for(var i=0;i<pole.length;i++){
		var div = document.createElement('div');
		div.setAttribute('class','gl');
		div.setAttribute('id',pole[i]);
		div.setAttribute('draggable','true');
		div.setAttribute('ondragstart','drag(event)');
		div.innerHTML='<img class="gl" src="pic/gulicka.png" alt="gulicka" ><p class="gl">'+pole[i]+'</p></img>'
		if(id==undefined){
			if(tag==undefined){
				document.body.appendChild(div)
			}else{document.body.insertBefore(div,el[0]);}
		}else{document.getElentById(id).appendChild(div);}
	}
}



