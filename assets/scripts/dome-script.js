var drops = [document.getElementById("history-drop"), document.getElementById("arch-drop"), document.getElementById("signi-drop"), document.getElementById("lang-drop"), document.getElementById("access-drop")];
var tabLinks = [document.getElementById("history-link"), document.getElementById("arch-link"), document.getElementById("signi-link"), document.getElementById("media-link")];

var filterStatus = 0;
var openedTab; 
var navColour;

function DropChange(status, id) {

    openedTab = id;
    var check = document.title;
    for(let i = 0; i < tabLinks.length; i++) {
       
        if(check ==="History" || check ==="Architecture" || check ==="Significance") {
            tabLinks[i].style.color = "black";
        } else {
            tabLinks[i].style.color = "white";
        }
    }
    for (let i = 0; i < drops.length; i++) {
        drops[i].style.display = "none";
    }
    document.getElementById(openedTab).style.color = "#FAD516";
    drops[status - 1].style.display = "block";
    drops[status-1].classList.add("menu-transition");

    

}

function CloseDrop() {
    var check = document.title;
    
    if(check ==="History" || check ==="Architecture" || check ==="Significance") {
        document.getElementById(openedTab).style.color = "black";
    } else {
        document.getElementById(openedTab).style.color = "white";
    }
    
        for (let i = 0; i < drops.length; i++) {
            drops[i].style.display = "none";

        }
}

const scrollContainer = document.querySelector(".scroll-container");

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        });


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function FilterChange() {
    if (filterStatus == 0) {
        var elements = document.getElementsByTagName('div');

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.filter = "grayscale(100%)";
        }

        filterStatus = 1;

    } else {
        var elements = document.getElementsByTagName('div');

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.filter = "grayscale(0)";
        }

        filterStatus = 0;
    }


}

