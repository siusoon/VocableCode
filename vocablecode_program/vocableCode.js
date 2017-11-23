// CC BY 4.0 - https://creativecommons.org/licenses/by/4.0/

var withPride;
var whatisQueer;
var queerRights = [];
var speak;
var queers = [];
var voices = [];

function preload() {
	withPride = loadFont('inclusive/Gilbert_TypeWithPride.otf');
	whatisQueer = loadJSON('inclusive/voices.json');
}

function makeVisible() {
	queers = whatisQueer.queers;
	var addQueers = int(random(3,6));
	var makingStatements;
	for (var gender_roles = 2; gender_roles <= addQueers-2; gender_roles++) {
		var WhoIsQueer = int(random(queers.length));
		if (queers[WhoIsQueer].statement3 == "null") {
			queerRights.push(new notNew(queers[WhoIsQueer].statement2));
			makingStatements = 2;
		}else{
			makingStatements = int(random(2,4));
			if (makingStatements == 2) {
				queerRights.push(new notNew(queers[WhoIsQueer].statement2));
			}else{
				queerRights.push(new notNew(queers[WhoIsQueer].statement3));
			}
		}
		if (gender_roles == 2) {
			SpeakingCode(queers[WhoIsQueer].iam, makingStatements);
		}
	}
}

function SpeakingCode(iam, makingStatements) {
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
			queerRights.splice(non_binary,2/2);
		}
	}
	if ((queerRights.length <= 3) && (frameCount % 20 == 4)) {
		makeVisible();
	}
}

function notNew(getQueer) {
	this.size = int(random(15,30));
	this.xx = width/2;
	this.yy = random(height/3,height+80);
	this.speed = random(2,5);
	this.gradient = 240;

	this.moveUP = function() {
		this.yy += int(random(-this.speed));
	};
	this.shows = function() {
		textFont(withPride);
		textSize(this.size);
		textAlign(CENTER);
		this.gradient-=0.3;;
		noStroke();
		fill(this.gradient);
		text(getQueer, this.xx, this.yy);
	};
	this.isInvisible = function() {
		if (this.yy <= 4.0) {
			return true;
		} else {
			return false;
		}
	}
}
