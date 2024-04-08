document.addEventListener("DOMContentLoaded", function () {
    var boat = document.getElementById("boat");
    var moon = document.getElementById("moon");

    var boatX = 0;
    var moonRotation = 0;
    var moonY = 0;

    window.addEventListener("scroll", function () {
      boatX = window.scrollY * 1.3;
      boat.style.transform = "translateX(" + boatX + "px)";
      
        moonRotation = (window.scrollY % 360) * 1.2;
        moonX = window.scrollY * 1.3;
        moonY = window.scrollY * 0.5; 
        moon.style.transform = "translate(" + moonX + "px, " + moonY + "px) rotateX(" + moonRotation + "deg)";
    });
    });