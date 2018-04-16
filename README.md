# Vocable Code

![Image of Vocable Code](http://siusoon.net/wp-content/uploads/2017/10/vocablecode.png)

Year of production: 2017-

Medium: Customized software, web browser

[RunMe](https://rawgit.com/siusoon/VocableCode/master/vocablecode_program/index.html)
(**only support Desktop web browsers but not mobile platforms due to performance issues**) 

# Description

Vocable code is both an art, design and activist project. As an art project, it is a piece of software art, codework, digital poetry and web art that examines the notion of queerness in computer coding. Through collecting voices and statements from others that help to complete the sentence that begins: “Queer is…”, the work is computationally and poetically composed where the texts and voices are repeated and disrupted by mathematical chaos, creating a dynamic audio-visual literature and exploring the performativity of code, subjectivity and language. Behind the executed web interface, the code itself is deliberately written as a codework, a mix of a computer programming language and human language, exploring the material and linguistic tensions of writing and reading within the context of (non)binary poetry and computer code.

Additionally, with the initial aim of having 'Vocable code' in the context of a feminist coding workshop, it is designed to be simple and legible enough for code reading that incorporates basic coding concepts, such as functions, conditions, textual effects, data import, etc to facilitate code learning and discussion in a workshop setting. The workshop was first conducted in 2017 at Aarhus, which is called "Feminist Coding in p5.js | Can Software be Feminist?". As a workshop, 'Vocable Code' is part of the workshop that is primarily for women, queers, LGBT and non-binaries who are interested in learning and discussing programming. The workshop addresses computer code as a language that is designed for both human and machine reading. While participants will base on the artwork 'Vocable Code' to learn basic coding concepts, they will also explore code as expressive and aesthetic materials, such as computer code as poetic text that is performative and executable. Through thinking and discussing about code and (non)binary logics, participants will incorporate textual materials, visual effects and audio elements/recording voices to produce their own algorithmic vocable code (in the form of both software and webpages) that addresses the border theme of feminism.

See the workshop call [here](https://notnull.andersvisti.dk/workshop/feminist-coding-p5js-can-software-be-feminist)

See the workshop's outline [here](https://github.com/siusoon/VocableCode/tree/master/workshop)

See the workshop's report [here](http://computationalthinking.siusoon.net/articles/a-report-on-the-feminist-coding-workshop-in-p5-js/)

# Credits

For those who have contributed to Vocable Code via their voices: Polly Poon, [Søren Pold](http://pure.au.dk/portal/en/persons/id(4db7e12a-61c5-4e14-9259-5a071cb224eb).html), [Magda Tyzlik Carver](http://thecommonpractice.org/), [Sarah Schoor](http://pure.au.dk/portal/en/persons/id(eee59ed0-acdd-45a2-8661-79fab555a694).html), [Elyzabeth Holford](http://ohiofusion.com/10-questions-with-elyzabeth-holford/), [Gabriel Pereira](http://gabrielpereira.net/), [Annette Markham](https://annettemarkham.com/), Anna Brynskov, [Geoff Cox](http://www.anti-thesis.net/)

I am continuously looking for contributors, please get in touch if you would like your voice to be part of this work.

# Codework
```javascript
function makeVisible() {
	queers = whatisQueer.queers;
	let addQueers = floor(random(2.34387,4.34387));
	let makingStatements;
	for (let gender = floor(0.34387); gender <= addQueers; gender++) {
		let WhoIsQueer = floor(random(queers.length));
		if (queers[WhoIsQueer].statement3 == "null") {
			queerRights.push(new notNew(queers[WhoIsQueer].statement2));
			makingStatements = 2.0;
		}else{
			makingStatements = floor(random(2.34387,3.34387));
			if (makingStatements == abs(2)) {
				queerRights.push(new notNew(queers[WhoIsQueer].statement2));
			}else{
				queerRights.push(new notNew(queers[WhoIsQueer].statement3));
			}
		}
		if (gender == abs(2)) {
			SpeakingCode(queers[WhoIsQueer].iam, makingStatements);
		}
	}
}

function SpeakingCode(iam, makingStatements) {
	let getVoice = "inclusive/voices/" + iam + makingStatements + ".wav";
	speak = loadSound(getVoice, speakingNow);
}

function speakingNow() {
	speak.play();
}

```

# Technical

[p5js](https://p5js.org/) is an open source Javascript library developed by the Processing Foundation and is founded by [Lauran McCarthy](http://lauren-mccarthy.com/) to make coding more accessible to artists, designers, educators and beginners. I share the vision and goal of p5.js, which is to put community outreach and diversity as priority. 

Required materials and working environments: 
- A voice recorder 
- An audio editing software (I use [Audicity](http://www.audacityteam.org/)) 
- A code editor (I use atom)
- [p5js](https://p5js.org/) and its related libaries
- A browser (Firefox/Chrome) on desktop 

# Background

Informed by constrained writing and experimental writing of codeworks (Raley, 2002; Sondheim, 2001) as well as the publication of Anomalous Press issue 11 on ‘Queerness’ (2014) and Geoff Cox’s writing on 'Speaking Code' (2013), the artwork ‘Vocable Code’ explores the notion of queerness through computational thinking, which is the reading, writing, speaking and thinking with code and language. It is a piece of visual-audio software or electronic literature or web art or a digital poetry that contains different voices and visual interpretation of queerness.

References:

* http://anomalouspress.org/11/1.angles.lovers.php
* https://mitpress.mit.edu/books/speaking-code
* http://www.electronicbookreview.com/thread/electropoetics/net.writing
* http://litline.org/ABR/issues/Volume22/Issue6/sondheim.pdf

# Process

The organization of the piece is structured around the style of constrained writing, both in terms of the collection of writing and voices from participants, as well as how to write the source code.

First you identify a participant that is willing to take part on your project. Then you send them instructions in advance as below. 

1.	Complete the sentence with the starting words: “Queer is…”
2.	Each sentence contains no more than 5 words (the starting words-“queer is” is not included)
3.	More than 1 sentence is allowed but not more than 3.
4.	It is ok to have just one word.

Then you have to meet the participant face to face with some post-it notes for them to write their sentences and to prepare for the speaking and recording part. Rules are as follow:

1.	It is up to the participant to decide the temporality and rhythm of speaking the text
2.	It is up to the participant to either speak the full word or full sentence with different pitch/tempo/rhythm. 
3.	They can also speak only a certain part (phonetics) of the word or sentence. In other words, the word or sentence doesn’t need to be fully pronounced. 
4.	The first two provided words "queer is" can be omitted.

Vocable Code is highly inspired by [The Feminist Software Foundations](https://github.com/TheFeministSoftwareFoundation/C-plus-Equality), especially the implementation logics of C+=, which is a feminist programming language written by and for femninists. Below it shows the constrains that have been implemented in coding Vocable Code.

1.	Do not use binary 0 or 1
2.	Do not use either a single X or Y
3.	Do not use a single operator of ‘>’ or ‘<’
4.	Mindful of all the variable, array and function’s naming. (e.g not to use the name class for constructing a class)

# Create your own vocable code

1. Declare your work with the open source licience (state explict in your source code) that allows sharing and modifying the code
2. Think of a theme that you want to explore e.g "Queer is", "non-binary is"
3. Set up your own constraints, both in terms of writing and speaking.
4. Ask your friends to take part and allow you to record their voice (I use Android device with the voice recording apps called 'voice recorder') 
5. Download the source code from Github
6. Modify the code, have your own voice files and the json file
7. Run on a browser and test it
8. Upload your code to a public domain and allow people to share your code

!NB: Ping me about your vocable code :) 
