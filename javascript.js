"use strict";

const submit = document.querySelector(".submit");
const infoEmail = document.querySelector(".info-email");
const jobContent = document.querySelectorAll(".section-content");
const jobView = document.querySelectorAll(".job-view");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener("click", function () {
  if (regex.test(infoEmail.value)) {
    document.querySelector(".info").classList.add("hidden");
    document.querySelector(".info-1").classList.remove("hidden");
  } else {
    document.querySelector(".notice").textContent = "Email chưa chính xác";
  }
});

const viewMore = function () {
  jobContent.classList.remove("hidden");
  jobView.textContent = "⋄ View Less";
};

for (let i = 0; i < jobView.length; i++) {
  jobView[i].addEventListener("click", function () {
    if (jobView[i].textContent === "⋄ View More") {
      jobContent[i].classList.remove("hidden");
      jobView[i].textContent = "⋄ View Less";
    } else {
      jobContent[i].classList.add("hidden");
      jobView[i].textContent = "⋄ View More";
    }
  });
}
