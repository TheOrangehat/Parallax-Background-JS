const container = document.getElementById("parallax-container");

const Bottomlayer = document.getElementById("Bottomlayer");
const Middlelayer = document.getElementById("Middlelayer");
const Toplayer = document.getElementById("Toplayer");

container.addEventListener("mousemove", function(event) {
  const mousex = event.clientX - container.offsetWidth / 2;
  const mousey = event.clientY - container.offsetHeight / 2;

  Bottomlayer.style.transform = `translate(${mousex / 10}px, ${mousey / 10}px)`;
  Middlelayer.style.transform = `translate(${mousex / 5}px, ${mousey / 5}px)`;
//   Toplayer.style.transform = `translate(${mousex / 3}px, ${mousey / 3}px)`;
});
