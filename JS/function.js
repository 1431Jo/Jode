function showThings(show){
    if(document.getElementById(show).style.display === "none") {
        document.getElementById(show).style.display = "inline";
    } else {
        document.getElementById(show).style.display = "none";
    }
}