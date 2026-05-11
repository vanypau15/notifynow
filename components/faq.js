const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  const btn = item.querySelector(".faq-question");
  const icon = item.querySelector(".icon");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      icon.textContent = "×";
    } else {
      icon.textContent = "+";
    }
  });
});