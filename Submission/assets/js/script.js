let button = document.getElementById("go-to-top");

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

window.onscroll = () => {
  scrollFunction();
};

const goToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
