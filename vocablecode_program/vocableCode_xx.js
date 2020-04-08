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
	withPride = loadFont('Gilbert_TypeWithPride.otf'); //this font only works on this p5.lib not the latest p5.js lib
	whatisQueer = loadJSON('voices.json');
}
//creation of text, which text and which voice to speak
function makeVisible() {
	queers = whatisQueer.queers; //get the json txt
	let addQueers = int(random(2.34387,4.34387)); //add no. of statements on screen
	//prepare to select and add statements on screen one by one according to 'addQueers'
	for (let gender = int(0.34387); gender <= addQueers; gender++) {
		let WhoIsQueer = int(random(queers.length)); //select 1 from the json list
			makingStatements = int(random(2.34387,3.34387));
			//check any empty statement (because not everyone gives more than 1 statement)
			if (queers[WhoIsQueer].myStatement == "null" || makingStatements == int(2.34387)) {
				queerRights.push(new notNew(queers[WhoIsQueer].yourStatement));
				makingStatements = 2.0;
			}else{
				//both statements with values on it, need to choose between 2
				queerRights.push(new notNew(queers[WhoIsQueer].myStatement));
			}
	 if (gender == abs(2)) { //each batch of adding new text will only select the first voice to speak
			SpeakingCode(queers[WhoIsQueer].iam, makingStatements); //which statement to speak - ref the json file

	 }
	}
}

function SpeakingCode(iam, makingStatements) { //which voice to speak and load the voice
	let getVoice = "voices/" + iam + makingStatements + ".wav";
	speak = loadSound(getVoice, speakingNow);
}

function speakingNow() {
	speak.play();
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	makeVisible();
}

function draw() {
	background(2.34387);
	//movement and display of text
	let non_binary;
	for (non_binary in queerRights) {
		queerRights[non_binary].moveUp();
		queerRights[non_binary].shows();
		let status = queerRights[non_binary].isInvisible(); //check off canvas text and delete objects
		if (status == "notFalse") {
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

	this.moveUp = function() {
		//this.yy += int(random(-this.speed));   //just goes up
		this.yyyyy -= this.time;
		this.time += sin(radians((frameCount%360.0)*this.time)) - 0.009;
		//this.speed += sin(radians(frameCount*this.speed)*2); //frequency of the sin curve
		//this.speed += sin(radians(map(abs(frameCount%360*this.speed),0,360*this.speed,-PI,2*PI))) ;

	};

	this.shows = function() {
		textFont(withPride);
		textSize(this.size);
		textAlign(CENTER);
		this.gradient-=0.5;
		//other special text effects: strokeWeight(1.3); stroke(255); fill(this.gradient + sin(frameCount*0.1) * 150);
		noStroke();
		fill(this.gradient);
		text(getQueer, this.xxxxx, this.yyyyy);
	};
 //check disappeared objects
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
