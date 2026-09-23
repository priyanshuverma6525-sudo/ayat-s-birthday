const screens = document.querySelectorAll(".screen");
const progress = document.querySelectorAll(".progress span");
const nextButtons = document.querySelectorAll(".next-btn");
const restartButton = document.querySelector(".restart-btn");

let currentScreen = 0;

function showScreen(index) {

  screens.forEach((screen, i) => {
    screen.classList.toggle("active", i === index);
  });

  progress.forEach((bar, i) => {
    bar.classList.toggle("active", i <= index);
  });

  currentScreen = index;
}

nextButtons.forEach((button) => {

  button.addEventListener("click", () => {

    if (currentScreen < screens.length - 1) {
      showScreen(currentScreen + 1);
    }

  });

});

restartButton.addEventListener("click", () => {
  showScreen(0);
});
