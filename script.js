const play = document.getElementById("play");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const result = document.getElementById("result");
const playAgain = document.getElementById("playAgain");
const gohome = document.getElementById("gohome");
let yourchoice = "";
let computerchoice = "";
let a;
play.onclick = function () {
    showPage("middle");
}
rock.onclick = function () {
    showPage("final");
    yourchoice = "rock";
    output();
}
paper.onclick = function () {
    showPage("final");
    yourchoice = "paper";
    output();
}
scissor.onclick = function () {
    showPage("final");
    yourchoice = "scissor";
    output();
}
playAgain.onclick = function(){
    showPage("middle");
}
gohome.onclick = function () {
    showPage("first");
}

function output() {
    a = Math.floor(Math.random() * 3 + 1);
    if (a == 1) {
        computerchoice = "rock";
        document.getElementById("computerimg").src = "rock.jpg";
    }
    else if (a == 2) {
        computerchoice = "paper";
        document.getElementById("computerimg").src = "paper.jpg";
    }
    else
    {
        computerchoice = "scissor";
        document.getElementById("computerimg").src = "scissor.jpg";
    }
    if (yourchoice == "rock")
    {
        document.getElementById("youimg").src = "rock.jpg";
        if (computerchoice == "paper") {
            document.getElementById("result").textContent = "oh no😭! you lost";
            document.getElementById("result").style.color = "red";
            document.getElementById("result").style.borderColor = "rgb(255, 1, 1)";
        }
        else if (computerchoice == "scissor") {
            document.getElementById("result").textContent = "🎉congratulation😄! you won🎉";
            document.getElementById("result").style.borderColor = "rgb(1, 255, 1)";
            document.getElementById("result").style.color = "rgb(1, 255, 1)";
        }
        else {
            document.getElementById("result").textContent = "It's tie😒";
            document.getElementById("result").style.borderColor = "rgb(0, 0, 0)";
            document.getElementById("result").style.color = "black";
        }
    }
    else if (yourchoice == "paper")
    {
        document.getElementById("youimg").src = "paper.jpg";
        if (computerchoice == "scissor") {
            document.getElementById("result").textContent = "oh no😭! you lost";
            document.getElementById("result").style.borderColor = "rgb(255, 1, 1)";
            document.getElementById("result").style.color = "red";
        }
        else if (computerchoice == "rock") {
            document.getElementById("result").textContent = "🎉congratulation😄! you won🎉";
            document.getElementById("result").style.borderColor = "rgb(1, 255, 1)";
            document.getElementById("result").style.color = "rgb(1, 255, 1)";
        }
        else {
            document.getElementById("result").textContent = "It's tie😒";
            document.getElementById("result").style.borderColor = "rgb(0, 0, 0)";
            document.getElementById("result").style.color = "black";
        }
    }
    else {
        document.getElementById("youimg").src = "scissor.jpg";
        if (computerchoice == "rock") {
            document.getElementById("result").textContent = "oh no😭! you lost";
            document.getElementById("result").style.borderColor = "rgb(255, 1, 1)";
            document.getElementById("result").style.color = "red";
        }
        else if (computerchoice == "paper") {
            document.getElementById("result").textContent = "🎉congratulation😄! you won🎉";
            document.getElementById("result").style.borderColor = "rgb(1, 255, 1)";
            document.getElementById("result").style.color = "rgb(1, 255, 1)";
        }
        else {
            document.getElementById("result").textContent = "It's tie😒";
            document.getElementById("result").style.borderColor = "rgb(0, 0, 0)";
            document.getElementById("result").style.color = "black";
        }
    }

}

function showPage(pageId) {
    // Get all sections and hide them
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Show the selected section
    const activeSection = document.getElementById(pageId);
    if (activeSection) {
      activeSection.classList.add('active');
    }
  }