
const menuItems = document.querySelectorAll(".has-submenu");

menuItems.forEach((item) => {
  const button = item.querySelector(":scope > .menu-toggle");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    // Закрываем соседние пункты того же уровня
    const parent = item.parentElement;

    parent.querySelectorAll(":scope > .has-submenu").forEach((sibling) => {
      sibling.classList.remove("is-open");
    });

    // Открываем выбранный пункт
    if (!isOpen) {
      item.classList.add("is-open");
    }
  });
});

// Показываем сообщение при клике по ссылке-примеру
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.href.includes("example.com")) {
      event.preventDefault();
      alert("Здесь можно перейти по ссылке: " + link.textContent);
    }
  });
});
