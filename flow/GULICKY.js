var GULICKY=function(neznama){
	this.neznama=neznama;
	this.neznama.lahsia=[];
	this.neznama.tazsia=[];
	this.znama=[];
}
GULICKY.prototype.urciRozdielnu=function(){
	return Math.floor(Math.random()*this.neznama.length)+0;
}
GULICKY.prototype.urciVahuRozdielnej=function(){
	return Math.round(Math.random());
}
GULICKY.prototype.jeGulickaTu=function(GULICKY,hladana){
	if(GULICKY.indexOf(hladana)!=-1){return true;}else{return false;}
}
GULICKY.prototype.presunGulicky=function(zPola,doPola,pocet,zachovajVZdrojovomPoli){
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
GULICKY.prototype.vratZnamu=function(){
	for(i in arguments){
		for(ii in this.znama){
			var x=arguments[i].indexOf(this.znama[ii]);
			if(x!=-1){
				arguments[i].splice(x,1);
			}
		}
	}
}
GULICKY.prototype.zmenuVahyPresunDoZnamych=function(){
	for(i in arguments[0]){
		var x=arguments[1].indexOf(arguments[0][i]);
		if(x!=-1){
			if(!this.jeGulickaTu(this.znama,arguments[1][x])){this.znama.push(arguments[1][x]);}
			arguments[1].splice(x,1);
		}
	}
}
GULICKY.prototype.vazenie=function(lavaMiska,pravaMiska,rozdielnaGulicka,vahaRozdielnej,premiestnuj){
	var l=this.jeGulickaTu(lavaMiska,rozdielnaGulicka);
	var p=this.jeGulickaTu(pravaMiska,rozdielnaGulicka);
	var ll=lavaMiska.length;
	var pp=pravaMiska.length;
	premiestnuj=premiestnuj || false;
	if (l || ll>pp){
		if(vahaRozdielnej==0){
			if(premiestnuj){
				this.presunGulicky(lavaMiska,this.neznama.lahsia);
				this.presunGulicky(pravaMiska,this.neznama.tazsia);
			}
			return '<';
		}else{
			if(premiestnuj){
				this.presunGulicky(lavaMiska,this.neznama.tazsia);
				this.presunGulicky(pravaMiska,this.neznama.lahsia);
			}
			return '>';
		}
	}
	else if (p || pp>ll){
		if(vahaRozdielnej==0){
			if(premiestnuj){
				this.presunGulicky(pravaMiska,this.neznama.lahsia);
				this.presunGulicky(lavaMiska,this.neznama.tazsia);
			}
			return '>';
		}else{
			if(premiestnuj){
				this.presunGulicky(pravaMiska,this.neznama.tazsia);
				this.presunGulicky(lavaMiska,this.neznama.lahsia);
			}
			return '<';
		}
	}
	else if (p==false && l==false && ll==pp){
		if(premiestnuj){
			this.presunGulicky(pravaMiska,this.znama);
			this.presunGulicky(lavaMiska,this.znama);
		}
		return '=';
	}
}
