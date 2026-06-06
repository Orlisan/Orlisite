import * as Progetti from "./var_globali.js";

(async () => {
  console.log("Script Avviato Con Successo");
  const params = new URLSearchParams(window.location.search);
  const projectid = params.get("id");
  const progetto = Progetti.projectIds[projectid];
  const descrizione = document.querySelector(".description_project");
  document.title = "OrliSite - Progetto " + progetto.getTitle();
  const testo = await progetto.getDescription();
  descrizione.innerHTML = testo;
  document.fonts.ready.then(() => {
    const sfondoDescrizione = document.querySelector(".sfondo_descrizione");
    if (sfondoDescrizione) {
      sfondoDescrizione.style.height = descrizione.scrollHeight + 30 + "px";
    }
  });
  const titolo = document.querySelector(".title_project");
  titolo.textContent = progetto.getTitle();
  const bottone = document.querySelector(".download_file");
  bottone.textContent = "Scarica " + progetto.getTitle();
  bottone.addEventListener("click", function () {
    window.location.href = progetto.getJarPath();
  });
  const imgProject = document.createElement("img");
  imgProject.style.position = "absolute";
  imgProject.style.zIndex = "0";
  imgProject.style.left = "0";
  imgProject.style.top = "0";
  imgProject.src = progetto.getImgPath();
  imgProject.width = document.documentElement.clientWidth;
  imgProject.height = document.documentElement.clientWidth;
  document.querySelector(".schermo_sotto").appendChild(imgProject);
  console.log(imgProject.offsetHeight < document.documentElement.clientHeight);
  console.log(imgProject.offsetHeight);
  console.log(document.documentElement.scrollHeight);
  if (imgProject.offsetHeight < document.documentElement.scrollHeight) {
    const imgProject3 = document.createElement("img");
    imgProject3.style.position = "absolute";
    imgProject3.style.zIndex = "0";
    imgProject3.style.left = "0";
    imgProject3.style.top = document.documentElement.clientWidth + "px";
    imgProject3.src = progetto.getImgPath();
    imgProject3.width = document.documentElement.clientWidth;
    imgProject3.height =
      document.documentElement.scrollHeight - imgProject.offsetHeight;
    imgProject3.style.objectFit = "cover";
    imgProject3.style.objectPosition = "top";
    document.querySelector(".schermo_sotto").appendChild(imgProject3);
  }
  const imgProject2 = document.createElement("img");
  imgProject2.style.position = "absolute";
  imgProject2.style.zIndex = "1";
  imgProject2.style.left = "3%";
  imgProject2.style.top = "3%";
  imgProject2.src = progetto.getImgPath();
  imgProject2.width = "150";
  imgProject2.height = "150";
  document.querySelector(".schermo_sotto").appendChild(imgProject2);
})();
