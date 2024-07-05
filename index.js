let cMode=document.querySelector("#mode");
let color ="dark";//dark
let body=document.querySelector("body");



cMode.addEventListener("click" , ()=>
{

if(color==="dark")
{
  color="light";
  body.classList.add("light");
  body.classList.remove("dark");
  
}
else
{
  color="dark";
  body.classList.add("dark");
  body.classList.remove("light");
}

console.log(color);
});


let userScore=0;
let compScore=0;

                                  //images declare
const choices=document.querySelectorAll(".choice");
                                 //result declare
const msg=document.querySelector("#msg");
                                 //Score declare
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const iSelected=document.querySelector("#i-selcted");
const compSelected=document.querySelector("#comp-selected");
const userSelected= document.querySelector("#user-selected")

                                                   //  for random turn of pc
const genCompChoice=()=>
{
    const option =["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    compSelected.innerText=option[randIdx];
    // userSelected.innerText=option[randIdx];
    return option[randIdx];
    
};


const drawGame =()=>
{   
    msg.innerText="Game Was Draw. Play it again";
    msg.style.backgroundColor="#081b31"
};


                                             //  showing winner
const showWinner=(userWin) =>
{
  if(userWin) {
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText="You Win";
    msg.style.backgroundColor="green";
  }else
  {
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText="You Lose";
    msg.style.backgroundColor="red";
  }
};


                                     // Starting game
const playGame=(userchoice)=>
{
    //generate computer choice
    const compChoice=genCompChoice();

    if(userchoice === compChoice)
    {
        drawGame();
    }else{
      let userWin=true;
      if(userchoice==="rock")
      {
        userWin = compChoice==="paper"?false:true;
      }
      else if(userchoice==="paper") {
        userWin = compChoice==="scissors"?false:true;
      }
      else {
        userWin = compChoice==="rock"?false:true;
      }
      showWinner(userWin,userchoice,compChoice);
    }
  

};

                                      // For clicking element
choices.forEach((choice)=>
{
  choice.addEventListener("click",()=>
  {
    const userchoice=choice.getAttribute("id")
    userSelected.innerHTML=userchoice
    playGame(userchoice);
  });
});