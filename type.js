/*let heading=document.querySelector("h1");


new Typewriter('h1', {
  strings: "Hello World",
  autoStart: true,
  cursor: "|",
    loop: true,

});*/

let heading = document.querySelector("#challenge-2");
heading.innerHTML = "Ayanda Dlamini";

let heading2 = document.querySelector("#challenge-3");

new Typewriter("#challenge-3", {
  strings: ["Hello", "World"],
  autoStart: true,
});