
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

// New hover effect implementation
document.querySelectorAll('.category-item').forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'translateY(-5px)';
    item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });

  item.addEventListener('mouseout', () => {
    item.style.transform = 'translateY(0)';
    item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});
document.querySelectorAll('.category-item').forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'translateY(-10px)';
    item.style.transition = 'transform 0.3s cubic-bezier(0.42, 0, 0.58, 1.5)'; // Bounce effect
  });

  item.addEventListener('mouseout', () => {
    item.style.transform = 'translateY(0)';
  });
});



window.addEventListener('scroll', () => {
  let elements = document.querySelectorAll('.category-item, .layout-text, .footer-column');
  elements.forEach(el => {
    let rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(50px)';
    }
  });
});

// Floating Animation for Hero Section Images
document.querySelectorAll('.slideshow-container img').forEach(img => {
  img.style.position = 'relative';
  img.style.transition = 'transform 2s ease-in-out';

  function float() {
    img.style.transform = `translateY(${Math.random() * 10 - 5}px) translateX(${Math.random() * 10 - 5}px)`;
  }

  setInterval(float, 2000);
});

// Hover Effect on the "Sign Up for Email" Button
const signUpButton = document.querySelector('.cta-button');

signUpButton.addEventListener('mouseover', () => {
  signUpButton.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
  signUpButton.style.transform = 'scale(1.1)';
  signUpButton.style.backgroundColor = '#FF5733';
  signUpButton.style.color = '#FFF';
});

signUpButton.addEventListener('mouseout', () => {
  signUpButton.style.transform = 'scale(1)';
  signUpButton.style.backgroundColor = 'white';
  signUpButton.style.color = '#005f80';
});


// Prevent variable redeclaration by using `let` or checking if the variable already exists
if (!window.emailSubscriptionInitialized) {
  // Sign-Up Button Functionality
  const signUpButton = document.querySelector('#signUpButton');
  const emailModal = document.querySelector('#emailModal');
  const modalOverlay = document.querySelector('#modalOverlay');
  const submitEmailButton = document.querySelector('#submitEmail');
  const closeModalButton = document.querySelector('#closeModal');
  const emailInput = document.querySelector('#emailInput');
  const feedbackMessage = document.querySelector('#feedbackMessage');

  // Open the modal when the "Sign Up for Email" button is clicked
  signUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    emailModal.style.display = 'block';
    modalOverlay.style.display = 'block';
  });

  // Close the modal when the "Close" button is clicked
  closeModalButton.addEventListener('click', () => {
    emailModal.style.display = 'none';
    modalOverlay.style.display = 'none';
    emailInput.value = ''; // Clear the input field
    feedbackMessage.textContent = ''; // Clear feedback message
  });

  // Handle email submission
  submitEmailButton.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation

    if (emailRegex.test(email)) {
      feedbackMessage.textContent = 'You have subscribed!';
      feedbackMessage.style.color = 'green';
      setTimeout(() => {
        emailModal.style.display = 'none';
        modalOverlay.style.display = 'none';
        emailInput.value = ''; // Clear the input field
        feedbackMessage.textContent = ''; // Clear feedback message
      }, 2000);
    } else {
      feedbackMessage.textContent = 'Please enter a valid email.';
      feedbackMessage.style.color = 'red';
    }
  });

  // Set a flag to prevent redeclaration
  window.emailSubscriptionInitialized = true;
}
