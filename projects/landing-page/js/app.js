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

const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const addLink = (element, name, id) => {
  const link = document.createElement("a");
  link.classList.add("menu__link");
  link.innerHTML = name;
  link.addEventListener("click", () => scrollToSection(id));
  element.append(link);
};

const addListItem = (name, id) => {
  const listItem = document.createElement("li");
  navbarList.append(listItem);
  addLink(listItem, name, id);
};
const setActiveSection = (sectionIndex) => {
  if (sectionIndex >= 0) {
    sections.forEach((section, index) =>
      toggleActive(index, sectionIndex, section)
    );
  }
};
const setActiveSectionLink = (sectionIndex) => {
  if (sectionIndex >= 0) {
    navbarList.childNodes.forEach((list, index) =>
      toggleActive(index, sectionIndex, list.childNodes[0])
    );
  }
};
const getActiveSection = () => {
  let activeSectionIndex = -1;
  let highestCalc = 0;
  sections.forEach((section, index) => {
    const domRect = section.getBoundingClientRect();
    const domRectCalc = domRect.height / domRect.top;
    if (domRectCalc > highestCalc && domRectCalc >= 2) {
      highestCalc = domRectCalc;
      activeSectionIndex = index;
    }
  });
  setActiveSectionLink(activeSectionIndex);
  setActiveSection(activeSectionIndex);
};
const toggleActive = (index, primaryIndex, element) => {
  index === primaryIndex
    ? element.classList.toggle("active", true)
    : element.classList.toggle("active", false);
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
sections.forEach((section) => {
  addListItem(section.dataset.nav, section.id);
});
getActiveSection();
window.addEventListener("scroll", () => {
  getActiveSection();
});

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
const scrollToSection = (sectionId) => {
  const section = document.querySelector(`#${sectionId}`);
  section.scrollIntoView({ behavior: "smooth" });
};

// Set sections as active
