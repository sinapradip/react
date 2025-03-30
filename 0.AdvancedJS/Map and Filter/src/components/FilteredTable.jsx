import React from "react";
import people from "../assets/people";

export default function FilteredTable() {
  // Filter people born after 1920
const filteredPeople = people.filter((person) => person.birthYear > 1920);
  return (
    <>
      <br></br>
      <h5>
        using <strong>filter()</strong> method
      </h5>
      <h5>Showing Scientist born after 1920 only</h5>
      <br></br>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Profession
            </th>
            <th scope="col" className="px-6 py-3">
              Birth Year
            </th>
            <th scope="col" className="px-6 py-3">
              Notable Work
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map((person, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {person.name}
              </th>
              <td className="px-6 py-4">{person.profession}</td>
              <td className="px-6 py-4">{person.birthYear}</td>
              <td className="px-6 py-4">{person.notableWork}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
    </>
  );
}
