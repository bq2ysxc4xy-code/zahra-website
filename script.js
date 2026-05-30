const pages = document.querySelectorAll(".page");

function nextPage(num){
pages.forEach(page=>{
page.classList.remove("active");
});

document
.getElementById("page"+num)
.classList.add("active");
}

const runawayBtns =
document.querySelectorAll(".runaway");

runawayBtns.forEach(btn=>{

btn.addEventListener("mouseover",()=>{

const x =
Math.random()*
(window.innerWidth-150);

const y =
Math.random()*
(window.innerHeight-100);

btn.style.left = x+"px";
btn.style.top = y+"px";

btn.style.transform =
`scale(${0.7+Math.random()*0.3})`;

});

});

function calculateLove(){

const result =
Math.floor(
80 + Math.random()*21
);

document.getElementById(
"loveResult"
).innerHTML =
result + "% ❤️";
}

const prizes = [

"🏆 Ja2izat Ahsan Zahra",
"🧠 Adka Bent",
"🚗 Sayara Fakhma",
"📚 Ghatjebi Mzyan f Mtihanat",
"🧊 Rb7ti M3ana Telaja",
"😂 Jarbi 7adak Mara Okhra",
"🤌 Tqlizza",
"✨ Main Character Energy",
"👑 Queen Certificate"

];

function spinWheel(){

const wheel =
document.getElementById("wheel");

const rotation =
3600 + Math.random()*1000;

wheel.style.transform =
`rotate(${rotation}deg)`;

setTimeout(()=>{

const prize =
prizes[
Math.floor(
Math.random()*prizes.length
)
];

document.getElementById(
"wheelResult"
).innerHTML = prize;

alert("🎉 " + prize);

},4000);

}
function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "💖";

heart.style.left =
Math.random()*100 + "vw";

heart.style.bottom = "-20px";

heart.style.fontSize =
(15 + Math.random()*25) + "px";

document
.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,500);

/* SCRATCH CARD */

const canvas =
document.getElementById("scratchCanvas");

if(canvas){

const ctx =
canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

ctx.fillStyle = "#c77dff";
ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);

ctx.fillStyle = "white";
ctx.font = "24px Arial";
ctx.textAlign = "center";

ctx.fillText(
"Scratch Here ✨",
150,
150
);

let scratching = false;

function scratch(e){

if(!scratching) return;

const rect =
canvas.getBoundingClientRect();

const x =
(e.touches ?
e.touches[0].clientX :
e.clientX)
- rect.left;

const y =
(e.touches ?
e.touches[0].clientY :
e.clientY)
- rect.top;

ctx.globalCompositeOperation =
"destination-out";

ctx.beginPath();

ctx.arc(
x,
y,
20,
0,
Math.PI*2
);

ctx.fill();

}

canvas.addEventListener(
"mousedown",
()=> scratching=true
);

canvas.addEventListener(
"mouseup",
()=> scratching=false
);

canvas.addEventListener(
"mousemove",
scratch
);

canvas.addEventListener(
"touchstart",
()=> scratching=true
);

canvas.addEventListener(
"touchend",
()=> scratching=false
);

canvas.addEventListener(
"touchmove",
scratch
);

}
