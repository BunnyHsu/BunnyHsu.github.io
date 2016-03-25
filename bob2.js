/**
 * Created by Bunny on 2016/3/24.
 */
var FPS = 60;
setInterval(function () {
    draw("canvas");
}, 1000 / FPS);

var player =
{
    x: 50,
    y: 50,
    speed: 3,
}//Bob
var monster =
{
    x: 100,
    y: 550,
}//Zombie Mushroom
var monsterB =
{
    x: 150,
    y: 150,
}//Green light
var monsterC =
{
    x:550,
    y:550,
}
var monsterD =
{
    x: 200,
    y: 50,
    step: 4,
}
var monsterE =
{
    x: 400,
    y: 50,
    step: 5,
}
var monsterBStep = 3;
var monsterCStep =3;
var monsterStep = 3;
var tempx = monsterBStep;
var tempy = 0;

$(document).keydown(function (event) {
    if (event.keyCode == 37 && player.x >= 50) {
        player.x -= player.speed;
    } else if (event.keyCode == 39 && player.x <= 1300) {
        player.x += player.speed;
    } else if (event.keyCode == 38 && player.y >= 50) {
        player.y -= player.speed;
    }
    else if (event.keyCode == 40 && player.y <= 600) {
        player.y += player.speed;
    }
});
function initplayer() {
    player.x = 50;
    player.y = 50;
    player.speed = 3;
}
function draw(id) {
    var carvas = document.getElementById(id);
    var context = carvas.getContext("2d");
    context.beginPath();
    imgHome = new Image;
    imgHome.src = "img/home2.png";
    imgShell = new Image;
    imgShell.src = "img/shell.png";
    imgMonster = new Image;
    imgMonsterD = new Image;
    imgMonsterD.src = "img/seal.png"
    imgMonster.src = "img/squid.png";
    imgMonsterB = new Image;
    imgMonsterB.src = "img/fish.png";
    imgMap = new Image;
    imgMap.src = "img/map.jpg";
    imgMonsterC = new Image;
    imgMonsterC.src = "img/shark2.png";
    imgHome.onload = function () {
        drawmap(context, imgMap);
        context.drawImage(imgHome, 1250, 550, 100, 100);
        shell(context, imgShell);
        setmonsterC(context, imgMonsterC);
    }
    imgPlayer = new Image;
    imgPlayer.src = "img/bob2.png";
    imgPlayer.onload = function () {
        if (player.x > 1230 && player.y > 530) {
            alert("Bob has already been home");
            player.x = 1230;
            player.y = 500
        }
        else if ((monster.x - player.x) < 40 && (monster.x - player.x) > -40 && (monster.y - player.y) < 40 && (monster.y - player.y) > -40) {
            alert("Bob has been caught by Zombie Mushroom!!!");
            player.x = 50;
            player.y = 50;
            player.speed = 3;
        }
        else if ((monsterD.x - player.x) < 40 && (monsterD.x - player.x) > -40 && (monsterD.y - player.y) < 30 && (monsterD.y - player.y) > -90) {
            alert("Bob has been caught by Gloomy Bear!!!");
            initplayer();
        }
        else if ((monsterE.x - player.x) < 40 && (monsterE.x - player.x) > -40 && (monsterE.y - player.y) < 30 && (monsterE.y - player.y) > -90) {
            alert("Bob has been caught by Crazy Gloomy Bear!!!");
            initplayer();
        }
        else if ((monsterB.x - player.x) < 40 && (monsterB.x - player.x) > -40 && (monsterB.y - player.y) < 40 && (monsterB.y - player.y) > -40) {
            alert("Bob has been caught by Green Light!!!");
            initplayer();
        }
        else if ((monsterC.x - player.x) < 40 && (monsterC.x - player.x) > -40 && (monsterC.y - player.y) < 40 && (monsterC.y - player.y) > -40) {
            alert("Bob has been caught by Green Light!!!");
            initplayer();
        }

        else setplayer(context, imgPlayer, player.x, player.y);
    }
    imgMonsterD.onload = function () {
        if (monsterD.y < 50) {
            monsterD.step = -monsterD.step;
            monsterD.y += monsterD.step;
        }
        else if (monsterD.y > 550) {
            monsterD.step = -monsterD.step;
            monsterD.y += monsterD.step;
        }
        else {
            monsterD.y += monsterD.step;
        }
        setmonsterD(context, imgMonsterD, monsterD.x, monsterD.y);

    }
    imgShell.onload = function () {
        if (monsterE.y < 50) {
            monsterE.step = -monsterE.step;
            monsterE.y += monsterE.step;
        }
        else if (monsterE.y > 550) {
            monsterE.step = -monsterE.step;
            monsterE.y += monsterE.step;
        }
        else {
            monsterE.y += monsterE.step;
        }
        setmonsterD(context, imgMonsterD, monsterE.x, monsterE.y);
    }
    imgMonster.onload = function () {
        if (monster.x > 550 && monster.y < 100) {
            monsterStep = -monsterStep;
            monster.x += monsterStep;
            monster.y -= monsterStep;
        }
        else if (monster.x < 100 && monster.y > 550) {
            monsterStep = -monsterStep;
            monster.x += monsterStep;
            monster.y -= monsterStep;
        }
        else {
            monster.x += monsterStep;
            monster.y -= monsterStep;
        }
        setmonster(context, imgMonster, monster.x, monster.y);
    }
    imgMonsterC.onload = function () {
        if (monsterC.x > 550 && monsterC.y >550) {
            monsterCStep = -monsterCStep;
            monsterC.x += monsterCStep;
            monsterC.y += monsterCStep;
        }
        else if (monsterC.x < 100 && monsterC.y < 100) {
            monsterCStep = -monsterCStep;
            monsterC.x += monsterCStep;
            monsterC.y += monsterCStep;
        }
        else {
            monsterC.x += monsterCStep;
            monsterC.y += monsterCStep;
        }
        setmonster(context, imgMonsterC, monsterC.x, monsterC.y);
    }


    imgMonsterB.onload = function () {
        if (monsterB.x > 550 && monsterB.y < 200) {
            tempx = 0;
            tempy = monsterBStep;
            monsterB.x -= monsterBStep;
            monsterB.y += monsterBStep;
        }
        else if (monsterB.y > 550 && monsterB.x > 500) {
            tempx = -monsterBStep;
            tempy = 0;
            monsterB.y -= monsterBStep;
            monsterB.x -= monsterBStep;
        }
        else if (monsterB.x < 150 && monsterB.y > 500) {
            tempx = 0;
            tempy = -monsterBStep;
            monsterB.y -= monsterBStep;
            monsterB.x += monsterBStep;
        }
        else if (monsterB.y < 150 && monsterB.x < 200) {
            tempx = monsterBStep;
            tempy = 0;
            monsterB.y += monsterBStep;
            monsterB.x += monsterBStep;
        }
        else {
            monsterB.x += tempx;
            monsterB.y += tempy;
        }
        setmonster(context, imgMonsterB, monsterB.x, monsterB.y);
    }
}
function shell(context, image) {
    for (var i = 0; i < 28; i++)
        context.drawImage(image, 0 + i * 50, 0, 50, 50);
    for (var i = 0; i < 14; i++)
        context.drawImage(image, 0, 0 + i * 50, 50, 50);
    for (var i = 0; i < 14; i++)
        context.drawImage(image, 1350, 0 + i * 50, 50, 50);
    for (var i = 0; i < 28; i++)
        context.drawImage(image, 0 + i * 50, 650, 50, 50);
}
function drawmap(context, image) {
    context.drawImage(image, 0, 0, 700, 700);
    context.drawImage(image, 700, 0, 700, 700);
}
function setplayer(context, image, x, y) {
    context.drawImage(image, x, y, 50, 50);
}
function setmonster(context, image, x, y) {
    context.drawImage(image, x, y,65, 50);
}
function setmonsterD(context, image, x, y) {
    context.drawImage(image, x, y, 60, 100);
}