/* Here goes your JS code */

document.getElementById("show-popup-form").onclick = function(){
    document.getElementById("form-container").style.display = "block";
    document.getElementById("show-popup-form").style.display = "none";
}
  
document.getElementById("closeForm").onclick = function() {
    document.getElementById("form-container").style.display = "none";
    document.getElementById("show-popup-form").style.display = "block";
};
  

var checkBox;
const form = document.getElementById("form-container");

form.addEventListener("submit", (e) => {
    var password = document.getElementById("password").value;
  
    if (checkBox && lengthInput(password)) {
        e.preventDefault();
        setTimeout(function() {
            document.getElementById("textSuccess").style.opacity = 1;
            document.getElementById("show-popup-form").style.opacity = 0;
            document.getElementById("form-container").style.display = "none";
        },3000)      
    } else {
      alert("Not logged in");
      document.getElementById("email").innerHTML = "";
      document.getElementById("password").innerHTML = "";
    }
});

function lengthInput(password) {
    var pom;
    password.length < 30 ? (pom = true) : (pom = false);
    return pom;
}

function myFunction() {
    var pom = document.getElementById("myCheck");
    pom.checked ? (checkBox = true) : (checkBox = false);
  }