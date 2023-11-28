const submitAction = document.getElementById("formDataDiri");

submitAction.addEventListener("submit", function (event) {
  const inputNama = document.getElementById("inputNama").value;
  const inputDomisili = document.getElementById("inputDomisili").value;
  const hiddenMessage = `Halo, ${inputNama}... Apakah cuaca di ${inputDomisili} ???`;

  document.getElementById("messageAfterSubmit").innerHTML = hiddenMessage;
  event.preventDefault();
});
