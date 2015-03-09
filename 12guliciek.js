var gulicky=function(neznama){
	this.neznama=neznama;
	this.neznama.lahsia=[];
	this.neznama.tazsia=[];
	this.znama=[];
}
gulicky.prototype.urciRozdielnu=function(){
	return Math.floor(Math.random()*this.neznama.length)+0;
}
gulicky.prototype.urciVahuRozdielnej=function(){
	return Math.round(Math.random());
}
gulicky.prototype.jeGulickaTu=function(gulicky,hladana){
	if(gulicky.indexOf(hladana)!=-1){return true;}else{return false;}
}
gulicky.prototype.presunGulicky=function(zPola,doPola,pocet,zachovajVZdrojovomPoli){
	zachovajVZdrojovomPoli=zachovajVZdrojovomPoli || false;
	pocet=pocet || zPola.length;
	for(var i=0;i<pocet;i++){
		if(zachovajVZdrojovomPoli){
			if(!this.jeGulickaTu(doPola,zPola[i])){doPola.push(zPola[i]);}
		}else{
			if(!this.jeGulickaTu(doPola,zPola[0])){doPola.push(zPola[0]);}
			zPola.splice(0,1);
		}
	}	
}
gulicky.prototype.vratZnamu=function(polia){
	for(i in arguments){
		for(ii in this.znama){
			var x=arguments[i].indexOf(this.znama[ii]);
			if(x!=-1){
				arguments[i].splice(x,1);
			}
		}
	}
}
gulicky.prototype.zmenuVahyPresunDoZnamych=function(dvepolia){
	for(i in arguments[0]){
		var x=arguments[1].indexOf(arguments[0][i]);
		if(x!=-1){
			if(!this.jeGulickaTu(this.znama,arguments[1][x])){this.znama.push(arguments[1][x]);}
			arguments[1].splice(x,1);
		}
	}
}
gulicky.prototype.vazenie=function(lavaMiska,pravaMiska,rozdielnaGulicka,vahaRozdielnej){
	var l=this.jeGulickaTu(lavaMiska,rozdielnaGulicka);
	var p=this.jeGulickaTu(pravaMiska,rozdielnaGulicka);
	var ll=lavaMiska.length;
	var pp=pravaMiska.length;
	if (l || ll>pp){
		if(vahaRozdielnej==0){
			this.presunGulicky(lavaMiska,this.neznama.lahsia);
			this.presunGulicky(pravaMiska,this.neznama.tazsia);
			return '<';
		}else{
			this.presunGulicky(lavaMiska,this.neznama.tazsia);
			this.presunGulicky(pravaMiska,this.neznama.lahsia);
			return '>';
		}
	}
	else if (p || pp>ll){
		if(vahaRozdielnej==0){
			this.presunGulicky(pravaMiska,this.neznama.lahsia);
			this.presunGulicky(lavaMiska,this.neznama.tazsia);
			return '>';
		}else{
			this.presunGulicky(pravaMiska,this.neznama.tazsia);
			this.presunGulicky(lavaMiska,this.neznama.lahsia);
			return '<';
		}
	}
	else if (p==false && l==false && ll==pp){
		this.presunGulicky(pravaMiska,this.znama);
		this.presunGulicky(lavaMiska,this.znama);
		return '=';
	}
}


var x;//pomocna premenna
var hra= new gulicky([0,1,2,3,4,5,6,7,8,9,10,11]);//naplnenie pola gulickami
hra.ina=hra.urciRozdielnu();//vygenerovanie rozdielnej
hra.inaVaha=hra.urciVahuRozdielnej();//vygenerovanie vahy rozdielnej
//vytvorenie poli pre vazenie a jeho vystup
hra.lavaVaha=[];
hra.pravaVaha=[];
hra.pravaVaha.odloz=[];
//vygenerovanie vystupu do html o hladanej gulicke pre kontrolu postupu
if(hra.inaVaha==0){x='lahsia'}else{x='tazsia'}
inner('rozdielna: '+hra.ina+'-'+x,'ina');


//prve vazenie 
//rozdelenie guliciek po 4
hra.presunGulicky(hra.neznama,hra.lavaVaha,4);
hra.presunGulicky(hra.neznama,hra.pravaVaha,4);
//vazenie
hra.pravaVaha.odloz=hra.pravaVaha.slice();
inner(hra.lavaVaha+'--'+hra.vazenie(hra.lavaVaha,hra.pravaVaha,hra.ina,hra.inaVaha)+'--'+hra.pravaVaha.odloz,'pvv');
inner('gulicky bokom: '+hra.neznama,'pvo');
//upratanie po vazeni
if(hra.neznama.tazsia.length>0 && hra.neznama.lahsia.length>0){
	//kedze neznama je na jednej z misiek pretoze boli naplnen polia po vazeni su presunute nezname(nevazene) medzi zname
	hra.presunGulicky(hra.neznama,hra.znama);
}
//vystup vysledok
inner('znama: '+hra.znama+'</p><p>vaha lahsia: '+hra.neznama.lahsia+'</p><p>vaha tazsia: '+hra.neznama.tazsia+'</p><p>neznama: '+hra.neznama,'pv');


//druhe vazenie
if(hra.neznama.length>0){
	//odlozenie stvrtiny bokom od vazenia 
	hra.neznama.odloz=[];
	hra.presunGulicky(hra.neznama,hra.neznama.odloz,hra.neznama.length/2);
	//zbytok rozdeleny na vahu
	x=hra.neznama.length/2;
	hra.presunGulicky(hra.neznama,hra.lavaVaha,x);
	hra.presunGulicky(hra.neznama,hra.pravaVaha,x);
	//vazenie
	hra.pravaVaha.odloz=hra.pravaVaha.slice();
	inner('gulicky bokom: '+hra.neznama.odloz,'dvo');
	inner(hra.lavaVaha+'--'+hra.vazenie(hra.lavaVaha,hra.pravaVaha,hra.ina,hra.inaVaha)+'--'+hra.pravaVaha.odloz,'dvv');
	//upratanie po vazeni
	if(hra.neznama.tazsia.length>0 && hra.neznama.lahsia.length>0){
		//kedze neznama je na jednej z misiek pretoze boli naplnen polia po vazeni su presunute nezname(nevazene) medzi zname
		hra.presunGulicky(hra.neznama.odloz,hra.znama);
	}else{
		//kedze neznama je na jednej z misiek su presunute odlozene pred vaenim medzi nezname do buduceho vazenia
		hra.presunGulicky(hra.neznama.odloz,hra.neznama);
	}
	//nepotrebny atribut zmazat
	delete hra.neznama.odloz;
	//vystup vysledok
	inner('znama: '+hra.znama+'</p><p>vaha lahsia: '+hra.neznama.lahsia+'</p><p>vaha tazsia: '+hra.neznama.tazsia+'</p><p>neznama: '+hra.neznama,'dv');
}else{
	//odlozenie guliciek pred vazenim 
	hra.neznama.tazsia.odloz=[];
	hra.neznama.lahsia.odloz=[];
	hra.neznama.tazsia.starevazenie=[];
	hra.neznama.lahsia.starevazenie=[];
	hra.presunGulicky(hra.neznama.lahsia,hra.neznama.lahsia.starevazenie,'',true);
	hra.presunGulicky(hra.neznama.tazsia,hra.neznama.tazsia.starevazenie,'',true);
	hra.presunGulicky(hra.neznama.lahsia,hra.neznama.lahsia.odloz,1);
	hra.presunGulicky(hra.neznama.tazsia,hra.neznama.tazsia.odloz,2);
	//naplnenie lavej miski na vahe z guliciek s predchadzajuceho vazenia z lavej miski a jednej z odlozenych z pravej miski aby sa eliminovalo jednym vazenim viaz neznamych
	hra.presunGulicky(hra.neznama.lahsia,hra.lavaVaha,hra.neznama.lahsia.length-1);
	hra.presunGulicky(hra.neznama.tazsia,hra.lavaVaha,1);
	//naplnenie pravej miski na vahe z guliciek s predchadzajuceho vazenia z pravej miski a jednej z odlozenych z lavej miski aby sa eliminovalo jednym vazenim viaz neznamych
	hra.presunGulicky(hra.neznama.tazsia,hra.pravaVaha);	
	hra.presunGulicky(hra.neznama.lahsia,hra.pravaVaha);
	hra.presunGulicky(hra.znama,hra.pravaVaha,1,true);//doplnena kvoli vyrovnaniu poctu guliciek zo znamych
	//vazenie
	inner('gulicky bokom lahsie: '+hra.neznama.lahsia.odloz+'</p><p>gulicky bokom tazsie: '+hra.neznama.tazsia.odloz,'dvo');
	hra.pravaVaha.odloz=hra.pravaVaha.slice();
	inner(hra.lavaVaha+'--'+hra.vazenie(hra.lavaVaha,hra.pravaVaha,hra.ina,hra.inaVaha)+'--'+hra.pravaVaha.odloz,'dvv');
	//upratanie po vazeni
	if(hra.neznama.tazsia.length>0 && hra.neznama.lahsia.length>0){
		//kedze neznama je na jednej z misiek pretoze boli naplnen polia po vazeni su presunute nezname(nevazene) medzi zname
		hra.presunGulicky(hra.neznama.tazsia.odloz,hra.znama);
		hra.presunGulicky(hra.neznama.lahsia.odloz,hra.znama);
	}else{
		//kedze neznama je na jednej z misiek su presunute odlozene pred vaenim medzi nezname do buduceho vazenia
		hra.presunGulicky(hra.neznama.tazsia.odloz,hra.neznama.tazsia);
		hra.presunGulicky(hra.neznama.lahsia.odloz,hra.neznama.lahsia);
	}
	delete hra.neznama.tazsia.odloz;
	delete hra.neznama.lahsia.odloz;
	//vratenie znamej pozicanej medzi zname
	hra.vratZnamu(hra.neznama.lahsia,hra.neznama.tazsia);
	//vyhodnotenie prehodenych guliciek ak sa vaha zmenila znamena ze nemoze mat vecsiu alebo mensiu vahu
	hra.zmenuVahyPresunDoZnamych(hra.neznama.tazsia.starevazenie,hra.neznama.lahsia);
	hra.zmenuVahyPresunDoZnamych(hra.neznama.lahsia.starevazenie,hra.neznama.tazsia);
	//nepotrebne atributy zmazat
	delete hra.neznama.tazsia.starevazenie;
	delete hra.neznama.lahsia.starevazenie;
	//vystup vysledok
	inner('znama: '+hra.znama+'</p><p>vaha lahsia: '+hra.neznama.lahsia+'</p><p>vaha tazsia: '+hra.neznama.tazsia+'</p><p>neznama: '+hra.neznama,'dv');
}
delete x;

//tretie vazenie
if(hra.neznama.length>0){
	//naplnenie misiek
	hra.neznama.odloz=[];
	hra.presunGulicky(hra.neznama,hra.neznama.odloz,hra.neznama.length/2);	
	hra.presunGulicky(hra.znama,hra.lavaVaha,1,true);
	hra.presunGulicky(hra.neznama,hra.pravaVaha);
	//vazenie
	hra.pravaVaha.odloz=hra.pravaVaha.slice();
	inner('gulicka bokom: '+hra.neznama.odloz,'tvo');
	inner(hra.lavaVaha+'--'+hra.vazenie(hra.lavaVaha,hra.pravaVaha,hra.ina,hra.inaVaha)+'--'+hra.pravaVaha.odloz,'tvv');
	//upratanie
	hra.vratZnamu(hra.neznama.lahsia,hra.neznama.tazsia);
	if(hra.neznama.tazsia.length>0){
		//kedze su vahy pohnute a na jednej bola znama musi byt hladana na jednej znich
		hra.presunGulicky(hra.neznama.odloz,hra.znama);
		//vysledok
		inner('najdena neznama je tazsia: '+hra.neznama.tazsia,'tv');
	}
	else if(hra.neznama.lahsia.length>0){
		//kedze neznama je na jednej z misiek su presunute odlozene pred vaenim medzi nezname do buduceho vazenia
		hra.presunGulicky(hra.neznama.odloz,hra.znama);
		//vysledok
		inner('najdena neznama je lahsia: '+hra.neznama.lahsia,'tv');
	}else{
		//vysledok kedze boli vyrovnane tak je tahsia alebo lahsia mimo vahu skoda ze teraz vieme len ci je rozdielna
		inner('najdena neznama nevedno ci lahsia ci tazsia: '+hra.neznama.odloz,'tv');
	}
	delete hra.neznama.odloz;
}	
else if(hra.neznama.lahsia.length==hra.neznama.tazsia.length){
	//naplnenie misiek
	hra.neznama.lahsia.odloz=[];
	hra.presunGulicky(hra.neznama.lahsia,hra.neznama.lahsia.odloz);	
	hra.presunGulicky(hra.znama,hra.lavaVaha,1,true);
	hra.presunGulicky(hra.neznama.tazsia,hra.pravaVaha);
	//vazenie
	hra.pravaVaha.odloz=hra.pravaVaha.slice();
	inner('gulicka bokom lahsia: '+hra.neznama.lahsia.odloz,'tvo');
	inner(hra.lavaVaha+'--'+hra.vazenie(hra.lavaVaha,hra.pravaVaha,hra.ina,hra.inaVaha)+'--'+hra.pravaVaha.odloz,'tvv');
	//upratanie
	hra.vratZnamu(hra.neznama.lahsia);
	if(hra.neznama.tazsia.length>0){
		//kedze su vahy pohnute a na jednej bola znama musi byt hladana tu
		hra.presunGulicky(hra.neznama.lahsia.odloz,hra.znama);//odlozenu presuvam do znamych
		//vysledok
		inner('najdena neznama je tazsia: '+hra.neznama.tazsia,'tv');
	}
	else if(hra.neznama.tazsia.length==0){
		//kedze boli vyrovnane tak je lahsia lebo mimo vahu sa odlozila lahsia
		hra.presunGulicky(hra.neznama.tazsia,hra.znama);//odlozenu presuvam do znamych
		//vysledok
		inner('najdena je lahsia: '+hra.neznama.lahsia.odloz,'tv');
	}
	delete hra.neznama.lahsia.odloz;
}
else if(hra.neznama.lahsia.length>hra.neznama.tazsia.length){
	//naplnenie misiek
	hra.neznama.tazsia.odloz=[];
	hra.presunGulicky(hra.neznama.tazsia,hra.neznama.tazsia.odloz);	
	hra.presunGulicky(hra.neznama.lahsia,hra.lavaVaha,1);
	hra.presunGulicky(hra.neznama.lahsia,hra.pravaVaha);
	//vazenie
	hra.pravaVaha.odloz=hra.pravaVaha.slice();
	inner('gulicka bokom tazsia: '+hra.neznama.tazsia.odloz,'tvo');
	inner(hra.lavaVaha+'--'+hra.vazenie(hra.lavaVaha,hra.pravaVaha,hra.ina,hra.inaVaha)+'--'+hra.pravaVaha.odloz,'tvv');
	//upratanie
	hra.presunGulicky(hra.neznama.tazsia,hra.znama);//kedze sa vaha zmenila je znama
	if(hra.neznama.tazsia.length>0){
		hra.presunGulicky(hra.neznama.tazsia.odloz,hra.znama);//misky pohnnute odlozena sa odklada ku znamym
	}
	else if(hra.neznama.lahsia.length>0){
		hra.presunGulicky(hra.neznama.tazsia.odloz,hra.znama);//misky pohnnute odlozena sa odklada ku znamym
		//vysledok neznama je na jednej z misiek su presunute odlozene pred vaenim medzi nezname do buduceho vazenia
		inner('najdena neznama je lahsia: '+hra.neznama.lahsia,'tv');
	}else{
		//vysledok boli vyrovnane tak je lahsia lebo mimo vahu sa odlozila tazsia
		inner('najdena je tazsia: '+hra.neznama.tazsia.odloz,'tv');
	}
	delete hra.neznama.tazsia.odloz;
}
else if(hra.neznama.lahsia.length<hra.neznama.tazsia.length){
	//naplnenie misiek
	hra.neznama.lahsia.odloz=[];
	hra.presunGulicky(hra.neznama.lahsia,hra.neznama.lahsia.odloz);
	hra.presunGulicky(hra.neznama.tazsia,hra.lavaVaha,1);
	hra.presunGulicky(hra.neznama.tazsia,hra.pravaVaha);
	//vazenie
	hra.pravaVaha.odloz=hra.pravaVaha.slice();
	inner('gulicka bokom lahsia: '+hra.neznama.lahsia.odloz,'tvo');
	inner(hra.lavaVaha+'--'+hra.vazenie(hra.lavaVaha,hra.pravaVaha,hra.ina,hra.inaVaha)+'--'+hra.pravaVaha.odloz,'tvv');
	//upratanie
	hra.presunGulicky(hra.neznama.lahsia,hra.znama);//kedze sa vaha zmenila je znama
	if(hra.neznama.lahsia.length>0){
		hra.presunGulicky(hra.neznama.lahsia.odloz,hra.znama);//misky pohnnute odlozena sa odklada ku znamym
	}
	else if(hra.neznama.tazsia.length>0){
		hra.presunGulicky(hra.neznama.lahsia.odloz,hra.znama);//misky pohnnute odlozena sa odklada ku znamym
		//vysledok neznama je na jednej z misiek su presunute odlozene pred vaenim medzi nezname do buduceho vazenia
		inner('najdena neznama je tazsia: '+hra.neznama.tazsia,'tv');
	}else{
		//vysledok boli vyrovnane tak je lahsia lebo mimo vahu sa odlozila lahsia
		inner('najdena je lahsia: '+hra.neznama.lahsia.odloz,'tv');
	}
	delete hra.neznama.lahsia.odloz;
}
inner('znama: '+hra.znama,'tvz');
delete hra;

//vystup do html
function inner(str,id){
	document.getElementById(id).innerHTML=str;
}
