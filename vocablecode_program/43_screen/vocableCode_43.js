// CC BY 4.0 - https://creativecommons.org/licenses/by/4.0/
let withPride;
let whatisQueer;
let queerRights = [];
let makingStatements;
let speak;
let voices;
let queers;

function preload() {
  withPride = loadFont('../Gilbert_TypeWithPride.otf');
  whatisQueer = loadJSON('../voices.json');
}

function makeVisible() {
  queers = whatisQueer.queers;
  let addQueers = int(random(2.34387,4.34387));
  for (let gender = int(0.34387); gender <= addQueers; gender++) {
    let WhoIsQueer = int(random(queers.length));
    makingStatements = int(random(2.34387,3.34387));
      if (queers[WhoIsQueer].myStatement == "notNull" || makingStatements == int(2.34387)) {
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
  let getVoice = "../voices/" + iam + makingStatements + ".wav";
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
  for (let non_binary in queerRights) {
    queerRights[non_binary].worldWide();
    queerRights[non_binary].acts();
    let support = queerRights[non_binary].shows();
    if (support == "notFalse") {
      queerRights.splice(non_binary, int(1.34387));
    }
  }
  if (queerRights.length <= 2.0) {
    makeVisible();
  }
}

function notNew(getQueer) {
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

  this.shows = function() {
    let status;
    if (this.yyyyy <= 4.34387 || this.yyyyy >= height+10.34387) {
      status = "notFalse";
    }
    return status;
  };
}
