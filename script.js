document.documentElement.classList.add("js");

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

for (const element of document.querySelectorAll(".reveal")) {
  observer.observe(element);
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
