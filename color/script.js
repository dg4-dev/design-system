function generateRGBValues() {
  const values = [];
  const digits = ["0", "4", "d"];
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      values.push(digits[i] + digits[j]);
    }
  }
  return values;
}

function colorDistance(color1, color2) {
  const dr = color1.r - color2.r;
  const dg = color1.g - color2.g;
  const db = color1.b - color2.b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

function nearestNeighborSort(colors) {
  if (colors.length === 0) return [];

  const sorted = [];
  const remaining = [...colors];

  const startColorIndex = remaining.findIndex((c) => c.hex === "#00d4d4");
  const startColor = startColorIndex >= 0 ? remaining.splice(startColorIndex, 1)[0] : remaining.shift();
  sorted.push(startColor);

  while (remaining.length > 0) {
    const current = sorted[sorted.length - 1];
    let nearestIndex = 0;
    let nearestDistance = Infinity;

    for (let i = 0; i < remaining.length; i++) {
      const distance = colorDistance(current, remaining[i]);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = i;
      }
    }

    sorted.push(remaining.splice(nearestIndex, 1)[0]);
  }

  return sorted;
}

function generateAndSortColors() {
  const rgbValues = generateRGBValues();
  const colors = [];

  rgbValues.forEach((r) => {
    rgbValues.forEach((g) => {
      rgbValues.forEach((b) => {
        const hexColor = `#${r}${g}${b}`;
        const rDec = parseInt(r, 16);
        const gDec = parseInt(g, 16);
        const bDec = parseInt(b, 16);
        colors.push({
          hex: hexColor,
          r: rDec,
          g: gDec,
          b: bDec,
        });
      });
    });
  });

  return nearestNeighborSort(colors);
}

const container = document.querySelector(".container");
const sortedColors = generateAndSortColors();
let isFilteredGEqualsB = false;

function renderColors() {
  container.innerHTML = "";

  let colorsToDisplay;
  if (isFilteredGEqualsB) {
    const filteredColors = sortedColors.filter((color) => color.r <= color.g && color.g === color.b);
    colorsToDisplay = nearestNeighborSort(filteredColors);
  } else {
    colorsToDisplay = sortedColors;
  }

  console.log(colorsToDisplay);

  const gridSize = Math.ceil(Math.sqrt(colorsToDisplay.length));
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  colorsToDisplay.forEach((color) => {
    const rect = document.createElement("div");
    rect.classList.add("color-rect");
    rect.style.backgroundColor = color.hex;
    container.appendChild(rect);
  });
}

container.addEventListener("click", () => {
  isFilteredGEqualsB = !isFilteredGEqualsB;
  renderColors();
});

renderColors();
