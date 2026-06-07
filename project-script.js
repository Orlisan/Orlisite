import * as Progetti from "./var_globali.js";
import * as Instanze from "./menu_instanze.js";

Instanze.creaLogo();
Instanze.creaBarraDiRicerca();
Instanze.creaMenu(
  Progetti.mods,
  ".menu_mods",
  "mods_minecraft",
  "Mod Di Minecraft",
);
Instanze.creaMenu(
  Progetti.altriProgetti,
  ".menu_altri_progetti",
  "altri_progetti",
  "Altri Progetti",
);

(async () => {
  const params = new URLSearchParams(window.location.search);
  const projectid = params.get("id");
  const progetto = Progetti.projectIds[projectid];
  if (!progetto) {
    const tux = document.createElement("img");
    tux.src = "./textures/404.png";
    tux.classList.add("tux");
    document.querySelector(".schermo_sotto").appendChild(tux);
    const error = document.createElement("div");
    error.classList.add("error_404");
    error.textContent = "Oops, " + projectid + " non rientra nei nostri dati";
    document.querySelector(".schermo_sotto").appendChild(error);
    document.querySelector(".download_file").style.display = "none";
  } else {
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
    console.log(
      imgProject.offsetHeight < document.documentElement.clientHeight,
    );
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

    const galleryButton = document.createElement("button");
    galleryButton.classList.add("gallery_button");
    galleryButton.textContent = "Galleria";
    document.querySelector(".schermo_sotto").appendChild(galleryButton);
    let giapremuto = false;
    galleryButton.addEventListener("click", function () {
      console.log("test superato");
      giapremuto = !giapremuto;
      if (giapremuto) {
        console.log("test 2 superato");
        galleryButton.textContent = "Descrizione";
        descrizione.style.display = "none";
        document.querySelector(".sfondo_descrizione").style.display = "none";
        const immagini = progetto.getGallery();
        console.log(immagini);
        console.log(immagini[0]);
        let indexCorrente = 0;
        let immagineCorrente = immagini[indexCorrente];
        const imgCorrente = document.createElement("img");
        imgCorrente.classList.add("img_corrente")
        imgCorrente.src = immagineCorrente;
        imgCorrente.style.position = "absolute";
        imgCorrente.style.left = "2%";
        imgCorrente.style.top = "35%";
        imgCorrente.style.zIndex = "10";
        document.querySelector(".schermo_sotto").appendChild(imgCorrente);
        const buttonDestra = document.createElement("button");
        const buttonSinistra = document.createElement("button");
        const imgDestra = document.createElement("img");
        const imgSinistra = document.createElement("img");
        buttonDestra.style.position = "absolute";
        buttonSinistra.style.position = "absolute";
        buttonDestra.style.zIndex = "10";
        buttonSinistra.style.zIndex = "10";
        buttonDestra.classList.add("buttonDestra");
        buttonSinistra.classList.add("buttonSinistra");
        imgDestra.src = "textures/freccia_pagina.svg";
        imgSinistra.src = "textures/freccia_pagina.svg";
        imgSinistra.style.transform = "rotate(180deg)";
        buttonDestra.style.height = "20px";
        buttonDestra.style.width = "20px";
        buttonSinistra.style.height = "20px";
        buttonSinistra.style.width = "20px";
        buttonDestra.style.top = "80%";
        buttonSinistra.style.top = "80%";
        buttonDestra.style.left = "55%";
        buttonSinistra.style.left = "45%";
        buttonDestra.appendChild(imgDestra);
        buttonSinistra.appendChild(imgSinistra);
        imgDestra.width = buttonDestra.style.width;
        imgSinistra.width = buttonSinistra.style.width;
        imgDestra.height = buttonDestra.style.height;
        imgSinistra.height = buttonSinistra.style.height;
        document.querySelector(".schermo_sotto").appendChild(buttonDestra);
        document.querySelector(".schermo_sotto").appendChild(buttonSinistra);
        buttonSinistra.addEventListener("click", function () {
          if (indexCorrente - 1 >= 0) {
            indexCorrente--;
            immagineCorrente = immagini[indexCorrente];
            imgCorrente.src = immagineCorrente;
          }
        });
        buttonDestra.addEventListener("click", function () {
          if (indexCorrente + 1 < immagini.length) {
            indexCorrente++;
            immagineCorrente = immagini[indexCorrente];
            imgCorrente.src = immagineCorrente;
          }
        });
      } else {
        galleryButton.textContent = "Galleria";
        document.querySelector(".buttonDestra").remove();
        document.querySelector(".buttonSinistra").remove();
        document.querySelector(".img_corrente").remove();
        descrizione.style.display = "";
        document.querySelector(".sfondo_descrizione").style.display = "";
      }
    });
  }
})();
