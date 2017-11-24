# Feminist Coding in p5.js | Can Software be Feminist?

First workshop: 25 Nov 2017 at Aarhus (as part of [!=null](http://notnull.andersvisti.dk/winnie.php) platform)

# 5 hrs run-down:
1. [Introduction](#introduction)
2. [Technical Setup](#technical)

-- BREAK

3. [Activity A - Decoding, Reading and Interpreting Code and Logics](#exerciseA)
4. [The basic of coding](#basics)

-- BREAK

5. [Activity B - Tinkering Code](#exerciseB)
6. [Discussion](#discussion)
7. [Activity C - Writing, Thinking and Creating your own vocable code](#owncode)
8. [Performing Code](#codeperformance)

## Introduction <a name="introduction"></a>
  - [My Info](http://www.siusoon.net)
  - Why are you interested in this workshop?
  - The background of this workshop + what we can do in 5 hrs
  - What is Web, [Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) and [P5js](https://p5js.org/) and why?
    ![Web](https://www.codeproject.com/KB/books/DevelopWebWidgetHtmlCssJs/bigpicture_small.png "web")
    
    *Reference image: [Creating Web Widget with HTML, CSS, and JavaScript by Raj Lal](https://www.codeproject.com/Articles/81355/Chapter-Creating-Web-Widget-with-HTML-CSS-and-Ja)*
    - [p5js Contributor’s Conference Interviews :: Lauren McCarthy](https://vimeo.com/129605734)
    - [Diversity with art + code](http://diversity.p5js.org/about.html) and [interviews](https://www.youtube.com/channel/UCwtoGoM92Bais5heYYxmB5w)
  
## Technical Setup <a name="technical"></a>
  - [Firefox Browser](https://www.mozilla.org/en-US/firefox/new/) => for by passing the [cross origin requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 
  - The Firefox browser: Open the console panel (Browser > Tools > Web developer > Web console)
  - Speaker is on and workable
  - Code editor (try downloading [atom](https://atom.io/))
  - Download p5.js [here](https://p5js.org/download/) > Unzip > drag the html file (under the folder called empty-example) to the browser > anything happens?
  - Then drag sketch.js to atom > go to p5js [get started](https://p5js.org/get-started/) > copy the code to atom > refresh your browser 
    <img src="https://github.com/siusoon/VocableCode/blob/master/screenshot2.png" width="550">
    <img src="https://github.com/siusoon/VocableCode/blob/master/screenshot3.png" width="550">

!NB: unzip (either double click or on linux> terminal "unzip file.zip -d destination_folder", see more [here](https://askubuntu.com/questions/86849/how-to-unzip-a-zip-file-from-the-terminal))

## Activity A - Decoding, Reading and Interpreting Code and Logics <a name="exerciseA"></a>
- Download the [Source code](https://github.com/siusoon/VocableCode) -> click the green download button -> unzip the file -> drag the index.html file (under the folder "vocablecode_program") onto the browser. 
- **Mini exA1: Identify the possible logics and effects based on what you see and what you hear.** (Run Vocable Code by dragging the index.html file-under the folder called "vocablecode_program"-onto your browser) Directions: 
  - Visual (what you see?)
  - Sound (what you hear?)
  - Process (what are the sequences?)
  - Time (what have been changed over time?)
  - Data (What kind of data are involved?)
  
- The concept of pseudocode (see more [here](http://www.engr.sjsu.edu/bjfurman/courses/ME30/ME30pdf/Notes_on_Algorithms.pdf))
  - Can be used as an informal tool for planning/outlining your programs and algorithms
  - Human readable: it consists of short phrases that are used to explain specific tasks in high level
  - Focuses on logics but not syntaxes
  - Independent of any programming language 
  
- *Mini ExA2: Reading code and Wild Guess: Mapping the source code with the identifiable items from exA1* 

## The basic of coding <a name="basics"></a>
  - HTML/JS/Data structure + [p5.sound library](https://p5js.org/reference/#/libraries/p5.sound) + [JSON](https://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/)
  
    <img src="https://github.com/siusoon/VocableCode/blob/master/basicStructure.png" width="200">
    
  - Structure with setup and draw, and other sequences/functions e.g preload()
  - [Coordinate system](https://p5js.org/examples/structure-coordinates.html)
  
     <img src="https://processing.org/tutorials/drawing/imgs/drawing-03.svg" width="550">
     
     *Reference image: [Processing](https://processing.org)*
  - [Basic syntax](https://p5js.org/reference/) e.g color, background, createCanvas, functions, for-loop, if-else statments, var
  - Naming: [Variables](https://p5js.org/examples/data-variables.html), [Arrays](https://p5js.org/examples/arrays-array.html) and [functions](https://p5js.org/examples/structure-functions.html)
  
    <img src="https://github.com/siusoon/VocableCode/blob/master/naming.png" width="600">

  - [Conditions](https://p5js.org/examples/control-conditionals-1.html), repetitions and differences
  - Error log
  
    <img src="https://github.com/siusoon/VocableCode/blob/master/error.png" width="550">

## Activity B: Tinkering code  <a name="exerciseB"></a>
- The concept of [Tinkering](https://tinkering.exploratorium.edu/art-tinkering)

- **Mini exB1: Exploring numbers and their effects and how things work - Changing parameters esp numbers** (e.g color no in 'Background()' and 'this.gradient()', size of text in 'this.text', speed in 'this.speed = random()', random no range in 'random()', etc. in vocableCode_xx.js)

- **Mini exB2: Exploring the semantic and poetic aspect of code by changing the names to create your own codework (both in js and json).** How names and logics are conflated both technically and poetically? (When you change the name, make sure you have searched for other parts of the program that have used the same name. e.g variable 'non_binary' or 'withPride' is used more than one time in the program.)

!NB1: For every change of the number/name, save the file and then refresh the browser (with your web console opens to check for any errors may occur.)

!NB2: Rememeber what you have done (which line of code you have changed) and test it on your browser for any tiny changes made. (good for error checking)

!NB3: Don't panic if nothing show up on the webpage or with error msg on the web console. It is ok to encounter errors as they help us to understand how things work/not work, as well as the underlying logics. You can always undo and try again.

## Discussion  <a name="discussion"></a>
- Where do you normally read/see a poem? 
- What consitite poetry? 
- How does it different from what/where you normally see a poem? 
- What does it mean by feminist coding and feminist software? How can we explore that?

## Activity C: Writing, Thinking and Creating your own vocable code <a name="exerciseC"></a>
Work in pairs:
- **Mini exC1: Where is your own voice?**
  - What is queer? (see [feministing](http://feministing.com/2010/06/16/whats-the-difference-between-lesbian-and-queer/) and the comments of the article)
  - Try to create two voices and two statments of your own, and see if you can incorporate that into Vocable Code (1. Record two of your voices in wav file format 2. see voices.json file and add your name and statements)
    - Record your/other voices through your smartphone (download a free app e.g VoiceRecorder, or you can try with my voice recorder)
    - The wav files are named in this convention: firstname2.wav and firstname3.wav -> all are put under the folder called "inclusive\voices\"
    - The voices.json file is structured in this convention: 
      - iam: "yourfirstname",
      - lastname: "yourlastname",
      - statement2: "your first statement",
      - statement3: "your second statement"
  - You may also try to modify/delete/add existing voices and statements
  - See the constrains [here](https://github.com/siusoon/VocableCode) > Go to Process
  
- **Mini exC2 (optional): Add/change functions, effects and behaviors in the js file**
  - e.g changing background and font color, text size, movement from vertical to horizontal and add shapes in the background, and many others...
  
- **Mini exC3 (optional): If you have given a chance to change entirely about Vocable Code, what will you change and how will you change it? What might be the potential logic/algorithm that you want to add in order to write a codework (code poetry)? Make a sketch or pseudocode!**

## Performing Code <a name="codeperformance"></a>

# Further learning and reading
- [Coding Train](http://thecodingtrain.com/) by Daniel Shiffman [Video tutorials]
- [Introduction to p5.js](https://p5js.org/learn/) by p5.js
- [Examples of p5.js](https://p5js.org/examples/)
- [Programming Design Systems](https://programmingdesignsystems.com/) by Rune Madsen
- [Code Poetry](http://code-poetry.com/) by Daniel Holden and Chris Kerr.
- [CCSWG14 - Feminist Programming Language](http://haccslab.com/?p=85) by Viola Lasmana
- [Feminist Software Foundation](https://github.com/ErisBlastar/cplusequality)
- [Zeroes and Ones: Digital Women and the New Technoculture](https://monoskop.org/File:Plant_Sadie_Zeros_and_Ones_Digital_Women_and_the_New_Technoculture_1998.pdf) (1997) by Sadie Plant
- [Designing for Difference](http://townsendgroups.berkeley.edu/sites/default/files/differences_mcpherson.pdf) (2014) by Tara McPherson
