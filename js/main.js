//menu
function openSlideMenu(){
      document.getElementById('side-menu').style.width = '100%';
    }

    function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
}


//tabs
function openCity(el, cityName) {

    let tabcontent, tablinks;

    tabcontent = document.querySelectorAll(".tabcontent");
    tablinks = document.querySelectorAll(".tablinks");

    // convert into array
    tabcontentArr = Array.from(tabcontent);
    tabcontentArr.forEach(function(tab){
      tab.style.display = 'none';
    });

    // convert into array
    tablinksArr = Array.from(tablinks);
    tablinksArr.forEach(function(tablink){
      tablink.classList.remove("active");
    });

    document.getElementById(cityName).style.display = "block";
    el.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
