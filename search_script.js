const parametri = new URLSearchParams(window.location.search);

const ricerca = parametri.get("q");
document.title = "Ricerca - "+ricerca;