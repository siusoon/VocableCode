# Vocable Code

![Image of Vocable Code](http://siusoon.net/wp-content/uploads/2017/10/vocablecode.png)

Year of production: 2017-

Medium: Customized software, web browser

[RunMe](https://cdn.rawgit.com/siusoon/VocableCode/9f23c99f/vocablecode_program/index.html)

# Description

Vocable code is both an art, design and activist project. As an art project, it is a piece of software art, codework, digital poetry and web art that examines the notion of queerness in computer coding. Through collecting voices and statements from others in filling the sentence that starts with "Queer is...", the work is computationally and poetically composed in which the texts and voices are disrupted by the mathematical chaos, exploring the performativity of code, subjectivity and language. Behind the executed web interface, the code itself is deliberately written as a codework, a mix of a computer programming language and human language, exploring the material and linguistic tensions of writing and reading within the context of (non)binary poetry and computer code.

Additionally, with the aim of having 'Vocable code' in the context of a feminist coding workshop, it is designed to be simple enough for code reading that incorporates basic coding concepts, such as functions, conditions, textual effects, data import, etc to facilitate code learning and discussion. As such, 'Vocable Code' is also considered as an essential component of a feminist coding workshop that is primarily for women, queers, LGBT and non-binaries who are interested in learning programming. 

The workshop is called "Feminist Coding in p5.js | Can Software be Feminist?", addressing computer code as a language that is designed for both human and machine reading. While participants will base on the artwork 'Vocable Code' to learn basic coding concepts, they will also explore code as expressive and aesthetic materials, such as computer code as poetic text that is performative and executable. Through thinking and discussing about code and (non)binary logics, participants will incoporate textual materials, visual effects and audio elements/recording voices to produce their own algorithmic vocable code (in the form of both software and webpages) that addresses the border theme of feminism.

See the workshop details [here](http://notnull.andersvisti.dk/winnie.php)

# Credits

Polly Poon, [Søren Pold](http://pure.au.dk/portal/en/persons/id(4db7e12a-61c5-4e14-9259-5a071cb224eb).html), [Magda Tyzlik+carver](http://thecommonpractice.org/), [Sarah Schoor](http://pure.au.dk/portal/en/persons/id(eee59ed0-acdd-45a2-8661-79fab555a694).html), [Elyzabeth Holford](http://ohiofusion.com/10-questions-with-elyzabeth-holford/), [Gabriel Pereira](http://gabrielpereira.net/), [Annette Markham](https://annettemarkham.com/)

# Codework
```javascript
function makeVisible() {   
	queers = whatisQueer.queers;
	var addQueers = int(random(3,6));  
	var makingStatements;
	for (var yy = 2; yy <= addQueers-2; yy++) {	
		var WhoIsQueer = int(random(queers.length));		
		if (queers[WhoIsQueer].statement3 == "null") { 
			queerRights.push(new Identity(queers[WhoIsQueer].statement2));	
			makingStatements = 2;
		}else{
			makingStatements = int(random(2,4));
			if (makingStatements == 2) {
				queerRights.push(new Identity(queers[WhoIsQueer].statement2));		
			}else{
				queerRights.push(new Identity(queers[WhoIsQueer].statement3));
			}
		}
		if (yy == 2) {
			SpeakingCode(queers[WhoIsQueer].iam, makingStatements);	 
		}
	}
}
```

# Technical

[p5js](https://p5js.org/) is an open source Javascript library developed by the Processing Foundation and is founded by [Lauran McCarthy](http://lauren-mccarthy.com/) to make coding more accessible to artists, designers, educators and beginners. I share the vision and goal of p5.js, which is to put community outreach and diversity as priority. 

Material requires: 
- A Recorder (I use the app called 'Voice Recorder' in an Android device)
- Audio editing (I use [Audicity](http://www.audacityteam.org/)) 
- Code editor
- [p5js](https://p5js.org/) and its related libaries
- If run on a local browser, it requires a [local server](https://github.com/processing/p5.js/wiki/Local-server). Or you may need a firefox browser to get things up and running. 

# Background

Informed by constrained writing, experimental writing of codeworks (Raley, 2002) as well as the publication of Anomalous Press issue 11 on ‘Queerness’ (2014) and Geoff Cox’s writing on 'Speaking Code' (2013), the artwork ‘Vocable code’ explores the notion of queerness through computational thinking, the reading, writing, speaking and thinking with code and language. It is a piece of visual-audio software or electronic literature or web art or a digital poetry that contains different voices and visual interpretation of queerness.

References:

* http://anomalouspress.org/11/1.angles.lovers.php
* https://mitpress.mit.edu/books/speaking-code
* http://www.electronicbookreview.com/thread/electropoetics/net.writing

# Process

The work collects statements and voices from participants with certain given constraints, as well as writing code with constraints too:

- Writing (for participants)
1. Continue the sentence with the starting words "Queer is..."
2. Each sentence contains no more than 5 words (the starting word, queer, is not included).
3. More than 1 sentence is allowed but not more than 3.
4. English word/sentence is required.
5. It is ok to have just one word.

- Speaking (for participants)
1. It is up to the participant to decide the temporality and rhythm of speaking the text
2. It is up to the participant to either speak the full word, full sentence with different pitch/tempo/rhythm. They can also speak a certain part (phonetics) of the word/sentence. In other words, the word or sentence doesn't need to be completed.

- Coding (for coder)
1. Not to use binary 0 or 1
2. Not to use either a single x or y
3. Not to use > or <, but with >= or <=
4. Mindful of the variable, array and function names

* items 1-3 are inspired by [The Feminist Software Foundations](https://github.com/TheFeministSoftwareFoundation/C-plus-Equality) 


# Create your own vocable code

1. Declare your work with the open sourcelicience (state explict in your source code) that allows sharing and modifying the code
2. Think of a theme that you want to explore e.g "Queer is", "non-binary is"
3. Set up your own constraints, both in terms of writing and speaking.
4. Ask your friends to take part and allow you to record their voice (I use Android device with the voice recording apps called 'voice recorder') 
5. Download the source code from Github
6. Modify the code, have your own voice files and the json file
7. Run on a browser and test it
8. Upload your code to a public domain and allow people to share your code

* Ping me about your vocable code :) 
