document.querySelectorAll(".faq-item").forEach(item => {
  const btn = item.querySelector(".faq-question");
  const icon = item.querySelector(".icon");

  btn.addEventListener("click", () => {

    // close all other FAQs
    document.querySelectorAll(".faq-item").forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");

        const otherIcon = otherItem.querySelector(".icon");
        if (otherIcon) {
          otherIcon.textContent = "+";
        }
      }
    });

    // toggle current FAQ
    item.classList.toggle("active");

    // update icon
    if (icon) {
      icon.textContent = item.classList.contains("active") ? "×" : "+";
    }
  });
});