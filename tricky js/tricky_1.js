const user = {
    name: "Arun"
};

const admin = user;

admin.name = "Kumar";

console.log(user.name);