class Music{
       
    constructor(title,singer,img,file){
             this.title = title;
             this.singer = singer;
             this.img = img;
             this.file = file;
    }
    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    
   new Music("Havalı Yarim","Serdar Ortaç ft. Yıldız Tilbe","havali.jpg","havali.mp3"),
   new Music("New Rules","Dua Lipa","newrules.jpeg","newRules.mp3"),
   new Music("Alors on dance","Stromae","alors.jpeg","alors.mp3")

]



