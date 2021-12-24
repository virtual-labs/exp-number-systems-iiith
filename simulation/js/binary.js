"use strict";

const sleep = (s) => {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
};

const addButton = document.getElementById("add-button");
const mulButton = document.getElementById("mul-button");
const ans = document.getElementById("answer-container");

const clear_answer_container = () => {
  ans.style.display = "none";
  for (let i = 1; i < 6; i += 2) {
    if (ans.childNodes[1].childNodes[i]) {
      ans.childNodes[1].childNodes[i].innerHTML = "";
    }
  }
};

const populate_questions = (val1, val2, length) => {
  // Inserting value 1
  let parent = document.getElementById("val-1");
  val1 = val1.split("");
  console.log(val1);
  for (let i = 0; i < length; i++) {
    let tempDiv = document.createElement("div");
    tempDiv.id = "v1" + (length - i).toString();
    let lastEl = val1.pop();
    tempDiv.innerHTML = lastEl ? lastEl : 0;
    tempDiv.classList.add("custom-cell");
    parent.prepend(tempDiv);
  }
  // Inserting value 2
  parent = document.getElementById("val-2");
  val2 = val2.split("");
  for (let i = 0; i < length; i++) {
    let tempDiv = document.createElement("div");
    tempDiv.id = "v2" + (length - i).toString();
    let lastEl = val2.pop();
    tempDiv.innerHTML = lastEl ? lastEl : 0;
    tempDiv.classList.add("custom-cell");
    parent.prepend(tempDiv);
  }
};

const populate_answer_container = (length) => {
  parent = document.getElementById("answer");
  for (let i = 0; i < length; i++) {
    let tempDiv = document.createElement("div");
    tempDiv.classList.add("custom-cell");
    tempDiv.id = "ans" + (length - i).toString();
    tempDiv.innerHTML = ".";
    parent.prepend(tempDiv);
  }
};

const answer_question = async (length) => {
  const remainderContainer = document.getElementById("rem-container");
  const operationContainer = document.getElementById("op-container");
  let remainder = 0;
  for (let i = length; i > 0; i--) {
    let v1Div = document.getElementById("v1" + i.toString());
    let v2Div = document.getElementById("v2" + i.toString());
    let aDiv = document.getElementById("ans" + i.toString());
    let v1 = parseInt(v1Div.innerHTML);
    let v2 = parseInt(v2Div.innerHTML);
    v1Div.style.backgroundColor = "#BDE4A8";
    operationContainer.innerHTML =
      "Operation: " + remainder.toString() + "+" + v1.toString();
    await sleep(0.5);
    v1Div.style.backgroundColor = "transparent";
    v2Div.style.backgroundColor = "#BDE4A8";
    operationContainer.innerHTML += "+" + v2.toString();
    await sleep(0.5);
    let tSum = v1 + v2 + remainder;
    aDiv.innerHTML = tSum > 1 ? (tSum === 3 ? 1 : 0) : tSum;
    remainder = tSum > 1 ? 1 : 0;
    v2Div.style.backgroundColor = "transparent";
    aDiv.style.backgroundColor = "#BDE4A8";
    operationContainer.innerHTML +=
      "=" + (tSum > 1 ? (tSum === 3 ? 1 : 0) : tSum).toString();
    remainderContainer.innerHTML = "Remainder: " + remainder.toString();
    console.log(remainder);
    await sleep(1);
    aDiv.style.backgroundColor = "transparent";
  }
};

mulButton.addEventListener("click", async () => {
  document.getElementById("v11").style.backgroundColor = "#BDE4A8";
});

addButton.addEventListener("click", async () => {
  clear_answer_container();
  let val1 = document.getElementById("in1").value;
  let val2 = document.getElementById("in2").value;
  ans.style.display = "flex";
  const length = val1.length > val2.length ? val1.length + 1 : val2.length + 1;
  populate_questions(val1, val2, length);
  populate_answer_container(length);
  answer_question(length);
});
