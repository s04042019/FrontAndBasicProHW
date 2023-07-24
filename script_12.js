function countPositivesSumNegatives(arr) {
    if (arr == 0 || arr === null) return []
    const posResult = arr.filter(item => item > 0).length
    const negResult = arr.filter(item => item < 0).reduce((item,acc) => item + acc ,0)  
    return [posResult, negResult]
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));