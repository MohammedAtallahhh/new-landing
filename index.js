const header = document.querySelector(".main__header");

header.addEventListener("click", (e) => {
  const target = e.target.closest(".language") || e.target.closest(".country");
  if (!target) return;

  target.querySelector(".items").classList.toggle("active");
});
