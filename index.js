// Hamburger Menu

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
  window.addEventListener("load", bntArticles);

  function bntArticles (){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json()).then((response) => {
      let dataL = ""
      response.forEach((articles, index)=>{
        if(index < 3){
        dataL += `
        <article class="simplify">
                <img class="rectangle1" src="./img/Rectangle 71.png"/>
                <h3>${articles.title}</h3>
                <p>${articles.body}</p>
                <a href="http://127.0.0.1:5501/simplify.html#">Learn more </a>
            </article>`
     } });
      document.getElementById("insert1").innerHTML = dataL;
    })
  }

  // Use fetch API post form

  const form =document.getElementById("form");
  form.addEventListener("submit", function(e){
    e.preventDefault();

   const download = new FormData(form);

   console.log([...download]);

   fetch("https://jsonplaceholder.typicode.com/posts", {
    method:"POST",
    body:download,
   })
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.log(error));

  })