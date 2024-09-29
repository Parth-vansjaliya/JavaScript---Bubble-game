var timer = 6;
var score = 0;
var random_hit_number = 0;

function make_bubble() {
    var bubbles = '';
    for (let i = 0; i < 115; i++) {
        var random_num = Math.floor(Math.random()*10);
        bubbles += `<div class="bubble">${random_num}</div>`;
    }
    var bubble_div = document.querySelector('#bottom_panel');
    bubble_div.innerHTML = bubbles;
}

function run_timer(){
    var running_time = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timer_val').textContent = timer;
        }
        else{
            clearInterval(running_time);
            var bpanel = document.querySelector('#bottom_panel')
            bpanel.innerHTML = `
            <h1>Game Over</h1>
            <h1>Your Score ${score}</h1>
            `;
            bpanel.style.alignIteam = 'center';
            bpanel.style.justifyContent = 'center';
            bpanel.style.display = 'block';
        }
    }, 1000);
}

function get_new_hit(){
    random_hit_number = Math.floor(Math.random()*10);
    document.querySelector('#hit_val').textContent = random_hit_number;
}

function increase_score(){
    score += 10;
    document.querySelector('#score_val').textContent = score;
}


make_bubble();
run_timer();
get_new_hit();


document.querySelector('#bottom_panel').addEventListener('click', function(detail){
    if(Number(detail.target.innerHTML) === random_hit_number){
        increase_score();
        make_bubble();
        get_new_hit();
    }
});




