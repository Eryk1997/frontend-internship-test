/* Here goes your JS code */

document.getElementById("show-popup-form").onclick = function(){
    document.getElementById("form-container").style.display = "block";
    document.getElementById("show-popup-form").style.display = "none";
}
  
document.getElementById("closeForm").onclick = function() {
    document.getElementById("form-container").style.display = "none";
    document.getElementById("show-popup-form").style.display = "block";
};
  