function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarSenha(password, confirmPassword = null) {
  if (password.length < 6) {
    return "A senha deve ter pelo menos 6 caracteres.";
  }
  if (confirmPassword !== null && password !== confirmPassword) {
    return "As senhas não coincidem.";
  }
  return "";
}

// LOGIN
function initLogin() {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  const errorMsg = document.getElementById("errorMsg");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validarEmail(email)) {
      errorMsg.textContent = "Por favor, insira um e-mail válido.";
      return;
    }
    if (password.length < 6) {
      errorMsg.textContent = "A senha deve ter pelo menos 6 caracteres.";
      return;
    }

    errorMsg.textContent = "";
    window.location.href = "./paginaprincipal.html";
  });
}

// CADASTRO
function initCadastro() {
  const signupForm = document.getElementById("signupForm");
  if (!signupForm) return;

  const errorMsg = document.getElementById("errorMsg");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!validarEmail(email)) {
      errorMsg.textContent = "Por favor, insira um e-mail válido.";
      return;
    }
    const senhaErro = validarSenha(password, confirmPassword);
    if (senhaErro) {
      errorMsg.textContent = senhaErro;
      return;
    }

    errorMsg.textContent = "";
    window.location.href = "./paginaprincipal.html";
  });
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  initLogin();
  initCadastro();
});