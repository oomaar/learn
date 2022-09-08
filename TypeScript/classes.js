var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// classes can have properties and can have methods.
var User = /** @class */ (function () {
    // Constructors: special kind of method that runs when initialize an object from this class
    function User(name, email, age, status) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.status = status;
        console.log("User Created: " + this.name);
    }
    ;
    // Methods
    User.prototype.register = function () {
        console.log(this.name + " is now " + this.status);
    };
    ;
    User.prototype.payInvoice = function () {
        console.log(this.name + " Paied Invoice");
    };
    ;
    return User;
}());
;
var omar = new User("Omar Hassan", "omaar_5@hotmail.com", 26, "Online");
console.log(omar.status);
omar.register();
// Inheritance
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age, status) {
        var _this = 
        // What super does is it says that these properties (name, email, age, status) are from the inhrted class
        _super.call(this, name, email, age, status) || this;
        _this.id = id;
        return _this;
    }
    ;
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    ;
    return Member;
}(User));
;
var mike = new Member(1, "Mike Smith", "mike@gmail.com", 33, "Busy");
mike.payInvoice();
