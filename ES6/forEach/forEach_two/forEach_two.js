const names = ['Francis', 'Lisa', 'Marian', 'Ron'];
let template = '';

names.forEach(function (item) {
    template += `<div>Hi, my name is ${item}</div>`
});

document.body.insertAdjacentHTML("afterbegin", template);
