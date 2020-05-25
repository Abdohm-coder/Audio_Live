class Player{
  constructor(){
    var heightMain = document.getElementById("player");
    heightMain.style.height = screen.height + "px";
    if(screen.width<620){
      heightMain.style.width = screen.width + "px";
    }

    var heightDiv = document.getElementById("content");
    heightDiv.style.height = screen.height-300 + "px";
  }
}
onload = new Player();


class audioPlayer{
  constructor(){
    this.audio_file = document.getElementById("audio");
    this.title_audio = document.getElementById("title");
    this.play_pause_btn = document.getElementById("play_pause");
    this.isPlayed;
    this.play_pause_btn.addEventListener("click",()=>{
      this.play_pause();
    });

    this.names_radio = [];
    this.names_radio[0] = "Radio Algeria 1";
    this.names_radio[1] = "Radio Algeria 2";
    this.names_radio[2] = "Radio Algeria 3";

    this.source_audio = []; 
    this.source_audio[0] = "https://ghardaia.ice.infomaniak.ch/47.aac";
    this.source_audio[1] = "https://elbahdja.ice.infomaniak.ch/elbahdja-32.aac";
    this.source_audio[2] = "https://mostaganem.ice.infomaniak.ch/27.aac";
    this.server = 0;

    this.setResourse();
    document.getElementById("next").addEventListener("click",()=>{
      if(this.server<this.source_audio.length-1){
        ++this.server;
        this.isPlayed = false;
      }else{
        this.server = 0;
      }
      this.setResourse();
    });
    document.getElementById("back").addEventListener("click",()=>{
      if(this.server>0){
        --this.server;
        this.isPlayed = false;
      }else{
        this.server = this.source_audio.length-1;
      }
      this.setResourse();
    });
  }

  setResourse(){
    this.audio_file.src = this.source_audio[this.server];
    this.audio_file.innerHTML = this.names_radio[this.server];
    this.play_pause();
  }

  play_pause(){
    if(this.isPlayed == false){
      this.audio_file.play();
      this.play_pause_btn.src = "pause.png";
      this.isPlayed = true;
    }else{
      this.audio_file.pause();
      this.play_pause_btn.src = "play.png";
      this.isPlayed = false;
    }
  }

}
onload = new audioPlayer();