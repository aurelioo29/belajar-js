const changeCaption = new Event("changeCaption");

window.addEventListener("load", function () {
  const tombol = document.getElementById("tombol");
  tombol.addEventListener("changeCaption", CustomEventHandler);
  tombol.addEventListener("click", function () {
    tombol.dispatchEvent(changeCaption);
  });
});

function CustomEventHandler(ev) {
  console.log("Event " + ev.type + " telah run");
  const caption = document.getElementById("caption");
  caption.innerText = "Anda telah hidupkan custom EVENT !!!";
}
