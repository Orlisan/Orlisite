import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
export class Project_info{
    #pathImg;
    #title;
    #summary;
    #pathDescription;
    #jarPath;
    #id;
    constructor(pathImg, title, summary, id, pathDescription, jarPath) {
        this.#pathImg = pathImg;
        this.#summary = summary;
        this.#title = title;
        this.#pathDescription = pathDescription;
        this.#jarPath = jarPath;
        this.#id = id;
    }
    getImgPath(){
        return this.#pathImg;
    }
    getTitle(){
        return this.#title;
    }
    getSummary(){
        return this.#summary;
    }
    async getDescription(){
        try{
            const markDownGrezzo = await fetch(this.#pathDescription);
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
}