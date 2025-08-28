function tellJoke(response) {
    new Typewriter(jokeElement, {
      strings: response.data.answer,
      autoStart: true,
    });
  }

  function generateJoke() {

    let APIKey = "ad28f3a0557d8t5f574o89b184356e5a";
    let context = "You are a helpful assistant that generates IT Support , computers and everything IT jokes. create a short, funny, and clean joke.basic HTML and separate each line with a <br /> do not include ```html and show me different jokes everytime i ask;";
    let prompt = "Tell me a IT support Joke tell me a different joke each time I ask.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${APIKey}`;

    //jokeElement.innerHTML = "😂 Generating a joke... please wait";

    axios.get(apiURL).then(tellJoke)
      
  }

  

  let jokeButtonElement = document.querySelector("#joke_btn");

  let jokeElement = document.querySelector("#joke");
      jokeButtonElement.addEventListener("click", generateJoke);

