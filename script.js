const card_cont = document.querySelector('.card-container');




function getDetails(id)
{
const request = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

request.open("GET", `https://dummyjson.com/users/${id}`);
request.send();

 

request.addEventListener("load",  function () {
    //console.log(typeof request.responseText);
    if (request.status === 404) { alert('something went wrong'); return; }
    console.log(JSON.parse(request.responseText));
    const data = JSON.parse(request.responseText);
    displayUser(data,'beforeend');
    

    if (id > 1) {
        
        request2.open("GET", `https://dummyjson.com/users/${id - 1}`);
        request2.send();
    request2.addEventListener('load', function () {
         if(request2.status === 404) { return; }
            const data = JSON.parse(this.responseText);
            console.log(data);
            displayUser(data, 'afterbegin', 'other');
        });
    }
})

}


function displayUser(data,pos,className='')
{
     const card = ` <div class="card ${className}">
            <img src="${data.image}" alt="" srcset="" id="profile-pic">
             <h3 id="name">${data.firstName}</h3>
             <h3 id="surname">${data.lastName}</h3>
             <p class="email">${data.email}</p>
             <button class="btn">view profile</button>
        </div>`
    
    card_cont.insertAdjacentHTML(pos,card)
    
}

getDetails(1);

