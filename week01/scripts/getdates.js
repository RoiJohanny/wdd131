// Get the current year
const currentYear = new Date().getFullYear();

// Get document last modified date/time
const lastModified = document.lastModified;

// Update footer paragraphs
const footerParagraphs = document.getElementById("footer").querySelectorAll("p");

footerParagraphs[0].textContent = `Copyright © ${currentYear}`;
footerParagraphs[1].textContent = `Last Modified: ${lastModified}`;
 