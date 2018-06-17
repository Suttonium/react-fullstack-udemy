const users = [
    {user: 'Martin Jones', age: 32, eyes: 'brown'},
    {user: 'Jane Doe', age: 20, eyes: 'blue'},
    {user: 'Brian Wecker', age: 40, eyes: 'green'}
];

const user_names = users.map(function (item) {
    return item.user;
});

user_names.forEach(function (item) {
    const select = document.querySelector('select');

    select.insertAdjacentHTML("afterbegin",
        `<option value="${item}">${item}</option>`)
});