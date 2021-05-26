"use strict";

const sleep = (s) => {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
};

const addButton = document.getElementById("add-button");
const mulButton = document.getElementById("mul-button");

addButton.addEventListener("click", async () => {
  const val1 = document.getElementById("in1").value;
  const val2 = document.getElementById("in2").value;
  const ans = document.getElementById("answer-container");
  ans.innerHTML = "";
  const a1 = document.createElement("div");
  a1.id = "a1";
  const a2 = document.createElement("div");
  a2.id = "a2";
  a1.innerHTML = val1;
  a2.innerHTML = val2;
  ans.prepend(a1);
  ans.prepend(a2);
  anime({
    targets: "#a1",
    translateX: 400,
    easing: "easeInOutSine",
    duration: 3000,
  });
  anime({
    targets: "#a2",
    translateX: -400,
    easing: "easeInOutSine",
    duration: 3000,
  });
  await sleep(3);
  const a = document.createElement("div");
  a.id = "a";
  a.classList += "custom-center";
  a.innerHTML = val1 + val2;
  ans.innerHTML = "";
  ans.append(a);
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
