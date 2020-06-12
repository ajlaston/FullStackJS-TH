const inp = document.querySelector('input');
const p = document.querySelector('p.description');
const btn = document.querySelector('button');
const ne = document.createElement('h1');
const listItems = document.getElementsByTagName('li');
const ul = document.getElementsByTagName('ul')[0];
const itemBtn = document.querySelector('#iBtn');
const itemInp = document.querySelector('#add');


ul.addEventListener('click', function(event){
  if(event.target.tagName === 'BUTTON'){
    let elem = event.target.parentNode;
    let parent = elem.parentNode;
    parent.removeChild(elem);
  }
  
      
  
  
});

function addItem(){
  if(itemInp.value === ''){
    alert('nothing in textbox');
    return;
  } else {
    var value = itemInp.value;
  }
  const li = document.createElement('li');
  li.innerHTML = `${value}<button>x</button>`;
  ul.appendChild(li);
  return;
}

itemBtn.addEventListener('click', addItem)





btn.addEventListener('click', ()=>{
                      
                     })
console.log(p.className)