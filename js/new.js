document.addEventListener("DOMContentLoaded", () => {
  // Select all features and highlights
  const features = document.querySelectorAll(".feature");
  const highlights = document.querySelectorAll(".highlight");

  features.forEach((feature) => {
    const key = feature.getAttribute("data-key");
    const color = feature.getAttribute("data-color");

    // Add hover event listener
    feature.addEventListener("mouseenter", () => {
      const highlight = document.querySelector(`.highlight[data-key="${key}"]`);
      if (highlight) {
        highlight.style.backgroundColor = color;
        highlight.style.borderColor = color;
        highlight.style.transform = "scale(1)";
        highlight.style.opacity = "1";
      }
    });

    // Add mouseleave event listener
    feature.addEventListener("mouseleave", () => {
      const highlight = document.querySelector(`.highlight[data-key="${key}"]`);
      if (highlight) {
        highlight.style.transform = "scale(0)";
        highlight.style.opacity = "0";
      }
    });
  });
});

window.onscroll = function() {scrollFunction()};


    let lastScrollTop = 0; // Store the last scroll position
    const header = document.querySelector('.site-header');
    const topBar = document.querySelector('.top-bar'); // Select the top bar
    
    // Function to handle scroll event
    window.onscroll = function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // If the page is scrolled at the top, show the top bar
        if (currentScroll === 0) {
            topBar.classList.remove('hidden'); // Show the top bar
        } else {
            topBar.classList.add('hidden'); // Hide the top bar
        }

        // Handle fixed header logic
        if (currentScroll > 100) {
            header.classList.add('fixed'); // Add 'fixed' class when scroll is past 100px
        } else {
            header.classList.remove('fixed'); // Remove 'fixed' class when near the top
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Update the last scroll position
    };



    
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();

    // Logo Animation
    tl.fromTo(
        ".logo-img",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

    // Arrow Animation (controlled via GSAP if needed)
    tl.fromTo(
      ".arrow-img",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" },
      "<"
    );

    // Content Animation
    tl.fromTo(
      ".section-head",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
      "-=0.3"
    );

    // Icons Animation
    gsap.fromTo(
      ".icon",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.15 },
      "-=0.3"
    );
  });

  // Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Select all icons
    const icons = document.querySelectorAll(".icon");
  
    // Create the GSAP timeline for the animations
    const tl = gsap.timeline();
  
    // Loop through each icon and animate sequentially
    icons.forEach((icon, index) => {
      // For each icon, flip and then fade in (with staggered appearance)
      tl.fromTo(
        icon, 
        { opacity: 0, rotationY: 180, y: 30 }, // Initial state for flip
        {
          opacity: 1, 
          rotationY: 0, 
          y: 0, 
          duration: 1, 
          ease: "power2.out",
          delay: index * 0.5 // Create a delay for each icon, staggered by index
        }
      );
    });
  });
  