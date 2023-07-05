
function speak(){
    setTimeout(function()
    {
        img_id="result1"
        take_snapshot();
        speak_data="Taking your next Selfie in 10 seconds";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        SpeechSynthesis.speak(utterThis);
    },5000);
    setTimeout(function()
    {
        img_id="result2"
        take_snapshot();
        speak_data="Taking your next Selfie in 10 seconds";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        SpeechSynthesis.speak(utterThis);
    },10000);
    setTimeout(function()
    {
        img_id="result3"
        take_snapshot();
        speak_data="Taking your next Selfie in 10 seconds";
        var utterThis=new SpeechSynthesisUtterance(speak_data);
        SpeechSynthesis.speak(utterThis);
    },15000);
}

function take_snapshot()
{
    console.log(img_id);
    
    Webcam.snap(function(data_uri){
        if(img_id=="result1"){
            document.getElementById("result1")='<img id="result1" src="'+data_uri+'"/>'
        }
        if(img_id=="result2"){
            document.getElementById("result12")='<img id="result2" src="'+data_uri+'"/>'
        }
        if(img_id=="result3"){
            document.getElementById("result3")='<img id="result3" src="'+data_uri+'"/>'
        }
    });
}
