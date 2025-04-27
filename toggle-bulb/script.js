let isBulbOn = false;

function toggleBulb() {
  const bulb = document.getElementById("bulb");
  bulb.src = isBulbOn
    ? "https://www.w3schools.com/js/pic_bulboff.gif"
    : "https://www.w3schools.com/js/pic_bulbon.gif";
  isBulbOn = !isBulbOn;
}
