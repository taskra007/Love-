
gsap.from(".content h1", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "back.out(1.7)"
});

gsap.from(".content p", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from("button", {
  scale: 0,
  duration: 1,
  delay: 1
});

gsap.to(".santa", {
  x: window.innerWidth + 400,
  duration: 15,
  repeat: -1,
  ease: "linear"
});

gsap.from(".tree", {
  y: 300,
  opacity: 0,
  duration: 1.5,
  delay: 1
});

gsap.from(".gift", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 1.8,
  ease: "bounce.out"
});
