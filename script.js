document.addEventListener("DOMContentLoaded", () => {
  // ✅ MENU TOGGLE
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuBtn?.addEventListener("click", () => {
    menu?.classList.toggle("hidden");
  });

  // ✅ TYPING ANIMATION
  const titles = [
    "Web Developer",
    "JavaScript Developer",
    "UI/UX Designer",
    "Frontend Engineer"
  ];

  const typedText = document.getElementById("typedText");
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typedText.textContent = currentTitle.substring(0, charIndex);

    if (!isDeleting && charIndex === currentTitle.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1200);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  if (typedText) {
    type();
  }

  // ✅ SWIPER INITIALIZATION
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
// script.js
import { db } from "./firebase.js"; // firebase.js file se db import
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const form = document.getElementById("feedback-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Form reload hone se rokta hai

  // 1. Form ke values le lo
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // 2. Check karo ki koi field khali to nahi
  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }

  try {
    // 3. Firestore me data save karo
    await addDoc(collection(db, "feedback"), {
      name: name,
      email: email,
      message: message,
      timestamp: new Date() // Optional: date/time of feedback
    });

    alert("Feedback submitted successfully!");
    form.reset(); // Form clear kar do

  } catch (error) {
    console.error("Error submitting feedback:", error);
    alert("Something went wrong. Try again.");
  }
});
