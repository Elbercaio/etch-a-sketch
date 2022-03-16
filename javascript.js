function createGrid(size) {
  const grid = document.querySelector(".grid");
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.classList.add("cell");
      div.style = `height: ${60 / size}rem; width: ${
        60 / size
      }rem; background-color: black; opacity: 0;`;
      row.appendChild(div);
    }
    grid.appendChild(row);
  }

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", function (e) {
      const opacity = parseFloat(e.target.style.opacity);
      if (opacity < 1) {
        e.target.style.opacity = `${opacity + 0.1}`;
      }
    });
  });
}

createGrid(16);

const button = document.querySelector(".clear");

button.addEventListener("click", function (e) {
  let size = prompt("Please enter new size (max = 100):");

  if (size != null) {
    if (size > 100) {
      size = 100;
    }
    const grid = document.querySelector(".grid");
    grid.textContent = "";
    createGrid(size);
  }
});
