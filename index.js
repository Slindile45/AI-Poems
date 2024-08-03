function displayPoem(response) {
    
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 20,
      cursor: "",
    });

}

function generatePoem(event) {
    event.preventDefault();
    let instructionInput = document.querySelector("#user-instructions")
    let apiKey = "33949tfa196efed4510bo9b38e1b5809";
    let context = "You are a poem expert and you mission is to generate a 4 line poem in basic html. Make sure to follow the user instructions";
    let prompt = `user-instructions: generate an English poem about ${instructionInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);