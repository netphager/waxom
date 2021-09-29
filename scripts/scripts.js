(function () {
  const navigationToggle = () => {
    let navigation = document.querySelector(".navigation");
    navigation.classList.toggle("active");
  };

  document
    .querySelector(".navigation-toggle")
    .addEventListener("click", navigationToggle);

  const navigationLinks = document.querySelectorAll(".navigation ul a");
  navigationLinks.forEach((navLink) => {
    navLink.addEventListener("click", navigationToggle);
  });
})();
