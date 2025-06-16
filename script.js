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

document.addEventListener("DOMContentLoaded", function() {
  const arrow = document.querySelector('.project-arrow');
  const arrowLeft = document.querySelector('.project-arrow-left');
  const newBox = document.querySelector('.new');
  const projectImg = document.querySelector('.box-for-projects img');

  let projectIndex = 0;
  const projects = [
    {
      title: "Spotify Clone",
      desc: `The Spotify Clone is a responsive and interactive web application that mimics the core features and design of the original Spotify music streaming platform. Built using HTML, CSS, and JavaScript, this project allows users to browse through a curated list of songs and control playback through a sleek, custom-designed audio player. It includes features such as play, pause, next, previous, volume control, and a dynamic progress bar that syncs with the song's current playback.`,
      img: "images/clone-1.png",
      alt: "Spotify Clone"
    },
    {
      title: "HUGO Travel Planner",
      desc: `HUGO Travel Planner is a smart web application designed to help users plan their trips efficiently. It offers features like destination search, itinerary creation, accommodation suggestions, and real-time weather updates. The intuitive interface and interactive map make trip planning seamless and enjoyable.`,
      img: "images/hugo.png",
      alt: "HUGO Travel Planner"
    },
    {
      title: "Movie Reservation System",
      desc: `The Movie Reservation System is a complete front-end web application that replicates the real-world movie ticket booking experience. Users can browse available movies, view posters and details, select showtimes, and choose preferred seats using a dynamic seat layout. The interface is responsive and visually engaging, ensuring a smooth experience across all devices. Once seats are selected, users proceed to a simulated payment page to review their booking summary and enter payment details.

`,
      img: "images/ticbook.jpg",
      alt: "Movie Reservation System"
    },
    {
      title: "Hotel Management",
      desc: `Hotel Management is a desktop application built using Python and Tkinter, with a MySQL backend for data storage. The system allows hotel staff to manage room bookings, check-ins, check-outs, customer details, and billing. The intuitive GUI provides forms for entering guest information, selecting room types, and generating invoices. All data is securely stored and retrieved from a MySQL database, ensuring efficient and reliable hotel operations. This project demonstrates integration of Python GUI programming with a relational database for real-world business management.`,
      img: "images/hotel.jpg", // Update this path to your hotel management image
      alt: "Hotel Management"
    }
  ];

  function updateProject() {
    const project = projects[projectIndex];
    newBox.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.desc}</p>
    `;
    projectImg.src = project.img;
    projectImg.alt = project.alt;
  }

  if (arrow && newBox && projectImg) {
    arrow.addEventListener('click', function() {
      projectIndex = (projectIndex + 1) % projects.length;
      updateProject();
    });
  }

  if (arrowLeft && newBox && projectImg) {
    arrowLeft.addEventListener('click', function() {
      projectIndex = (projectIndex - 1 + projects.length) % projects.length;
      updateProject();
    });
  }

  // Initialize with the first project
  updateProject();
});