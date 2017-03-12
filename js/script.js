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

$(function() {
  $('.smooth').bind('click',function(event){
    var $anchor = $(this);

      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        event.preventDefault();
  });
});

function call() {
  var msg   = $('#formx').serialize();
    $.ajax({
      type: 'POST',
      url: 'php/send.php',
      data: msg,
      success: function(data) {
        $('#results').html(data);
      },
      error:  function(xhr, str){
      alert('Возникла ошибка: ' + xhr.responseCode);
      }
  });
}

function call1() {
  var msg1   = $('#formx1').serialize();
      $.ajax({
        type: 'POST',
        url: 'php/send1.php',
        data: msg1,
        success: function(data) {
          $('#results1').html(data);
        },
        error:  function(xhr, str){
        alert('Возникла ошибка: ' + xhr.responseCode);
        }
      });
}
