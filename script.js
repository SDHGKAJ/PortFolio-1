const words = ["Data Analyst", "Web Developer"];
let i = 0;
let j = 0;
let isDeleting = false;
const speed = 120;
const eraseSpeed = 60;
const delayBetweenWords = 1000;
const pauseAfterFirst = 2000; // 2 seconds after first "Srinivasan"
const pauseAfterLast = 10000; // 10 seconds after last "Srinivasan"

window.onload = function() {
  const typewriter = document.getElementById("typewriter");

  function type() {
    const currentWord = words[i];
    if (!isDeleting) {
      typewriter.textContent = currentWord.substring(0, j + 1);
      j++;
      if (j === currentWord.length) {
        isDeleting = true;
        // Pause after first "Srinivasan"
        if (i === 0) {
          setTimeout(type, pauseAfterFirst);
        }
        // Pause after last "Srinivasan"
        else if (i === words.length - 1) {
          setTimeout(type, pauseAfterLast);
        }
        // No pause after "Data Analyst" or "Web Dev"
        else {
          setTimeout(type, delayBetweenWords);
        }
      } else {
        setTimeout(type, speed);
      }
    } else {
      typewriter.textContent = currentWord.substring(0, j - 1);
      j--;
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, speed);
      } else {
        setTimeout(type, eraseSpeed);
      }
    }
  }

  type();
};