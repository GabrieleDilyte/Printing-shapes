const allButtons = document.querySelectorAll("#shapes button");
const rows = 6;

function print(option) {
  switch (option) {
    case "triangle":
      for (let i = 1; i <= rows; i++) {
        document.querySelector("#output").innerHTML += "*".repeat(i) + "<br />";
      }
      break;
    /*for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= i; j++) {
          document.querySelector("#output").innerHTML += "*";
        }
        document.querySelector("#output").innerHTML += "<br />";
      }*/
    case "pyramid":
      for (let i = 1; i <= rows; i++) {
        document.querySelector("#output").innerHTML +=
          "&nbsp".repeat(rows - i) +
          ("*" + "&nbsp").repeat(i) +
          "&nbsp".repeat(rows - i) +
          "<br />";
      }
      break;
    case "reverse_pyramid":
      for (let i = rows; i >= 1; i--) {
        document.querySelector("#output").innerHTML +=
          "&nbsp".repeat(rows - i) +
          ("*" + "&nbsp").repeat(i) +
          "&nbsp".repeat(rows - i) +
          "<br />";
      }
      break;
    case "clear":
      document.querySelector("#output").innerHTML = null;
      break;
    default:
      break;
  }
}

allButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    print(event.target.id);
  });
});
