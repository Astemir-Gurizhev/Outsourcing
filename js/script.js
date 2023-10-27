document.addEventListener("click", function (event) {
  if (event.target.closest(".header__burger")) {
    document.querySelector(".header__menu").classList.toggle("header__menu-active");
    document.querySelector(".header__burger").classList.toggle("active");
    $("body").toggleClass("lock");
  }
  if (event.target.closest(".link")) {
      document.querySelector(".header__menu").classList.remove("header__menu-active");
      document.querySelector(".header__burger").classList.remove("active");
      document.querySelector("body").classList.remove("lock");
  }
})

const form = document.getElementById("form1");
const inputEmail = document.querySelector(".input-email");
const inputMessage = document.querySelector(".input-textarea");
const inputEmailWrapper = document.querySelector(".input-wrapper-email");
const inputMessageWrapper = document.querySelector(".input-wrapper-textarea");
const btn = document.querySelector(".contact__form-btn");

btn.addEventListener("click", formSend);

function formSend(event) {
  //Border или Color по умолчанию, если введено правильно
  if (emailTest(inputEmail)) {
    inputEmailWrapper.style.border = "1px solid #d2d2d2";
  }
  //Валидация
  if (emailTest(inputEmail) && !(inputEmail.value === "")) {
  } else if (!emailTest(inputEmail) || inputEmail.value === "") {
    inputEmailWrapper.style.border = "1px solid #DF2030";
    event.preventDefault();
  }
  if (inputMessage.value === "") {
    inputMessageWrapper.style.border = "1px solid #DF2030";
    event.preventDefault();
  } else {
    inputMessageWrapper.style.border = "1px solid #d2d2d2";
  }
}

function emailTest(input) {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    input.value
  );
}

function myFunction() {
  if ($(window).width() < 965) {
    document.querySelector(".subnav").onclick = function (event) {
		$(".subnav").toggleClass("active")
      $(".subnav-menu").toggleClass("active")
    }
  }
}

myFunction();

$(window).resize(function () {
  myFunction();
});
