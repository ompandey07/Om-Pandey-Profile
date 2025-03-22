// Add this to your existing loder.js file or create a new script

document.body.classList.add('loading');

function initNinjaLoader() {
  const overlayer = document.getElementById("overlayer");
  const kunaiElements = document.querySelectorAll(".kunai");
  const leafSymbol = document.querySelector(".leaf-symbol");
  const chakraSeal = document.querySelector(".chakra-seal");
  const heroVideo = document.getElementById("hero-video");
  
  // Ninja-style animated loading sequence
  function performSummoningJutsu() {
    // Step 1: Activate kunai weapons (in sequence)
    setTimeout(() => {
      kunaiElements[0].classList.add("kunai-active");
      
      setTimeout(() => {
        kunaiElements[1].classList.add("kunai-active");
        
        setTimeout(() => {
          kunaiElements[2].classList.add("kunai-active");
          
          setTimeout(() => {
            kunaiElements[3].classList.add("kunai-active");
            
            // Step 2: Activate seal
            setTimeout(() => {
              chakraSeal.classList.add("chakra-seal-active");
              
              // Step 3: Reveal hidden leaf symbol
              setTimeout(() => {
                leafSymbol.classList.add("leaf-symbol-active");
                
                // Final step: Complete the jutsu after a delay
                setTimeout(completeJutsu, 1200);
              }, 800);
            }, 600);
          }, 200);
        }, 200);
      }, 200);
    }, 300);
  }
  
  function completeJutsu() {
    // Add any final animation class
    document.querySelector(".ninja-summoning-ritual").classList.add("jutsu-complete");
    
    // Then fade out the whole overlay
    setTimeout(() => {
      document.body.classList.add('loaded');
      document.body.classList.remove('loading');
      overlayer.style.opacity = "0";
      overlayer.style.transition = "opacity 0.8s ease";
      
      // Start playing the hero video when preloader completes
      if (heroVideo) {
        heroVideo.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
      
      setTimeout(() => {
        overlayer.style.display = "none";
      }, 800);
    }, 600);
  }
  
  // Start the ninja animation
  performSummoningJutsu();
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
  // Setup video sound controls
  setupVideoControls();
  
  // Start the ninja loader
  initNinjaLoader();
});

function setupVideoControls() {
  const video = document.getElementById('hero-video');
  const soundToggle = document.getElementById('sound-toggle');
  
  if (!video || !soundToggle) return;
  
  const soundIcon = soundToggle.querySelector('i');
  const soundText = soundToggle.querySelector('span');
  
  // Function to toggle sound
  function toggleSound() {
    if (video.muted) {
      video.muted = false;
      soundIcon.classList.remove('ri-volume-mute-line');
      soundIcon.classList.add('ri-volume-up-line');
      soundText.textContent = 'Sound playing';
      soundToggle.classList.add('sound-playing');
    } else {
      video.muted = true;
      soundIcon.classList.remove('ri-volume-up-line');
      soundIcon.classList.add('ri-volume-mute-line');
      soundText.textContent = 'Click for sound';
      soundToggle.classList.remove('sound-playing');
    }
  }
  
  // Toggle sound when button is clicked
  soundToggle.addEventListener('click', toggleSound);
  
  // Also allow clicking anywhere on the video to toggle sound
  video.addEventListener('click', function(e) {
    // Prevent the click from affecting other elements
    e.stopPropagation();
    toggleSound();
  });
}