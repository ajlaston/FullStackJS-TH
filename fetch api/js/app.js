const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function fetchData(url){
  return fetch(url)
  .then(res => res.json())
}

promise.all([
  fetchData('https://dog.ceo/api/breeds/list'),
  fetchData('https://dog.ceo/api/breeds/image/random')
])
.then(data => {
  const list = data[0].message;
  const randomImage = data[1].message;
  
  generateOptions(list);
  generateImg(randomImage);
});

fetchData('https://dog.ceo/api/breeds/list')
    .then(checkStatus)
    .then(data =>  generateOption(data.message))

fetchData('https://dog.ceo/api/breeds/image/random')
    .then(checkStatus)
    .then(json => generateImage(json.message))

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function checkStatus(response) {
  if(response.ok) {
    return Promise.resolve(response);
  } return Promise.reject(new Error(response.statusText))
}

function generateImage(data){
  const template = `
    <img src='${data}' >
    <p>Click to view images of ${select.value}</p>
`
 card.innerHTML = template; 
}

function generateOption(data){
  
  const option = data.map(item=> `<option value='${item}'>${item}<option>`).join('');
  select.innerHTML = option;
  }

  function fetchBreedImg(){
    const breed = select.value;
    const img = card.querySelector('img');
    const p = card.querySelector('p');
    
    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(data => {
        img.src = data.message;
        img.alt = breed;
        p.textContent = `Click more ${breed}`;
      })
  }

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
select.addEventListener('change', fetchBreedImg);
card.addEventListener('click', fetchBreedImg)


// ------------------------------------------
//  POST DATA
// ------------------------------------------

