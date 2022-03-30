$(document).ready(function () {
  var year = new Date().getFullYear() - 2015;
  var word =
    'A passionate Software Engineer with ' +
    year +
    '+ years of experience in a Japanese Company';
  $('#introduce').text(word)
});
