const header = document.querySelector(".main__header");
const offers = [...document.querySelectorAll("#offers .offer")];

// Header dropdowns
const closeDropdown = () => {
  const active = document.querySelector(".dropdown .items.active");
  active && active.classList.remove("active");
};

header.addEventListener("click", (e) => {
  const target =
    e.target.closest(".dropdown-btn") ||
    e.target.closest(".dropdown .items li");
  if (!target) return;

  const parent = target.closest(".dropdown");

  const currentActive = document.querySelector(".dropdown .items.active");

  if (currentActive && currentActive !== parent.querySelector(".items")) {
    currentActive.classList.remove("active");
  }

  parent.querySelector(".items").classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    closeDropdown();
  }
});

window.addEventListener("scroll", closeDropdown);

// Offers counters
const setupCounter = (target) => {
  // Seconds of 2 DAYS
  let timerValue = 2 * 24 * 60 * 60;

  const intervalId = setInterval(() => {
    // Calculate the days, hours, minutes, and seconds
    const days = Math.floor(timerValue / (24 * 3600));
    const hours = Math.floor((timerValue % (24 * 3600)) / 3600);
    const minutes = Math.floor((timerValue % 3600) / 60);
    const seconds = timerValue % 60;

    // Update the timer display for mobile and desktop
    target
      .querySelectorAll(".days")
      .forEach((e) => (e.textContent = days.toString().padStart(2, "0")));

    target
      .querySelectorAll(".hours")
      .forEach((e) => (e.textContent = hours.toString().padStart(2, "0")));

    target
      .querySelectorAll(".minutes")
      .forEach((e) => (e.textContent = minutes.toString().padStart(2, "0")));

    target
      .querySelectorAll(".seconds")
      .forEach((e) => (e.textContent = seconds.toString().padStart(2, "0")));

    // Decrement the timer value
    timerValue--;

    // Stop the timer when the value reaches 0
    if (timerValue < 0) {
      clearInterval(intervalId);
    }
  }, 1000);
};

offers.forEach((offer) => {
  setupCounter(offer);
});
