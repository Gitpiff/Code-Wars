// ...args turns the string into an array
function sum(...args) {
    let count = 0
    for(let i = 0; i < args.length; i ++){
        count += args[i]
    }

    return count
}

console.log(sum(1,3,5,7))