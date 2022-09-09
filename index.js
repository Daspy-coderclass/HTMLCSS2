const projectList =["Cure.inc","Gamejam: Multiversum","First Lego league"];
var UI_project = document.getElementById("hier_project");
UI_project.innerHTML = projectList[Math.floor(Math.random()*projectList.length)];

var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function(){
      document.querySelector("body").classList.toggle("active");
  })
