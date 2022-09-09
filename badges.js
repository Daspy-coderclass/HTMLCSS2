var list = document.getElementsByTagName("li");

for (let i = 1; i < list.length+1; i++) {
  var a = `url("badgeimages/`+i+`.png")`
  list[i-1].style.backgroundImage = a;
}
