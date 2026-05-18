const user = [
    {
        id: 1,
        name: 'Pandi'
    },
    {
        id: 2,
        name: 'abi'
    }
];
//descending
user.sort((a, b) => b.name.localeCompare(a.name));
console.log(user);
//ascending
user.sort((a, b) => a.name.localeCompare(b.name));
console.log(user);
