var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();


let xhr2 = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200){
    let res = JSON.parse(xhr.responseText);
    let rLDiv = document.getElementById('roomList');
    let statusDiv = document.getElementById('employeeList')
    let roomStatus = '<ul class="rooms">';
    let roomList = '<ul>';
    
    for(let i = 0; i < res.length; i++){
      roomList += `<li>Room ${res[i].room}</li>`
      
      if(res[i].available === true){
        roomStatus += `<li class='empty'>Room ${res[i].room} Is Available</li>`;
        
      }else {
        roomStatus += `<li class='full'>Room ${res[i].room} Is Unavailable</li>`;
      }
    }
    roomList += '</ul>';
    roomStatus += '</ul>';
    
    
    rLDiv.innerHTML = roomList;
    statusDiv.innerHTML = roomStatus;
  }
}
xhr.open('GET', 'data/rooms.json');
xhr.send();