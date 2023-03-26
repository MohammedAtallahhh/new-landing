const header = document.querySelector(".main__header");

const closeDropdown = () => {
  const active = document.querySelector(".dropdown .items.active");
  active && active.classList.remove("active");
};

header.addEventListener("click", (e) => {
  const target = e.target.closest(".dropdown-btn");
  if (!target) return;

  const parent = target.parentElement;

  const currentActive = document.querySelector(".dropdown .items.active");

  if (currentActive && currentActive !== parent.querySelector(".items")) {
    currentActive.classList.remove("active");
  }

  parent.querySelector(".items").classList.toggle("active");
});

document.addEventListener("click", (e) => {
  const target =
    e.target.closest(".dropdown-btn") ||
    !e.target.closest(".dropdown .items li");
  if (target) return;

  closeDropdown();
});

window.addEventListener("scroll", closeDropdown);
