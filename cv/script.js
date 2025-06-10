$(document).ready(function () {
  var year = new Date().getFullYear() - 2015;
  var word =
    "・I have over " +
    year +
    " years experience in developing, testing software and creating program document for Japanese Company.\n" +
    "・I'm a fast learner as I always find interesting in learning new things.\n" +
    "・I like to develop simple utilities to solve computer problem.\n" +
    "・In my free time, I watch and translate science videos, both to learn and to improve myself.";
  $("#introduce").text(word);
});
