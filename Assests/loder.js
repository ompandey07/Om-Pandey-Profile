document.body.classList.add('loading');

function initLoader() {
  const greetingElement = document.getElementById("greeting");
  const overlayer = document.getElementById("overlayer");
  const messages = [
    {
      text: 'const greet = "Hello";',
      html: '<span class="keyword">const</span> <span class="variable">greet</span> = <span class="string">"Hello"</span>;'
    },
    {
      text: 'const greet = "Namaste";',
      html: '<span class="keyword">const</span> <span class="variable">greet</span> = <span class="string">"Namaste"</span>;'
    }
  ];
  let currentMessageIndex = 0;

  function typeText(messageObj, callback) {
    let charIndex = 0;
    const textMessage = messageObj.text;
    greetingElement.innerHTML = "";

    function type() {
      if (charIndex < textMessage.length) {
        // Calculate how much of the HTML we should show based on the plain text index
        let plainTextSoFar = textMessage.slice(0, charIndex + 1);
        let htmlMessage = messageObj.html;
        
        // Replace parts of the HTML string that haven't been "typed" yet with empty string
        let currentHTML = '';
        let tempPlainText = '';
        let inTag = false;
        let currentTag = '';
        
        for (let i = 0; i < htmlMessage.length; i++) {
          if (htmlMessage[i] === '<') {
            inTag = true;
            currentTag += htmlMessage[i];
            continue;
          }
          if (htmlMessage[i] === '>') {
            inTag = false;
            currentTag += htmlMessage[i];
            currentHTML += currentTag;
            currentTag = '';
            continue;
          }
          if (inTag) {
            currentTag += htmlMessage[i];
            continue;
          }
          
          if (tempPlainText.length < plainTextSoFar.length) {
            currentHTML += htmlMessage[i];
            tempPlainText += htmlMessage[i];
          }
        }
        
        greetingElement.innerHTML = currentHTML;
        charIndex++;
        setTimeout(type, 50); // Typing speed
      } else {
        setTimeout(callback, 100); // Delay before next message
      }
    }

    type();
  }

  function removeOverlay() {
    document.body.classList.add('loaded');
    document.body.classList.remove('loading');
    overlayer.style.opacity = "0";
    overlayer.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      overlayer.style.display = "none";
    }, 500);
  }

  function cycleMessages() {
    typeText(messages[currentMessageIndex], () => {
      currentMessageIndex = (currentMessageIndex + 1) % messages.length;
      if (currentMessageIndex === 0) {
        setTimeout(removeOverlay, 1000);
      } else {
        setTimeout(cycleMessages, 1000);
      }
    });
  }

  // Start the animation immediately
  cycleMessages();
}

// Initialize as soon as possible
initLoader();