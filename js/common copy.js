$(document).ready(function () {

/* ========================== Mobile menu =======================*/
  var mobileBtn = document.querySelector('.button-menu');
  var body = document.querySelector('body');

  mobileBtn.addEventListener('click', function(){
    body.classList.toggle('js-open');
  })


// /* ========================== Image width on scroll =======================*/
let imageScale = gsap.timeline({
  scrollTrigger: {
    trigger: ".preview-item__image",
    pin: ".preview-item__image",
    start: "top top",
    end: "+=30%",
    scrub: 1,
    // markers: true,
  }
});
imageScale.to('.figure',{scale:'1'})


ScrollTrigger.matchMedia({
	
/* ========================== Desktop media animation =======================*/
"(min-width: 1200px)": function() {
  //Animation title down to up
  const animationTitle = gsap.utils.toArray('.animation__title');
  animationTitle.forEach(box => {

    const anim = gsap.from(box, {
      y: "100%",
      duration: .7,
      stagger: 0.25,
      opacity: 0,
      paused: true
    });

    ScrollTrigger.create({
      trigger:box,
      // markers: true,
      start: "center 93%", 
      onEnter: () => anim.play()
    });

    ScrollTrigger.create({
      trigger:box,
      start: "top bottom+=300", 
      // markers: true,
      onEnter: () => anim.pause(0)
    });
  });

  const animationRight = gsap.utils.toArray('.animation__right');
  animationRight.forEach(box => {
    const anim = gsap.from(box, { 
      x: 100,
      opacity: 0,
      duration: .7,
      stagger: 0.25,
      markers: true,
    });

    ScrollTrigger.create({
        trigger: box,
        start: "center 93%", 
        onEnter: () => anim.play()
    });
    ScrollTrigger.create({
        trigger: box,
        start: "top bottom", 
        onEnter: () => anim.pause(0)
    });
  });
  const animationBottom = gsap.utils.toArray('.animation__bottom');
  animationBottom.forEach(box => {
    const anim = gsap.from(box, { 
      y: 100,
      opacity: 0,
      duration: .7,
      stagger: 0.25,
      markers: true,
    });

    ScrollTrigger.create({
        trigger: box,
        start: "center 93%", 
        onEnter: () => anim.play()
    });
    ScrollTrigger.create({
        trigger: box,
        start: "top bottom+=300", 
        onEnter: () => anim.pause(0)
    });
  });
  

    // Up/Down Back 1 image on scrolling
  gsap.to(".collection-left__back", {
    scrollTrigger:{
      trigger: ".collection-left", 
      start: "top bottom", 
      end: "bottom top", 
      scrub: 1
    },
    y: 50
  });
  // Up/Down Front 1 image on scrolling
  gsap.to(".collection-left__front", {
    scrollTrigger:{
      trigger: ".collection-left",
      start: "top bottom", 
      end: "bottom top", 
      scrub: 1,
      // markers: true
    },
    y: -120,
  });
  // Up/Down Back 2 image on scrolling
  gsap.to(".collection-right__back", {
    scrollTrigger:{
      trigger: ".collection-right", 
      start: "top bottom", 
      end: "bottom top", 
      scrub: 1
    },
    y: 50
  });
  // Up/Down Front 2 image on scrolling
  gsap.to(".collection-right__front", {
    scrollTrigger:{
      trigger: ".collection-right",
      start: "top bottom", 
      end: "bottom top", 
      scrub: 1,
      // markers: true
    },
    y: -120,
  });
  // Up/Down About title animation 
  // gsap.from(".about-item__title", {
  //   scrollTrigger: {
  //     trigger: ".about-item__title",
  //     // markers: true,
  //     scrub: 1,
  //     toggleAction: "restar none none none",
  //   },
  //   duration: 0.6,
  //   y: '30',
  //   opacity: 0,
  // });
  //   // Up/Down About description animation 
  //   gsap.from(".about-item__description", {
  //     scrollTrigger: {
  //       trigger: ".about-item__description",
  //       toggleAction: "restar none none none",
  //       // markers: true,
  //       scrub: 1,
  //     },
  //     duration: 0.9,
  //     y: '30',
  //     opacity: 0,
  //   });

  },
/* ========================== Mobile media animation =======================*/
  "(max-width: 1199px)": function() {
    gsap.to(".collection-left__back", {
      scrollTrigger:{
        trigger: ".collection-left", 
        start: "top bottom", 
        end: "bottom top", 
        scrub: 1
      },
      y: 60
    });
    /// and animation
    gsap.to(".collection-left__front", {
      scrollTrigger:{
        trigger: ".collection-left",
        start: "top bottom", 
        end: "bottom top", 
        scrub: 1,
        // markers: true
      },
      y: -60,
    });
    
    gsap.to(".collection-right__back", {
      scrollTrigger:{
        trigger: ".collection-right", 
        start: "top bottom", 
        end: "bottom top", 
        scrub: 1
      },
      y: 60
    });
    
    gsap.to(".collection-right__front", {
      scrollTrigger:{
        trigger: ".collection-right",
        start: "top bottom", 
        end: "bottom top", 
        scrub: 1,
        // markers: true
      },
      y: -60,
    });
  }

  
});

 /* ========================== Change bg color on scroll =======================*/
 const $section = $("main");
 const $startTrigger = $section.find(".collection");
 const colorChange = gsap.timeline()
 
 colorChange
 .fromTo($section, { backgroundColor: "#000", color: "#fff"},{ backgroundColor: "#fff", color: "#000" }, 0)

 ;
 ScrollTrigger.create({
  trigger: $startTrigger,
  start: "top center+=40",
  end: "+=700px",
 //  markers: true,
  scrub: true,
  animation: colorChange
});

/* ========================== Scroll left image pixed =======================*/
const spaceHolder = document.querySelector('.bestsellers-space');
const horizontal = document.querySelector('.bestsellers-horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 150; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.bestsellers-sticky');
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});
/* ========================== Animation left - right text  =======================*/
gsap.registerPlugin(ScrollTrigger);

const showDemo = () => {

  gsap.utils.toArray('.scroll-animation').forEach((section, index) => {
    const w = section.querySelector('.wrapper');
    const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 10 } });


  });
};
showDemo();


});







