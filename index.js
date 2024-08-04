function answerQuestion(response) {
    
    new Typewriter("#womens-health", {
      strings: response.data.answer,
      autoStart: true,
      delay: 20,
      cursor: "",
    });

}

function womensHealth(event) {
    event.preventDefault();
    let instructionInput = document.querySelector("#user-instructions")
    let apiKey = "33949tfa196efed4510bo9b38e1b5809";
    let context = "You are a women's health expert and very informed on the latest health, fitness, weight loss, nutrition, and beauty news and trends. Please provide a short and simple answer. Make sure to follow the user instructions";
    let prompt = `user-instructions: please answer questions about ${instructionInput.value} in a fun and engaging way`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let healthElement = document.querySelector("#womens-health");
    healthElement.classList.remove("health");
    healthElement.innerHTML = `leading you to a happier, healthier life, please wait...`
    
    axios.get(apiUrl).then(answerQuestion);

}

let healthFormElement = document.querySelector("#health-generator");
healthFormElement.addEventListener("submit", womensHealth);