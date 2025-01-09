let userscore = 0
let compscore = 0
 
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userscorep = document.querySelector("#user-score")
const compscorep = document.querySelector("#comp-score")


const gencompchoice = () => {
    //rock,paper,scissors
    const options = ["rock", "paper", "scissors"]
    const randidx = Math.floor(Math.random() * 3)
    return options[randidx]
}
const drawgame = (userchoice, compchoice) => {
    if (userchoice === compchoice) {
        console.log("game is draw!")
        msg.innerText = "Game is draw!.Play again "
        msg.style.backgroundColor = "green";
    }
}

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore ++ ;
        userscorep.innerText = userscore ;
        console.log("You win!")
        msg.innerText = `You win! ${userchoice} beats ${compchoice} `
        msg.style.backgroundColor = "red"

    }
    else {
        compscore ++;
        compscorep.innerText = compscore
        console.log("You lose")
        msg.innerText = `You lose!  ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor = "yellow"
        msg.style.color = "black"

    }
}

const playgame = (userchoice) => {
    console.log("user choice = ", userchoice)
    //generate comp choice
    const compchoice = gencompchoice()
    console.log("computer choice = ", compchoice)

    if (userchoice === compchoice){
        drawgame()
    }
        
else{

    let userwin = true;
    if (userchoice === "rock") {
        userwin = compchoice === "paper" ? false : true
    }
    else if (userchoice === "paper") {
        userwin = compchoice === "scissoirs" ? false : true
    }
    else  {
        userwin = compchoice === "rock" ? false : true
    }
    showwinner(userwin, userchoice, compchoice)
}
}



choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        // console.log("choice was clicked", userchoice)
        playgame(userchoice)
    })
})