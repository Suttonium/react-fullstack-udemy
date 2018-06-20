// function showItems(arg1,arg2,arg3){
//     var arr = [arg2,arg3].concat(arg1)
//     console.log(arr)
// }
// showItems(["dogs","cats"],"turtles","sharks");

showItems = (...args) => {
    let arr = [...args];
    console.log(arr);
};

showItems(["dogs", "cats"], "turtles", "sharks");