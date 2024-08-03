function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
      strings: "we'll have a poem here <br /> another line",
      autoStart: true,
      delay: 20,
      cursor: "",
    });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);