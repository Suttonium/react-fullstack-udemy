console.log(`The number is ${5 + 1}`); // operations can go inside template strings

function car() {
    return "car";
}

console.log(`${car()}`);  // so can functions...


const user = {
    name: "Francis",
    age: 21,
    position: "Manager"
};

console.log(`My name is ${user.name}, I am ${user.age}, and I work as a ${user.position}`); // and object references...


function request(page, id) {
    const URL = `http://server.com/${page}/${id}`;
    console.log(URL);
}

request('pages', 5);