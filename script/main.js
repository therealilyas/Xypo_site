let menuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");

sideNav.style.right="-250px";
menuBtn.onclick = function(){
    if(sideNav.style.right=="-250px"){
        menuBtn.style.backgroundImage ="url('../assets/images/close.png')"
        menuBtn.style.width ="30px"
        menuBtn.style.height ="30px"
        menuBtn.style.transition ="0.3s ease-out"

        sideNav.style.right="0"

    }
    else{        
        menuBtn.style.backgroundImage ="url('../assets/images/menu.png')"
        menuBtn.style.transition ="0.3s ease-in"
        sideNav.style.right="-250px"
    }
}