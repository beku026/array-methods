// 1-задание
const arr = [{id: 1, name: "Piter"}, {id: 2, name: "Nina"}];
arr.forEach((item) => {
    Object.values(item).find((value) => {
        if (value === "Nina"){
            console.log(value);
        }
    });
});

// 2-задание
const apartment = [
    {num: 1, floor: 1, people: 1},
    {num: 2, floor: 2, people: 3},
    {num: 3, floor: 3, people: 5},
    {num: 4, floor: 4, people: 2},
    {num: 5, floor: 5, people: 7},
];
apartment.forEach((item) => {
    if (item.people < 3){
        console.log(item.people);
    }
});

// 3-задание
const numSplice = [1, 2, 3, 4, 5];
numSplice.splice(3, 0, "a", "b", "c");
console.log(numSplice);

// 4-задание
const numSlice = [1, 2, 3, 4, 5];
console.log(numSlice.slice(3, 5));

// 5-задание
let mas = [15, "hello", "trump", 23, "world", 999, 176];
console.log(mas.join("---"));