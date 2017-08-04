//These are all my arrays- store data for any new properties here by adding a new array sorted by character, alphabetically
var allDairs=[37,50,45,43,46,42,41,41,40,48,41,39,37,36,45,40,44,33,47,36,43,37,41,40,39,41,41,39,42,36,35,35,40,36,40,39,39,36,41,43,40,36,40,43,44,37,42,40,40,41,44,41,43,38,36];
var allNairs=[29,38,35,33,35,32,32,31,31,36,32,30,28,28,35,31,33,26,36,28,33,28,32,31,30,31,32,30,32,28,27,27,31,28,31,30,30,28,31,33,31,27,31,33,34,28,32,31,31,31,33,31,33,29,28];
var allWeakNairs=[68,86,78,75,80,74,73,72,71,83,73,70,67,66,79,71,77,61,81,66,75,67,73,71,70,73,73,70,75,66,64,64,71,66,72,70,70,66,72,76,72,65,72,75,77,66,75,71,71,73,77,72,75,68,66];
var allDtilts=[75,96,87,84,90,82,82,81,79,92,82,79,75,73,88,80,86,68,91,73,84,75,82,80,78,81,82,78,83,74,71,71,80,73,80,79,78,73,81,85,80,72,80,84,86,74,83,80,79,81,86,81,84,76,74];
var allFthrow=[6,10,8,7,8,7,7,7,7,9,7,6,6,5,8,7,8,4,9,5,7,6,7,7,6,7,7,6,7,5,5,5,7,5,7,6,6,5,7,8,7,5,7,7,8,6,7,7,7,7,8,7,7,6,5];
var allFtiltUp=[41,54,49,46,50,45,45,44,43,51,45,43,40,39,49,44,47,36,51,39,46,40,45,44,42,44,45,42,46,40,38,38,44,39,44,43,42,39,44,47,44,39,44,46,47,40,46,44,43,44,47,44,46,41,40,46,41,40];
var allFtiltMid=[47,60,55,53,56,51,51,50,49,58,51,49,46,45,55,50,53,42,57,45,53,46,51,50,48,50,51,48,52,45,44,44,50,45,50,49,48,45,50,53,50,44,50,52,54,46,52,50,49,50,53,50,53,47,45];
var allFtiltDown=[53,68,62,60,64,58,58,57,56,66,58,55,52,51,63,56,61,48,65,51,60,52,58,56,55,57,58,55,59,52,50,50,56,51,57,55,55,51,57,60,57,51,57,59,61,52,59,56,56,57,61,57,60,53,52];
var allBairs=[39,49,45,43,46,42,42,41,41,47,42,40,38,37,45,41,44,35,47,37,43,38,42,41,40,42,42,40,43,38,36,37,41,37,41,40,40,37,41,44,41,37,41,43,44,38,43,41,41,42,44,41,43,39,38];
var allQA2=[55,69,63,61,65,60,59,58,57,66,59,57,54,53,64,58,62,50,66,53,61,54,59,58,57,59,59,57,60,53,52,52,58,53,58,57,56,53,58,62,58,52,58,61,62,54,60,58,57,59,62,58,61,55,53];


function MU (refnum){ //constructor for MUs. Add a new array above (e.g. allDtilts) with information you'd like to access. Be sure to list the information by order of characters, alphabetically 
	this.ref=refnum;
	this.dair=allDairs[this.ref];
	this.nair=allNairs[this.ref];
	this.dtilt=allDtilts[this.ref];
	this.weaknair=allWeakNairs[this.ref];
	this.Fthrow=allFthrow[this.ref];
	this.FtiltUp=allFtiltUp[this.ref];
	this.FtiltMid=allFtiltMid[this.ref];
	this.FtiltDown=allFtiltDown[this.ref];
	this.bair=allBairs[this.ref];
	this.QA2=allQA2[this.ref];
}
var pika={};
pika.Bayonetta= new MU (0);
pika.Bowser= new MU (1);
pika.Bowserjr= new MU (2);
pika.Capfalcon= new MU (3);
pika.Charizard= new MU (4);
pika.Cloud= new MU (5);
pika.Corrin= new MU (6);
pika.Darkpit= new MU (7);
pika.Diddy= new MU (8);
pika.Donkong= new MU (9);
pika.Drmario= new MU (10);
pika.Duckhunt= new MU (11);
pika.Falco= new MU (12);
pika.Fox= new MU (13);
pika.Ganon= new MU (14);
pika.Greninja= new MU (15);
pika.Ike= new MU (16);
pika.Jigglypuff= new MU (17);
pika.KingDDD= new MU (18);
pika.Kirby= new MU (19);
pika.Link= new MU (20);
pika.Lilmac= new MU (21);
pika.Lucario= new MU (22);
pika.Lucas= new MU (23);
pika.Lucina= new MU (24);
pika.Luigi= new MU (25);
pika.Mario= new MU (26);
pika.Marth= new MU (27);
pika.Megaman= new MU (28);
pika.Metaknight= new MU (29);
pika.Mewtwo= new MU (30);
pika.MrGW= new MU (31);
pika.Ness= new MU (32);
pika.Olimar= new MU (33);
pika.Pacman= new MU (34);
pika.Palutena= new MU (35);
pika.Peach= new MU (36);
pika.Pikachu= new MU (37);
pika.Pit= new MU (38);
pika.Rob= new MU (39);
pika.Robin= new MU (40);
pika.Rosalina= new MU (41);
pika.Roy= new MU (42);
pika.Ryu= new MU (43);
pika.Samus= new MU (44);
pika.Sheik= new MU (45);
pika.Shulk= new MU (46);
pika.Sonic= new MU (47);
pika.Toonlink= new MU (48);
pika.Villager= new MU (49);
pika.Wario= new MU (50);
pika.Wiifittrainer= new MU (51);
pika.Yoshi= new MU (52);
pika.Zelda= new MU (53);
pika.Zerosuitsamus= new MU (54);

function makeButtons(){
    for(var x in pika){
		var button=document.createElement("button");
		button.innerHTML=x;
		button.className="charbtn";
		document.getElementById('btnlimit').appendChild(button);
		button.onclick=function(event){
			document.getElementById('dair').value=pika[event.target.innerHTML].dair;
			document.getElementById('nair').value=pika[event.target.innerHTML].nair;
			document.getElementById('weaknair').value=pika[event.target.innerHTML].weaknair;
			document.getElementById('dtilt').value=pika[event.target.innerHTML].dtilt;
			document.getElementById('fthrow').value=pika[event.target.innerHTML].Fthrow;
			document.getElementById('ftiltu').value=pika[event.target.innerHTML].FtiltUp;
			document.getElementById('ftiltm').value=pika[event.target.innerHTML].FtiltMid;
			document.getElementById('ftiltd').value=pika[event.target.innerHTML].FtiltDown;
			document.getElementById('bair').value=pika[event.target.innerHTML].bair;
			document.getElementById('qa2').value=pika[event.target.innerHTML].QA2;
			document.getElementById('charname').value=event.target.innerHTML;
			//document.getElementById('turnt').value=pika[event.target.innerHTML].uthrowThun;
			//document.getElementById('fairusmash').value=pika[event.target.innerHTML].fairUsmash;
			//document.getElementById('uthrow').value=pika[event.target.innerHTML].uthrow;
			//document.getElementById('bthrow').value=pika[event.target.innerHTML].bthrow;
			//document.getElementById('platjab').value=pika[event.target.innerHTML].bfjabconfirm;
			//document.getElementById('general').value=pika[event.target.innerHTML].gennotes;
			//document.getElementById('neutral').value=pika[event.target.innerHTML].neutral;
			//document.getElementById('adv').value=pika[event.target.innerHTML].advantage;
			//document.getElementById('disadv').value=pika[event.target.innerHTML].disadvantage;
			//document.getElementById('stagepick').value=pika[event.target.innerHTML].stage;
		};
	}
	}
makeButtons();