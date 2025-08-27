function handleclick(){
    alert("Button clicked");
}




let ButtonElement=document.querySelector("#btn");
ButtonElement.addEventListener("click",handleclick);

function showAnswer(response){
    alert(response.data.answer);
}



let apikey="ad28f3a0557d8t5f574o89b184356e5a";
let context="Be Polite and provide a short answer";
let prompt="What is your name?";    
let Apiurl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
console.log(Apiurl);
axios.get(Apiurl).then(showAnswer)
