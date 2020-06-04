function loadSelector(selector, filename) {
  $(document).ready(function() {
    $(selector).load(filename);
  });
}