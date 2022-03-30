$(document).ready(function () {
  var year = new Date().getFullYear() - 2015;
  var word =
    "Hi, I'm Vinh. I've worked in software engineer with over " +
    year +
    " experience developing, testing and creating program document for Japanese Company." +
    "I am a fast learner as I always find interesting in learning new things." +
    "In my free time, I like to watch science video both to learn and to improve my self.";
  $("#introduce").text(word);
});
