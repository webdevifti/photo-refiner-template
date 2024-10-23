// Header off canvas menu for mobile devices
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".pull-bs-canvas-right")
    .addEventListener("click", function () {
      const body = document.body;
      const canvasRight = document.querySelector(".bs-canvas-right");
      const overlay = document.createElement("div");
      overlay.className = "bs-canvas-overlay";
      body.prepend(overlay);
      canvasRight.classList.add("mr-0");
      return false;
    });
  document.addEventListener("click", function (event) {
    const target = event.target;
    const canvasRight = document.querySelector(".bs-canvas-right");
    const overlay = document.querySelector(".bs-canvas-overlay");
    if (
      target.classList.contains("bs-canvas-close") ||
      target.closest(".bs-canvas-close") ||
      target.classList.contains("bs-canvas-overlay")
    ) {
      canvasRight.classList.remove("mr-0");
      if (overlay) {
        overlay.remove();
      }
      return false;
    }
  });
});
