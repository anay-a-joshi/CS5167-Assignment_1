# CS5167 - User Interface 1
Assignment 1b: HTML, CSS, JavaScript (Basic)



**Coding Activity 1**

We are going to make a basic UI using just html and css.  This preliminary site will be static.   For this assignment, you will be graded on adding a variety of elements, applying some style and layout rules.  You do not need to make this look professional or consider usability.  This is just a technical exercise, to practice html and css.  

1.  Create an html project.
2.  Open the html file in your favorite editor.  I like sublime text, but you can use anything. 
3.  Edit the html file to add text, buttons, controls, svg elements to create some of the functionalities of a digital goal tracker and journal (see below).  These will not be very interactive, because we are not using javascript. 
4. Use css for styling and layout.  Give elements class names, in your html code.  And write style rules for those classes- Set their color, Choose a new font and font size, Add rounded corners if it is a div...  For this assignment, you can apply any styling rules or layout rules you choose, even silly ones.  I just want you to understand how you can control the look of your elements using css.  
5. As you go, view the result in your browser.  You can just double click on the html file to view it in the browser.  I suggest Chrome. 
6. Inspect your page using the web developer tools in Chrome (View >> Developer >> Developer Tools).  Look at the elements and where they are onscreen, and the layout and sizing decisions computed by the layout engine in the Chrome browser.  
7. Test out editing the html in the developer console to see immediate changes.  

**What are we implementing?**

Implement a basic goal tracking and journaling website. 

**Summary**

_You site should have:_
    The user's name
    The date and time of the entry
    An image that the user has uploaded for the day
    A paragraph of text containing an inspirational quote
    A text box for the user to type a journal entry
    A place to enter in how many hours of sleep they got
    A set of checkboxes for them to mark how they felt today (energetic, anxious, motivated... choose your own labels)
    Use svg shapes somewhere (communicate the user's sleep score, colors to describe their mood...)
    Anything else you want to try.... 




**Coding Activity 2**

For this activity, you will continue with the basic UI you have worked on in html and css for Coding Activity 1.   But now we are going to make it interactive and dynamic.  You will also add text or visuals to the top of the page that summarize the user's entries for the past few days.  As before, this is a technical exercise so focus on getting these features working rather than professional styling or usability.  

1. Serve your website locally.
2. Add an event listener for the user's sleep entry and other buttons (e.g., mood checkboxes)
3. Create an array objects that stores the user entries.  Add some dummy data for a few days before today.  Think about what fields would be useful in this array.  If the user interacts with the page, update the array object for the current day. 
4. Write a function that loops over this array and computes an average number of hours slept, display this on the page and make sure it updates if the user changes their sleep entry for the day.   Compute the number of days they say they have different feelings (how many days energetic, tired...).  Display this as well and make sure it updates when the user interacts.  
