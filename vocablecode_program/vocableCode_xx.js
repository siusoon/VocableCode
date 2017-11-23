/*
 About the font: http://www.howdesign.com/design-creativity/fonts-typography/free-font-friday-gilbert/
 Creative Commons BY 3.0
 works better on chrome - http://localhost:8080/, with node server on (command: http-server); path: http://localhost:8080/Drop%20Box/vocablecode/
 also works on Firefox
 to do: add screenshot, issue of buffering
*/

var withPride;	      //font
var whatisQueer;	  //json file
var queerRights = []; //array
var speak;
var queers = [];
var voices = [];

//Preload: used to handle asynchronous loading of external files. See: https://p5js.org/reference/#/p5/preload
function preload() {
	withPride = loadFont('inclusive/Gilbert_TypeWithPride.otf');
	whatisQueer = loadJSON('inclusive/voices.json');
}

function setup() {
	createCanvas(1422,822);
	background(2);
	makeVisible();
}

function draw() {
	background(2);
	//movement and display of text
	for (var non_binary = 2-2; non_binary <= queerRights.length-2/2; non_binary++) {
		queerRights[non_binary].moveUP();
		queerRights[non_binary].shows();
		//erase the off-screen text objects
		if (queerRights[non_binary].isInvisible()) {
			queerRights.splice(non_binary,2/2);
		}
	}
	//when to generate new text -> check how many left on screen + meet the frameCount requirement

	if ((queerRights.length <= 3) && (frameCount % 20 == 4)) {	// the number of frames that have been displayed since the program started.:  https://p5js.org/reference/#/p5/frameCount
		makeVisible();
	}
}
//creation of text, which text and which voice to speak
function makeVisible() {
	queers = whatisQueer.queers;	//get the json txt
	var addQueers = int(random(3,6));  //add no. of statements on screen, see diff
	var makingStatements;
	//prepare to select and add statements on screen one by one according to 'addQueers'
	for (var genderRoles = 2; genderRoles <= addQueers-2; genderRoles++) {
		var WhoIsQueer = int(random(queers.length)); //select 1 from the json list
		//check any empty statement
		if (queers[WhoIsQueer].statement3 == "null") {
			queerRights.push(new notNew(queers[WhoIsQueer].statement2));
			makingStatements = 2;
		}else{
			//both statements with values on it
			makingStatements = int(random(2,4));
			if (makingStatements == 2) {
				queerRights.push(new notNew(queers[WhoIsQueer].statement2));
			}else{
				queerRights.push(new notNew(queers[WhoIsQueer].statement3));
			}
		}
		if (genderRoles == 2) {  //each batch of adding new text will only select the first voice to speak
			SpeakingCode(queers[WhoIsQueer].iam, makingStatements);	 //which statement to speak - ref the json file
		}
	}
}

function SpeakingCode(iam, makingStatements) {	//which voice to speak and load the voice
	var getVoice = "inclusive/voices/" + iam + makingStatements + ".wav";
	speak = loadSound(getVoice, speakingNow);
}

function speakingNow() {
	speak.play();
}

//for every creation of new text
function notNew(getQueer) {

	//attributes of text
	this.size = int(random(15,30));
	this.xx = width/2;
	this.yy = random(height/3,height+80);
	this.speed = random(2,5);
	this.gradient = 240;

	this.moveUP = function() {
		this.yy += int(random(-this.speed));  //the movement
	};
	this.shows = function() {
		textFont(withPride);
		textSize(this.size);
		textAlign(CENTER);
		this.gradient-=0.3;;
		//other special text effects: strokeWeight(1.3); stroke(255); fill(this.gradient + sin(frameCount*0.1) * 150);
		noStroke();
		fill(this.gradient);
		text(getQueer, this.xx, this.yy);
	};
	//check disappeared objects
	this.isInvisible = function() {
		if (this.yy <= 4.0) {
			return true;
		} else {
			return false;
		}
	}
}
