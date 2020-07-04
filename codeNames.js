let source = document.getElementsByClassName("grid")[0];

function shuffle(array) {
  var i = array.length,
      j = 0,
      temp;

  while (i--) {

      j = Math.floor(Math.random() * (i+1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;

  }

  return array;
}

function getRandomLetter()
{
 let randNum =  Math.floor((Math.random() * 26) + 1);
 return String.fromCharCode(randNum+96);
}


function setRandomWord(box)
{
  const randLetter = getRandomLetter();
    const url = `https://api.datamuse.com/words?sp=${randLetter}*&md=p&max=200`;
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
  
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
       
        let result = xhr.response;
        isNoun = false;
        while(isNoun == false)
        {
        rand = Math.floor(Math.random() * 200);
        if(result[rand].tags){
          for(i=0; i < result[rand].tags.length; i++)
          {
            if(result[rand].tags[i] == "n")
            {
              isNoun = true;
              break;
            }   
          } 
        }    
        }
        console.log(result[rand].word);
        box.innerHTML = result[rand].word;
      }
    };
    xhr.open('GET', url);
    xhr.send();

}

let script = document.createElement('script');
script.src = "https://randomwordgenerator.com/.json?callback=getRandomWord";
document.body.append(script);


let arr = [];
let boxes = [];
for(i = 0; i < 25; i++)
{
  arr[i] = i;
}
whoFirst = Math.floor(Math.random() * (2))+1;
array = shuffle(arr);


let teamButton = document.getElementById("teamButton");

function mouseOut(event){
  event.target.style.boxShadow = '5px 5px 5px hsl(193, 0%, 65%)';
  event.target.style.border ='hsla(10, 60%, 20%,.25) solid 1px';
}

teamButton.onmouseover = () => {
 teamButton.style.boxShadow = '5px 5px 5px hsl(90, 92%, 86%)';
 teamButton.style.border = '1px solid hsl(90, 89%, 68%)';
 teamButton.innerHTML = "change team"
 teamButton.style.color = 'hsl(153, 55%, 55%)';
};

function changeTeamtoRed(){
  teamButton.innerHTML = 'red turn';
  teamButton.style.color = 'rgb(247, 125, 111)';
  redTurn = true;
}


function changeTeamtoBlue(){
  teamButton.innerHTML = 'blue turn';
  teamButton.style.color = 'rgb(109, 192, 252)';
  redTurn = false;
}
teamButton.addEventListener("mouseout", mouseOut);
teamButton.addEventListener("mouseout", function() {
  if(redTurn)
  {
    changeTeamtoRed();
  }
  else
  {
    changeTeamtoBlue();
  }
});

let redTurn;
teamButton.onclick = () => {
  if(redTurn == true)
  {
    changeTeamtoBlue();
  }
  else {
    changeTeamtoRed();
  }
}
let curColor;
if(whoFirst == 1)
{
  curColor = "red";
  redTurn = true;
  changeTeamtoRed();
}
else{
  curColor = "blue";
  changeTeamtoBlue();
}

for(i = 0; i < 9; i++){
  boxes[array[i]] = curColor;
}
if(whoFirst == 1)
{
  curColor = "blue";
}
else{
  curColor = "red";
}
for(i = 9; i < 17; i++){
  boxes[array[i]] = curColor;

}
for(i = 17; i < 24; i++){
  boxes[array[i]] = "gray";
}
boxes[array[i]] = "black";


for(i = 0; i < 25; i++)
{
  let newBox = document.createElement('section');
  if(boxes[i] == 'red'){
  newBox.className = 'box red';
  }
  else if(boxes[i] == 'blue'){
    newBox.className = 'box blue';
    }
   else if(boxes[i] == 'gray'){
      newBox.className = 'box gray';
      }
    else  if(boxes[i] == 'black'){
        newBox.className = 'box black';
        }
        newBox.id = i;
      setRandomWord(newBox);
        source.appendChild(newBox);
}

let codeMasterButton = document.getElementById("codeMaster");
let resetButton = document.getElementById("resetGame");


function bottomButtonsMouseOver(event)
{
  event.target.style.boxShadow = '5px 5px 5px hsl(177, 74%, 73%)';
  event.target.style.border = '1px solid hsl(182, 80%, 82%)';
}

codeMasterButton.addEventListener("mouseout", mouseOut);
resetButton.addEventListener("mouseout", mouseOut);
codeMasterButton.addEventListener("mouseover", bottomButtonsMouseOver);
resetButton.addEventListener("mouseover", bottomButtonsMouseOver);


var isMaster = false;


function setBackgroundRed(element)
{

element.style.backgroundColor = "rgb(245, 107, 86)";
}

function setBackgroundBlue(element)
{
element.style.backgroundColor = 'rgba(93, 188, 210, 0.35)';
}

function setBackgroundGray(element)
{
element.style.backgroundColor = 'rgb(219, 213, 213)';
}

function setBackgroundBlack(element)
{
element.style.backgroundColor = 'rgb(128, 125, 125)';
}

function setBackgroundtoDefault(element)
{
element.style.backgroundColor = 'rgb(255, 247, 204)';
}

codeMasterButton.onclick = () => {
  
  let cur;

  if(!isMaster)
  {
    isMaster = true;

     cur = document.getElementsByClassName("red");

    for(i=0; i < cur.length; i++)
    {
      setBackgroundRed(cur[i]);
    }
   cur = document.getElementsByClassName("blue");
    for(i=0; i < cur.length; i++)
    {
      setBackgroundBlue(cur[i]);
    }
    cur = document.getElementsByClassName("gray");
   for(i=0; i < cur.length; i++)
    {
      setBackgroundGray(cur[i]);
    }

    cur = document.getElementsByClassName("black")[0];
    setBackgroundBlack(cur);

  }
 else
 {
   isMaster = false;
for(i = 0; i < 25; i++)
  cur = document.getElementsByClassName('box');
  for(i=0; i < cur.length; i++)
    {
      if(!isClicked[i])
      {
      setBackgroundtoDefault(cur[i]);
      }
    }
 }
   
};

resetButton.onclick = () => {
  var reset = confirm("Are you sure you want to reset Game?")
if(reset)
{
  for(i=0; i<25; i++){
    setBackgroundtoDefault(box[i]);
  }
}
}


isClicked = [];
isClicked.length = 25;
for(var i = 0; i < 25; i++)
{
  isClicked[i] = false;
}
let box = document.getElementsByClassName("box");


let onClick = function(event) {
  box[event.target.id].style.cursor = "default";


 isClicked[event.target.id] = true;
 switch(event.target.className) {
   
  case 'box red':
    setBackgroundRed(box[event.target.id]);
    if(redTurn == false)
    {
      changeTeamtoRed();
    }
    break;
  case 'box blue':
    setBackgroundBlue(box[event.target.id]);
    if(redTurn == true)
    {
      changeTeamtoBlue();
    }
    break;
  case 'box gray':
    setBackgroundGray(box[event.target.id]);
    if(redTurn == true)
    {
      changeTeamtoBlue();
    }
    else{
      changeTeamtoRed();
    }
    break;
  default:
    setBackgroundBlack(box[event.target.id]);
    }


}

let onHover = function(event) {
  if(!isClicked[event.target.id] && !isMaster)
  {
     box[event.target.id].onclick = onClick;
  event.target.style.cursor = "pointer";
  }
}


for(i = 0; i < box.length; i++)
{
  box[i].addEventListener('mouseover', onHover);

}


