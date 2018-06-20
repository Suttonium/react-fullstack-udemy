// function totalDistance(distance1,distance2,distance3){
//     let distances = [distance1,distance2,distance3];
//     let total = 0;
//     for(let i = 0; i < distances.length;i++){
//         total += distances[i]
//     }
//     return total;
// }
// console.log(totalDistance(200,100,200));

totalDistance = (...args) => {
    let distances = [args[0], args[1], args[2]];
    let total = 0;
    return distances.reduce((start, item) => {
        return start + item;
    }, total);
};

console.log(totalDistance(200, 100, 200));