const str = 'Hii My Name is Saloni'

// Now find count of each character

let obj = {}

for (const x of str) {
    if (obj[x]) {
        obj[x] += 1;
    }
    else {
        obj[x] = 1;
    }
}

console.log(obj)