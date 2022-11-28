var SpeechRecognition= window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var Textbox=document.getElementById("textbox");
function start(){
    Textbox.innerHTML="";
    recognition.start();
}
function speak(){
    var synth= window.SpeechSynthesis;
    speakData= "Tirando sua selfie em 5 segundos";
    var utterThis= new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
        Save();
    }, 5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format: 'jpeg',
    jpeg_quality:90
});