function vazenie_prve(vazenie,hladana,vaha){
	vazenie.lavaVaha=[];
	vazenie.pravaVaha=[];
	vazenie.pravaVaha.odloz=[];
	var x;
	//rozdelenie guliciek po 4
	vazenie.presunGulicky(vazenie.neznama,vazenie.lavaVaha,4);
	vazenie.presunGulicky(vazenie.neznama,vazenie.pravaVaha,4);
	//vazenie
	vazenie.pravaVaha.odloz=vazenie.pravaVaha.slice();
	x=vazenie.vazenie(vazenie.lavaVaha,vazenie.pravaVaha,hladana,vaha);
	//inner('gulicky bokom: '+hra.neznama,'pvo');
	//upratanie po vazeni
	if(vazenie.neznama.tazsia.length>0 && vazenie.neznama.lahsia.length>0){
		//kedze neznama je na jednej z misiek pretoze boli naplnen polia po vazeni su presunute nezname(nevazene) medzi zname
		vazenie.presunGulicky(vazenie.neznama,vazenie.znama);
	}
	//vystup vysledok
	//inner('znama: '+vazenie.znama+'</p><p>vaha lahsia: '+vazenie.neznama.lahsia+'</p><p>vaha tazsia: '+vazenie.neznama.tazsia+'</p><p>neznama: '+vazenie.neznama,'pv');
}
