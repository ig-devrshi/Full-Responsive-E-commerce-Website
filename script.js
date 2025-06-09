// Script for navigation bar

const bar = document.getElementById("bar");
const back = document.getElementById("back-bar");
const nav = document.getElementById("nav");
// const featureSection = document.getElementById("feature");
// const items = Array.from(featureSection.children);

// const mediaQuery = mediaQuery.matchMedia(("max-width : 799px"));

// console.log(items);

// if (mediaQuery.matches) {
//   items.forEach((item) => {
//     const clone = item.cloneNode(true);
//     featureSection.appendChild(clone);
//   });

//   const totalWidth = Array.from(document.querySelectorAll(".feature-box"))
//     .slice(0, 6)
//     .reduce((acc, el) => acc + el.offsetWidth + 20, 0); // Include gap 20px

//   gsap.to("#feature", {
//     x: `-${totalWidth}px`,
//     duration: 30,
//     repeat: -1,
//     ease: "linear",
//   });
// }

if (bar) {
  bar.addEventListener("click", () => {
    gsap.to("#nav", {
      right: 0,
    });
    // nav.classList.add("active");
  });
}

back.addEventListener("click", () => {
  gsap.to("#nav", {
    right: "-300px",
  });
});
