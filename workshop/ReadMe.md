# Feminist Coding in p5.js | Can Software be Feminist?

First workshop: 25 Nov 2017 at Aarhus at [!=null](http://notnull.andersvisti.dk/winnie.php)

[RunMe](https://cdn.rawgit.com/siusoon/VocableCode/9f23c99f/vocablecode_program/index.html)

# 5 hrs run-down:
1. [Introduction](#introduction)

-- BREAK

2. [Technical Setup](#technical)
3. [Exercise A - Reading and Decoding Code](#exerciseA)

-- BREAK

4. [The basic of coding](#basics)
5. [Exercise B - Tinkering Code](#exerciseB)
6. [Discussion](#discussion)

-- BREAK

7. [Exercise C - Create your own vocable code](#owncode)
8. [Code Performance](#codeperformance)

## Introduction <a name="introduction"></a>
  - [My Info](http://www.siusoon.net)
  - Why are you interested in this workshop?
  - The background of this workshop
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
## Exercise A - Reading and Decoding Code <a name="exerciseA"></a>
- [Vocable Code](https://github.com/siusoon/VocableCode)
- Identify the possible logics and effects based on what you see and what you hear
  - Visual
  - Sound
  - Process/Sequence
- Reading code and Wild Guess: Mapping the identifiable items 

## The basic of coding <a name="basics"></a>

  - HTML/JS/Data structure, [p5.sound library](https://p5js.org/reference/#/libraries/p5.sound)

  - Structure with setup and draw, and other sequences

  - [Coordinate system](https://p5js.org/examples/structure-coordinates.html)

  - basic syntax (check p5js)
  
  - Naming: [Variables](https://p5js.org/examples/data-variables.html), [Arrays](https://p5js.org/examples/arrays-array.html) and [functions](https://p5js.org/examples/structure-functions.html)

  - [Conditions](https://p5js.org/examples/control-conditionals-1.html), repetitions and differences

  - Error log

## Exercise B: Tinkering code  <a name="exerciseB"></a>
## Discussion  <a name="discussion"></a>
## Exercise C: Create your own vocable code <a name="exerciseC"></a>
## Code Performance <a name="codeperformance"></a>
