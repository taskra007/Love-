/
/* POPUP */
const popup=document.getElementById("popup");
const popupWish=document.getElementById("popupWish");

document.getElementById("openWish").onclick=()=>{
  const name=document.getElementById("nameInput").value;
  const msg=document.getElementById("loveMsg").value;
  popupWish.innerText=msg || `Merry Christmas ${name} ❤️`;
  popup.style.display="flex";
};

function closePopup(){
  popup.style.display="none";
}

/* SLIDER */
const images=["mem1.jpg","mem2.jpg","mem3.jpg"];
let i=0;

function next(){
  i=(i+1)%images.length;
  document.getElementById("sliderImg").src=images[i];
}

function prev(){
  i=(i-1+images.length)%images.length;
  document.getElementById("sliderImg").src=images[i];
}

/* PROPOSAL */
function sayYes(){
  document.getElementById("answer").innerText="💖 She said YES! 💖";
}
document.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  document.querySelector(".layer1").style.transform =
    `translateZ(-200px) translate(${x}px,${y}px)`;

  document.querySelector(".layer2").style.transform =
    `translateZ(-100px) translate(${x*1.5}px,${y*1.5}px)`;

  document.querySelector(".layer3").style.transform =
    `translateZ(0) translate(${x*2}px,${y*2}px)`;
});
