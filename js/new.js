const featureItems = document.querySelectorAll('.feature-item');
const highlightAreas = document.querySelectorAll('.highlight-area');

featureItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        // Remove active from all highlights
        highlightAreas.forEach(area => area.classList.remove('active'));

        const highlightId = item.getAttribute('data-highlight');
        const highlightArea = document.getElementById('highlight-' + highlightId);
        
        if (highlightArea) {
            highlightArea.classList.add('active');
        }
    });
});

featureItems.forEach((item) => {
    item.addEventListener('mouseleave', () => {
        highlightAreas.forEach(area => area.classList.remove('active'));
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
// document.addEventListener("DOMContentLoaded", () => {
//     const tl = gsap.timeline();

  
//     tl.fromTo(
//         ".logo-img",
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
//       );

 
//     tl.fromTo(
//       ".arrow-img",
//       { opacity: 0, y: -30 },
//       { opacity: 1, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" },
//       "<"
//     );

    
//     tl.fromTo(
//       ".section-head",
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
//       "-=0.3"
//     );

    
//     gsap.fromTo(
//       ".icon",
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.15 },
//       "-=0.3"
//     );
//   });

  // Wait for the DOM to load
// document.addEventListener("DOMContentLoaded", function () {

//   const icons = document.querySelectorAll(".icon");


//   const tl = gsap.timeline();

 
//   icons.forEach((icon, index) => {
  
//     tl.fromTo(
//       icon, 
//       { opacity: 0, rotationY: 180, y: 30 }, 
//       {
//         opacity: 1, 
//         rotationY: 0, 
//         y: 0, 
//         duration: 1, 
//         ease: "power2.out",
//         delay: index * 0.5 
//       }
//     );
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  // Get all the feature elements
  const features = document.querySelectorAll('.feature');

  // Get all the highlight elements
  const highlights = document.querySelectorAll('.highlight');

  // Loop through all features and add event listeners for hover
  features.forEach((feature) => {
    // On hover
    feature.addEventListener('mouseenter', function () {
      const featureKey = feature.getAttribute('data-key');

      // Find the corresponding highlight based on the data-key
      const highlight = document.querySelector(`.highlight[data-key="${featureKey}"]`);

      // Add the active highlight class and make it visible
      highlight.style.transform = "scale(1)";
      highlight.style.opacity = "1";
    });

    // On mouse leave
    feature.addEventListener('mouseleave', function () {
      const featureKey = feature.getAttribute('data-key');

      // Find the corresponding highlight based on the data-key
      const highlight = document.querySelector(`.highlight[data-key="${featureKey}"]`);

      // Reset the transform and opacity to hide the highlight
      highlight.style.transform = "scale(0)";
      highlight.style.opacity = "0";
    });

    // On click
    feature.addEventListener('click', function () {
      const featureKey = feature.getAttribute('data-key');

      // Find the corresponding highlight based on the data-key
      const highlight = document.querySelector(`.highlight[data-key="${featureKey}"]`);

      // Make the clicked highlight visible (without animation delay)
      highlight.style.transform = "scale(1)";
      highlight.style.opacity = "1";

      // Optionally reset the state of other highlights
      highlights.forEach((hl) => {
        if (hl !== highlight) {
          hl.style.transform = "scale(0)";
          hl.style.opacity = "0";
        }
      });
    });
  });
});



const cursorOuter = document.querySelector('.cursor-outer');
const cursorInner = document.querySelector('.cursor-inner');

// Variables to track the position of the cursor
let mouseX = 0;
let mouseY = 0;

// Variables to store current positions for smoothness
let cursorOuterX = 0;
let cursorOuterY = 0;

// Function to move the cursor smoothly
const animateCursor = () => {
    cursorOuterX += (mouseX - cursorOuterX) * 0.1; // Smooth transition (0.1 factor)
    cursorOuterY += (mouseY - cursorOuterY) * 0.1;

    cursorOuter.style.top = `${cursorOuterY}px`;
    cursorOuter.style.left = `${cursorOuterX}px`;

    cursorInner.style.top = `${mouseY}px`;
    cursorInner.style.left = `${mouseX}px`;

    requestAnimationFrame(animateCursor); // Continuously call the function
};

// Mouse move event listener
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Start animation
animateCursor();

// Hover effects for interactive elements
const interactiveElements = document.querySelectorAll('a, button');

interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        console.log('Hover start:', el); // Debugging log
        cursorOuter.style.transform = 'scale(1.1)';
        cursorOuter.style.opacity = '0.6';
        cursorOuter.style.backgroundColor = '#c4af6b'; // Change color
        cursorInner.style.transform = 'scale(1.5)';
        cursorInner.style.backgroundColor = 'green'; // Change color
    });

    el.addEventListener('mouseleave', () => {
        console.log('Hover end:', el); // Debugging log
        cursorOuter.style.transform = 'scale(1)';
        cursorOuter.style.opacity = '0.4';
        cursorOuter.style.backgroundColor = 'rgba(196,175,107,0.8)'; // Revert color
        cursorInner.style.transform = 'scale(1)';
        cursorInner.style.backgroundColor = 'rgba(196,175,107,0.8)'; // Revert color
    });
});
