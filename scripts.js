document.addEventListener('DOMContentLoaded', () => {
    const typingSpeed = 150; // Milliseconds per character
    const videos = [
        'videos/video1.mp4', // Replace with your video paths
        'videos/video2.mp4',
        'videos/video3.mp4',
    ];
    let currentVideoIndex = 0;

    const videoElement = document.getElementById('background-video');
    const typewriterText1 = 'WELCOME TO MFMCF OOU IBOGUN!';
    const typewriterText2 =
        'We are delighted to welcome you to the Mountain of Fire and Miracles Campus Fellowship, Olabisi Onabanjo University, Ibogun. Our fellowship is a place where students grow in faith, support one another, and make a positive impact.';

    // Change video dynamically
    function changeVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length; // Loop through videos
        videoElement.src = videos[currentVideoIndex];
        videoElement.play();
    }

    function setupVideoTransition() {
        videoElement.addEventListener('ended', changeVideo); // Change video when the current one ends
    }

    // Typewriter effect
    function typeText(elementId, text, callback) {
        const textElement = document.getElementById(elementId);
        let index = 0;

        function type() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, typingSpeed);
            } else if (callback) {
                callback();
            }
        }

        type();
    }

    // Initialize typewriter and video functionality
    typeText('typewriter-text1', typewriterText1, () => {
        typeText('typewriter-text2', typewriterText2);
    });

    // Initialize the first video
    videoElement.src = videos[currentVideoIndex];
    setupVideoTransition();
});

const togglebar = document.querySelector('.togglebar');
const togglebarIcon = document.querySelector('.togglebar i');
const dropdownMenu = document.querySelector('.dropdown_menu');

togglebar.onclick = function () {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');

  // Toggle the icon based on menu state
  if (isOpen) {
    togglebarIcon.classList = 'fa-solid fa-xmark';
} else {
    togglebarIcon.classList = 'fa-solid fa-bars';
}
}

// contact

// Validate the form before submission
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return false;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

// backround scroll

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar a");
    const logoLetters = document.querySelector(".logo-letters");
    const togglebar = document.querySelector(".togglebar");

  if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(65, 3, 65, 1)";
      navbar.style.transition = "background-color 0.4s ease";
    navLinks.forEach((link) => {
        link.style.color = "white";
        link.style.transition = "color 0.3s ease";
    });
      logoLetters.style.color = "white";
      togglebar.style.color = "white"
        logoLetters.style.transition = "color 0.3s ease";
  } else {
    navbar.style.backgroundColor = "rgba(225, 225, 225, 0.6)";
    navLinks.forEach((link) => {
        link.style.color = "purple";
    });
      logoLetters.style.color = "purple";
       togglebar.style.color = "purple";
  }
});






