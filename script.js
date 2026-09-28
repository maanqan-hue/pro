/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("active");

  const icon = menuBtn.querySelector("i");

  if (nav.classList.contains("active")) {

    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");

  } else {

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  }

});


/* =====================================================
   CLOSE MOBILE MENU
   WHEN CLICKING A LINK
===================================================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});


/* =====================================================
   TYPING ANIMATION
===================================================== */

const typing = document.getElementById("typing");


const words = [
  "Web Developer",
  "Programmer",
  "Web Designer",
  "YouTuber",
  "Content Creator"
];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

  const currentWord = words[wordIndex];


  /* =========================
     TYPING
  ========================= */

  if (!deleting) {

    typing.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;


    /* Word finished */

    if (charIndex === currentWord.length) {

      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }

  }


  /* =========================
     DELETING
  ========================= */

  else {

    typing.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;


    /* Word deleted */

    if (charIndex === 0) {

      deleting = false;

      wordIndex++;


      /* Start again */

      if (wordIndex === words.length) {
        wordIndex = 0;
      }

    }

  }


  /* Typing speed */

  const speed = deleting ? 60 : 100;

  setTimeout(typeEffect, speed);
}


/* Start animation */

typeEffect();