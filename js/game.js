//Name: Simran Macwan
//Student ID: 000820719
//Program: Pokemon Game
var l = window.location.href;
var user = {
    name: "",
    age: 0,
    fav_color: "",
    skill_level: "easy"
};
var url;
if (window.location.href.indexOf("form.html") != -1) {
    form.addEventListener("submit", function (event) {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var fav_color = document.getElementById("fv_color").value;
        var skill_level;
        if (document.getElementById("easy").checked) {
            skill_level = "Easy";
        } else if (document.getElementById("medium").checked) {
            skill_level = "Medium";
        } else if (document.getElementById("hard").checked) {
            skill_level = "Hard";
        }

        user = {
            name: name,
            age: age,
            fav_color: fav_color,
            skill_level: skill_level
        }
        localStorage.setItem("name", user.name);
        localStorage.setItem("age", user.age);
        localStorage.setItem("color", user.fav_color);
        localStorage.setItem("skill", user.skill_level);
    });
} else if (window.location.href.indexOf("Home.html" != -1)) {
    // customizing screen with user inputs
    document.getElementById("userName").innerHTML = "<h4>Username: " + localStorage.getItem("name") + "</h4>";
    document.getElementById("userAge").innerHTML = "<h4>User Age: " + localStorage.getItem("age") + "</h4>";
    document.getElementById("fav_color").innerHTML = "<h4>Favorite Color: " + localStorage.getItem("color") + "</h4>";
    document.getElementById("skill").innerHTML = "<h4>Skill Level: " + localStorage.getItem("skill") + "</h4>";

    var gameObj = [
        {
            name: "Charizard",
            img: "../imgs/Charizard.jpg",
            triversed: false
        },
        {
            name: "Gengar",
            img: "../imgs/Gengar.jpg",
            triversed: false
        },
        {
            name: "Arcanine",
            img: "../imgs/Arcanine.jpg",
            triversed: false
        },
        {
            name: "Pikachu",
            img: "../imgs/Pikachu.png",
            triversed: false
        }
    ]
    var pic = -1;
    var selected;
    var score = 0;
    var randomImage;
    function load() {
        document.getElementById("res-div").style.display = 'none';
        pic++;
        if (pic >= gameObj.length) {
            if (score > 3) {
                document.getElementById("res-div").style.display = 'flex';
                document.getElementById("main-div").style.display = 'none';
                document.getElementById("result").innerHTML = "You WON!!!";
            } else {
                document.getElementById("res-div").style.display = 'flex';
                document.getElementById("main-div").style.display = 'none';
                document.getElementById("result").innerHTML = "You Loose!!!";
            }
            return;
        }
        randomImage = Math.floor(Math.random() * 4);
        while (gameObj[randomImage].triversed) {
            if(pic >= 4) {
                break;
            }
            randomImage = Math.floor(Math.random() * 4);
        }
        gameObj[randomImage].triversed = true;
        document.getElementById("pic1").src = gameObj[randomImage].img;
        document.getElementById("score").innerHTML = "Score: " +  score;
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
            if (selected === gameObj[randomImage].name) {
                score++;
            }
            load();
        });
    }
    load();
    game();
}