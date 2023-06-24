if (document.getElementById("hier_project") != null) {
  const projectList =[["Cure.inc","Images/cureinc.png"],["Gamejam: Multiversum","Images/multi_logo.png"],["The Brightbox","kaas"],];
  var randomProject = Math.floor(Math.random()*projectList.length);
  console.log(projectList[randomProject][0]);
  var UI_project = document.getElementById("hier_project");
  UI_project.innerHTML = projectList[randomProject][0];
  var IMG_project = document.getElementById("foto_project");
  IMG_project.outerHTML = '<img id="foto_project" src="'+projectList[randomProject][1]+'">';
}
