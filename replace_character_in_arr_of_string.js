let arr = ["pandi", "krishnamoorthi"];

const result = arr.map((item) => {
    if (item.includes('i'))
        return item.replaceAll('i', 'y');
})

console.log(result);