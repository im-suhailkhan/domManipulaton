// 252c3b4ea594e066c0bf7ea5a4ea4323

const doc = document.getElementById('app');

fetch("https://developers.zomato.com/api/v2.1/search", {
    headers: {
        "user-key": "252c3b4ea594e066c0bf7ea5a4ea4323"
    }
}).then(data => {
    data.json().then(res => {
        console.log(res)

        res.restaurants.map(e => {
            
            let card = document.createElement('div');
            let img = document.createElement('img');
            let cardBody = document.createElement('div');
            let heading = document.createElement('h5');
            let content = document.createElement('p');
            let button = document.createElement('a');
    
            img.src = e.restaurant.thumb;
            heading.innerHTML = e.restaurant.name;
            content.innerHTML = e.restaurant.cuisines;
            button.innerText = "Khila Do ..!!"
            card.className = "card";
            img.className = "card-img-top";
            cardBody.className = "card-body";
            content.className = "card-text";
            heading.className = "card-title";
            button.className = "btn btn-primary"

            cardBody.appendChild(heading);
            cardBody.appendChild(content);
            cardBody.appendChild(button);
            card.appendChild(img);
            card.appendChild(cardBody);
            
            doc.appendChild(card);
        })

    })
})