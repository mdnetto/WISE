# WISE Workshop

 Welcome to the WISE Coding workshop. My name is Michelle, I'm your workshop leader. Feel free to ask me questions!

Today we’re going to explore the Simon game and the main coding concepts that make up the game. 

These three concepts are:
* HTML (adds structure to the layout of the page)
* CSS (are styles that change the presentation of the page)
* Javascript (makes our page interactive so we can play Simon)

![alt text](https://github.com/mdnetto/WISE/blob/master/simon/images/simon.gif "Simon game")

# Simon
1. Open the simon game and play with it!
2. See how many levels you can get through!


# HTML
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


## HTML Exercise 1
Everyone will be given an open or closing HTML tag, your job is to find the person who has your matching HTML tag! i.e If you have an open `<p>` tag, look for the person who has the matching closing `</p>` tag. 


## HTML Exercise 2
HTML tags are often nested inside other tags. For example the `<div>` tag below has a `</p>`, `<button>` and an `<h1>` tag within it.
```
<div>
	<p> paragraph tag	</p>
	<button> button tag </button> 
	<h1> heading tag </h1>
</div>
```

Now that you've found your partner, everyone needs to line up in order that they appear above. Hint: The person with the opening `<html>` tag will be first in the line and the person with the closing `</html>` tag will be last!


## HTML Exercise 3
Tags can have id's or classes on them which helps you to target elements when you want to style them with CSS or add actions to them with Javascript.

Let's open up the HTML file for Simon and look at tags that have id's.

1. In your editor, look for a file called simon.html
2. Try re-arranging the tags that have an id like q1, q2, q3, or q4 

HINT: they're on lines 11-15 and they look like this
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


## HTML Exercise 4
1. Let's Change the `<title>` tag, change 'Simon' to your name 

HINT: it's on line 5
```
<title> Put your name here! </title>
```
2. Save the file
3. Re-load your simon file in the browser
4. What changed? Can you change it back to 'Simon'


## HTML Exercise 5
1. Move the `<button>` tag to be the first element inside the `<body` tag. 

HINT: The button tag is on line 19, move it to line 10
```
<body>
	<button data-action="start">Start</button> 
	...
```
2. Save the file
3. Re-load your simon file in the browser
4. What changed? Can you figure out how to change it back?


# CSS
CSS stands for Cascading Style Sheets and it lets you apply styles to the tags you set up in your HTML. An example of a style in the simon game is:
```
body { 
	background-color: #002b36;
}
```
Here we're setting the background color on the `<body>` tag to the navy blue color you see on the page.


## CSS Exercise 1
How do CSS styles get applied to our HTML page? 

1. Try removing the <link> tag on line 7 
```
<link rel="stylesheet" type="text/css" href="css/styles.css" media="screen"/>
```
2. Save the file
3. Re-load your simon file in the browser

## CSS Exercise 2
Did you notice that the Simon colors aren't red, blue, yellow and green as they should be?

1. In your editor, look for a file called styles.css 
2. Experiment with changing these colors via their id tags `#q1`, `#q2`, `#q3`, `#q4`. Here's a [link](https://websafecolors.info/color-chart) to colors you can use. 

HINT: Here's how you can change the first quadrant to red on line 24
```
#q1 {
	background-color: #cc0000;
	...
```
2. Save the file
3. Re-load your simon file in the browser
4. What changed? Can you figure out how to change the other quadrants?


## CSS Exercise 3
1. Let's change color of the button

HINT: the button styles start on line 75 and you need to set the background-color
``` 
button {
	display: block;
	margin: 0 auto;
	margin-top: 20px;
	... add new syle here
}
```

## CSS Exercise 4
1. Can you figure out how to change the inner circle's black background color?

HINT: you can look at the html file to find the class


## CSS Exercise 5
1. What else can you change in the CSS file? Sometimes it's helpful to have a [reference](http://www.w3schools.com/cssreF/) of what styles you can use and what they do.

HINT: you can look at the html file to find the class


# Javascript
Javascript is an object-oriented computer programming language commonly used to create interactive effects within web browsers. In our simon game, it holds all the logic which makes the game playable.





# Additional coding puzzles
* [Maze and Bee] (https://studio.code.org/s/course4/stage/2/puzzle/1)
