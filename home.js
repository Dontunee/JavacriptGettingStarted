//create arrays
let values = ["a","b","c"];

//How to access element of an array
console.log(values[0]);

// How to manipulate arrays
//push -> add to the last item
//pop -> takes the last element off
//shift -> removes the first element and allows access
//unshift -> adds to the first element

values.push("d","e", "f");
console.log(values);
const last = values.pop();

const first = values.shift();
values.unshift("a");
console.log(values);

//Array searching and loooping

const arraySearch = ["a","b","c"];
console.log(arraySearch.indexOf("a"));
const set = arraySearch.filter(function(item)
{
    return item > "b";
})



