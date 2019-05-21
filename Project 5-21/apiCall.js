var rootDiv = document.getElementById('root');
var container = document.createElement('div');
var picture = document.createElement('img');
picture.src = 'vault boy.png';
picture.style.marginLeft = '32rem';
picture.style.width = '350px';
picture.style.height = '400px';

rootDiv.appendChild(container);
container.appendChild(picture);

var request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/users', true)

request.onload = function() {
    var data =  JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(users => {
            var card = document.createElement('div');
            var heading1 = document.createElement('h1');
            heading1.textContent = users.name;
            heading1.style.color = 'darkgreen';
            heading1.classList.add('w3-container',);

            var Name = document.createElement('h1');
            Name.textContent = 'Name:';
            Name.style.color = 'darkgreen';
            Name.classList.add('w3-container',);
            Name.style.backgroundColor = 'lightblue';
            
            var email = document.createElement('h2');
            email.textContent = 'Email:';
            email.style.color = 'gold';
            email.style.textAlign = 'center';
            email.classList.add('w3-container',);
            
            

            var emailName = document.createElement('h2');
            emailName.textContent = users.email;
            emailName.style.textAlign = 'center';
            emailName.style.color = 'gold';

            var city = document.createElement('h3');
            city.textContent = 'City:';
            city.style.color = 'blue';
            city.style.textAlign = 'right';
            city.classList.add('w3-container',);
            city.style.backgroundColor = 'lightgrey';
            
            var cityName = document.createElement('h3');
            cityName.textContent = users.address.city;
            cityName.style.textAlign = 'right';
            cityName.style.color = 'blue';
            cityName.classList.add('w3-container',);
            

        

            



            container.appendChild(card);
            card.appendChild(Name);
            card.appendChild(heading1);
            card.appendChild(email);
            card.appendChild(emailName);
            card.appendChild(city);
            card.appendChild(cityName);
            



        });
    }  


    else {
        alert('This aint it Chief');
    }

}

request.send();

