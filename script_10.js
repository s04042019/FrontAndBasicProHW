function findAverage(arr) {
    return arr.reduce((acc, item) => acc + item, 0) / arr.length;
}
const arr = [1, 2, 4, 7, 10];
console.log(findAverage(arr));
