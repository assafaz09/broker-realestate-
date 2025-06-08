document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const res = await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (data.success) {
    
      document.getElementById("contact-form").style.display = "none";

      
      const msg = document.getElementById("seccsess-message");
      msg.innerHTML = `<h2>תודה ${name}! נחזור אליך בהקדם ❤️</h2>`;
      msg.style.display = "block";
    } else {
      alert("שליחה נכשלה, נסה שוב.");
    }
  });
});
