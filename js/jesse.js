const headerTag = document.querySelector("header");
const blobGroups = document.querySelectorAll("g.blob");
const sectionTags = document.querySelectorAll("section");
const arrow = document.querySelector(".arrow");

const easing = function(x) {
  return x * x * x;
};

const fadeHeader = function() {
  const pixels = window.pageYOffset;

  headerTag.style.opacity = 1 - easing(pixels / 500);
};

const fadeArrow = function() {
  const pixels = window.pageYOffset;

  arrow.style.opacity = 1 - easing(pixels / 300);
};

const checkBlobs = function() {
  const pixels = window.pageYOffset;

  blobGroups.forEach((blob, index) => {
    const currentSection = sectionTags[index];

    if (pixels > currentSection.offsetTop - 300) {
      blob.classList.add("in-view");
    } else {
      blob.classList.remove("in-view");
    }
  });
};

window.addEventListener("scroll", function() {
  fadeHeader();
  fadeArrow();
  checkBlobs();
});
