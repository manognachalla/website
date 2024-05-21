function show() {
  // Registers the ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);
  
  // Initializes LocomotiveScroll on the element with ID "main" for smooth scrolling
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  // Updates ScrollTrigger whenever LocomotiveScroll triggers a scroll event
  locoScroll.on("scroll", ScrollTrigger.update);

  // Configures ScrollTrigger to use LocomotiveScroll as its scroller
  ScrollTrigger.scrollerProxy("#main", {
    // Defines how to get and set the scroll position
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    // Provides the bounding rectangle for the scroller element
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // Determines the pin type based on the presence of transform styles
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // Updates LocomotiveScroll whenever ScrollTrigger refreshes
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // Refreshes ScrollTrigger to ensure everything is properly initialized
  ScrollTrigger.refresh();
}

// Calls the show function to initialize everything
show();

// Animates the rotation of the element with ID "bottle" based on scroll position
gsap.to("#bottle", {
  rotate: -15,
  scrollTrigger: {
    trigger: "#bottle",        // Element that triggers the animation
    scroller: "#main",         // Element that is the scroller
    start: "top 5%",           // Animation starts when the top of "#bottle" is 5% from the top of the scroller
    end: "top -315%",          // Animation ends when the top of "#bottle" is -416% from the top of the scroller
    scrub: true,               // Smoothly scrubs the animation based on scroll position
    pin: true                  // Pins the element during the scroll
  }
});

// Animates the scale of the element with ID "bottle" based on scroll position
gsap.to("#bottle", {
  scale: 0.5,
  scrollTrigger: {
    trigger: "#page5 h1 ",      // Element that triggers the animation
    scroller: "#main",         // Element that is the scroller
    start: "top 430%",         // Animation starts when the top of "#page5 h1" is 430% from the top of the scroller
    end: "top -430%",          // Animation ends when the top of "#page5 h1" is -430% from the top of the scroller
    scrub: true,               // Smoothly scrubs the animation based on scroll position
    pin: true                  // Pins the element during the scroll
  }
});

// Creates a new timeline for animations
let t1 = gsap.timeline();

// Adds an animation to the timeline for the element with ID "page1_dog_image"
t1.from("#main #page1_cola_image", {
  opacity: 0,          // Starts with opacity 0 (invisible)
  duration: 1,         // Animation lasts for 1 second
  scale: 0.1           // Starts with scale 0.1 (very small)
});

// Adds an animation to the timeline for the element with ID "bottle"
t1.from("#bottle", {
  opacity: 0,          // Starts with opacity 0 (invisible)
  duration: 1,         // Animation lasts for 1 second
  scale: 0.2           // Starts with scale 0.2 (small)
});

// Adds an animation to the timeline for the buttons in the navigation top bar
t1.from("#nav_top>button", {
  xPercent: 200,       // Animates the button's horizontal position from 200% to its final position
});

// Animates the button inside the element with ID "page2_part1" based on scroll position
gsap.from("#page2_part1>button", {
  scrollTrigger: {
    trigger: "#page2_part1>button", // Element that triggers the animation
    scroller: "#main",              // Element that is the scroller
    start: "top 70%",               // Animation starts when the top of the button is 70% from the top of the scroller
  },
  xPercent: -300,        // Animates the button's horizontal position from -300% to its final position
  duration: 1,           // Animation lasts for 1 second
});

