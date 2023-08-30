abstract class Department {
  protected employees: string[] = [];
  static fiscalYear = 2023;
  constructor(protected readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
    // console.log(Department.fiscalYear);
  }
  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

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
  private lastReport: string;
  private static instance: AccountingDepartment;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("NO REPORT FOUND");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }
  addEmployee(name: string): void {
    if (name === "MAX") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
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
