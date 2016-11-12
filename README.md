# WISE Workshop

Welcome to the WISE Coding workshop. My name is Michelle, I'm your workshop leader. Feel free to ask me questions!

Today we’re going to explore the Simon game and the main coding concepts that make up the game. 

These three concepts are:
* HTML (adds structure to the layout of the webpage)
* CSS (styles that change the look and feel of the website)
* Javascript (makes our page interactive so we can play Simon!)

![alt text](https://github.com/mdnetto/WISE/blob/master/simon/images/simon.gif "Simon game")

### Simon
1. Open the simon game and play with it!
2. See how many levels you can get through!

### HTML
When writing HTML, you add "tags" to the text in order to create the structure. These tags tell the browser how to display the text or graphics in the document. Tags are surrounded by left and right arrow keys like this `<p>`. 

```
<html> open html tag
	<head>
		<title> title tag </title>
	</head>
		<body> open body tag
			<div> open div tag
				<div>
					<p> paragraph tag	</p>
					<button> button tag </button> 
					<h1> heading tag </h1>
				</div>
			</div> closing div tag
		</body> closing body tag
</html> closing html tag
```

#### HTML Exercise 1
Everyone will be given an open or closing HTML tag, your job is to find the person who has your matching HTML tag! i.e If you have an open `<p>` tag, look for the person who has the matching closing `</p>` tag. 

#### HTML Exercise 2
HTML tags are often nested inside other tags. For example the `<div>` tag below has a `</p>`, `<button>` and an `<h1>` tag within it.
```
<div>
	<p> paragraph tag	</p>
	<button> button tag </button> 
	<h1> heading tag </h1>
</div>
```

Now that you've found your partner, everyone needs to line up in order that they appear above. Hint: The person with the opening `<html>` tag will be first in the line and the person with the closing `</html>` tag will be last!


#### HTML Exercise 3
Let's open up the HTML file for Simon and look at the tags.

1. In your editor, look for a file called simon.html
2. Try re-arranging the tags which have an id with q1, q2, q3, or q4
```
<div id="q2" class="quadrant" data-tile="2"></div>
<div id="q3" class="quadrant" data-tile="3"></div>
<div id="q4" class="quadrant" data-tile="4"></div>
<div id="q1" class="quadrant" data-tile="1"></div>
```
3. Save the file
4. Re-load your simon file in the browser
5. What did you notice?
6. Change it back to the correct order!

#### HTML Exercise 4
1. Let's Change the `<title>` tag, change 'Simon' to your name
```
<title> Put your name here! </title>
```
2. Save the file
3. Re-load your simon file in the browser
4. What changed? Can you change it back to 'Simon'

#### HTML Exercise 5
1. Move the `<button>` tag to be the first element inside the `<body` tag.
2. Save the file
3. Re-load your simon file in the browser
4. What changed? Can you figure out how to change it back?

### CSS

### Javascript

### Additional coding puzzles
* [Maze and Bee] (https://studio.code.org/s/course4/stage/2/puzzle/1)
* [] ()
* [] ()
* [] ()



