var timeouthandle;
function countdown(minutes, seconds)
{
    var seconds = 60;
    var mins = minutes;
function tick(){
    var counter = document.getElementById("timer")
    var current_minutes = mins- 1 
    seconds--;
    counter.innerHTML =
    current_minutes.toString() +":" +(seconds <10 ? "0" :"") + String(seconds);
    if (seconds > 0){timeouthandle = setTimeout(tick ,1000);}
    else{
        if(mins > 1){
            setTimeout(function(){
                countdown(mins - 1);
            },1000);
        }
    }

}
tick();
}
countdown(2);