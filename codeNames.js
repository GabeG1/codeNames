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


let arr = [];
let boxes = [];
for(i = 0; i < 25; i++)
{
  arr[i] = i;
}
whoFirst = Math.floor(Math.random() * (2))+1;
array = shuffle(arr);

let curColor;
if(whoFirst == 1)
{
  curColor = "red";
}
else{
  curColor = "blue";
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
        newBox.innerHTML = i+1;
        newBox.id = i;
        source.appendChild(newBox);
}

let codeMasterButton = document.getElementById("codeMaster");

codeMasterButton.onmouseover = () => {
  codeMasterButton.style.boxShadow = '5px 5px 5px hsl(177, 74%, 73%)';
  codeMasterButton.style.border = '1px solid hsl(182, 80%, 82%)';
  };

codeMasterButton.onmouseout = () => {
  codeMasterButton.style.boxShadow = '5px 5px 5px hsl(193, 0%, 65%)';
  codeMasterButton.style.border ='hsla(10, 60%, 20%,.25) solid 1px';
  };

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

isClicked = [];
isClicked.length = 25;
for(var i = 0; i < 25; i++)
{
  isClicked[i] = false;
}
let box = document.getElementsByClassName("box");

let onHover = function(event) {
     box[event.target.id].onclick = onClick;
  event.target.style.cursor = "pointer";
}

let onClick = function(event) {
  box[event.target.id].style.cursor = "default";

 isClicked[event.target.id] = true;
 switch(event.target.className) {
   
  case 'box red':
    setBackgroundRed(box[event.target.id]);
    break;
  case 'box blue':
    setBackgroundBlue(box[event.target.id]);
    break;
  case 'box gray':
    setBackgroundGray(box[event.target.id]);
    break;
  default:
    setBackgroundBlack(box[event.target.id]);
    }
     removeEventListenerbox('click', box[event.target.id]);
  removeEventListenerbox('mouseover', box[event.target.id]);

}
  box.forEach(addEventListener('mouseover', onHover));



