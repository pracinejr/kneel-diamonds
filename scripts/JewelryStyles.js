import { getStyles } from "./database.js";

const styles = getStyles();

document.addEventListener("change", (event) => {});

export const JewelryStyles = () => {
  let html = "<ul>";

  // Use .map() for converting objects to <li> elements
  const listItemsArray = styles.map((style) => {
    return `<li>
            <input type="radio" name="style" value="${style.style}" /> ${style.style}
        </li>`;
  });

  // Join all of the strings in the array into a single string
  html += listItemsArray.join(" ");

  html += "</ul>";
  return html;
};
