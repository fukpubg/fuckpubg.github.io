const bannerBtn = document.querySelector(".banner-btn");
const closeBtn = document.querySelector(".x-btn");

bannerBtn.addEventListener("click", () => {
  const banner = document.querySelector(".banner");
  const form = document.querySelector(".form-container");
  const bgContainer = document.querySelector(".container");

  banner.style.display = "none";
  form.style.cssText = "opacity: 1; visibility: visible";
  bgContainer.style.background = "#";
});
closeBtn.addEventListener("click", () => {
  const banner = document.querySelector(".banner");
  const form = document.querySelector(".form-container");
  const bgContainer = document.querySelector(".container");

  banner.style.display = "flex";
  form.style.cssText = "opacity: 0; visibility: hidden";
  bgContainer.style.cssText =
    "background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);"
});
