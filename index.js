const header = document.querySelector(".main__header");

const closeDropdown = () => {
  const active = document.querySelector(".dropdown .items.active");
  active && active.classList.remove("active");
};

header.addEventListener("click", (e) => {
  const target = e.target.closest(".dropdown");
  if (!target) return;

  const currentActive = document.querySelector(".dropdown .items.active");

  if (currentActive && currentActive !== target.querySelector(".items")) {
    currentActive.classList.remove("active");
  }

  target.querySelector(".items").classList.toggle("active");
});

document.addEventListener("click", (e) => {
  const target = e.target.closest(".dropdown");
  if (target) return;

  closeDropdown();
});

window.addEventListener("scroll", closeDropdown);
