const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  })


  // Use Fecth API To retrieve articles from web
  document.getElementById("btn-articles").addEventListener("click",btn-articles);

  function bntArticles (){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json()).then((response) => {
      let data = ""
      response.forEach((articles)=>{
        data += `
        <h1></h1>
        <img 
        <p>${user.body}</p>`

      })
    })
  }