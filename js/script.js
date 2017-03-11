var callback = document.querySelector(".callback");
var popup = document.querySelector(".modal-window");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".close-btn");
var username = popup.querySelector("[name=username]");

callback.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-window-open");
  overlay.classList.add("modal-overlay-open");
  username.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-window-open");
  overlay.classList.remove("modal-overlay-open");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-window-open")) {
      popup.classList.remove("modal-window-open");
      overlay.classList.remove("modal-overlay-open");
    }
  }
});

overlay.addEventListener("click", function(event) {
  popup.classList.remove("modal-window-open");
  overlay.classList.remove("modal-overlay-open");
});
