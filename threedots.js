const ages = [15,6,44];
const ages2 = [21,56,44];
const ages3 = [45,55,99];
const allages = ages.concat(ages2).concat([5]).concat(ages3);
const allages2 = [...ages, ...ages2, 5, ...ages3];
//console.log(allages2);

const business = 750;
const minister = 450;
const sochib = 950;
const takapoisa = [750,450,9050];
//const maximum = Math.max(business,minister,sochib);
const maximum2 = Math.max(...takapoisa);
console.log(maximum2);