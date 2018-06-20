const brands = ['Ford', 'Nissan'];
const otherBrands = ['Audi', 'BMW'];

// OLD WAY TO CONCAT
// const newArray = brands.concat(otherBrands);
// newArray.push('New Brand');

const newArray = [...brands, ...otherBrands, 'New Brand'];

console.log(newArray);

