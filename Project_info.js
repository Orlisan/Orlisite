export class Project_info{
    #pathImg;
    #title;
    #summary;
    constructor(pathImg, title, summary) {
        this.#pathImg = pathImg;
        this.#summary = summary;
        this.#title = title;
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
}