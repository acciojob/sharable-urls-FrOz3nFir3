var submitButton = document.querySelector("[type='submit']");
var nameInput = document.querySelector("#name");
var yearInput = document.querySelector("#year");

var result = document.querySelector(".result");
submitButton.addEventListener("click", changeHeading);

function changeHeading(event) {
  event.preventDefault();
  var nameValue = nameInput.value.trim();
  var yearValue = yearInput.value.trim();

  if (nameValue && yearValue) {
    result.innerText = `?name=${nameValue}&year=${yearValue}`;
  } else if (nameValue) {
    result.innerText = `?name=${nameValue}`;
  } else if (yearValue) {
    result.innerText = `?year=${yearValue}`;
  }
}
