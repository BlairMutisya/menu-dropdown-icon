document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  menuButton.addEventListener("click", () => {
    // Toggle the "show" class to trigger the slide-in animation
    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
      setTimeout(() => {
        dropdownMenu.style.display = "none";
      }, 300); // Match the duration of the transition
    } else {
      dropdownMenu.style.display = "block";
      setTimeout(() => {
        dropdownMenu.classList.add("show");
      }, 10); // Slight delay to trigger the transition
    }
  });
});
