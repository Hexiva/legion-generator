$(document).ready(function() {
  $("form").submit(function(event) {
    var char1 = $("input#char1").val();
    var gender1 = $("input[name='gender']:checked").val();
    var gender2 = $("input[name='gender2']:checked").val();
    var char2 = $("input#char2").val();

    var prX1 = "they";
    var prX2 = "them";
    var prX3 = "their";

    var prY1 = "they";
    var prY2 = "them";
    var prY3 = "their";

    if (gender1==="male") {
      var prX1 = "he";
      var prX2 = "him";
      var prX3 = "his";
    } else if (gender1==="female") {
      var prX1 = "she";
      var prX2 = "her";
      var prX3 = "her";
    }
    if (gender2==="male") {
      var prY1 = "he";
      var prY2 = "him";
      var prY3 = "his";
    } else if (gender2==="female") {
      var prY1 = "she";
      var prY2 = "her";
      var prY3 = "her";
    }

    var promptArray = [char1 + " and " + char2 + " are trapped in the post-apocalyptic future together",char1 + " and " + char2 + " are trapped in the Astral Plane together", char1 + " is trapped in the Maze created by the Monk's plague, and " + char2 + " has to rescue " + prX2, char1 + " is thrown into an alternate universe where " + prX1 + " is in a relationship with " + char2 , char1 + " discovers that " + char2 + " is " + prX3 + " soulmate"]
    var prompt = promptArray[Math.floor(Math.random() * promptArray.length)];
    $(".content").text(prompt);


    $("#story").show();


    event.preventDefault();
  })



});
