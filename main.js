var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function Start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();


}

recognition.onresult = function(event){

    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        console.log("Taking Your selfie....................");
        speak();
    }
    
}

function speak() {
    var synth = window.speechSynthesis;

    var speakdata = "Taking Your Selfie in 5 Seconds";

    var utterThis = new SpeechSynthesisUtterance(speakdata);

    synth.speak(utterThis);
    Webcam.attach(cam);

    setTimeout(function(){
        Take_Snap();
        Save();
    },5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
});

var cam = document.getElementById("camera");

function Take_Snap() {
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = '<img id="Selfie_img" src="'+data_uri+'">';
    });
}

function Save() {
    link = document.getElementById("link");
    img = document.getElementById("Selfie_img").src;
    link.href = img;
    link.click();
}