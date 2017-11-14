# Feminist Coding in p5.js | Can Software be Feminist?

First workshop: 25 Nov 2017 at Aarhus at [!=null](http://notnull.andersvisti.dk/winnie.php)

[RunMe](https://cdn.rawgit.com/siusoon/VocableCode/9f23c99f/vocablecode_program/index.html)

# 5 hrs run-down:
1. [Introduction](#introduction)

-- BREAK

2. [Technical Setup](#technical)
3. [Activity A - Decoding, Reading and Interpreting Code and Logics](#exerciseA)

-- BREAK

4. [The basic of coding](#basics)
5. [Activity B - Tinkering Code](#exerciseB)
6. [Discussion](#discussion)

-- BREAK

7. [Activity C - Writing, Thinking and Creating your own vocable code](#owncode)
8. [Performing Code](#codeperformance)

## Introduction <a name="introduction"></a>
  - [My Info](http://www.siusoon.net)
  - Why are you interested in this workshop?
  - The background of this workshop + what we can do in 5 hrs
  - What is Web, [Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) and [P5js](https://p5js.org/) and why?
    ![Web](https://www.codeproject.com/KB/books/DevelopWebWidgetHtmlCssJs/bigpicture_small.png "web")
    
    Reference image: [Creating Web Widget with HTML, CSS, and JavaScript by Raj Lal](https://www.codeproject.com/Articles/81355/Chapter-Creating-Web-Widget-with-HTML-CSS-and-Ja)
    - [Diversity with art + code](http://diversity.p5js.org/about.html) and [interviews](https://www.youtube.com/channel/UCwtoGoM92Bais5heYYxmB5w)
    - [p5js editor](http://alpha.editor.p5js.org/) + simple tinkering
  
## Technical Setup <a name="technical"></a>
  - [Firefox Browser](https://www.mozilla.org/en-US/firefox/new/) => for by passing the [cross origin requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 
  - Speaker
  - Code editor (try downloading [atom](https://atom.io/))
  ![Editor](https://github.com/siusoon/VocableCode/blob/master/atom_screen.png)
  - [Source code](https://github.com/siusoon/VocableCode) -> click the green download button -> unzip the file -> drag the index.html file onto the browser. 
  - Get the console panel open: Browser > Web developer > Web console
  - Optional: [The concept of git in command line and github](http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
    * [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    * Setup git 1: prepare a working directory, then type 
    ```
    git init
    ```
    * Setup git 2: 
    ```
    git config --global user.name [Username] 
    ```
    * Setup git 3: 
    ```
    git config --global user.email [email address] 
    ```
    * Download the github files to local: 
    ```
    git pull https://github.com/siusoon/VocableCode.git
    ```
    * Sign up: [github account](https://github.com/) and create your own repository "Respositories" > click the "New" button
    * Modify your file, add your code files etc
    * See cheatsheet [here](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)
    * Example: If you want to remove a file > type rm, and if you want to add file or modify the file > type add
    ```
    git rm filename.extension
    ```
     ```
    git add filename.extension
    ```
    * Example continue: 
    ```
    git commit -m [description e.g delete what]
    ```
    * Upload the files to github:
    ```
    git push --set-upstream [github with your respository url] master
    ```
    * other useful commands:
    ```
    git status
    git diff    //see the difference
    git add *   //staging everything -> then commit -> then push
    ```
## Activity A - Decoding, Reading and Interpreting Code and Logics <a name="exerciseA"></a>
- [Vocable Code](https://github.com/siusoon/VocableCode)
- Mini exA1: Identify the possible logics and effects based on what you see and what you hear
  - Visual
  - Sound
  - Process/Sequence
  - Changes over time
- Mini ExA2: Reading code and Wild Guess: Mapping the identifiable items 

## The basic of coding <a name="basics"></a>

  - HTML/JS/Data structure + [p5.sound library](https://p5js.org/reference/#/libraries/p5.sound) + [JSON](https://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/)

  - Structure with setup and draw, and other sequences

  - [Coordinate system](https://p5js.org/examples/structure-coordinates.html)

  - basic syntax (check p5js)
  
  - Naming: [Variables](https://p5js.org/examples/data-variables.html), [Arrays](https://p5js.org/examples/arrays-array.html) and [functions](https://p5js.org/examples/structure-functions.html)

  - [Conditions](https://p5js.org/examples/control-conditionals-1.html), repetitions and differences

  - Error log

## Activity B: Tinkering code  <a name="exerciseB"></a>
- The concept of [Tinkering](https://tinkering.exploratorium.edu/art-tinkering)
- Mini exB1: Exploring numbers and their effects and how things work - Changing parameters esp numbers (e.g random no, color no, size of text, speed etc)
- Mini exB2: Exploring the semantic aspect of code by changing the names to create your own codework (both in js and json), realizing how names and logics are conflated both technically and poetically.

!NB: Rememeber what you have done (which line of code you have changed) and test it on browser for any tiny changes made. (good for error checking)

## Discussion  <a name="discussion"></a>
- Where do you normally read/see a poem? 
- What consitite poetry? 
- How does it different from what/where you normally see a poem? 
- What does it mean by feminist coding and feminist software? How can we explore that?

## Activity C: Writing, Thinking and Creating your own vocable code <a name="exerciseC"></a>
- Mini exC1: Where is your own voice? 
  - Try to create two voices and two statments of your own, and see if you can incorporate that into Vocable Code (see json files and becareful of the file naming)
  - You may also try to modify/delete/add existing voices and statements
  - See the constrains [here](https://github.com/siusoon/VocableCode) > Go to Process
- Mini exC2: Add/change functions, effects and behaviors
- Mini exC3: If you have given a chance to change entirely about Vocable Code, what will you change and how will you change it? What might be the potential logic/algorithm that you want to add in order to make a poetic poetry? Make a sketch! 

## Performing Code <a name="codeperformance"></a>

# Further learning and reading
- [Coding Train](http://thecodingtrain.com/) by Daniel Shiffman [Video tutorials]
- [Introduction to p5.js](https://p5js.org/learn/) by p5.js
- [Examples of p5.js](https://p5js.org/examples/)
- [Programming Design Systems](https://programmingdesignsystems.com/) by Rune Madsen
- [Code Poetry](http://code-poetry.com/) by Daniel Holden and Chris Kerr.
