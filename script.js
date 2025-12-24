/* MUSIC AUTOPLAY */
document.body.addEventListener("click",()=>{
  document.getElementById("music").play();
},{once:true});

/* PERSONAL WISH */
document.getElementById("btn").onclick=()=>{
  let name=document.getElementById("nameInput").value;
  if(name){
    document.getElementById("wish").innerText=`Merry Christmas ${name} 🎄`;
    document.getElementById("message").innerText="Wishing you love, peace and happiness ❤️";
  }
};

/* GSAP */
gsap.from("h1",{y:100,opacity:0,duration:1.5});
gsap.to(".santa",{x:window.innerWidth+400,duration:15,repeat:-1});

/* 3D PARALLAX */
document.addEventListener("mousemove",e=>{
  document.querySelectorAll(".layer").forEach(layer=>{
    let speed=layer.dataset.speed;
    layer.style.transform=
      `translate(${e.clientX*speed/200}px,${e.clientY*speed/200}px)`;
  });
});

/* FIREWORKS */
const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;

function firework(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<80;i++){
    ctx.beginPath();
    ctx.arc(
      Math.random()*canvas.width,
      Math.random()*canvas.height/2,
      2,0,Math.PI*2
    );
    ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
    ctx.fill();
  }
}
setInterval(firework,600);
document.getElementById("themeBtn").onclick=()=>{
  document.body.classList.toggle("light");
};
