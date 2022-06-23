"use strict";
//модальное окно///
let telNumber = document.querySelector(".contact__tell");
let telNumberMobileSize = document.querySelector(".mobile_tel"); //div  с телефоном
telNumber.addEventListener("click", openModalBlock);
telNumberMobileSize.addEventListener("click", openModalBlock);

function openModalBlock(e) {
  document.querySelector(".modal").style.display = "block";
  e.stopPropagation();
}

let closeModal = document.querySelector(".close"); //крестик на модальном окне
closeModal.addEventListener("click", closeModalBlock2);

function closeModalBlock2(e) {
  ///закрываем модальное окно
  document.querySelector(".modal").style.display = "none";
  e.stopPropagation();
}

////////////*пульсирующая кнопка///////////
let pulseBtn = document.querySelector(".pulse-button");
let blockDescription = document.querySelector(".descript");

pulseBtn.addEventListener("click", openInfoBlock);

function openInfoBlock(e) {
  blockDescription.classList.toggle("descriptActive");
  e.stopPropagation();
}

/////****АДАПТИВНОЕ МЕНЮ*********////////

let wrapperMenu = document.querySelector(".wrapper__main"); //<menu>
let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", show_menu);

function show_menu() {
  if (!hamburger.classList.contains("is-active")) {
    hamburger.classList.toggle("is-active"); //добавляем активный класс <ul> и гамбургеру
    wrapperMenu.classList.toggle("is-active");
    setTimeout(() => {
      document.body.style.background = "#EDF2F5";
    }, 1000);
  } else {
    hamburger.classList.toggle("is-active"); //добавляем активный класс <ul> и гамбургеру
    wrapperMenu.classList.toggle("is-active");
    document.body.style.background = "";
  }
}

/*Телефонная маска, валидация номера и чекбокса*/

const input = document.querySelector("#organization_phone"); //ввод номера

let arrValidat = [];
input.addEventListener("input", function () {
  let x = input.value;
  x = x.replace(/^\+7/, "");
  x = x.replace(/\D/g, "").match(/(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,2})/);
  x = !x[2]
    ? x[1]
    : x[1] + " " + x[2] + (x[3] ? `-${x[3]}` : "") + (x[4] ? `-${x[4]}` : "");
  x = x.startsWith("+7 ") ? x : "+7 " + x;
  input.value = x;
  arrValidat.push(x);
});

const phonSubmit = document.querySelector(".form__phon_button"); //кнопка отправки формы
const checkboxValue = document.querySelector(".form__agreement_checkbox");
const errorMessage = document.querySelector(".error");
const errorBtn = document.querySelector(".button__error");

phonSubmit.onclick = function (e) {
  if (
    checkboxValue.checked &&
    arrValidat[arrValidat.length - 1].length === 15
  ) {
    alert("Спасибо, ваша заявка принята");
  } else {
    e.preventDefault();
    errorMessage.style.display = "block";
  }
};
errorBtn.onclick = function (e) {
  errorMessage.style.display = "none";
  e.stopPropagation();
};
