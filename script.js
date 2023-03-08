
var icon = document.getElementById("icon");
icon.onclick = function(){
document.body.classList.toggle("dark-them");
    if(document.body.classList.contains("dark-them")){
        icon.src="img_Icon/sun.png";
    }
    else{
        icon.src="img_Icon/moon.png";
        }
}
