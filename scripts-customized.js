$(document).ready(function() {
  $("form").submit(function(event) {
    var char1 = $("input#char1").val();
    var gender1 = $("input[name='gender']:checked").val();
    var gender2 = $("input[name='gender2']:checked").val();
    var char2 = $("input#char2").val();

    var prX1 = "xie";
    var prX2 = "xir";
    var prX3 = "xir";

    var prY1 = "xie";
    var prY2 = "xir";
    var prY3 = "xir";

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

        var promptArray = [char1 + " is thrown into an alternate universe where " + prX1 + " is in a relationship with " + char2 , char1 + " discovers that " + char2 + " is " + prX3 + " soulmate", char1 + " is hit with an aphrodisiac, and " + char2 + " must help " + prX2, char1 + " and " + char2 + " must pretend to be in a relationship", char1 + " falls in love with " + char2 + ", and " + char2 + " rejects " + prX2, char1 + " has to travel back in time to stop " + char2 + " from destroying the world", char1 + " and " + char2 + " are trapped in the post-apocalyptic future together",char1 + " and " + char2 + " are trapped in the Astral Plane together", char1 + " is trapped in the Maze created by the Monk's plague, and " + char2 + " has to rescue " + prX2, char1 + " swaps bodies with " + char2, char1 + " and " + char2 + " get stuck in the same body", char1 + " attends " + char2 + "'s funeral", char1 + " and " + char2 + " make contact with a mirror universe",char1 + " loses all memories of " + prX3 + " life since the beginning of the show", char2 + " loses all memories of " + prY3 + " life since "+ prY1 + " was young", char1 + " is reverted to the body of a child", char1+" and " + char2 + " are trapped in a constantly repeating time loop", char1+ " is pulled into another universe by an alternate version of " + char2+", who tells " + prX2+" that " + prX1 + " is dead in this universe", char1 + " turns " + char2 + " in to be arrested by Division Three",char1 + " and " + char2 + " wake up in bed together, with little to no memory of the night before", char1 +" can't sleep, and finds " + prX2 + "self chatting with " + char2 + ", who also can't sleep", char1 + " wakes up from a terrible nightmare, and discusses it with " + char2, char1 + " finds " + char2 + " unconscious, and when " + prY1 + " wakes up, " + char1 + " discovers that " + prY1 + " does not remember anything about " + prY3 + " life", char1 + " and " + char2 + " are arranged to be married", "In an alternate universe, " + char1 + " has " + char2 + "'s powers, and vice versa", char1 + " swaps powers with " + char2, char1 + " is a vampire, and " + char2 + " is a vampire hunter", char1 + " is captured and tortured by " + prX3 + " enemies, and " + char2 + " rescues " + prX2, ];
    var prompt = promptArray[Math.floor(Math.random() * promptArray.length)];
    $(".content").text(prompt);


    $("#story").show();


    event.preventDefault();
  })



});
