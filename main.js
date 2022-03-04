function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PDTAnc_Fx/model.json',modelReady);

}
function modelReady(){
console.log("model is ready");
classifier.classify(gotResult)
}
function gotResult(error, results){
    if (error)
    {console.error(error);}
    else {
        console.log(results);
        document.getElementById("result_label").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(1);
    }
    
}


  