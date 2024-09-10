const form = document.querySelector("article section form");
const email_input = document.getElementById("email");
const submit_btn = document.getElementById("submit");

const pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", function (event) {
  if (!email_input.value.match(pattern)) {
    event.preventDefault();
    email_input.classList.add("invalid");
    document
      .querySelector("article section form label")
      .classList.remove("hidden");
  } else {
    email_input.classList.remove("invalid");
    document
      .querySelector("article section form label")
      .classList.add("hidden");
  }
});
