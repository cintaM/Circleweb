// hamburger Menu

// const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
// const hamburger= document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach( 
//   function(menuItem) { 
//     menuItem.addEventListener("click", toggleMenu);
//   })


  // Use Fecth API To retrieve articles from web
  window.addEventListener("load", bntArticles);

  function bntArticles (){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json()).then((response) => {
      let dataL = ""
      response.forEach((articles)=>{
        data += `
        <section>
        <h1>Symplify</h1>
        <h3>UI Design & App Development</h3>
        <p>Completed on 2/2/22</p>
        <img src="./img/61feadb7386a4ce8e1606b95_1-p-2000.jpeg"/>
        <p>Simplify ${articles.body}</p>
       </section>`
      });
      document.getElementById("insert").innerHTML = dataL;
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