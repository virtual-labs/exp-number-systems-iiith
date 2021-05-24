"use strict";

const addButton = document.getElementById("add-button");
const mulButton = document.getElementById("mul-button");

addButton.addEventListener("click", () => {
  const val1 = document.getElementById("in1").value;
  const val2 = document.getElementById("in2").value;
  const ans = document.getElementById("answer-container");
  ans.innerHTML = val1 + val2;
});
