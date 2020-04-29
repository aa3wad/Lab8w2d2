//Q9
(function (){

//Q6
var count = {
    counter: 0,
    add: function() {
        return this.counter +=1;
    },
    reset: function() {
        return this.counter = 0;
    }
};

document.writeln("counter= " + count.counter);
document.writeln("add to counter= " + count.add());
document.writeln("add to counter= " + count.add());
document.writeln("add to counter= " + count.add());
document.writeln("reset counter= " + count.reset());

//Q7
//Counter is the free variable because its not passed as parameter neither defined inside the function.


//Q8
var count = {
    counter: 0,
    adder: 1,
    add: function() {
        return this.counter += this.adder;
    },
    reset: function() {
        return this.counter = 0;
    },
    make_adder: function(adder) {
        this.reset();
        return this.adder = adder;
    }
};

document.writeln("counter= " + count.counter);
document.writeln("add to counter= " + count.add());
document.writeln("add to counter= " + count.add());
document.writeln("add to counter= " + count.add());
document.writeln("reset counter= " + count.reset());
document.writeln("make_adder counter= " + count.make_adder(5));
document.writeln("add to counter= " + count.add());
document.writeln("add to counter= " + count.add());
document.writeln("add to counter= " + count.add());
document.writeln("make_adder counter= " + count.make_adder(7));
document.writeln("add to counter= " + count.add());
document.writeln("add to counter= " + count.add());
document.writeln("add to counter= " + count.add());

//Q10
let Employee = (function(){
    let name= "";
    let age="";
    let salary= "";
    let address = new Address();

    function setAge(nage) {
        this.age = nage;
    }
    function setSalary(nSalary) {
        this.salary = nSalary;
    }
    function setName(nName) {
        this.name = nName;
    }
    function setAddress(newAddress) {
        this.address = newAddress;
    }
    function getAge() {
        return this.age;
    }
    function getName() {
        return this.name;
    }
    function getSalary() {
        return this.salary;
    }
    function getAddress() {
        return this.address;
    }

    function increaseSalary(percentage) {
        setSalary(getSalary() + (getSalary() * percentage));
    }
    function increamentAge(inc) {
        setAge(getAge() + inc);
    }
    
return {
        setAge: (newAge) => setAge(newAge),
        setSalary: (newSalary) => setSalary(newSalary),
        setName: (newName) => setName(newName),
        setAddress: (newAddress) => setAddress(newAddress),
        getAddress: () => this.address,
        increaseSalary: (percentage) =>  increaseSalary(percentage),
        increamentAge : (increment) => increamentAge(increment),
        print: () => console.log("Name: " + Employee.getName() + " Age: " + Employee.getAge() + "Salary: " + Employee.getSalary())
};
})();

Address = (function(){
    let address = {
        state: "",
        city: "",
        zipCode: "",
        street:"",
        setState: (newstate) => this.state = newstate,
        setCity: (newCity) => this.city = newCity,
        setZipCode: (newZipCode) => this.zipCode = newZipCode,
        setStreet: (newStreet) => this.street = newStreet,
        getState: ()=> this.state,
        getCity: ()=> this.city,
        getZipCode: ()=> this.zipCode,
        getStreet: ()=> this.street
    };
    
    return {
        setState: (newstate) => address.setState(newstate),
        setCity: (newCity) => address.setCity(newCity),
        setZipCode: (newZipCode) => address.setZipCode(newZipCode),
        setStreet: (newStreet) => address.setStreet(newStreet),
        getState: ()=> address.getState(),
        getCity: ()=> address.getCity(),
        getZipCode: ()=> address.getZipCode(),
        getStreet: ()=> address.getStreet()
    };

})();


})();
