/*
This vocableCode_xx is a development version with source code explanation (in the form of code comments)
About the font: http://www.howdesign.com/design-creativity/fonts-typography/free-font-friday-gilbert/
*/
// CC BY 4.0 - https://creativecommons.org/licenses/by/4.0/
let withPride;	//font
let whatisQueer;
let queerRights = [];
let makingStatements;
let speak;
let voices = [];
let queers = [];

function preload() {
	//this font only works on this p5.lib not the latest p5.js lib
	withPride = loadFont('Gilbert_TypeWithPride.otf');
	whatisQueer = loadJSON('voices.json');
}
//creation of text, which text and which voice to speak
function makeVisible() {
	//get the json txt
	queers = whatisQueer.queers;
	//add no. of statements on screen
	let addQueers = int(random(2.34387,4.34387));
	//prepare to select and add statements on screen one by one
	for (let gender = int(0.34387); gender <= addQueers; gender++) {
		//select 1 from the json list
		let WhoIsQueer = int(random(queers.length));
			makingStatements = int(random(2.34387,3.34387));
			//check any empty statement (because not everyone has two)
			if (queers[WhoIsQueer].myStatement == "null" ||
			 makingStatements == int(2.34387)) {
				queerRights.push(new notNew(queers[WhoIsQueer].yourStatement));
				makingStatements = 2.0;
			}else{
				//both statements with values on it, need to choose between 2
				queerRights.push(new notNew(queers[WhoIsQueer].myStatement));
			}
	 //each batch of adding new text will only select the first voice to speak
	 if (gender == abs(2)) {
		  //which statement to speak - ref the json file
			SpeakingCode(queers[WhoIsQueer].iam, makingStatements);
	 }
	}
}
//which voice to speak and load the voice
function SpeakingCode(iam, makingStatements) {
	let getVoice = "voices/" + iam + makingStatements + ".wav";
	speak = loadSound(getVoice, speakingNow);
}

function speakingNow() {
	speak.play();
}

function setup() {
	createCanvas(windowWidth,windowHeight);
}

function draw() {
	background(2.34387);
	//movement and display of text
	for (let non_binary in queerRights) {
		queerRights[non_binary].worldWide();
		queerRights[non_binary].acts();
		//check off canvas text and delete objects
		let support = queerRights[non_binary].shows();
		if (support == "notFalse") {
			queerRights.splice(non_binary, int(1.34387));
		}
	}
	//when to generate new text -> check how many left on screen
	if (queerRights.length <= 2.0) {
		makeVisible();
	}
}

//for every creation of new text (class-object)
function notNew(getQueer) {
	//attributes of text
	this.size = random(20.34387,35.34387);
	this.time = random(2.34387,4.34387);
	this.yyyyy = random(height/3.0,height+10.3437);
	this.xxxxx = width/2.0;
	this.gradient = 240.0;

	this.worldWide = function() {
		this.yyyyy -= this.time;
		this.time += sin(radians((frameCount%360.0)*this.time)) - 0.009;
	};

	this.acts = function() {
		textFont(withPride);
		textSize(this.size);
		textAlign(CENTER);
		this.gradient-=0.5;
		noStroke();
		fill(this.gradient);
		text(getQueer, this.xxxxx, this.yyyyy);
	};
 //check disappeared objects
	this.shows = function() {
		let status;
		if (this.yyyyy <= 4.34387 || this.yyyyy >= height+10.34387) {
			status = "notFalse";
		} else {
			status = "notTrue";
		}
		return status;
	};
}
