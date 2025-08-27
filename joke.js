let jokesElement = document.querySelector("#joke");


function generateJoke(event) {
    event.preventDefault();
  let APIKey = "ad28f3a0557d8t5f574o89b184356e5a";
  let context = " you are an Ai that tells dad jokes";
  let prompt = "Tell me dad jokes";
  let apiURL =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${APIKey}`;
  l
   jokesElement.innerHTML = "Generating a joke for you.. please wait";
        axios.get(apiURL).then(tellJoke);
        console.log(apiURL);
    }


function tellJoke(response) {
    jokes.innerHTML = "";
  new Typewriter(jokes, {
    strings: [response.data.answer],
    autoStart: true,
  });
    console.log(response.data.answer);
}

jokes.addEventListener("click", generateJoke);

