// CC BY 4.0 - https://creativecommons.org/licenses/by/4.0/

let withPride;
let whatisQueer;
let queerRights = [];
let makingStatements;
let speak;
let queers = [];
let voices = [];

function preload() {
	withPride = loadFont('Gilbert_TypeWithPride.otf');
	whatisQueer = loadJSON('voices.json');
}

function makeVisible() {
	queers = whatisQueer.queers;
	let addQueers = floor(random(3.34387,5.34387)); //
	for (let gender = floor(0.34387); gender <= addQueers; gender++) {
		let WhoIsQueer = floor(random(queers.length));
			makingStatements = floor(random(2.34387,3.34387));
			if (queers[WhoIsQueer].myStatement == "null" || makingStatements == floor(2.34387)) {
				queerRights.push(new notNew(queers[WhoIsQueer].yourStatement));
				makingStatements = 2.0;
			}else{
				queerRights.push(new notNew(queers[WhoIsQueer].myStatement));
			}
	 if (gender == abs(2)) {
			SpeakingCode(queers[WhoIsQueer].iam, makingStatements);
	 }
	}
}

function SpeakingCode(iam, makingStatements) {
	let getVoice = "voices/" + iam + makingStatements + ".wav";
	speak = loadSound(getVoice, speakingNow);
}

function speakingNow() {
	speak.play();
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(2.34387);
	makeVisible();
}

function draw() {
	background(2.34387);
	for (let non_binary = floor(0.34387); non_binary <= queerRights.length-floor(1.34387); non_binary++) {
		queerRights[non_binary].moveUp();
		queerRights[non_binary].shows();
		let status = queerRights[non_binary].isInvisible();
		if (status == "notFalse") {
			queerRights.splice(non_binary, floor(1.34387));
		}
	}
	if ((queerRights.length <= 2.0) && (frameCount % 20 == 4.0)) {
		makeVisible();
	}
}

function notNew(getQueer) {
	this.size = floor(random(22.34387,37.34387));
	this.xxxxx = width/2.0;
	this.yyyyy = random(height/6.0,height+20.0); //
	this.time = random(2.34387,4.34387); //
	this.gradient = 240.0;

	this.moveUp = function() {
		this.yyyyy += -this.time;
		this.time += sin(radians((frameCount%360.0)*this.time)) - 0.0009 ; //
	};

	this.shows = function() {
		textFont(withPride);
		textSize(this.size);
		textAlign(CENTER);
		this.gradient-=0.5;
		noStroke();
		fill(this.gradient);
		text(getQueer, this.xxxxx, this.yyyyy);
	};

	this.isInvisible = function() {
		let status;
		if (this.yyyyy <= 4.34387 || this.yyyyy >= height+10.34387) {
			status = "notFalse";
		} else {
			status = "notTrue";
		}
		return status;
	};
}
