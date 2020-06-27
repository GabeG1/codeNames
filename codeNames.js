let source = document.getElementsByClassName("grid")[0];

const whoFirst = Math.floor((Math.random() * 2) + 1);

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
  boxes[array[i]] = curColor
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
  newBox.className = 'red';
  }
  else if(boxes[i] == 'blue'){
    newBox.className = 'blue';
    }
   else if(boxes[i] == 'gray'){
      newBox.className = 'gray';
      }
    else  if(boxes[i] == 'black'){
        newBox.className = 'black';
        }
        newBox.id = i;
        newBox.innerHTML = i+1;
        source.appendChild(newBox);
}


