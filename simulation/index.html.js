<!DOCTYPE html>
<html>
  <head>
    <!-- Add CSS at the head of HTML file -->
    <!-- <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
    /> -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/b30wulffz/virtual-style@0.0.3-b/css/style.css"
    />
    <link rel="stylesheet" href="./css/main.css" />
  </head>
  <body>
    <div class="tabs">
      <ul>
        <li class="is-active"><a>Unary Numbers</a></li>
        <li><a href="./index-binary.html">Binary Numbers</a></li>
        <li><a href="./index-roman.html">Roman Numbers</a></li>
      </ul>
    </div>
    <div class="columns is-centered is-mobile">
      <h3 class="title">Unary Numbers</h2>
    </div>
    <div>
      <div id="input1" class="input-container columns is-centered is-mobile">
        <div class="column">
          <input
            type="text"
            id="in1"
            class="input input-field"
            onkeyup="this.value = this.value.replace(/[^1]/, '')"
          />
        </div>
        <div class="column">
        <input
            type="text"
            id="in2"
            class="input input-field"
            onkeyup="this.value = this.value.replace(/[^1]/, '')"
          />
        </div>
      </div>
      <div class="columns is-centered is-mobile">
        <div class="custom-right column">
          <button id="add-button" class="button is-primary">Add</button>
        </div>
        <div class="column">
          <button id="mul-button" class="button is-primary">Multiply</button>
        </div>
      </div>
    </div>
    <div id="answer-container" style="position: relative;"></div>
    <script src="./js/unary.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/animejs@3.0.1/lib/anime.min.js"></script>
  </body>
</html>
