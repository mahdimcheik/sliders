let isDrawing = false;
let x = 0;

const myPics = document.getElementById("myPics");
const myMain = document.getElementById("main");
// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener("mousedown", (e) => {
  let offsets = myPics.getBoundingClientRect();
  let left = offsets.left;
  x = e.clientX - left;
  isDrawing = true;
});

window.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (isDrawing) {
    myPics.style.left = e.clientX - x + "px";
  }
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing) {
    isDrawing = false;
  }
});

myPics.addEventListener("touchstart", (e) => {
  let offsets = myPics.getBoundingClientRect();
  let left = offsets.left;
  x = e.touches[0].clientX - left;
  isDrawing = true;
});

myMain.addEventListener("touchmove", (e) => {
  e.preventDefault();
  if (isDrawing) {
    myPics.style.left = e.touches[0].clientX - x + "px";
  }
});

window.addEventListener("touchend", (e) => {
  if (isDrawing) {
    isDrawing = false;
  }
});
