// Users for Login
const users = [
  { username: "Swedhapankaj123", password: "Swedhapankaj123" },
  { username: "dinesh456", password: "dinesh456" },
  { username: "siri678", password: "siri678" },
  { username: "ijas678", password: "ijas678" },
];

// Store dummy users in localStorage if not already present
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

document.addEventListener("DOMContentLoaded", () => {
  // Detect the login/logout button on all pages
  const authButton = document.getElementById("auth-button");
  const welcomeMessage = document.getElementById("welcome-message");

  if (authButton) {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      if (welcomeMessage) {
        welcomeMessage.textContent = `Hello, ${loggedInUser}!`;
      }
      authButton.textContent = "Logout";
      authButton.href = "#";
      authButton.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        alert("You have logged out.");
        window.location.href = "index.html";
      });
    } else {
      if (welcomeMessage) {
        welcomeMessage.textContent = "Hello, Guest!";
      }
      authButton.textContent = "Login";
      authButton.href = "login.html";
    }
  }

  // Handle login form submission if on the login page
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const storedUsers = JSON.parse(localStorage.getItem("users"));

      const user = storedUsers.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", user.username);
        window.location.href = "index.html";
      } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
      }
    });
  }
});
