document.addEventListener("DOMContentLoaded", function() {
    mostrarInfoEnlaces();
});

function mostrarInfoEnlaces() {
    const enlaces = Array.from(document.getElementsByTagName('a'));
    const numEnlaces = enlaces.length;
    const primerEnlace = enlaces[0]?.href || "No hay enlaces";
    const ultimoEnlace = enlaces[numEnlaces - 1]?.href || "No hay enlaces";

    alert(`Número de enlaces: ${numEnlaces}\nPrimer enlace: ${primerEnlace}\nÚltimo enlace: ${ultimoEnlace}`);
}
