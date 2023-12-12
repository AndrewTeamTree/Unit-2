
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
          <button type="button"><img src="img/icn-search.svg" 
          alt="Search icon"></button></label>`;
      header.insertAdjacentHTML('beforeend', searchHTML);


const authorSearch = document.getElementById('search');
      authorSearch.addEventListener('input', e => {
  let currentValue = e.target.value.trim().toLowerCase();
  let authors = document.querySelectorAll('h3');
  let filteredAuthors = data.filter(student => {
const fullName = `${student.name.first} ${student.name.last}`.toLowerCase();
return fullName.includes(currentValue)
});
      authors.forEach(author => {
  if (author.textContent.toLowerCase().includes(currentValue)) {
      author.parentNode.parentNode.style.display = 'block';
      document.querySelector('.link-list').style.visibility = 'hidden';
      document.querySelector('.link-list').style.display = 'none';
      a.textContent || a.innerText;
       txtValue.toUpperCase().indexOf(filter) > -1; 
      
  } else {
    author.parentNode.parentNode.style.display = 'none';
    document.querySelector('.link-list').style.visibility = 'visible';
    document.querySelector('.link-list').style.display = 'block';
    linkList.insertAdjacentHTML("beforeend", html); 
    a.textContent || a.innerText;
    txtValue.toUpperCase().indexOf(filter) > -1; 
  }
    });

// Update pagination buttons based on search results
  showPage(filteredAuthors, 1);
  addPagination(filteredAuthors);

// Check if the search input is cleared
  if (currentValue === '') {

  location.reload()
  }
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

const button = document.createElement("button");

function addPagination(list) {
   const num_Page_ButN = Math.ceil(list.length / 9);
 
//creating link buttons with page numbers
   const linkList = document.querySelector(".link-list");
   linkList.innerHTML = "";
   
// Add a page button for each page
  for (let i = 5; i <= num_Page_ButN; i++) {
    addPageButton(linkList, i);
  }


   
 
 //removing the 'active' class 
    linkList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const elementActive = document.querySelector(".active");
        if (elementActive) {
        elementActive.className = "";
      }
        e.target.className = "active";
        //showPage function is passing in data and page number
        showPage(list, e.target.textContent);
      }
    });
  
  

    
 // Helper function to add a page button
function addPageButton(linkList, pageNumber) {
  

  let html = `<li>
            <button type="button" class="active">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
            <button type="button">5</button>
          </li>`;

    for (var i = 0; i < i.length; i++) {
      pageNumber[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
  
// Appending linkList with the newly created button
  linkList.insertAdjacentHTML("beforeend", html);
  }
}
// Call functions
showPage(data,  1);
addPagination(data);
 
