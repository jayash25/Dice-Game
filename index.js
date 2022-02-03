document.getElementById("btn").onclick = function() {
  var n1 = Math.random();
  n1 = n1 * 6;
  n1 = Math.floor(n1) + 1;

  var randomimage1 = "images/dice" + n1 + ".png";

  document.querySelector(".img1").setAttribute("src", randomimage1);

  var n2 = Math.floor(Math.random() * 6) + 1;

  var randomimage2 = "images/dice" + n2 + ".png";

  document.querySelector(".img2").setAttribute("src", randomimage2);


  if (n1 > n2) {
    document.querySelector("h1").innerHTML = "🎉Player 1 wins";
  } else if (n1 < n2) {
    document.querySelector("h1").innerHTML = "Player 2 wins🎉";
  } else {
    document.querySelector("h1").innerHTML = "🎉Draw🎉";
  }
};
