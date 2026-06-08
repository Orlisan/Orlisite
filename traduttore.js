let current_language = "fr_fr.json";
let json = {};

await initLang();

export async function initLang() {
  try {
    const file = await fetch("./lang/" + current_language);
    json = await file.json();
  } catch (errore) {
    console.error(errore);
  }
}
export function traduci(chiave) {
  try {
    if (json[chiave]) {
      return json[chiave];
    } else {
      return chiave;
    }
  } catch (errore) {
    console.error("Si è verificato il problema:", errore);
  }
}
