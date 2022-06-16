//Name: Simran Macwan
//Student ID: 000820719
//Program: Pokemon Game
var gameObj = [
    {
        name: "Charizard",
        img: "../imgs/Charizard.jpg"
    },
    {
        name: "Gengar",
        img: "../imgs/Gengar.jpg"
    },
    {
        name: "Arcanine",
        img: "../imgs/Arcanine.jpg"
    },
    {
        name: "Pikachu",
        img: "../imgs/Pikachu.png"
    }
]
var pic = -1;
var selected;
var score = 0;
function load() {
    pic++;
    if (pic >= gameObj.length) {
        if (score > 3) {
            document.getElementById("result").innerHTML = "<h1>You Won</h1>";
        } else {
            document.getElementById("result").innerHTML = "<h1>You Loose</h1>";
        }
        return;
    }
    document.getElementById("pic1").src = gameObj[pic].img;
    document.getElementById("score").innerHTML = "<span><h1>Score: </h1>" + score + "</span>";
}
function game() {
    document.getElementById("submit-btn").addEventListener('click', function () {
        if (document.getElementById("a").checked) {
            selected = document.getElementById("a").value;
        } else if (document.getElementById("b").checked) {
            selected = document.getElementById("b").value;
        } else if (document.getElementById("c").checked) {
            selected = document.getElementById("c").value;
        } else if (document.getElementById("d").checked) {
            selected = document.getElementById("d").value;
        }
        console.log(selected + "\t" + gameObj[pic].name);
        if (selected === gameObj[pic].name) {
            score++;
        }
        load();
    });
}
load();
game();