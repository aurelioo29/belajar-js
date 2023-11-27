function welcome() {
  alert("Sim salabim muncullah elemen-elemen HTML!");
  const contents = document.querySelector(".contents");

  contents.removeAttribute("hidden");
}

function increment() {
  document.getElementById("count").innerHTML++;

  if (document.getElementById("count").innerHTML == 7) {
    const hidden = document.createElement("h4");
    hidden.innerText = "Congrats !!! Ada reward tersembunyi";
    const image = document.createElement("img");
    image.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");
    const contents = document.querySelector(".contents");
    contents.appendChild(hidden).appendChild(image);
  }
}

// alert
// document.body.onload = welcome;
// onButtonClick increment
// document.getElementById("incrementButton").onclick = increment;

window.addEventListener("load", welcome);
document.getElementById("incrementButton").addEventListener("click", increment);
