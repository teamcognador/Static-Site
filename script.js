document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("waitlistModal");
  const joinWaitlistBtn = document.getElementById("join-waitlist");
  const closeBtn = document.getElementsByClassName("close")[0];

  joinWaitlistBtn.addEventListener("click", function() {
      modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });

  const waitlistForm = document.getElementById("waitlistForm");

  waitlistForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const nameInput = waitlistForm.querySelector('input[type="text"]');
      const emailInput = waitlistForm.querySelector('input[type="email"]');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();

      if (name && email) {
          // Replace this with your logic to save the data
          console.log("Name:", name);
          console.log("Email:", email);

          // Reset form fields
          nameInput.value = "name";
          emailInput.value = "email";

          // Close the modal
          modal.style.display = "none";
      }
  });
});
