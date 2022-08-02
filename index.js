const menu = document.querySelector(".list-pc");
const menuItems = document.querySelectorAll(".listado");
const hamburger= document.querySelector(".menu-ham");
const menuIcon= document.querySelector("#button-menu");
const closeIcon= document.querySelector("#button-close")

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
    function(listado) { 
      listado.addEventListener("click", toggleMenu);
    }
  )