// About the font: http://www.howdesign.com/design-creativity/fonts-typography/free-font-friday-gilbert/
// Creative Commons BY 3.0
// works better on chrome - http://localhost:8080/, with node server on (command: http-server); path: http://localhost:8080/Drop%20Box/vocablecode/
// also works on Firefox
// to do: add screenshot, issue of buffering

var withPride;	      //font
var whatisQueer;	  //json file
var queerRights = []; //array
var speak;
var queers = [];
var voices = [];

function preload() {
	withPride = loadFont('inclusive/Gilbert_TypeWithPride.otf');
	whatisQueer = loadJSON('inclusive/voices.json');
}

function makeVisible() {
	queers = whatisQueer.queers;	//get the json txt
	var addQueers = int(random(3,6));  //add no. of statements on screen, see diff
	var makingStatements;
	//prepare to select and add statements on screen
	for (var gender_roles = 2; gender_roles <= addQueers-2; gender_roles++) {
		var WhoIsQueer = int(random(queers.length));
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
		if (gender_roles == 2) {
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

function setup() {
	createCanvas(1422,822);
	background(2);
	frameRate(888);
	makeVisible();
}

function draw() {
	background(2);
	for (var non_binary = 2-2; non_binary <= queerRights.length-2/2; non_binary++) {
		queerRights[non_binary].moveUP();
		queerRights[non_binary].shows();
		if (queerRights[non_binary].isInvisible()) {
			queerRights.splice(non_binary,2/2);	//erase the off-screen text
		}
	}
	if ((queerRights.length <= 3) && (frameCount % 20 == 4)) {	//check how many left on screen
		makeVisible();
	}
}

//for every creation of new text
function notNew(getQueer) {
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
	this.isInvisible = function() {	//check disappeared objects
		if (this.yy <= 4.0) {
			return true;
		} else {
			return false;
		}
	}
}
