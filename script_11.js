const arr = ["a", "b", "c"];
const res = arr.map(function arr2(item) {
if (item === "a") {
    return ("1: " + item)
} else if (item === "b") {
    return ("2: " + item)
  } else {
    return ("3: " + item)
  }
})
    
console.log(res); 