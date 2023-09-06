document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("passwordInput");
    const submitButton = document.getElementById("submitButton");
  
    submitButton.addEventListener("click", function () {
      const enteredPassword = passwordInput.value;
  
      if (enteredPassword === "1234") {
        window.location.href = "app.html"; // Redirecionar para a página secreta
      } else {
        alert("Senha incorreta. Tente novamente.");
      }
    });
  });
  