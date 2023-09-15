// JavaScript for Age Verification
document.addEventListener("DOMContentLoaded", function() {
  var ageVerificationModal = new bootstrap.Modal(document.getElementById("ageVerificationModal"), {
    backdrop: 'static', 
    keyboard: false,    
  });

  
  ageVerificationModal.show();

 
  document.getElementById("confirmAge").addEventListener("click", function() {
    
    ageVerificationModal.hide();
  });

  
  document.querySelector("#ageVerificationModal button[data-bs-dismiss='modal']").addEventListener("click", function() {
   
    window.location.href = "https://youtu.be/oHg5SJYRHA0"; 
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the toggle button
  var toggleButton = document.getElementById("toggleForms");

  // Get the login and sign-up forms
  var loginForm = document.getElementById("loginForm");
  var signUpForm = document.getElementById("signUpForm");

  // Add a click event listener to the toggle button
  toggleButton.addEventListener("click", function () {
      if (loginForm.style.display === "block") {
          // Show the sign-up form and hide the login form
          loginForm.style.display = "none";
          signUpForm.style.display = "block";
          toggleButton.textContent = "Switch to Login";
      } else {
          // Show the login form and hide the sign-up form
          loginForm.style.display = "block";
          signUpForm.style.display = "none";
          toggleButton.textContent = "Switch to Sign Up";
      }
  });
});

// Get DOM elements
const chatButton = document.getElementById('chat-button');
const chatModal = new bootstrap.Modal(document.getElementById('chat-modal'));
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// Function to open the chat modal
chatButton.addEventListener('click', () => {
    chatModal.show();
});

// Function to send a message
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim() !== '') {
        // Add the message to the chat messages
        chatMessages.innerHTML += `<div class="user-message">${message}</div>`;

        // Clear the input field
        messageInput.value = '';

        // Simulate a reply (replace with actual chat logic)
        setTimeout(() => {
            chatMessages.innerHTML += `<div class="agent-message">Thanks for your message! Our team will get back to you.</div>`;
        }, 1000);
    }
});



