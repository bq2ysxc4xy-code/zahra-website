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
