var element = document.querySelector("#username");

var pswd = document.querySelector("#password");

element.addEventListener("keydown", (event) => {
  if (event.key == "@") {
    pswd.removeAttribute("disabled");
  }
})

// pswd.addEventListener("keydown", (event) => { 
//   if (event.key) { 
//     var btn = document.querySelector("button");
//     btn.style.display = "block";
//   }
// })
