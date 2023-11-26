let redbtn = document.querySelector(".red");
let bluebtn = document.querySelector(".blue");
let blackbtn = document.querySelector(".black");
let container = document.querySelector(".container");

redbtn.addEventListener("click", function () {
    container.style.backgroundImage = "url('BMW_bike_img/BMW1.png')";
});
bluebtn.addEventListener("click", function () {
    container.style.backgroundImage = "url('BMW_bike_img/BMW2.png')";
});
blackbtn.addEventListener("click", function () {    
    container.style.backgroundImage = "url('BMW_bike_img/BMW3.png')";
});