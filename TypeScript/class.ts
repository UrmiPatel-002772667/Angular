import type { Login, User } from "./interface";

// Define an interface for the address
interface Address {
    street: string;
    city: string;
    state: string;
    pinCode: number;
}
class Employee implements Login {
    #id: number;
    protected name: string;
    address: Address;
    get empId(): number {
        return this.#id;
    }
    set empId(id:number) {
        this.#id = id; 
    }
    // Static method to get the total number of employees
    static getEmployeeCount(): number {
        return 100; 
    }
    // Constructor to initialize the employee properties
    constructor(id: number, name: string, address: Address){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    // Implementing the login method from the Login interface
    login(): User {
        return {name: "John Doe", id: 1, email: "john.doe@example.com" }
    }

    // Method to get the full name and address of the employee
    getName(): string {
        return `${this.name} ${this.address}`;
    }
}
Employee.getEmployeeCount();

// Manager class that extends Employee
class Manager extends Employee {
    // Constructor to initialize the manager properties
    constructor(id: number, name: string, address: Address){
        super(id, name, address);
    }
    // Override the getName method to include the manager's title
    getName(): string {
        return `Manager: ${super.getName()}`;
    }
}

// Create an instance of the Employee class
let john = new Employee(1, "John Doe", { street: "123 Main St", city: "Anytown", state: "CA", pinCode: 12345 });
john.empId = 100; // Accessing the private property using the getter method
let jane = new Manager(2, "Jane Smith", { street: "456 Elm St", city: "Anytown", state: "CA", pinCode: 12345 });
console.log(john);
console.log(john.empId);
console.log(jane);

console.log(john.getName());
console.log(jane.getName());
