/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

//Selecting the elements for DOM
const body = document.querySelector("body");
const page = document.querySelector(".page");

// Add a search bar and select its input and button elements

const header = document.querySelector('header');
const searchHTML = 
   ` <label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
 </label>`;
header.insertAdjacentHTML('beforeend', searchHTML);
const searchInput = document.querySelector('#search');
const searchButton = searchInput.nextElementSibling;

const authorSearch = document.getElementById('search');
authorSearch.addEventListener('keyup', e => {
  let currentValue = e.target.value.toLowerCase();
  let authors = document.querySelectorAll('h3');
authors.forEach(author => {
  if (author.textContent.toLowerCase().includes(currentValue)) {
      author.parentNode.parentNode.style.display = 'block';
  } else {
      author.parentNode.parentNode.style.display = 'none';

  }
  });
});



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page)  {
  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;
  
  // Selecting the element "student-list" and assign HTML content to a empty string
  const studentList = document.querySelector(".student-list");
  studentList.innerHTML = " ";

    //Looping through the array of data objects
    for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
        // Create the html template literal for studentList
        let html_literal = `<li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src=${list[i].picture.large} alt= 'Profile Picture'>
          <h3>${list[i].name.first} ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${list[i].registered.date}</span>
        </div>
      </li>`
        // Placement of template literal
        studentList.insertAdjacentHTML("beforeend", html_literal);
      }
    }
  }

  /*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const num_Page_ButN = Math.ceil(list.length / 9);
 
   //creating link buttons with page numbers
   const linkList = document.querySelector(".link-list");
   linkList.innerHTML = "";
   for (let i = 1; i <= num_Page_ButN; i++) {
     const button = document.createElement("button");
     let html = `<li>
          <button type="button">${i}</button>
        </li>`;
     //Appending linkList with the newly created buttons
     linkList.insertAdjacentHTML("beforeend", html);
   }
   //button for page 1 and assign the class 'active'
   const firstButton = document.querySelector("button");
   firstButton.className = "active";
 
   //removing the 'active' class 
   linkList.addEventListener("click", (e) => {
     if (e.target.tagName === "BUTTON") {
       const elementActive = document.querySelector(".active");
       elementActive.className = "";
       e.target.className = "active";
       //showPage function is passing in data and page number
       showPage(data, e.target.textContent);
     }
   });
 }
 
 // Call functions
 showPage(data, 1);
 addPagination(data);






