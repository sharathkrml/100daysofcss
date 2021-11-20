let ham = document.getElementById("hamburger");
let bar1 = document.getElementById("bar-1");
let bar2 = document.getElementById("bar-2");
let bar3 = document.getElementById("bar-3");
ham.addEventListener("click", function () {
  if (bar1.classList.contains("animate-1")) {
    bar1.classList.remove("animate-1");
    bar2.classList.remove("animate-2");
    bar3.classList.remove("animate-3");
    bar1.classList.add("rev-animate-1");
    bar2.classList.add("rev-animate-2");
    bar3.classList.add("rev-animate-3");
  } else if(bar1.classList.contains("rev-animate-1")){
    bar1.classList.remove("rev-animate-1");
    bar2.classList.remove("rev-animate-2");
    bar3.classList.remove("rev-animate-3");
    bar1.classList.add("animate-1");
    bar2.classList.add("animate-2");
    bar3.classList.add("animate-3");
  }
  else{
    bar1.classList.add("animate-1");
    bar2.classList.add("animate-2");
    bar3.classList.add("animate-3");
  }
});
