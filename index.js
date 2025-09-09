function displayresults(){
    let answerElement=document.querySelector("h1");
    answerElement.innerHTML-"";

     
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
  });
}

function generateAnswer(event){
    event.preventDefault();
    let apikey="ad28f3a0557d8t5f574o89b184356e5a";
    let context="I want you to act as a magician. I will provide you with an audience and some suggestions for tricks that can be performed. Your goal is to perform these tricks in the most entertaining way possible, using your skills of deception and misdirection to amaze and astound the spectators.";
    let prompt=" My first request is I want you to make my watch disappear! How can you do that?";    
    let Apiurl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;


}

 let answerElement=document.querySelector("h1");
    answerElement.innerHTML=("#btn");



let ButtonElement=document.querySelector("#btn");
ButtonElement.addEventListener("click",displayresults);

function showAnswer(response){
    console.log(response.data.answer);
    
axios.get(Apiurl).then(displayresults)
}




