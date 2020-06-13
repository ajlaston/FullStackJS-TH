const inp = document.querySelector('input');
const p = document.querySelector('p.description');
const btn = document.querySelector('button');
const ne = document.createElement('h1');
const listItems = document.getElementsByTagName('li');
const ul = document.getElementsByTagName('ul')[0];
const itemBtn = document.querySelector('#iBtn');
const itemInp = document.querySelector('#add');
const lis = ul.children;
const firstListChild = ul.firstElementChild;
const lastListChild = ul.lastElementChild;

firstListChild.style.backgroundColor = 'blue';
lastListChild.style.backgroundColor = 'green';

 
for(let i = 0; i < lis.length; i++){
  AttachListButtons(lis[i]);
}


ul.addEventListener('click', function(event){
  //remove
  if(event.target.tagName === 'BUTTON'){
    if(event.target.className === 'remove'){
    let elem = event.target.parentNode;
    let parent = elem.parentNode;
    parent.removeChild(elem);
    }
  }
  //up
  if(event.target.tagName === 'BUTTON'){
    if(event.target.className === 'up'){
      let li = event.target.parentNode;
      let prevSib = li.previousElementSibling;
      let ul = li.parentNode;
      if(prevSib){
        ul.insertBefore(li,prevSib);
      }
    } 
  }
  //down
  if(event.target.tagName === 'BUTTON'){
    if(event.target.className === 'down'){
      let li = event.target.parentNode;
      let nextSib = li.nextElementSibling;
      if(nextSib){
        ul.insertBefore(nextSib, li);
      }
    } 
  }
});

function AttachListButtons(li) {
  const up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'up';
  li.appendChild(up);
  
  const down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'down';
  li.appendChild(down);
  
  const remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'remove';
  li.appendChild(remove);
}

function addItem(){
  let value;
  if(itemInp.value === ''){
    alert('nothing in textbox');
    return;
  } else {
    value = itemInp.value;
  }
  const li = document.createElement('li');
  li.innerHTML = value;
  AttachListButtons(li);
  ul.appendChild(li);
  return;
}

itemBtn.addEventListener('click', addItem)





btn.addEventListener('click', ()=>{
                      
                     })
console.log(p.className)