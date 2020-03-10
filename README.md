# rock_paper_scissors
Rock paper scissors java project from 'The Odin Project'

This project is directly from theOdinProject.com Web Development 101 project: Rock Paper Scissors. 

The goal sounds like I'm creating a simple rock, paper, scissors game that runs from the console, no html output yet. 
Instructions go on to say that a later lesson will create a web page type input so to save it on github for later use. 

This project is in JS. 

Second Update NOTES:
Just like the first html/css project, this was another doozy! I struggled a lot trying to get the different functions to work together.
I'm still not sure how calling the functions at the end like function(words(words)) works or why or why not something goes in
the () after the function name like function funcOne (wtf goes here and why) {} ect. 

The loops were optional so i first tried to just call everything five time but couldn't get that right so ended up using a for loop
anyway. 

According to the documentation, we will re-visit this project later and make it more user friendly with a webpage style html/css stuff. 
im excited about it and also dreading it haha. 


THIRD NOTES:

Holy cow it works! I had a lot of trouble getting the loop to stop. It wouldn't add the score, it would just say either 1 or 0 after each round then reset on the next one. Turns out I wasn't calling the 'return' value correctly so it wasn't adding it up right. 

After that, it kept looping because I was using the || (or) instead of && (and). Once I made that simple change, it finally would stop after either score hit 5. Then I just added the window alerts saying who won or tied. 

I also cleaned it up a bit by removing some of the global variables I either wasn't using or were unnecessary and removed my comments to myself (they were mostly things like "WHY ISNT THIS WORKING" ect.) All in all im happy. Now onto adding the UI which im sure is going to involve changing a bunch of stuff that works. Boo. ha. 
