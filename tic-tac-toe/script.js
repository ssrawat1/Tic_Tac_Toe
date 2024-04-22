let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = ()=>{
    turnO = true;
    enableBtns();
    msgContainer.classList.add("hide");
};

btns.forEach ((btn)=>{
    btn.addEventListener("click",()=>{
        // console.log("button was clicked");
        if(turnO===true) {
             // playerO
            btn.innerText = "X";
            btn.style.backgroundColor = "#B8DBD9";
            btn.style.color = "#197BBD";
            turnO = false;
        } else{
             // playerX
            btn.innerText = "O";
            btn.style.backgroundColor = "#C7EFCF";
            btn.style.color = "#125E8A";
            turnO = true;
        }
       btn.disabled = true;
        checkWinner();
    });
});

const disableBtns = ()=>{
    for(let btn of btns){
        btn.disabled = true;
}
};
const enableBtns = ()=>{
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText ="" ;
        btn.style.backgroundColor = "";
    }

};
const showWinner = (winner) =>{
    msg.innerText = `congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();

};

const checkWinner = ()=>{
    for (let pattern of winPatterns) {
     let pos1val = btns[pattern[0]].innerText;
     let pos2val = btns[pattern[1]].innerText;
     let pos3val = btns[pattern[2]].innerText;
     if (pos1val != "" && pos2val != "" && pos3val !="") {
        if (pos1val===pos2val && pos2val===pos3val ){
            // console.log("you win the game",pos1val);
            showWinner(pos1val);
        }
     }
    } 
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);
