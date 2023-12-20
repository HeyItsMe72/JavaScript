export function Menu() {
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML = `
        <a href="#/">Home</a>
        <span>-</span>
        <a href="#/search">Buscar</a>
        <span>-</span>
        <a href="#/contacto">Contacto</a>
        <span>-</span>
        <a href="https://softiacodes.com" target="_blank" rel="noopener">Conóceme</a>`;
        

    return $menu;
}