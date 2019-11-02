const database = firebase.database();

const rock1 = document.getElementById("rock1");
const paper1 = document.getElementById("paper1");
const scissors1 = document.getElementById("scissors1");

const rock2 = document.getElementById("rock2");
const paper2 = document.getElementById("paper2");
const scissors2 = document.getElementById("scissors2");

const player1Option = document.getElementById("player1Option")
const player2Option = document.getElementById("player2Option")

const reset = document.getElementById("reset");
const resetMatch = document.getElementById("rs")

const p1Count = document.getElementById("p1Count");
const p2Count = document.getElementById("p2Count");
const tieCount = document.getElementById("tieCount");

reset.addEventListener('click', function(){
    option = ""
    database.ref("player1/").set({
        option: option
    });
    database.ref("player2/").set({
        option: option
    });
    count1 = 0;
    count2 = 0;
    tie = 0;
    database.ref("points/player1/").set({
        win: count1
    });
    database.ref("points/player2/").set({
        win: count2
    });
    database.ref("points/tie/").set({
        count: tie
    });
    r1 = false;
    p1 = false;
    s1 = false;

    r2 = false;
    p2 = false;
    s2 = false;

    block1 = false;
    block2 = false;
    
    player1Option.style.background = "black";
    player2Option.style.background = "black";
})

resetMatch.addEventListener('click', function(){
    option = ""
    database.ref("player1/").set({
        option: option
    });
    database.ref("player2/").set({
        option: option
    });
    r1 = false;
    p1 = false;
    s1 = false;

    r2 = false;
    p2 = false;
    s2 = false;

    block1 = false;
    block2 = false;
    
    player1Option.style.background = "black";
    player2Option.style.background = "black";
})



let option;

let r1 = false;
let p1 = false;
let s1 = false;

let r2 = false;
let p2 = false;
let s2 = false;

let block1 = false;
let block2 = false;

rock1.addEventListener('click', function(){
    if(block1 === false){
        option = "rock"
        database.ref("player1/").set({
            option: option
        });
        r1 = true;
        check();
        block1 = true;
    }
})
paper1.addEventListener('click', function(){
    if(block1 === false){
        option = "paper"
        database.ref("player1/").set({
            option: option
        });
        p1 = true;
        check();
        block1 = true;
    }
})
scissors1.addEventListener('click', function(){
    if(block1 === false){
        option = "scissors"
        database.ref("player1/").set({
            option: option
        });
        s1 = true;
        check();
        block1 = true;
    }
})
/*-------------------------------------------------------------------*/
rock2.addEventListener('click', function(){
    if(block2 === false){
        option = "rock"
        database.ref("player2/").set({
            option: option
        });
        r2 = true;
        check();
        block2 = true;
    }
})
paper2.addEventListener('click', function(){
    if(block2 === false){
        option = "paper"
        database.ref("player2/").set({
            option: option
        });
        p2 = true;
        check();
        block2 = true;
    }
})
scissors2.addEventListener('click', function(){
    if(block2 === false){
        option = "scissors"
        database.ref("player2/").set({
            option: option
        });
        s2 = true;
        check();
        block2 = true;
    }
})

let count1 = 0;
let count2 = 0;
let tie = 0;



function check(){
    pli = false;
    if (r1 === true && s2 === true){
        count1++;
        database.ref("points/player1/").set({
            win: count1
        });
        display()
    }
    if (p1 === true && r2 === true){
        count1++;
        database.ref("points/player1/").set({
            win: count1
        });
        display()
    }
    if (s1 === true && p2 === true){
        count1++;
        database.ref("points/player1/").set({
            win: count1
        });
        display()
    }
/*------------------------------------------------------------------*/
    if (r2 === true && s1 === true){
        count2++;
        database.ref("points/player2/").set({
            win: count2
        });
        display()
    }
    if (p2 === true && r1 === true){
        count2++;
        database.ref("points/player2/").set({
            win: count2
        });
        display()
    }
    if (s2 === true && p1 === true){
        count2++;
        database.ref("points/player2/").set({
            win: count2
        });
        display()
    }
/*------------------------------------------------------*/
    if (r1 === true && r2 === true){
        tie++;
        database.ref("points/tie/").set({
            count: tie
        });
        display()
    }
    if (p1 === true && p2 === true){
        tie++;
        database.ref("points/tie/").set({
            count: tie
        });
        display()
    }
    if (s1 === true && s2 === true){
        tie++;
        database.ref("points/tie/").set({
            count: tie
        });
        display()
        
    }
    
}

function display(){
    player1Option.style.background = "white";
    player2Option.style.background = "white";
}

database.ref().on("value", function(snapshot) {
    p1Count.textContent = snapshot.val().points.player1.win;
    p2Count.textContent = snapshot.val().points.player2.win;
    tieCount.textContent = snapshot.val().points.tie.count;
   
    player1Option.textContent = snapshot.val().player1.option;
    player2Option.textContent = snapshot.val().player2.option;
    
});

