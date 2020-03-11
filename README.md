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


FOURTH (and hopefully final) Notes:

The UI was sooo much more fun than doing this project with just the javascript console! I ended up not needing any loops at all so I completely removed it. Basically after a round it adds +1 to either score and just an if/else statement that says if either reaches 5 then its a win/lose. 

The most difficult part was actually the CSS. I really struggled to get everything to line up like I wanted. I used flexbox as suggested but I can't help think there's a better way. 
The bottom two boxes, the comp choice and score boxes, change as the games played and i'd really rather have them be static in size and I couldn't really figure out how to make that happen so I guess I may have to re-visit this project later to really make it perfect. 

Overall, I am happy with it! The spongebob theme kind of happened by accident when the first image that popped up for "rock" was the boulder from one of the episodes and I thought that would be a fun theme!
