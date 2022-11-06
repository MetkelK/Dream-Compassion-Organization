let options = {
  //   root: null,
  //   rootMargin: "0px",
  threshold: 0.5,
};

const onIntersect = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      menu.style.padding = "0";
      menu.style.position = "sticky";
      menu.style.top = "0";
      leftNav.style.paddingLeft = "3rem";
      rightNav.style.paddingRight = "3rem";
    } else {
      menu.style.padding = "1rem 0";
      menu.style.position = "none";
      menu.style.top = "0";
      leftNav.style.paddingLeft = "2rem";
      rightNav.style.paddingRight = "2rem";
    }
  });
};

let menu = document.querySelector("nav");
let spacer = document.querySelector(".spacer");
let leftNav = document.querySelector(".left-nav");
let rightNav = document.querySelector(".right-nav");

let observer = new IntersectionObserver(onIntersect, options);

observer.observe(spacer);
