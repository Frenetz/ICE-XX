const button = document.getElementById("myButton");
const div = document.getElementById("myDiv");
const div2 = document.getElementById("myDiv2");

button.addEventListener("click", function (event) {
  if (window.innerWidth >= 825) {
    event.stopPropagation();
    div.classList.toggle("main__form-active");
    if (div.style.display === "flex") {
      div.style.display = "none";
    } else {
      div.style.display = "flex";
    }
  } else {
    event.stopPropagation();
    if (div2.style.display === "flex") {
      div2.style.display = "none";
    } else {
      div2.style.display = "flex";
    }
  }
});

document.addEventListener("click", function (event) {
  if (window.innerWidth >= 825) {
    if (div.style.display === "none") {
    } else {
      const targetElement = event.target;
      if (!div.contains(targetElement)) {
        div.style.display = "none";
        div.classList.toggle("main__form-active");
      }
    }
  } else {
    if (div2.style.display === "none") {
    } else {
      const targetElement = event.target;
      if (!div2.contains(targetElement)) {
        div2.style.display = "none";
      }
    }
  }
});
