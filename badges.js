var list = document.getElementsByTagName("li");
console.log(list);
for (let i = 1; i < list.length+1; i++) {
  var a = `url("badgeimages/`+i+`.png")`
  console.log(a);
  list[i-1].style.backgroundImage = a;
  console.log(list[i]);
}
