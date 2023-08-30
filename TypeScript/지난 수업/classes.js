"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.id = id;
        this.name = name;
        // console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2023;
// const accounting = new Department("a1", "Accounting");
// accounting.addEmployee("MAX");
// accounting.addEmployee("MIN");
// accounting.describe(); //Department(a1): Accounting
// accounting.name = "NEW NAME";
// accounting.describe(); //Department(a1): NEW NAME
// accounting.printEmployeeInformation();
// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
//   }
// }
// const it = new ITDepartment("a2", ["Jisu"]);
// it.describe(); //ITDepartment(a2): IT
// it.addEmployee("Jisu");
// it.addEmployee("suji");
// it.printEmployeeInformation();
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("NO REPORT FOUND");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log("Accounting Department - ID: " + this.id);
    }
    addEmployee(name) {
        if (name === "MAX") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log("printReports: ", this.reports);
    }
}
// const account = new AccountingDepartment("a3", []);
// account.addEmployee("Jin");
// account.printEmployeeInformation();
// account.printReports();
// account.addReport("Something went wrong...");
// account.addReport("First Report");
// console.log("account.mostRecentReport: ", account.mostRecentReport);
// account.mostRecentReport = "Second Report";
// account.printReports();
// account.describe();
// 정적 속성
console.log("정적 속성");
const employee1 = Department.createEmployee("Jisu");
console.log(employee1);
console.log("fiscalYear: ", Department.fiscalYear);
