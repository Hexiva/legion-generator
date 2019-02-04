$(document).ready(function() {
  $("form").submit(function(event) {
      var characters = ["Oliver Bird", "Kerry Loudermilk", "Cary Loudermilk", "Amahl Farouk", "Amy Haller", "David Haller", "Lenny Busker", "Melanie Bird", "Sydney Barett", "Ptonomy Wallace", "Clark DeBussy","Admiral Fukuyama",];

    var char1 = characters[Math.floor(Math.random() * characters.length)];

    var index = characters.indexOf(char1);
    if (index > -1) {
      characters.splice(index, 1);
    }

    var char2 = characters[Math.floor(Math.random() * characters.length)];

    var gender1 = "ERROR";

    if (char1 === "Melanie Bird") {
      gender1 = "female";
    } else if (char1 === "Kerry Loudermilk") {
          gender1 = "female";
    } else if (char1 === "Cary Loudermilk") {
          gender1 = "male";
    } else if (char1 === "Amahl Farouk") {
          gender1 = "male";
    } else if (char1 === "Amy Haller") {
          gender1 = "female";
    } else if (char1 === "David Haller") {
          gender1 = "male";
    } else if (char1 === "Lenny Busker") {
          gender1 = "female";
    } else if (char1 === "Oliver Bird") {
          gender1 = "male";
    } else if (char1 === "Sydney Barett") {
          gender1 = "female";
    } else if (char1 === "Ptonomy Wallace") {
          gender1 = "male";
    } else if (char1 === "Clark DeBussy") {
          gender1 = "male";
    } else if (char1 === "Admiral Fukuyama") {
          gender1 = "other";
            }

            if (char2 === "Melanie Bird") {
              gender2 = "female";
            } else if (char2 === "Kerry Loudermilk") {
                  gender2 = "female";
            } else if (char2 === "Cary Loudermilk") {
                  gender2 = "male";
            } else if (char2 === "Amahl Farouk") {
                  gender2 = "male";
            } else if (char2 === "Amy Haller") {
                  gender2 = "female";
            } else if (char2 === "David Haller") {
                  gender2 = "male";
            } else if (char2 === "Lenny Busker") {
                  gender2 = "female";
            } else if (char2 === "Oliver Bird") {
                  gender2 = "male";
            } else if (char2 === "Sydney Barett") {
                  gender2 = "female";
            } else if (char2 === "Ptonomy Wallace") {
                  gender2 = "male";
            } else if (char2 === "Clark DeBussy") {
                  gender2 = "male";
            } else if (char2 === "Admiral Fukuyama") {
                  gender2 = "other";
                    }


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
