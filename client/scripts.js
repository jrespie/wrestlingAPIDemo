// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://localhost:3000/wrestlers', true);

request.onload = function () {
	var data = JSON.parse(this.response);
	console.log(data);
	data.forEach(wrestler => {
		// Create a div with a card class
		const card = document.createElement('div');
		card.setAttribute('class', 'card');

		// Create an h1 and set the text content to the film's title
		const h1 = document.createElement('h1');
		if(wrestler.name != '')
			h1.textContent = wrestler.name;
		else
			h1.textContent = wrestler.realname;

		// Create a p and set the text content to the film's description
		const realName = document.createElement('span');
		const bio = document.createElement('p');
		//task.status = task.status.substring(0, 300); // Limit to 300 chars
		if(wrestler.name!=null)
			realName.textContent = "Real name: " +wrestler.realname; // End with an ellipses

		bio.textContent = wrestler.bio.substring(0,300)+"...";
		// Append the cards to the container element
		container.appendChild(card);

		// Each card will contain an h1 and a p
		card.appendChild(h1);
		card.appendChild(realName);
		card.appendChild(bio);
	  });
}
request.send();

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);