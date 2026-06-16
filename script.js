const card_cont = document.querySelector('.card-container');




const request = new XMLHttpRequest();


request.open("GET", 'https://dummyjson.com/users/10');
request.send();


request.addEventListener("load", () => {
    //console.log(typeof request.responseText);
    console.log(JSON.parse(request.responseText));

    const data = JSON.parse(request.responseText);
    const card = ` <div class="card">
            <img src="${data.image}" alt="" srcset="" id="profile-pic">
             <h3 id="name">${data.firstName}</h3>
             <h3 id="surname">${data.lastName}</h3>
             <p class="email">${data.email}</p>
             <button class="btn">view profile</button>
        </div>`
    
    card_cont.innerHTML = card;
    
})