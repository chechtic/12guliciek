function vazenie_tretie(vazenie,hladana,vaha){
	vazenie.lavaVaha=[];
	vazenie.pravaVaha=[];
	vazenie.pravaVaha.odloz=[];
	if(vazenie.neznama.length>0){
		//naplnenie misiek
		vazenie.neznama.odloz=[];
		vazenie.presunGulicky(vazenie.neznama,vazenie.neznama.odloz,vazenie.neznama.length/2);	
		vazenie.presunGulicky(vazenie.znama,vazenie.lavaVaha,1,true);
		vazenie.presunGulicky(vazenie.neznama,vazenie.pravaVaha);
		//vazenie
		vazenie.pravaVaha.odloz=vazenie.pravaVaha.slice();
		//inner('gulicka bokom: '+vazenie.neznama.odloz,'tvo');
		x=vazenie.vazenie(vazenie.lavaVaha,vazenie.pravaVaha,hladana,vaha);
		//upratanie
		vazenie.vratZnamu(vazenie.neznama.lahsia,vazenie.neznama.tazsia);
		if(vazenie.neznama.tazsia.length>0){
			//kedze su vahy pohnute a na jednej bola znama musi byt hladana na jednej znich
			vazenie.presunGulicky(vazenie.neznama.odloz,vazenie.znama);
			//vysledok
			//inner('najdena neznama je tazsia: '+vazenie.neznama.tazsia,'tv');
		}
		else if(vazenie.neznama.lahsia.length>0){
			//kedze neznama je na jednej z misiek su presunute odlozene pred vaenim medzi nezname do buduceho vazenia
			vazenie.presunGulicky(vazenie.neznama.odloz,vazenie.znama);
			//vysledok
			//inner('najdena neznama je lahsia: '+vazenie.neznama.lahsia,'tv');
		}else{
			//vysledok kedze boli vyrovnane tak je tahsia alebo lahsia mimo vahu skoda ze teraz vieme len ci je rozdielna
			//inner('najdena neznama nevedno ci lahsia ci tazsia: '+vazenie.neznama.odloz,'tv');
		}
		delete vazenie.neznama.odloz;
	}	
	else if(vazenie.neznama.lahsia.length==vazenie.neznama.tazsia.length){
		//naplnenie misiek
		vazenie.neznama.lahsia.odloz=[];
		vazenie.presunGulicky(vazenie.neznama.lahsia,vazenie.neznama.lahsia.odloz);	
		vazenie.presunGulicky(vazenie.znama,vazenie.lavaVaha,1,true);
		vazenie.presunGulicky(vazenie.neznama.tazsia,vazenie.pravaVaha);
		//vazenie
		vazenie.pravaVaha.odloz=vazenie.pravaVaha.slice();
		//inner('gulicka bokom lahsia: '+vazenie.neznama.lahsia.odloz,'tvo');
		x=vazenie.vazenie(vazenie.lavaVaha,vazenie.pravaVaha,hladana,vaha);
		//upratanie
		vazenie.vratZnamu(vazenie.neznama.lahsia);
		if(vazenie.neznama.tazsia.length>0){
			//kedze su vahy pohnute a na jednej bola znama musi byt hladana tu
			vazenie.presunGulicky(vazenie.neznama.lahsia.odloz,vazenie.znama);//odlozenu presuvam do znamych
			//vysledok
			//inner('najdena neznama je tazsia: '+vazenie.neznama.tazsia,'tv');
		}
		else if(vazenie.neznama.tazsia.length==0){
			//kedze boli vyrovnane tak je lahsia lebo mimo vahu sa odlozila lahsia
			vazenie.presunGulicky(vazenie.neznama.tazsia,vazenie.znama);//odlozenu presuvam do znamych
			//vysledok
			//inner('najdena je lahsia: '+vazenie.neznama.lahsia.odloz,'tv');
		}
		delete vazenie.neznama.lahsia.odloz;
	}
	else if(vazenie.neznama.lahsia.length>vazenie.neznama.tazsia.length){
		//naplnenie misiek
		vazenie.neznama.tazsia.odloz=[];
		vazenie.presunGulicky(vazenie.neznama.tazsia,vazenie.neznama.tazsia.odloz);	
		vazenie.presunGulicky(vazenie.neznama.lahsia,vazenie.lavaVaha,1);
		vazenie.presunGulicky(vazenie.neznama.lahsia,vazenie.pravaVaha);
		//vazenie
		vazenie.pravaVaha.odloz=vazenie.pravaVaha.slice();
		//inner('gulicka bokom tazsia: '+vazenie.neznama.tazsia.odloz,'tvo');
		x=vazenie.vazenie(vazenie.lavaVaha,vazenie.pravaVaha,hladana,vaha);
		//upratanie
		vazenie.presunGulicky(vazenie.neznama.tazsia,vazenie.znama);//kedze sa vaha zmenila je znama
		if(vazenie.neznama.tazsia.length>0){
			vazenie.presunGulicky(vazenie.neznama.tazsia.odloz,vazenie.znama);//misky pohnnute odlozena sa odklada ku znamym
		}
		else if(vazenie.neznama.lahsia.length>0){
			vazenie.presunGulicky(vazenie.neznama.tazsia.odloz,vazenie.znama);//misky pohnnute odlozena sa odklada ku znamym
			//vysledok neznama je na jednej z misiek su presunute odlozene pred vaenim medzi nezname do buduceho vazenia
			//inner('najdena neznama je lahsia: '+vazenie.neznama.lahsia,'tv');
		}else{
			//vysledok boli vyrovnane tak je lahsia lebo mimo vahu sa odlozila tazsia
			//inner('najdena je tazsia: '+vazenie.neznama.tazsia.odloz,'tv');
		}
		delete vazenie.neznama.tazsia.odloz;
	}
	else if(vazenie.neznama.lahsia.length<vazenie.neznama.tazsia.length){
		//naplnenie misiek
		vazenie.neznama.lahsia.odloz=[];
		vazenie.presunGulicky(vazenie.neznama.lahsia,vazenie.neznama.lahsia.odloz);
		vazenie.presunGulicky(vazenie.neznama.tazsia,vazenie.lavaVaha,1);
		vazenie.presunGulicky(vazenie.neznama.tazsia,vazenie.pravaVaha);
		//vazenie
		vazenie.pravaVaha.odloz=vazenie.pravaVaha.slice();
		//inner('gulicka bokom lahsia: '+vazenie.neznama.lahsia.odloz,'tvo');
		x=vazenie.vazenie(vazenie.lavaVaha,vazenie.pravaVaha,hladana,vaha);
		//upratanie
		vazenie.presunGulicky(vazenie.neznama.lahsia,vazenie.znama);//kedze sa vaha zmenila je znama
		if(vazenie.neznama.lahsia.length>0){
			vazenie.presunGulicky(vazenie.neznama.lahsia.odloz,vazenie.znama);//misky pohnnute odlozena sa odklada ku znamym
		}
		else if(vazenie.neznama.tazsia.length>0){
			vazenie.presunGulicky(vazenie.neznama.lahsia.odloz,vazenie.znama);//misky pohnnute odlozena sa odklada ku znamym
			//vysledok neznama je na jednej z misiek su presunute odlozene pred vaenim medzi nezname do buduceho vazenia
			//inner('najdena neznama je tazsia: '+vazenie.neznama.tazsia,'tv');
		}else{
			//vysledok boli vyrovnane tak je lahsia lebo mimo vahu sa odlozila lahsia
			//inner('najdena je lahsia: '+vazenie.neznama.lahsia.odloz,'tv');
		}
		delete vazenie.neznama.lahsia.odloz;
	}
	//inner('znama: '+vazenie.znama,'tvz');
}
