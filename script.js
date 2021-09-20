const allButtons = document.querySelectorAll("#shapes button");

function print(option, rows) {
  switch (option) {
    case "triangle":
      for (let i = 1; i <= rows; i++) {
        document.querySelector("#output").innerHTML += "*".repeat(i) + "<br />";
      }
      break;
    case "pyramid":
      for (let i = 1; i <= rows; i++) {
        document.querySelector("#output").innerHTML +=
          "&nbsp".repeat(rows - i) + ("*" + "&nbsp").repeat(i) + "<br />";
      }
      break;
    case "reverse_pyramid":
      for (let i = rows; i >= 1; i--) {
        document.querySelector("#output").innerHTML +=
          "&nbsp".repeat(rows - i) + ("*" + "&nbsp").repeat(i) + "<br />";
      }
      break;
    case "diamond":
      const topRows = Math.ceil(rows / 2);
      const bottomRows = topRows - 1;

      for (let i = 1; i <= topRows; i++) {
        document.querySelector("#output").innerHTML +=
          "&nbsp".repeat(topRows - i) + ("*" + "&nbsp").repeat(i) + "<br />";
      }
      for (let i = bottomRows; i >= 1; i--) {
        document.querySelector("#output").innerHTML +=
          "&nbsp".repeat(bottomRows - i + 1) +
          ("*" + "&nbsp").repeat(i) +
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
    const rows = Number(document.querySelector("#rowsNumber").value);
    print(event.target.id, rows);
  });
});
