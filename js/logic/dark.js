window.modo = modo;
export default function modo() {
    localStorage.getItem("data-bs-theme") === "dark" ? tema("light") : tema("dark");
};

function tema(opcao) {
    document.documentElement.setAttribute("data-bs-theme", opcao);
    localStorage.setItem("data-bs-theme", opcao);

    const ico = document.querySelector("#btnSwitch").classList;
    ico.remove(opcao === "dark" ? "fa-regular" : "fa-solid");
    ico.add(opcao === "dark" ? "fa-solid" : "fa-regular");
}

const opcao = localStorage.getItem("data-bs-theme");
if (opcao) { tema(opcao) };