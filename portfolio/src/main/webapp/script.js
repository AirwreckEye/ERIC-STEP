/**
 * Loads a selector from another HTML file so that it can be used.
 *
 * @param { string } selector - Selector refers to the HTML element.
 * @param { string } filename - Filename of HTML file that is used to load the
 *     element
 *
 * @example loadSelector("#social", "socials.html")
 */
function loadHTML(selector, filename) {
  $(document).ready(function () {
    $(selector).load(filename);
  });
}
