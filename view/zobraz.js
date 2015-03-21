var t=document.getElementById('telo');
var r=document.getElementById('rameno');
var ml=document.getElementById('miskal');
var mp=document.getElementById('miskap');
var vaha=new VAHA(t,r,ml,mp);
vaha.os(284,108,t);
vaha.os(301,12,r);
vaha.os(193,3,ml);
vaha.os(193,3,mp);
vaha.ramenneOsi(11,122,592,122);
vaha.nastavTelo();
var i=0;
vaha.nastavRameno(i);
(function rm(){
	setTimeout(function(){if(i++<=360){
			//if(i==15 || i==345){vaha.nastavRameno(i);}
			vaha.nastavRameno(i);
			rm();
		}
	},10);
})();







