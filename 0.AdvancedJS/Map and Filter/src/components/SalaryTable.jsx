import React from "react";
import { employees } from "../assets/employees";

export default function SalaryTable() {
  // Use reduce to calculate the total salary expense
  const totalSalary = employees.reduce((accumulator, employee) => {
    return accumulator + employee.salary;
  }, 0);

  return (
    <>
      <h2 className="text-lg font-bold mb-4">Employee Salary Table</h2>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Position
            </th>
            <th scope="col" className="px-6 py-3">
              Salary
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {employee.name}
              </th>
              <td className="px-6 py-4">{employee.position}</td>
              <td className="px-6 py-4">${employee.salary.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Total Salary Expense</h3>
        <p className="text-purple-300">
          The total salary expense for all employees is:{" "}
          <strong>${totalSalary.toLocaleString()}</strong>
        </p>
      </div>
    </>
  );
}
