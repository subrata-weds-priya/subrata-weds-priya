
// SHOW DETAILS
function showDetails() {
    document.getElementById("details").style.display = "block";
    document.getElementById("details").scrollIntoView({ behavior: "smooth" });
}

// MAP
// function openMap() {
//     window.open("https://www.google.com/maps");
// }

// RSVP
function sendWhatsApp(event){
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var guests = document.getElementById("guests").value;
    var attendance = document.getElementById("attendance").value;
    
    /* 🔴 CHANGE THIS NUMBER */
    var phoneNumber = "919999999999"; 
    // Format: country code + number
    // Example India: 91XXXXXXXXXX
    
    var message = 
    "!! Wedding RSVP !!%0A%0A" +
    "Name: " + name + "%0A" +
    "Guests: " + guests + "%0A" +
    "Attendance: " + attendance;
    
    var whatsappURL = 
    "https://wa.me/" + phoneNumber + "?text=" + message;
    
    window.open(whatsappURL, "_blank");
    }
    

// COUNTDOWN
// var weddingDate = new Date("March 4, 2025 18:00:00").getTime();

// var timer = setInterval(function(){

// var now = new Date().getTime();
// var distance = weddingDate - now;

// // ✅ IF DATE IS OVER
// if(distance <= 0){

// clearInterval(timer);

// // Hide countdown
// document.querySelector(".countdown").style.display = "none";

// // Show message
// var message = document.createElement("h2");
// message.innerHTML = "💍 We Are Married! 🎉<br>Thank You For Your Blessings ❤️";
// message.style.color = "#e91e63";
// message.style.marginTop = "20px";
// message.style.animation = "fadeIn 2s ease";

// document.querySelector(".card").appendChild(message);

// return;
// }

// // NORMAL COUNTDOWN
// var days = Math.floor(distance / (1000*60*60*24));
// var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
// var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
// var seconds = Math.floor((distance%(1000*60))/1000);

// updateTime("days", days);
// updateTime("hours", hours);
// updateTime("minutes", minutes);
// updateTime("seconds", seconds);

// },1000);

// function updateTime(id,value){
// let element = document.getElementById(id);
// element.innerHTML = value < 10 ? "0"+value : value;

// element.parentElement.classList.add("animate");
// setTimeout(()=>{
// element.parentElement.classList.remove("animate");
// },400);
// }

function updateCountdown() {

    const weddingDate = new Date("March 4, 2026 18:00:00").getTime();
    const receptionDate = new Date("March 6, 2026 19:00:00").getTime();
    const now = new Date().getTime();

    let targetDate;
    let message;

    if (now < weddingDate) {
        targetDate = weddingDate;
        message = "💍 Wedding Ceremony is coming soon!";
    } 
    else if (now >= weddingDate && now < receptionDate) {
        targetDate = receptionDate;
        message = "🎉 Reception Celebration is coming soon!";
    } 
    else {
        document.getElementById("eventMessage").innerHTML =
            "💖 Thank you for being part of our beautiful journey!";
        document.querySelector(".countdown").style.display = "none";
        return;
    }

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    document.getElementById("eventMessage").innerHTML = message;
}

setInterval(updateCountdown, 1000);



/* 🎆 REAL MOVING FIREWORKS */

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(){
let x = Math.random() * canvas.width;
let y = Math.random() * canvas.height / 2;

for(let i=0;i<50;i++){
particles.push({
x:x,
y:y,
speedX:(Math.random()-0.5)*6,
speedY:(Math.random()-0.5)*6,
life:100,
color:"hsl("+Math.random()*360+",100%,50%)"
});
}
}

function update(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{
p.x+=p.speedX;
p.y+=p.speedY;
p.life--;

ctx.beginPath();
ctx.arc(p.x,p.y,3,0,Math.PI*2);
ctx.fillStyle=p.color;
ctx.fill();

if(p.life<=0){
particles.splice(index,1);
}
});

requestAnimationFrame(update);
}

setInterval(createFirework,1500);
update();

function openReceptionMap(){
    window.open("https://maps.app.goo.gl/1soxExBWc8bGpseD8");
}


document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

document.addEventListener("dragstart", function(e) {
    e.preventDefault();
});

