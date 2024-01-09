// access the all button by his id and class

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector("#msg")

// identify the Player

let turn0 = true; //Player0 is show 0 & PlayerX is show X;

let count = 0;

//code for access the button of box.

boxes.forEach((box)=>{
	box.addEventListener("click" ,()=>{
		if(turn0){
			box.innerText = '0'
			turn0 = false;
		}else{
			box.innerText = 'X';
			turn0 = true;
		}

		box.disabled = true;
		count++;

		checkWinner();

	})
})

//Code for check Winner Pattern
const winPatterns = [
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[3,4,5],
	[6,7,8],
];

const showWinner = (winner) =>{
	msgContainer.innerText = `Congretulation , the winner is ${winner}`

}

const checkWinner = () => {

	for(let pattern of winPatterns){
       let pos1Val = boxes[pattern[0]].innerText;
	   let pos2Val = boxes[pattern[1]].innerText
	   let pos3Val = boxes[pattern[2]].innerText;

	   if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
		if(pos1Val === pos2Val && pos2Val === pos3Val){
             showWinner(pos1Val);
             return true ;
		}
	   }
	}	
}
//code for click the reset button and New Game button finction 
//nested function used
const resetGame = () =>{
	turn0 = true;
	count = 0;
	resetfun();
	msgContainer.innerText = "";
}

resetbtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame)

const resetfun = () =>{
	for(let box of boxes){
		box.innerText = "";
		box.disabled = false;
	}
}