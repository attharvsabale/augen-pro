

function BlureEffectSerchBar(){
  // Get elements
const searchButton = document.getElementById("search-button");
const searchBarContainer = document.getElementById("search-bar-container");
const mainContent = document.getElementById("main");
const navbar = document.getElementById("nav");

// Toggle search bar visibility
searchButton.addEventListener("click", () => {
  const isHidden = searchBarContainer.classList.contains("hidden");

  if (isHidden) {
    // Show search bar and blur background
    searchBarContainer.classList.remove("hidden");
    navbar.classList.add("blurred");
    mainContent.classList.add("blurred");
  } else {
    // Hide search bar and remove blur
    searchBarContainer.classList.add("hidden");
    navbar.classList.remove("blurred");
    mainContent.classList.remove("blurred");
  }
});

// Close search bar if clicked outside
window.addEventListener("click", (event) => {
  if (
    !searchBarContainer.contains(event.target) &&
    !searchButton.contains(event.target)
  ) {
    searchBarContainer.classList.add("hidden");
    navbar.classList.remove("blurred");
    mainContent.classList.remove("blurred");
  }
});

}

 function MobbileToggle() {
  // Select menu icon and navigation links
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-part-2");

// Toggle menu visibility on click
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Show or hide menu links
});

}


function gsapAnimation(){

// Animate the navigation icon (#nav-part-1) coming from above
gsap.fromTo(
  "#nav-part-1", // Target the #nav-part-1 (the SVG icon)
  { opacity: 0, y: -30 }, // Start from above with hidden opacity
  { 
    opacity: 1, 
    y: 0, // End at normal position (y: 0)
    duration: 1, // Duration of the animation
    ease: "power2.out", // Smooth easing
    delay: 2, // Delay to sync with the overall animation flow
  }
);



// Animate the navigation links (#nav-part-2) coming from above
gsap.fromTo(
  "#nav-part-2", // Target the #nav-part-2 (navigation links container)
  { opacity: 0, y: -50 }, // Start from above (y: -50) with hidden opacity
  { 
    opacity: 1, 
    y: 0, // End at normal position (y: 0)
    duration: 1, // Duration of the animation
    ease: "power2.out", // Easing for smooth animation
    delay: 2.4, // Sync with the other animations (you can adjust the delay as needed)
  }
);

// If you want to animate the menu icon as well (optional)
gsap.fromTo(
  "#menu-icon", // Target the #menu-icon (mobile menu icon)
  { opacity: 0, y: -30 }, // Start from above with hidden opacity
  { 
    opacity: 1, 
    y: 0, // End at normal position (y: 0)
    duration: 1, // Duration of the animation
    ease: "power2.out", 
    delay: 2.4, // Sync with the other animations
  }
);


// Animate the #block section coming from above
gsap.fromTo(
  "#block", // Target the #block section
  { opacity: 0, y: -50 }, // Start from above (y: -50) with hidden opacity
  { 
    opacity: 1, 
    y: 0, // End at normal position (y: 0)
    duration: 1, // Duration of the animation
    ease: "power2.out", // Easing for smooth animation
    delay: 2.8, // Delay to sync with the overall animation flow (you can adjust the delay as needed)
  }
);




// Animate the image with blur effect first
gsap.fromTo(
  "#right-part img",
  { filter: "blur(10px)", opacity: 0 }, // Initial state with blur
  { 
    filter: "blur(0px)", 
    opacity: 1, 
    duration: 2.5, // Smooth transition duration
    ease: "power2.in" 
  }
);

// Animate the main heading (#inner-left h1)
gsap.fromTo(
  "#inner-left h1",
  { filter: "blur(10px)", opacity: 0, y: 30 }, // Initial state
  { 
    filter: "blur(0px)", 
    opacity: 1, 
    y: 0, // Smooth slide-up effect
    duration: 1.5,
    ease: "power2.out", // Smooth easing
    delay: 1.5, // Delayed start after image animation
  }
);

// Animate the subtext (#inner-left-p)
gsap.fromTo(
  "#inner-left-p",
  { filter: "blur(10px)", opacity: 0, x: -50 }, // Initial state with slight left movement
  { 
    filter: "blur(0px)", 
    opacity: 1, 
    x: 0, // Reset position
    duration: 1.5,
    ease: "power2.out",
    delay: 1.8, // Delayed start after heading
  }
);

// Animate the capsules (#capsule-div .capsules)
gsap.fromTo(
  "#capsule-div .capsules",
  { y: 30, opacity: 0 }, // Start with downward movement and hidden
  { 
    y: 0, 
    opacity: 1, 
    duration: 0.8,
    stagger: 0.2, // Add delay between each capsule animation
    ease: "power2.out",
    delay: 2, // Delayed start after subtext
  }
);


// Animate the down arrow icon (i) to slide down and repeat 4 times
gsap.fromTo(
  "#down-arrow span i", // Target the <i> inside the span
  { opacity: 0, y: -20 }, // Initial state: off-screen
  { 
    opacity: 1, 
    y: 0, // Move to the final position (slide down)
    duration: 1.5, // Duration for each animation cycle
    ease: "power2.out", 
    repeat: 3, // Repeat 3 times (4 cycles in total including the initial)
    yoyo: false, // No reverse animation
    delay: 2.4 // Delayed start for the down arrow icon animation
  }
);



// Animation for #inner-Left-div
gsap.fromTo(
  "#inner-Left-div", 
  { 
    filter: "blur(8px)", 
    opacity: 0 
  },
  { 
    filter: "blur(0px)", 
    opacity: 1,
    duration: 1.5,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#second-section", // Trigger when #second-section is in view
      start: "top 65%",  // Start when the top of #second-section reaches 65% of the viewport height
      end: "top 20%",    // End when the top of #second-section reaches 20% of the viewport height
      scrub: true,       // Sync the animation with the scroll position
    
    }
  }
);

// Animation for <p> inside #second-section-p
gsap.fromTo(
  "#second-section-p", 
  { 
    filter: "blur(8px)", 
    opacity: 0 
  },
  { 
    filter: "blur(0px)", 
    opacity: 1,
    duration: 1.5,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#second-section", // Trigger when #second-section is in view
      start: "top 40%",  // Start when the top of #second-section reaches 40% of the viewport height
      end: "top 10%",    // End when the top of #second-section reaches 10% of the viewport height
      scrub: true,       // Sync the animation with the scroll position

    }
  }
);

// Animation for <h2> inside #second-section-h2
gsap.fromTo(
  "#second-section-h2 h2", 
  { 
    filter: "blur(8px)", 
    opacity: 0 
  },
  { 
    filter: "blur(0px)", 
    opacity: 1,
    duration: 1.5,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#second-section", // Trigger when #second-section is in view
      start: "top 55%",  // Start when the top of #second-section reaches 55% of the viewport height
      end: "top 20%",    // End when the top of #second-section reaches 20% of the viewport height
      scrub: true,       // Sync the animation with the scroll position
      
    }
  }
);

// Cool animation for entire #second-section (fade-in + zoom)
gsap.fromTo(
  "#second-section", 
  { 
    opacity: 0, 
    scale: 0.95 
  },
  { 
    opacity: 1, 
    scale: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#second-section", // Trigger when #second-section comes into view
      start: "top 80%",  // Start when the top of #second-section reaches 80% of the viewport height
      end: "top 20%",    // End when the top of #second-section reaches 20% of the viewport height
      scrub: true,       
      
    }
  }
);



// Animation for #prime-thired-div (blur effect)
gsap.fromTo(
  "#prime-thired-div", 
  { 
    filter: "blur(8px)", 
    opacity: 0 
  },
  { 
    filter: "blur(0px)", 
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#Thired-section", // Trigger when #Thired-section comes into view
      start: "top 80%",  // Start when the top of #Thired-section reaches 80% of the viewport height
      end: "top 20%",    // End when the top of #Thired-section reaches 40%
      scrub: true,       // Sync the animation with the scroll position
      
    }
  }
);

// Animation for #beta-thired-div elements (slide from bottom to top)
gsap.fromTo(
  "#beta-thired-div ul li", 
  { 
    y: 100, 
    opacity: 0 
  },
  { 
    y: 0, 
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    stagger: {
      amount: 1,  // Control total stagger duration (higher values make it longer)
      from: "start", // Start staggering from the first element
      grid: "auto",  // Auto stagger for grid-like arrangements (useful for multiple elements)
      ease: "power2.out"  // Apply the same easing function for a smooth effect
    },
    scrollTrigger: {
      trigger: "#Thired-section", // Trigger when #Thired-section comes into view
      start: "top 50%",  // Start when the top of #Thired-section reaches 50% of the viewport height
      end: "top 10%",    // End when the top of #Thired-section reaches 10%
      scrub: true,       // Sync the animation with the scroll position
      
    }
  }
);


// Animation for #fourth-upperpart (slide from left and right)
gsap.fromTo(
  "#fourth-upperpart .upper-class", 
  { 
    x: -100, 
    opacity: 0 
  },
  { 
    x: 0, 
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.3, // Stagger the animation for each element
    scrollTrigger: {
      trigger: "#fourth-section", 
      start: "top 80%", // Start when the top of #fourth-section reaches 80% of the viewport height
      end: "top 30%", 
      scrub: true, 
    }
  }
);

// Animation for #fourth-lowwerpart (slide up from bottom and blur effect)
gsap.fromTo(
  "#fourth-lowwerpart", 
  { 
    y: 100, 
    opacity: 0,
    filter: "blur(8px)"
  },
  { 
    y: 0, 
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#fourth-section", 
      start: "top 70%", 
      end: "top 10%", 
      scrub: true, 
    }
  }
);


// Animation for #fourth-lowwer-leftone (fade and slide)
gsap.fromTo(
  "#fourth-lowwer-leftone", 
  { 
    x: -100, 
    opacity: 0
  },
  { 
    x: 0, 
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#fourth-section", 
      start: "top 70%", 
      end: "top 10%", 
      scrub: true,
    }
  }
);

// Animation for .fourth-innerOne (fade in from bottom with delay)
gsap.fromTo(
  ".fourth-innerOne", 
  { 
    y: 100, 
    opacity: 0 
  },
  { 
    y: 0, 
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.2, // Add a small stagger between each inner element
    scrollTrigger: {
      trigger: "#fourth-section", 
      start: "top 60%", 
      end: "top 10%", 
      scrub: true, 
    }
  }
);

// Animation for .fourth-innerOne-P-SPAN (text reveal with a delay)
gsap.fromTo(
  ".fourth-innerOne-P-SPAN", 
  { 
    opacity: 0, 
    y: 50 
  },
  { 
    opacity: 1, 
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#fourth-section", 
      start: "top 60%", 
      end: "top 10%", 
      scrub: true, 
      
    }
  }
);



// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// GSAP animation for the text blur reveal from bottom to top (repeated on scroll up/down)
gsap.fromTo("#TEXT-part h3", 
    {
        opacity: 0,               // Start invisible
        filter: "blur(5px)",      // Start with blur
        y: 100,                   // Start from below the original position
    }, 
    {
        opacity: 1,               // Fade in the text
        filter: "blur(0px)",      // Remove the blur
        y: 0,                     // Move the text to its original position (up)
        duration: 2,              // Duration of the animation
        ease: "power2.out",       // Smooth easing
        scrollTrigger: {
            trigger: "#TEXT-part", // Trigger animation when #TEXT-part enters the view
            start: "top 60%",       // Start when the top of the #TEXT-part is 60% from the top of the viewport
            end: "top 30%",         // End when it is 30% from the top of the viewport
            scrub: 1,               // Scrub the animation based on scroll
            markers: false,         // Hide scroll markers (optional)
            toggleActions: "restart none none reverse", // Re-trigger on scroll up/down
        }
    }
);


// Parallax effect on the image with smoother motion
gsap.to("#img img", {
  y: "30%",  // Move the image up for the parallax effect, reduced for smoother motion
  ease: "smooth", // Use a smoother easing function for more fluid animation
  scrollTrigger: {
      trigger: "#fifth-3Dimg",  // Apply to the section containing image
      start: "top 20%",          // Start the effect when the section hits the top of the viewport
      end: "bottom bottom",      // End when the section hits the bottom
      scrub: 4,                  // Increase scrub value for smoother, slower animation
     
  }
});

// Register GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Text fade-in and blur animation for #sixith-section-1 p
gsap.fromTo("#sixith-section-1", 
  {
    opacity: 0,
    filter: "blur(5px)",
    y: 50
  }, 
  {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#sixith-section",
      start: "top 50%",
      end: "top 10%",
      scrub: 1,
      once: true,

    }
  }
);

// Text fade-in and blur animation for #sixith-section-2 p
gsap.fromTo("#sixith-section-2", 
  {
    opacity: 0,
    filter: "blur(5px)",
    y: 50
  }, 
  {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#sixith-section",
      start: "top 50%",
      end: "top 10%",
      scrub: 1,
      once: true,
    
    }
  }
);

// Image fade-in and blur animation for #sixth-section-image
gsap.fromTo("#sixth-section-image", 
  {
    opacity: 0,
    filter: "blur(10px)"
  },
  {
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#sixith-section",
      start: "top 60%",
      end: "top 10%",
      scrub: 1,
      once: true,
      
    }
  }
);



// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Reveal animation for seventh-section image
// gsap.fromTo(
//   "#seventh-section-image img",
//   {
//     opacity: 0,
//     y: 50,
//     filter: "blur(10px)", // Start blurred
//   },
//   {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)", // End sharp
//     duration: 1.5,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: "#seventh-section",
//       start: "30% 60%", // Start animation when section top reaches 60% of viewport
//       end: "20% 40%",   // End animation when it scrolls further
//       scrub: true,      // Smooth animation synced with scroll
//     },
//   }
// );

// Reveal animation for text in seventh-section-1
gsap.fromTo(
  "#seventh-section-1 p, #seventh-section-1-inner",
  {
    opacity: 0,
    x: -50, // Slide in from left
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.2, // Delay between elements
    scrollTrigger: {
      trigger: "#seventh-section",
      start: "30% 65%", // Start animation when section top reaches 65%
      end: "50% 45%",   // End animation when it scrolls further
      scrub: true,
      
    },
  }
);

// Reveal animation for text in seventh-section-2
gsap.fromTo(
  "#seventh-section-2 h3, #seventh-section-2 p",
  {
    opacity: 0,
    x: 50, // Slide in from right
  },
  {
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.3, // Delay between elements
    scrollTrigger: {
      trigger: "#seventh-section",
      start: "30% 65%", // Start animation when section top reaches 65%
      end: "50% 45%",   // End animation when it scrolls further
      scrub: true,
      
    },
  }
);


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation for spans in the nineth-section
gsap.fromTo(
  "#imgpluscapsule span",
  {
    opacity: 0, // Start completely invisible
    filter: "blur(10px)", // Start blurred
    y: 20, // Start slightly below the position
  },
  {
    opacity: 1, // Fully visible
    filter: "blur(0px)", // No blur
    y: 0, // Move to original position
    duration: 1, // Animation duration
    ease: "power3.out",
    stagger: 0.3, // Stagger each span animation
    scrollTrigger: {
      trigger: "#nineth-section", // Target section
      start: "top 50%", // Start animation when section top reaches 70% of viewport
      end: "top 30%", // End animation when it scrolls further
      scrub: true, // Smooth animation synced with scroll
    },
  }
);


}




BlureEffectSerchBar();
MobbileToggle();
gsapAnimation();