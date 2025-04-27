//TODO
//Write simple test based on console.log functionality for testing Store class methods

import Store from "./Store";

//For example T msay be class Employee like
class Employee {
  constructor(public id: string, public name: string, public salary: number) {}
}
const store = new Store<Employee>();
console.log(store);
//some test methods
store.add(new Employee("empl1", "Sara", 5000));
store.add(new Employee("empl2", "Bob", 6000));
store.add(new Employee("empl3", "Hana", 4000));

console.log("After adding employees:", store);

try {
  store.add(new Employee("empl1", "Duplicate Sara", 7000));
} catch (error) {
  console.error("Expected error on duplicate add:", (error as Error).message);
}

// Получаем сотрудника по id
const bob = store.getById("empl2");
console.log("Found employee by id (empl2):", bob);

// Ищем сотрудников с зарплатой выше 4500
const highEarners = store.find({
  test(emp: Employee): boolean {
    return emp.salary > 4500;
  },
});
console.log("Employees with salary > 4500:", highEarners);

// delete
const removed = store.remove("empl2");
console.log("Removed employee:", removed);

const checkBob = store.getById("empl2");
console.log("Check Bob after removal (should be undefined):", checkBob);
