const steps = [
  {
    number: 1,
    title: "Tell us about the person who passed",
    description: "Enter their name, date of birth, date of death, and address. This is stored securely and you will only ever need to do it once.",
    image: "../assets/images/Personicon.png"
  },
  {
    number: 2,
    title: "Choose the companies to notify",
    description: "Browse energy providers, banks, insurers, subscriptions, and more. Upload a death certificate once and we send it wherever it's needed",
    image: "../assets/images/BellnotifyIcon.png"
  },
  {
    number: 3,
    title: "We take care of the rest",
    description: "Each company is notified directly on your behalf. You will receive updates along the way and can return at any time to add more or make changes.",
    image: "../assets/images/Thumbsupicon.png"
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("steps");

 container.innerHTML = steps.map(step => `
  <div class="step">

    <div class="step-number">${step.number}</div>

    <img src="${step.image}" alt="" class="step-img">

    <h3 class="step-title">${step.title}</h3>
    <p class="step-description">${step.description}</p>

  </div>
`).join("");
});