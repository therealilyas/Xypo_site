let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");

sideNav.style.right="-250px";
menuBtn.onclick = function(){
    if(sideNav.style.right=="-250px"){
        menuBtn.innerText="Close"
        sideNav.style.right="0"

    }
    else{ 
        menuBtn.innerText="Menu"       
        sideNav.style.right="-250px"
    }
}