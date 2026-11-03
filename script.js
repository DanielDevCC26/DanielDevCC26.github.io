
const menuToggle = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector("#menu-links");

function fecharMenu() {
    menuLinks.classList.remove("menu-aberto");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle.addEventListener("click", () => {
    const aberto = menuLinks.classList.toggle("menu-aberto");

    menuToggle.setAttribute("aria-expanded", String(aberto));
    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

menuLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        fecharMenu();
    }
});
