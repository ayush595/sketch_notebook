function setup() {
    canvas= createCanvas(1500, 400);
    canvas.center();
    background('white');
    canvas.mouseReleased(resultsforresult);
    synth = window.speechSynthesis;
}
function preload() {
    modelattacher= ml5.imageClassifier("DoodleNet");

}
function clearcanvas() {
    background('white');
    document.getElementById('object-name').innerHTML= 'object : ';
    document.getElementById('object-accuracy').innerHTML= 'accuracy : ';
}
function draw() {
strokeWeight(3);
stroke('lightblue');
if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY)
}
}
function resultsforresult() {
    modelattacher.classify(canvas, gotresults);
}
function gotresults(error, results) {
if (error) {
    console.log(error);
} else{
    console.log(results);
    document.getElementById("object-name").innerHTML= 'object : ' + results[0].label;
    document.getElementById("object-accuracy").innerHTML= 'accuracy : ' + Math.round(results[0].confidence*100) + '%';
    utterthis= new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterthis);
    
}    


}
