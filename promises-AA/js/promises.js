const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

function getJSON(url) {
  return new Promise((reject,resolve)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
    if(xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      resolve(data);
    } else {
      reject(Error(xhr.statusText));
    }
  };
  xhr.onerror = () => reject(Error('Network Error'));
  xhr.send();
  });
  
}

function getProfiles(json) {
  const profiles = json.people.map( person => {
   return  getJSON(wikiUrl + person.name);      
  }); 
  return promise.all(profiles);
}

function generateHTML(data) {
  data.map(person =>{
     const section = document.createElement('section');
    peopleList.appendChild(section);
    section.innerHTML = `
    <img src=${person.thumbnail.source}>
    <h2>${person.title}</h2>
    <p>${person.description}</p>
    <p>${person.extract}</p>
  `;
  })
 
}

btn.addEventListener('click', (event) => {
  event.target.textContent = 'Loading...';
  getJSON(astrosUrl)
    .then(getProfiles)
      .then(generateHTML)
        .catch(err=>{
          peopleList.innerHTML = '<h3>Something went wrong :(</h3>'
        })
        .finally(event.target.remove())
      
      
  
});


//fetch
btn.addEventListener('click', (event) => {
  event.target.textContent = 'Loading...';
  fetch(astrosUrl)
    .then(res => res.json());
    .then(getProfiles)
      .then(generateHTML)
        .catch(err=>{
          peopleList.innerHTML = '<h3>Something went wrong :(</h3>'
        })
        .finally(event.target.remove())
      
      
  
});






