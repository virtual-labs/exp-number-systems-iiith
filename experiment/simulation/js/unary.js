"use strict";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const addButton = document.getElementById("add-button");
const mulButton = document.getElementById("mul-button");

addButton.addEventListener("click", () => {
  const val1 = document.getElementById("in1").value;
  const val2 = document.getElementById("in2").value;
  const ans = document.getElementById("answer-container");
  ans.innerHTML = val1 + val2;
});

mulButton.addEventListener("click", async () => {
  const val1 = document.getElementById("in1").value;
  const val2 = document.getElementById("in2").value;
  let length = val2.length;
  const ans = document.getElementById("answer-container");
  ans.innerHTML = val1;
  while (length - 1) {
    await sleep(1);
    ans.innerHTML += val1;
    length--;
  }
});
