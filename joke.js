document.addEventListener("DOMContentLoaded", function () {
  let jokeButtonElement = document.querySelector("#joke-btn");
  let jokeElement = document.querySelector("#joke");

  function generateJoke() {
    let APIKey = "ad28f3a0557d8t5f574o89b184356e5a";
    let context = "You are an AI that tells dad jokes";
    let prompt = "Tell me a dad joke";

    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${APIKey}`;

    jokeElement.innerHTML = "😂 Generating a joke... please wait";

    axios.get(apiURL)
      .then(tellJoke)
      .catch(function (error) {
        jokeElement.innerHTML = "❌ Failed to fetch joke. Check console.";
        console.error(error);
      });
  }

  function tellJoke(response) {
    jokeElement.innerHTML = "";
    new Typewriter(jokeElement, {
      strings: [response.data.answer],
      autoStart: true,
    });
  }

  jokeButton.addEventListener("click", generateJoke);
});
