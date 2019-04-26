# Vocable Code


[![DOI](https://zenodo.org/badge/110143568.svg)](https://zenodo.org/badge/latestdoi/110143568)

![Image of Vocable Code](http://siusoon.net/wp-content/uploads/2017/10/vocablecode.png)

Year of production: 2017-

Medium: Customized software, web browser

[RunMe](https://siusoon.github.io/VocableCode/vocablecode_program/)
(**only support Desktop web browsers but not mobile platforms due to performance issues**)

# Description

Vocable code is both an art, design and activist project. As an art project, it is a piece of software art, codework, digital poetry and web art that examines the notion of queerness in computer coding. Through collecting voices and statements from others that help to complete the sentence that begins: “Queer is…”, the work is computationally and poetically composed where the texts and voices are repeated and disrupted by mathematical chaos, creating a dynamic audio-visual literature and exploring the performativity of code, subjectivity and language. Behind the executed web interface, the code itself is deliberately written as a codework, a mix of a computer programming language and human language, exploring the material and linguistic tensions of writing and reading within the context of (non)binary poetry and computer code.

Additionally, with the initial aim of having 'Vocable code' in the context of a feminist coding workshop, it is designed to be simple and legible enough for code reading that incorporates basic coding concepts, such as functions, conditions, textual effects, data import, etc to facilitate code learning and discussion in a workshop setting. The workshop was first conducted in 2017 at Aarhus, which was called "Feminist Coding in p5.js | Can Software be Feminist?", and it was primarily for women, queers, LGBT and non-binaries who were interested in learning and discussing programming. The workshop addressed computer code as a language that is designed for both human and machine reading. While participants would base on the artwork 'Vocable Code' to learn basic coding concepts, they would also explore code as expressive and aesthetic materials, such as computer code as poetic text that is performative and executable. Through thinking and discussing about code and (non)binary logics, participants would incorporate textual materials, visual effects and audio elements/recording voices to produce their own algorithmic vocable code (in the form of both software and webpages) that addresses the border theme of feminism.

See the workshop call [here](https://notnull.andersvisti.dk/workshop/feminist-coding-p5js-can-software-be-feminist)

See the workshop's outline [here](https://github.com/siusoon/VocableCode/tree/master/workshop)

See the workshop's report [here](http://computationalthinking.siusoon.net/articles/a-report-on-the-feminist-coding-workshop-in-p5-js/)

** The project is licensed under [a Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

# Credits

For those who have contributed to Vocable Code via their voices: Polly Poon, [Søren Pold](http://pure.au.dk/portal/en/persons/id(4db7e12a-61c5-4e14-9259-5a071cb224eb).html), [Magda Tyzlik Carver](http://thecommonpractice.org/), [Sarah Schorr](http://pure.au.dk/portal/en/persons/id(eee59ed0-acdd-45a2-8661-79fab555a694).html), [Elyzabeth Holford](http://ohiofusion.com/10-questions-with-elyzabeth-holford/), [Gabriel Pereira](http://gabrielpereira.net/), [Annette Markham](https://annettemarkham.com/), Anna Brynskov, [Geoff Cox](http://www.anti-thesis.net/), [Lone Koefoed Hansen](http://pure.au.dk/portal/en/persons/lone-koefoed-hansen(ae5c1697-dc84-4a67-8ba9-b7cb62bbaea3)/projects.html), [Sabrina Recoules](http://www.theatredu1k.com/), Tobias Stenberg Christensen, Sall Lam Toro, [Anders Visti](http://andersvisti.dk/), Google Algorithm, AhTong, [Melissa Palermo](http://www.melissapalermo.com/), [Joana Chicau](http://www.joanachicau.com/)

I am continuously looking for contributors, please see [the instruction](screenshot/instruction_vocableCode.png) for voice donation and get in touch if you would like your voice to be part of this work.

# Codework
```javascript
function makeVisible() {
	queers = whatisQueer.queers;
	let addQueers = floor(random(2.34387,4.34387));
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

```

# Technical

[p5js](https://p5js.org/) is an open source Javascript library developed by the Processing Foundation and is founded by [Lauran McCarthy](http://lauren-mccarthy.com/) to make coding more accessible to artists, designers, educators and beginners. I share the vision and goal of p5.js, which is to put community outreach and diversity as priority.

# Background

Informed by constrained writing and experimental writing of codeworks (Raley, 2002; Sondheim, 2001) as well as the publication of Anomalous Press issue 11 on ‘Queerness’ (2014) and Geoff Cox’s writing on 'Speaking Code' (2013), the artwork ‘Vocable Code’ explores the notion of queerness through computational thinking, which is the reading, writing, speaking and thinking with code and language. It is a piece of visual-audio software or electronic literature or web art or a digital poetry that contains different voices and visual interpretation of queerness.

References:

* http://anomalouspress.org/11/1.angles.lovers.php
* https://mitpress.mit.edu/books/speaking-code
* http://www.electronicbookreview.com/thread/electropoetics/net.writing
* http://litline.org/ABR/issues/Volume22/Issue6/sondheim.pdf

# Process

1. See the source code writing process 
2. See the instruction for voice donation

[here](https://github.com/siusoon/VocableCode/blob/master/screenshot/VocableCode_print.pdf)

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
