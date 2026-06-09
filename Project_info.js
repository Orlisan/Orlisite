import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
import * as Traduttore from "./traduttore.js";

export class Project_info{
    #pathImg;
    #title;
    #summary;
    #pathDescription;
    #jarPath;
    #id;
    #gallery;
    #hasGallery;
    constructor(pathImg, title, summary, id, pathDescription, jarPath, hasGallery, gallery, ) {
        this.#pathImg = pathImg;
        this.#summary = summary;
        this.#title = title;
        this.#pathDescription = pathDescription;
        this.#jarPath = jarPath;
        this.#id = id;
        this.#gallery = gallery;
        this.#hasGallery = hasGallery;
    }
    getImgPath(){
        return this.#pathImg;
    }
    getTitle(){
        return this.#title;
    }
    getSummary(){
        return Traduttore.traduci(this.#summary);
    }
    async getDescription(){
        try{
            const markDownGrezzo = await fetch(Traduttore.traduci(this.#pathDescription));
            const testoMarkdown = await markDownGrezzo.text();
            return marked.parse(testoMarkdown);
        }catch(errore) {
            console.error(errore);
            return "<p> Errore nel Caricamento </p>";
        }
    }
    getJarPath() {
        return this.#jarPath;
    }
    getId() {
        return this.#id;
    }
    getGallery() {
        return this.#gallery;
    }
    hasGallery() {
        return this.#hasGallery;
    }
}