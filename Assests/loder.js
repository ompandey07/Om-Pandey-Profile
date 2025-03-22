document.body.classList.add('loading');

function initNinjaLoader() {
  const overlayer = document.getElementById("overlayer");
  const kunaiElements = document.querySelectorAll(".kunai");
  const leafSymbol = document.querySelector(".leaf-symbol");
  const chakraSeal = document.querySelector(".chakra-seal");
  
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
  initNinjaLoader();
});

// For faster loading (optional, can be enabled)
// initNinjaLoader();