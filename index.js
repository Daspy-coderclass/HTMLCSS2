const projectList =["cure.inc","rekenmachine","template1","template2","template3"];
var UI_project = document.getElementById("hier_project");
UI_project.innerHTML = projectList[Math.floor(Math.random()*projectList.length)];
