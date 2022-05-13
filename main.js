array_1 = ['aircraft carrier','airplane','alarm clock','car','angel'];
random_no = Math.floor((Math.random()*array_1.length)+1);
Element_of_array = array_1[random_no];
timer_counter = 0;
timer_check = "";
drawn_sketch="";
answer_holder="";
score=0;
function updateCanvas() 
{
    background="white";
}
function draw()
{
    checksketch();
    if(drawn_sketch == sketch){
        answer_holder = "set";
        score = score+10;
        document.getElementById("score").innerHTML= "Score: "+score;
    }
}
function checksketch()
{
    timer_counter=1;
    document.getElementById("timer").innerHTML = "Timer: "+timer_counter;
    console.log("timer_counter",timer_counter);
    if(timer_counter>400){
        timer_counter=0;
        timer_check="completed";
    }
    if(timer_check=="completed")
    {
        timer_check=0;
        answer_holder="";
        updateCanvas();
    }
}
function setup()
{
    canvas = createCanvas(280,280);
    canvas.center();
    background="white";
}

    