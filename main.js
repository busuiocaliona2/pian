function sound(event) {
    console.log(event);
    let key = event.code;
    let audio;

    audio = new Audio('sounds/' + key + ".mp3");
    
    audio.onloadeddata = function() {
        let animation = {
            transform: 'scale(1.3)'
        };
        let duration = {
            duration: 100 
        };

        audio.play();
        document.getElementById(key).animate(animation, duration);
    }

    audio.onerror = function () {
        console.log("Nu exista asa nota");
    }
}
