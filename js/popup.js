function popup() {
    var popup = document.getElementById("myPopup");

    if(document.getElementById('message').innerHTML.includes("Reizana Zahra Lichintia") && !popup.classList.contains("show")){
        popup.classList.toggle("show");
        setTimeout(function(){popup.classList.toggle("show")}, 2000);
    }
  }