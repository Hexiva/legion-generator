$(document).ready(function() {

  $('#but').click(function(){

    var charNum = Math.floor(Math.random() * 3);
    console.log(charNum)

    if (charNum === 0) {
      var characters = ["Oliver Bird", "Kerry Loudermilk", "Cary Loudermilk", "Amahl Farouk", "Amy Haller", "David Haller", "Lenny Busker", "Melanie Bird", "Sydney Barett", "Ptonomy Wallace", "Clark DeBussy",];

      var char1 = characters[Math.floor(Math.random() * characters.length)];
      $(".content").text(char1);
    }

    if (charNum === 1) {
      var characters = ["Oliver Bird", "Kerry Loudermilk", "Cary Loudermilk", "Amahl Farouk", "Amy Haller", "David Haller", "Lenny Busker", "Melanie Bird", "Sydney Barett", "Ptonomy Wallace", "Clark DeBussy",];
      var punctArray = ["/", " & ",]

      var char1 = characters[Math.floor(Math.random() * characters.length)];

      var index = characters.indexOf(char1);
      if (index > -1) {
        characters.splice(index, 1);
      }

      var char2 = characters[Math.floor(Math.random() * characters.length)];

      var punct = punctArray[Math.floor(Math.random() * punctArray.length)]

      $(".content").text(char1+punct+char2);
    }
    if (charNum === 2) {
      var characters = ["Oliver Bird", "Kerry Loudermilk", "Cary Loudermilk", "Amahl Farouk", "Amy Haller", "David Haller", "Lenny Busker", "Melanie Bird", "Sydney Barett", "Ptonomy Wallace", "Clark DeBussy",];
      var punctArray = ["/", " & ",]

      var char1 = characters[Math.floor(Math.random() * characters.length)];

      var index = characters.indexOf(char1);
      if (index > -1) {
        characters.splice(index, 1);
      }

      var char2 = characters[Math.floor(Math.random() * characters.length)];

      var index = characters.indexOf(char2);
      if (index > -1) {
        characters.splice(index, 1);
      }

      var char3 = characters[Math.floor(Math.random() * characters.length)];

      var punct = punctArray[Math.floor(Math.random() * punctArray.length)]
      var punct2 = punctArray[Math.floor(Math.random() * punctArray.length)]

      $(".content").text(char1+punct+char2+punct2+char3);
    }

    var prompts = ["la Desole", "the Choke", "the astral plane", "hope","despair", "summer", "winter", "fall", "sunset", "nightmares", "lies", "time travel", "telepathy", "jealousy", "suspicion", "language", "memories", "bodies", "humanity", "hurt/comfort", "angst", "dreams", "music", "loneliness",]
    var prompt = prompts[Math.floor(Math.random() * prompts.length)];
    $(".prompt").text(prompt);



    $("#story").show();

    event.preventDefault();
  })



});
