import ts = require("typescript");

// Define an interface for a User
export interface User {
    id: number;
    name: string;
    age?: number;
    email: string;
    
}
let user : User = {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

// Destructuring assignment to extract properties from the user object
let {name: userName, email: login} : User = {name: "John Doe", id: 1, email: "john.doe@example.com"};
console.log(user);

// Define an interface for the Employee that extends the User interface
interface Employee extends User {
    department: string;
}
let emp : Employee = {
    id: 2, 
    name: "Jane Smith",
    email: "abc@abc.com",
    department: "Sales",
}
console.log(emp);

//define an interface for the Login functionality
export interface Login {
    login() : User;
}

// Destructuring assignment to extract properties from an array of users
let [user1, user2, user3] : User[] = [
    {id: 1, name: "John Doe", email: "john@abc.com"},
    {id: 2, name: "Jane Smith", email: "johnc@abc.com"},
    {id: 3, name: "Bob Johnson", email: "bob@abc.com"}
];
console.log(user1);