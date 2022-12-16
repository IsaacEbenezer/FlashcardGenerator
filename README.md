
# Flashcard-Generator
## This project lets the user to make flashcards

## Intro to flashcard generator
<h4>This app has 3 pages</h4>
<ol>
<li>Create Flashcard Page</li>
<li>My Flashcards Page</li>
<li>Flashcard Details Page</li>
</ol>
<h3>libraries and technologies used</h3>
<ol>
<li>React-redux</li>
<li>Formik</li>
<li>tailwindcss</li>
<li>react-router-dom</li>
</ol>
<h3>summary</h3>
First page was to Create Flashcard which contains two form one for the name & description of the flashcard using formik, second form was to create Dynamic Form which was created using FORMIK, which has individual card name & card description. After clicking the Create Button, the Flashcard will be created.
This app  has form validations using Formik
This app uses redux for global State management
The second page was to display all the user created cards, By default the user can only see 3 cards & after clicking the See All button all the remaining cards will be displayed.
After clicking on the View Cards, User redirected to flashcard details page, where user can see all the cards on that flashcard, by clicking on the menu on the left side display the each selected card on the middle section,
On the right side there are the button i.e. Share, Download, Print, by clicking on the Share button a Modal pops up & the user can copy link on that model by clicking on the copy to clipboard button the link copied to the clipboard & user can paste it anywhere.
