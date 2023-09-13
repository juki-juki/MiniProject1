// JavaScript for Age Verification
document.addEventListener("DOMContentLoaded", function() {
  var ageVerificationModal = new bootstrap.Modal(document.getElementById("ageVerificationModal"), {
    backdrop: 'static', // Prevents closing the modal by clicking outside
    keyboard: false,    // Prevents closing the modal with the keyboard Esc key
  });

  // Show the age verification modal automatically when the page loads
  ageVerificationModal.show();

  // Handle the "Yes" button click
  document.getElementById("confirmAge").addEventListener("click", function() {
    // Close the modal when the user confirms their age
    ageVerificationModal.hide();
  });

  // Handle the "No" button click
  document.querySelector("#ageVerificationModal button[data-bs-dismiss='modal']").addEventListener("click", function() {
    // Close the current tab (window) when the user clicks "No"
    window.close();
  });
});
