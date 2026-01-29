/*

// class - Blueprint to create an object

// ES6 - ECMA SCRIPT 2015
// Class is a collection of proprties and methods
// ClassName should be similar to the filename (Employee.ts). Class name should start with capital letter. Employee

// Access Modifier - It is permission to access a varaible and methods

// Syntax:


class ClassName{

    // Properties - variables - Locators
    key: datatype
    private key1 : datatype
    static key2 :datatype = "ABC"
    readonly key3 :dataype


    // method or function
    name1







}






*/

//export - import

import data from '../TestData/logindata.json'
console.log(data);

const data1 = {
  url: 'https://rahulshettyacademy.com/client',
  email: 'testnHNk@gmail.com',
  password: 'Testing@1234',
  incorrectPassword: 'Test'
}

console.log(data1.url);

export class Employees{
    // properties

    empId : number 
    empName : string 
    private empSalary : number
    static orgName : string = "ABC"
    readonly offer

    // Constructor - Special type of function or method which help us in terms of initializing the value of the variable

    // this - refers to the current object of a class
    constructor(eid:number, ename:string, esalary:number, offer:number){
        this.empId = eid // emp1.empid, emp.empid
        this.empName = ename
        this.empSalary = esalary
        this.offer = offer

    }

    employeeInformation():void{
        console.log(`EmployeeID : ${this.empId}, Employee Name: ${this.empName}, Employee Salary : ${this.empSalary}`);

    }

    static displayCompanyName(){
        console.log(Employees.orgName);
    }


    
}

const emp1 = new Employees(1,"Rahul", 500000, 10000)
console.log(emp1.empId);
emp1.employeeInformation()
Employees.displayCompanyName()

console.log(emp1);

const emp = new Employees(2,"Raj", 300000, 20000)
console.log(emp.empId);
emp.employeeInformation()
Employees.displayCompanyName()
console.log(emp);








