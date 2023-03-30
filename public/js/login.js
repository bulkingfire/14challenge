const forms = async (event) => {
  event.preventDefault();

  const emailsused = document.querySelector("#email-login").value.trim();
  const encrypted = document.querySelector("#password-login").value.trim();

  if (emailsused && encrypted) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email: emailsused, password: encrypted }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const signingin = async (event) => {
  event.preventDefault();

  const onoma = document.querySelector("#name-signup").value.trim();
  const gmail = document.querySelector("#email-signup").value.trim();
  const cypt = document.querySelector("#password-signup").value.trim();

  if (onoma && gmail && cypt) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name: onoma, email: gmail, password: cypt }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", forms);

document.querySelector(".signup-form").addEventListener("submit", signingin);
