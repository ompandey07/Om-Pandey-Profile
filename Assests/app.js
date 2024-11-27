document.getElementById("intro").textContent =
"Portfolio " + new Date().getFullYear();
// Simple AOS (Animate On Scroll) Implementation
document.addEventListener("DOMContentLoaded", function () {
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate");
    }
  });
}, observerOptions);

document.querySelectorAll("[data-aos]").forEach((element) => {
  observer.observe(element);
});
});


  // Disable right-click
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
      (e.ctrlKey && e.key === "U") ||
      (e.ctrlKey && e.shiftKey && e.key === "C")
    ) {
      e.preventDefault();
    }
  });

    // Dynamically update the year
    document.getElementById("current-year").textContent =
    new Date().getFullYear();


    const songs = [
        { title: "Wrong", artist: "Lui Khel", path: "Audio/Worng.mp3", image: "SongsImage/worng.jpg" },
        { title: "Closer", artist: "The Chainsmoker", path: "Audio/Closer.mp3", image: "SongsImage/Closer.jpg" },
        { title: "Perfect", artist: "Ed Sheeran", path: "Audio/Perfect.mp3", image: "SongsImage/Perfect.jpg" },
        { title: "Night Changes", artist: "One Direction", path: "Audio/NightChanges.mp3", image: "SongsImage/Night Changes.jpg" },
        { title: "Bardali", artist: "Sushant KC", path: "Audio/Bardali.mp3", image: "SongsImage/Bardali.jpg" },
        { title: "Dil Se Dil Tak", artist: "Laqshay Kapoor", path: "Audio/DilSeDilTak.mp3", image: "SongsImage/Dil Se DIl Tak.jpg" },
        { title: "O Mahi", artist: "Arjit Singh", path: "Audio/Omahi.mp3", image: "SongsImage/O Mahi.jpg" },
        { title: "AMSTERDAM", artist: "JAMESY", path: "Audio/GermanGadi.mp3", image: "SongsImage/AMSTERDAM.jpg" },
        { title: "favorite", artist: "Isabel LaRosa", path: "Audio/Favroute.mp3", image: "SongsImage/favorite.jpg" },
        { title: "Girls Like You", artist: "Maroon 5", path: "Audio/Girls.mp3", image: "SongsImage/Girls Like You.jpg" },
        
      
        { title: "Unstoppable", artist: "Sia", path: "Audio/Unstoppable.mp3", image: "SongsImage/Unstopable.jpg" },
        { title: "Aankhon Se Batana", artist: "Dikshant", path: "Audio/Aankhon Se Batana.mp3", image: "SongsImage/AnkhoSeBata.jpg" },
        { title: "Scars To Your Beautiful", artist: "Alessia Cara", path: "Audio/Scars To Your Beautiful.mp3", image: "SongsImage/Scars2Beautiful.jpeg" },
        { title: "Chaina saram", artist: "ZENISH", path: "Audio/Chaina saram.mp3", image: "SongsImage/ChainaSaram.jpg" },
        { title: "MIDDLE OF THE NIGHT", artist: "Elley Duhé", path: "Audio/MIDDLE OF THE NIGHT.mp3", image: "SongsImage/MiddleOfTheNight.jpg" },
        { title: "I AM THE ONE", artist: "Justin Biber", path: "Audio/I AM THE ONE.mp3", image: "SongsImage/IamTheOne.jpg" },
      ];
      
      document.addEventListener('DOMContentLoaded', function() {
        const audio = new Audio();
        const playBtn = document.getElementById('play-btn');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const shuffleBtn = document.getElementById('shuffle-btn');
        const repeatBtn = document.getElementById('repeat-btn');
        const volumeDownBtn = document.getElementById('volume-down');
        const volumeUpBtn = document.getElementById('volume-up');
        const volumeSlider = document.getElementById('volume-slider');
        const volumeLevel = document.getElementById('volume-level');
        const progressBar = document.getElementById('progress-bar');
        const progressContainer = document.getElementById('progress-container');
        const currentTimeSpan = document.getElementById('current-time');
        const durationSpan = document.getElementById('duration');
        const playlist = document.getElementById('playlist');
        const songTitle = document.getElementById('current-song-title');
        const songArtist = document.getElementById('current-song-artist');
        const songImage = document.getElementById('current-song-image');
        const defaultIcon = document.getElementById('default-icon');
      
        let currentSongIndex = 0;
        let isPlaying = false;
        let isShuffled = false;
        let isRepeating = false;
      
        // Populate playlist
        songs.forEach((song, index) => {
          const songItem = document.createElement('div');
          songItem.className = 'song-item flex items-center gap-4 cursor-pointer group';
          songItem.innerHTML = `
            <div class="w-10 h-10">
              <img src="${song.image}" alt="${song.title}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-medium truncate group-hover:text-green-500 transition-colors">${song.title}</h4>
              <p class="text-sm text-gray-400 truncate">${song.artist}</p>
            </div>
            <div class="opacity-0 group-hover:opacity-100 transition-opacity">
              <i class="ri-play-fill text-green-500"></i>
            </div>
          `;
          songItem.addEventListener('click', () => loadAndPlaySong(index));
          playlist.appendChild(songItem);
        });
      
        function loadAndPlaySong(index) {
          currentSongIndex = index;
          const song = songs[currentSongIndex];
          
          audio.src = song.path;
          songTitle.textContent = song.title;
          songArtist.textContent = song.artist;
          
          songImage.src = song.image;
          songImage.style.opacity = '1';
          defaultIcon.style.opacity = '0';
          
          document.querySelectorAll('.song-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
          });
      
          playAudio();
        }
      
        function playAudio() {
          audio.play();
          isPlaying = true;
          playBtn.innerHTML = '<i class="ri-pause-fill text-2xl"></i>';
        }
      
        function pauseAudio() {
          audio.pause();
          isPlaying = false;
          playBtn.innerHTML = '<i class="ri-play-fill text-2xl"></i>';
        }
      
        // Volume Controls
        volumeDownBtn.addEventListener('click', () => {
          let newVolume = Math.max(0, audio.volume - 0.1);
          updateVolume(newVolume);
        });
      
        volumeUpBtn.addEventListener('click', () => {
          let newVolume = Math.min(1, audio.volume + 0.1);
          updateVolume(newVolume);
        });
      
        volumeSlider.addEventListener('input', (e) => {
          updateVolume(e.target.value / 100);
        });
      
        function updateVolume(value) {
          audio.volume = value;
          volumeSlider.value = value * 100;
          volumeLevel.style.width = `${value * 100}%`;
        }
      
        // Progress bar click
        progressContainer.addEventListener('click', (e) => {
          const clickPosition = e.offsetX / progressContainer.offsetWidth;
          audio.currentTime = clickPosition * audio.duration;
        });
      
        // Play/Pause
        playBtn.addEventListener('click', () => {
          if (!audio.src) {
            loadAndPlaySong(0);
          } else if (isPlaying) {
            pauseAudio();
          } else {
            playAudio();
          }
        });
      
        // Previous and Next
        prevBtn.addEventListener('click', () => {
          if (isShuffled) {
            let newIndex;
            do {
              newIndex = Math.floor(Math.random() * songs.length);
            } while (newIndex === currentSongIndex);
            loadAndPlaySong(newIndex);
          } else {
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            loadAndPlaySong(currentSongIndex);
          }
        });
      
        nextBtn.addEventListener('click', () => {
          if (isShuffled) {
            let newIndex;
            do {
              newIndex = Math.floor(Math.random() * songs.length);
            } while (newIndex === currentSongIndex);
            loadAndPlaySong(newIndex);
          } else {
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            loadAndPlaySong(currentSongIndex);
          }
        });
      
        // Shuffle and Repeat
        shuffleBtn.addEventListener('click', () => {
          isShuffled = !isShuffled;
          shuffleBtn.classList.toggle('text-green-500');
        });
      
        repeatBtn.addEventListener('click', () => {
          isRepeating = !isRepeating;
          repeatBtn.classList.toggle('text-green-500');
        });
      
        // Audio time update
        audio.addEventListener('timeupdate', () => {
          const progress = (audio.currentTime / audio.duration) * 100;
          progressBar.style.width = `${progress}%`;
          currentTimeSpan.textContent = formatTime(audio.currentTime);
        });
      
        audio.addEventListener('loadedmetadata', () => {
          durationSpan.textContent = formatTime(audio.duration);
        });
      
        audio.addEventListener('ended', () => {
          if (isRepeating) {
            audio.currentTime = 0;
            playAudio();
          } else {
            nextBtn.click();
          }
        });
      
        // Time formatting
        function formatTime(seconds) {
          const minutes = Math.floor(seconds / 60);
          const remainingSeconds = Math.floor(seconds % 60);
          return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        }
      
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
          if (e.code === 'Space') {
            e.preventDefault();
            playBtn.click();
          } else if (e.code === 'ArrowLeft') {
            prevBtn.click();
          } else if (e.code === 'ArrowRight') {
            nextBtn.click();
          } else if (e.code === 'ArrowUp') {
            let newVolume = Math.min(1, audio.volume + 0.1);
            updateVolume(newVolume);
          } else if (e.code === 'ArrowDown') {
            let newVolume = Math.max(0, audio.volume - 0.1);
            updateVolume(newVolume);
          }
        });
      
        // Initial volume setup
        updateVolume(0.5);
      
        // Add hover effect to progress bar
        progressContainer.addEventListener('mousemove', (e) => {
          const rect = progressContainer.getBoundingClientRect();
          const pos = (e.clientX - rect.left) / progressContainer.offsetWidth;
          if (audio.duration) {
            const timeToShow = formatTime(pos * audio.duration);
            progressContainer.title = timeToShow;
          }
        });
      });


      const messages = [
        '"I make cool things with code, like building digital magic! ✨💻"',
        '"I turn coffee into code, because that’s how I get my superpowers! ☕⚡"',
        '"When I write code, I’m creating little adventures on the screen! 🎮💻"',
        '"Code is like a puzzle, and I love solving it! 🧩👨‍💻"',
        '"I build things that make people smile, one line of code at a time! 😊💻"',
      ];
      let currentMessageIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;
      const uniformSpeed = 100; // Uniform speed for all actions
      const pauseTime = 3000; // Pause between messages

      function typeText() {
        const typedElement = document.getElementById("typed-text");
        const currentMessage = messages[currentMessageIndex];

        if (isDeleting) {
          typedElement.textContent = currentMessage.substring(
            0,
            currentCharIndex - 1
          );
          currentCharIndex--;
        } else {
          typedElement.textContent = currentMessage.substring(
            0,
            currentCharIndex + 1
          );
          currentCharIndex++;
        }

        // Determine next timeout
        let timeout = uniformSpeed;

        // Check if completed typing
        if (!isDeleting && currentCharIndex === currentMessage.length) {
          isDeleting = true;
          timeout = pauseTime;
        }

        // Check if completed deleting
        if (isDeleting && currentCharIndex === 0) {
          isDeleting = false;
          currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        }

        setTimeout(typeText, timeout);
      }

      // Start the typing effect with a delay
      document.addEventListener("DOMContentLoaded", () => {
        setTimeout(typeText, 1500);
      });