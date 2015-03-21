function vazenie_druhe(vazenie,hladana,vaha){
	vazenie.lavaVaha=[];
	vazenie.pravaVaha=[];
	vazenie.pravaVaha.odloz=[];
	var x;
	if(vazenie.neznama.length>0){
		//odlozenie stvrtiny bokom od vazenia 
		vazenie.neznama.odloz=[];
		vazenie.presunGulicky(vazenie.neznama,vazenie.neznama.odloz,vazenie.neznama.length/2);
		//zbytok rozdeleny na vahu
		x=vazenie.neznama.length/2;
		vazenie.presunGulicky(vazenie.neznama,vazenie.lavaVaha,x);
		vazenie.presunGulicky(vazenie.neznama,vazenie.pravaVaha,x);
		//vazenie
		vazenie.pravaVaha.odloz=vazenie.pravaVaha.slice();
		inner('gulicky bokom: '+vazenie.neznama.odloz,'dvo');
		x=vazenie.vazenie(vazenie.lavaVaha,vazenie.pravaVaha,hladana,vaha);
		//upratanie po vazeni
		if(vazenie.neznama.tazsia.length>0 && vazenie.neznama.lahsia.length>0){
			//kedze neznama je na jednej z misiek pretoze boli naplnen polia po vazeni su presunute nezname(nevazene) medzi zname
			vazenie.presunGulicky(vazenie.neznama.odloz,vazenie.znama);
		}else{
			//kedze neznama je na jednej z misiek su presunute odlozene pred vaenim medzi nezname do buduceho vazenia
			vazenie.presunGulicky(vazenie.neznama.odloz,vazenie.neznama);
		}
		//nepotrebny atribut zmazat
		delete vazenie.neznama.odloz;
		//vystup vysledok
		//inner('znama: '+vazenie.znama+'</p><p>vaha lahsia: '+vazenie.neznama.lahsia+'</p><p>vaha tazsia: '+vazenie.neznama.tazsia+'</p><p>neznama: '+vazenie.neznama,'dv');
	}else{
		//odlozenie guliciek pred vazenim 
		vazenie.neznama.tazsia.odloz=[];
		vazenie.neznama.lahsia.odloz=[];
		vazenie.neznama.tazsia.starevazenie=[];
		vazenie.neznama.lahsia.starevazenie=[];
		vazenie.presunGulicky(vazenie.neznama.lahsia,vazenie.neznama.lahsia.starevazenie,'',true);
		vazenie.presunGulicky(vazenie.neznama.tazsia,vazenie.neznama.tazsia.starevazenie,'',true);
		vazenie.presunGulicky(vazenie.neznama.lahsia,vazenie.neznama.lahsia.odloz,1);
		vazenie.presunGulicky(vazenie.neznama.tazsia,vazenie.neznama.tazsia.odloz,2);
		//naplnenie lavej miski na vahe z guliciek s predchadzajuceho vazenia z lavej miski a jednej z odlozenych z pravej miski aby sa eliminovalo jednym vazenim viaz neznamych
		vazenie.presunGulicky(vazenie.neznama.lahsia,vazenie.lavaVaha,vazenie.neznama.lahsia.length-1);
		vazenie.presunGulicky(vazenie.neznama.tazsia,vazenie.lavaVaha,1);
		//naplnenie pravej miski na vahe z guliciek s predchadzajuceho vazenia z pravej miski a jednej z odlozenych z lavej miski aby sa eliminovalo jednym vazenim viaz neznamych
		vazenie.presunGulicky(vazenie.neznama.tazsia,vazenie.pravaVaha);	
		vazenie.presunGulicky(vazenie.neznama.lahsia,vazenie.pravaVaha);
		vazenie.presunGulicky(vazenie.znama,vazenie.pravaVaha,1,true);//doplnena kvoli vyrovnaniu poctu guliciek zo znamych
		//vazenie
		//inner('gulicky bokom lahsie: '+vazenie.neznama.lahsia.odloz+'</p><p>gulicky bokom tazsie: '+vazenie.neznama.tazsia.odloz,'dvo');
		vazenie.pravaVaha.odloz=vazenie.pravaVaha.slice();
		x=vazenie.vazenie(vazenie.lavaVaha,vazenie.pravaVaha,hladana,vaha);
		//upratanie po vazeni
		if(vazenie.neznama.tazsia.length>0 && vazenie.neznama.lahsia.length>0){
			//kedze neznama je na jednej z misiek pretoze boli naplnen polia po vazeni su presunute nezname(nevazene) medzi zname
			vazenie.presunGulicky(vazenie.neznama.tazsia.odloz,vazenie.znama);
			vazenie.presunGulicky(vazenie.neznama.lahsia.odloz,vazenie.znama);
		}else{
			//kedze neznama je na jednej z misiek su presunute odlozene pred vaenim medzi nezname do buduceho vazenia
			vazenie.presunGulicky(vazenie.neznama.tazsia.odloz,vazenie.neznama.tazsia);
			vazenie.presunGulicky(vazenie.neznama.lahsia.odloz,vazenie.neznama.lahsia);
		}
		delete vazenie.neznama.tazsia.odloz;
		delete vazenie.neznama.lahsia.odloz;
		//vratenie znamej pozicanej medzi zname
		vazenie.vratZnamu(vazenie.neznama.lahsia,vazenie.neznama.tazsia);
		//vyhodnotenie prehodenych guliciek ak sa vaha zmenila znamena ze nemoze mat vecsiu alebo mensiu vahu
		vazenie.zmenuVahyPresunDoZnamych(vazenie.neznama.tazsia.starevazenie,vazenie.neznama.lahsia);
		vazenie.zmenuVahyPresunDoZnamych(vazenie.neznama.lahsia.starevazenie,vazenie.neznama.tazsia);
		//nepotrebne atributy zmazat
		delete vazenie.neznama.tazsia.starevazenie;
		delete vazenie.neznama.lahsia.starevazenie;
		//vystup vysledok
		//inner('znama: '+vazenie.znama+'</p><p>vaha lahsia: '+vazenie.neznama.lahsia+'</p><p>vaha tazsia: '+vazenie.neznama.tazsia+'</p><p>neznama: '+vazenie.neznama,'dv');
	}
}
