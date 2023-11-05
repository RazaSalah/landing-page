/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

// nav bar global variable
const navList = document.querySelector("#navbar__list");
const section = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

const createNav = () => {
  let navElement = "";

  section.forEach((element) => {
    const sectionID = element.id;
    const sectionData = element.dataset.nav;

    navElement += `<li class="navbar__menu " ><a class="menu__link " link="#${sectionID}" data-nav="${sectionID}">${sectionData}</a></li>`;
  });
  navList.innerHTML = navElement;
  console.log(navList);
};
createNav();

// Add class 'active' to section when near top of viewport
// getting the position and the size of the section

const position = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

const removeActive = (section) => {
  section.classList.remove("your-active-class");
};

const addActive = (condition, section) => {
  if (condition) {
    section.classList.add("your-active-class");
  }
};

const activiteSection = () => {
  section.forEach((element) => {
    const elementoffset = position(element);

    inviewport = () => elementoffset < 250 && elementoffset >= -250;

    removeActive(element);
    addActive(inviewport(), element);
  });
};

window.addEventListener("scroll", activiteSection);
// Scroll to anchor ID using scrollTO event


navList.addEventListener('click', (event) =>{
  
  event.preventDefault();
 if(event.target.dataset.nav){

  document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({behavior:"smooth"})
  // setTimeout(() => {
  //   location.hash = `${event.target.dataset.nav}`;
  // }, 200);
 }
})

// const SectionScroll = () => {
//   const links = document.querySelectorAll('a.menu__link ');
//   console.log(links)
//   links.forEach(element => {
//     // console.log(element)
//     element.addEventListener('click',(e) => {

//       e.preventDefault();

//       for( i=0 ; i<section ; i++){

//         section[i].addEventListener("click",scrollTo(links));

//       }
    
//     }
//     )

//   })
// }

// SectionScroll();
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
