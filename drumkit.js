window.onload = function () {
  let cymbal = new Audio();
  let kick = new Audio();
  let hiHat = new Audio();
  let floorTom = new Audio();
  let midTom = new Audio();
  let highTom = new Audio();
  let snare = new Audio();

  document.body.onkeyup = function (e) {
    document.getElementById(e.key).style.backgroundColor = "gainsboro";
  };

  document.body.onkeydown = function (e) {
    document.getElementById(e.key).style.backgroundColor = "darkgray";
    if (e.key == "e" || e.key == "r") {
      document.getElementById("crash-ride").style.animation =
        "cymbal .1s linear 2 alternate";
      setTimeout(() => {
        document.getElementById("crash-ride").style.animation = "";
      }, 200);
      if (!cymbal.ended) {
        cymbal.load();
      }
      cymbal = document.querySelector(`audio[key="${e.key}"]`);
      cymbal.play();
    } else if (e.key == "v" || e.key == "b") {
      if (!kick.ended) {
        kick.load();
      }
      kick = document.querySelector(`audio[key="${e.key}"]`);
      kick.play();
    } else if (e.key == "i" || e.key == "k") {
      if (e.key == "k") {
        document.getElementById("hihat-top").style.animation =
          "hihat .1s linear 2 alternate";
        setTimeout(() => {
          document.getElementById("hihat-top").style.animation = "";
        }, 200);
      }
      if (!hiHat.ended) {
        hiHat.load();
      }
      hiHat = document.querySelector(`audio[key="${e.key}"]`);
      hiHat.play();
    } else if (e.key == "f") {
      if (!floorTom.ended) {
        floorTom.load();
      }
      floorTom = document.querySelector(`audio[key="${e.key}"]`);
      floorTom.play();
    } else if (e.key == "g") {
      if (!midTom.ended) {
        midTom.load();
      }
      midTom = document.querySelector(`audio[key="${e.key}"]`);
      midTom.play();
    } else if (e.key == "h") {
      if (!highTom.ended) {
        highTom.load();
      }
      highTom = document.querySelector(`audio[key="${e.key}"]`);
      highTom.play();
    } else if (e.key == "j") {
      if (!snare.ended) {
        snare.load();
      }
      snare = document.querySelector(`audio[key="${e.key}"]`);
      snare.play();
    }
  };
};
