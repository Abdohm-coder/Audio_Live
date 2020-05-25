class volume{
    constructor(){
        this.audio_file = document.getElementById("audio");
        this.audio_file.volume = 50/100;

        this.volume_range = document.getElementById("volume_range");
        this.volume_range.addEventListener("change",()=>{
            this.audio_file.volume = this.volume_range.value/100;
        });
        this.speed_range = document.getElementById("speed_range");
        this.speed_range.addEventListener("change",()=>{
            this.audio_file.playbackRate = this.speed_range.value/100;
        });
    }
}
onload = new volume();