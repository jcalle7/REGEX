const palabras = ["loco", "oso", "bobo", "hora", "pared", "rosa"];

const palabrasConO = palabras.filter(palabra => {
  return palabra.includes("o");
});

alert(palabrasConO);