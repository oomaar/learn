// N:B: This syntax is simmiler to the classes of oop of python or java
interface UserInterface {
    name: string;
    email: string;
    age: number;
    status: string;
    register();
    payInvoice();
}

// classes can have properties and can have methods.
class User implements UserInterface {
    // Properties of this class
    // Access Modifiers: privete, public and protected !
    // Only accessed inside this class
    // private name: string;
    name: string;
    // can be accessed from  anywhare
    public email: string; 
    // can't be accessed outside this class but can be accessed from any class inhretes from this class
    // protected age: number;
    age: number;
    // default is public
    status: string;

    // Constructors: special kind of method that runs when initialize an object from this class
    constructor (name: string, email: string, age: number, status: string) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.status = status;

        console.log("User Created: " + this.name);
    };

    // Methods
    public register () {
        console.log(this.name + " is now " + this.status);
    };

    payInvoice() {
        console.log(this.name + " Paied Invoice");
    };
};

let omar = new User("Omar Hassan", "omaar_5@hotmail.com", 26, "Online");
console.log(omar.status);
omar.register();

// Inheritance
class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number, status: string) {
        // What super does is it says that these properties (name, email, age, status) are from the inhrted class
        super(name, email, age, status);
        this.id = id;
    };

    payInvoice() {
        super.payInvoice()
    };
};

let mike: User = new Member(1, "Mike Smith", "mike@gmail.com", 33, "Busy");
mike.payInvoice();