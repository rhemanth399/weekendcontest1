/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  const developers = arr.map(employee => {
    if (employee.profession === 'developer') {
      return employee.name;
    }
  });
  
  console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here
  const developers = [];
  arr.forEach(employee => {
    if (employee.profession === 'developer') {
      developers.push(employee.name);
    }
  });

  console.log(developers);
}

function addData() {
  //Write your code here
  const newEmployee = { id: 4, name: 'Susan', age: 20, profession: 'intern' };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  const updatedEmployees = arr.filter(employee => employee.profession !== 'admin');
  console.log(updatedEmployees);
}

function concatenateArray() {
  //Write your code here
  const newEmployees = [
    { id: 6, name: 'Bob', age: 27, profession: 'developer' },
    { id: 7, name: 'Samantha', age: 22, profession: 'designer' },
    { id: 8, name: 'Mike', age: 32, profession: 'manager' }
  ];
  const combinedArray = arr.concat(newEmployees);
  console.log(combinedArray);
}
