const url = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application.json'
    },
    body: JSON.stringify({title: 'Some dumb title'}),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Oops', error));