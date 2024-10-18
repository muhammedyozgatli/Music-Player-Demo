class Music{
    constructor(title,singer,img,file){
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }


    getName() {
        return this.title + " - "+ this.singer;
    }
}


const musicList = [
    new Music("Geçiyor Zaman", "Semicenk", "1.jpeg", "1.mp3"),
    new Music("Onlar Anlamaz Halden", "Semicenk", "2.jpeg", "2.mp3"),
    new Music("Tek Başıma", "Semicenk", "3.jpeg", "3.mp3")
]