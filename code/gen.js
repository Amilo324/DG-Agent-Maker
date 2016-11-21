function agent() {
	this.sex = sex();
	this.firstname = firstNameGen(this.sex);
	this.lastname = lastNameGen();
	this.title = ''; 

	this.profession = ''; 
	
	this.age;
	this.birthday = '';
	
	this.strScore = 0;
	this.conScore = 0;
	this.dexScore = 0;
	this.intScore = 0;
	this.powScore = 0;
	this.chaScore = 0;
	this.strx5 = strScore * 5;
	this.conx5 = conScore * 5;
	this.dexx5 = dexScore * 5;
	this.intx5 = intScore * 5;
	this.powx5 = powScore * 5;
	this.chax5 = chaScore * 5;
	this.strDistinguishing = '';
	this.conDistinguishing = '';
	this.dexDistinguishing = '';
	this.intDistinguishing = '';
	this.powDistinguishing = '';
	this.chaDistinguishing = '';
	
	this.hp = 0;
	this.wp = 0;
	this.san = 0;
	this.bp = 0;
	
	this.accounting = 10;
	this.alertness = 20;
	this.anthropology = 0;
	this.archaeology = 0;
	this.art = 0;	//HEEEEELP
	this.artillery = 0;
	this.athletics = 30;
	this.bureaucracy = 10;
	this.computerscience = 0;
	this.craft = 0;	//HEEEEELP
	this.criminology = 10;
	this.demolitions = 0;
	this.disguise = 10;
	this.dodge = 30;
	this.drive = 20;
	this.firearms = 20;
	this.firstaid = 10;
	this.forensics = 0;
	this.heavymachinery = 10;
	this.heavyweapons = 0;
	this.historical = 10;
	this.humint = 10;
	this.law = 0;
	this.medicine = 0;
	this.meleeweapons = 30;
	this.militaryscience = 0;	//HEEEEELP
	this.navigation = 10;
	this.occult = 10;
	this.persuade = 20;
	this.pharmacy = 0;
	this.pilot = 0;	//HEEEEELP
	this.psychotherapy = 10;
	this.ride = 10;
	this.science = 0;	//HEEEEELP
	this.search = 20;
	this.sigint = 0;
	this.stealth = 10;
	this.surgery = 0;
	this.survival = 10;
	this.swim = 20;
	this.unarmedcombat = 40;
	this.unnatural = 0;
}


function agentGenerator() {
	console.log("Starting Agent Generation...");
	agentOne = new agent();
	agent.hp = 500;
	
	printSheet(agentOne);
}


function printSheet(agent){
	//Clear the Sheet
	agentParagraph.innerHTML =  '';
	
	//1: Name
	agentParagraph.innerHTML +=  '<br>1. Name <br>';
	agentParagraph.innerHTML +=  agent.firstname + ' ' + agent.lastname + '<br>';
	
	//5: Sex
	agentParagraph.innerHTML +=  '<br>5. Sex <br>';
	agentParagraph.innerHTML +=  agent.sex + '<br>';
	
	/*//9: Derived Attributes
	agentParagraph.innerHTML +=  '<br>9. Derived Attributes <br>';
	agentParagraph.innerHTML +=  'Hit Points (HP): ' + agent.hp + '<br>';
	agentParagraph.innerHTML +=  'Willpower Points (WP): ' + agent.wp + '<br>';
	agentParagraph.innerHTML +=  'Sanity Points (SAN): ' + agent.san + '<br>';
	agentParagraph.innerHTML +=  'Breaking Point (BP): ' + agent.bp + '<br>';
	*/
}
function sex(){
	if (Math.random() >= 0.5){
		return "Male";
	}
	else{
		return "Female";
	}
}

function profession(){

}

function firstNameGen(sex){
	console.log(sex);
	console.log("hello?");
	if (sex = "Male"){
		console.log("male");
		switch (rollDie(20)){
			case 1: return 'Michael';
			case 2: return 'Christopher';
			case 3: return 'Matthew';
			case 4: return 'Joshua';
			case 5: return 'David';
			case 6: return 'James';
			case 7: return 'Daniel';
			case 8: return 'Robert';
			case 9: return 'John';
			case 10: return 'Joseph';
			case 11: return 'Jason';
			case 12: return 'Justin';
			case 13: return 'Andrew';
			case 14: return 'Ryan';
			case 15: return 'William';
			case 16: return 'Brian';
			case 17: return 'Brandon';
			case 18: return 'Jonathan';
			case 19: return 'Nicholas';
			case 20: return 'Anthony';
		}
	}
	else if (sex = "Female"){
		console.log("female");
		switch (rollDie(20)){
			case 1: return 'Jessica';
			case 2: return 'Jennifer';
			case 3: return 'Amanda';
			case 4: return 'Ashley';
			case 5: return 'Sarah';
			case 6: return 'Stephanie';
			case 7: return 'Melissa';
			case 8: return 'Nicole';
			case 9: return 'Elizabeth';
			case 10: return 'Heather';
			case 11: return 'Tiffany';
			case 12: return 'Amber';
			case 13: return 'Michelle';
			case 14: return 'Megan';
			case 15: return 'Amy';
			case 16: return 'Rachel';
			case 17: return 'Kimberly';
			case 18: return 'Christina';
			case 19: return 'Lauren';
			case 20: return 'Crystal';
		}
	}
}

function lastNameGen(){
	switch (rollDie(20)){
		case 1: return 'Smith';
		case 2: return 'Johnson';
		case 3: return 'Williams';
		case 4: return 'Jones';
		case 5: return 'Brown';
		case 6: return 'Davis';
		case 7: return 'Miller';
		case 8: return 'Wilson';
		case 9: return 'Moore';
		case 10: return 'Taylor';
		case 11: return 'Anderson';
		case 12: return 'Thomas';
		case 13: return 'Jackson';
		case 14: return 'White';
		case 15: return 'Harris';
		case 16: return 'Martin';
		case 17: return 'Thompson';
		case 18: return 'Garcia';
		case 19: return 'Martinez';
		case 20: return 'Robinson';
	}
}

function statisticScores(){
	var scores = [roll4d6DropLowest(),roll4d6DropLowest(),roll4d6DropLowest(),roll4d6DropLowest(),roll4d6DropLowest(),roll4d6DropLowest()];
	return scores;
}

function roll4d6DropLowest() {
	var result;
	var rolls = [rollDie(6), rollDie(6), rollDie(6), rollDie(6)];
	console.log("Rolled: " + rolls[0] + "," + rolls[1] + "," + rolls[2] + "," + rolls[3]);
	rolls.sort();
	console.log("Dropping: " + rolls[0]);
	rolls.shift();
	result = rolls[0]+rolls[1]+rolls[2];
	console.log("Sum of Rolls: " + result);
	return result;
}

function rollDie(size){
	return ((Math.floor(Math.random() * (size)))+1);
}

function descending(a, b){
  return b - a;
}

window.onload = function(){
	var button = document.getElementById('genButton');
	var paragraph = document.getElementById('agentParagraph');
	button.onclick = agentGenerator;
};