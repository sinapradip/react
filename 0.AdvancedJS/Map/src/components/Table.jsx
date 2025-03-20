import React from "react";

const people = [
  { name: "Creola Katherine Johnson", profession: "mathematician", birthYear: 1918, notableWork: "NASA's Apollo Missions" },
  { name: "Mario José Molina-Pasquel Henríquez", profession: "chemist", birthYear: 1943, notableWork: "Ozone Depletion Research" },
  { name: "Mohammad Abdus Salam", profession: "physicist", birthYear: 1926, notableWork: "Electroweak Theory" },
  { name: "Percy Lavon Julian", profession: "chemist", birthYear: 1899, notableWork: "Synthesis of Cortisone" },
  { name: "Subrahmanyan Chandrasekhar", profession: "astrophysicist", birthYear: 1910, notableWork: "Chandrasekhar Limit" },
];

export default function Table() {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">Name</th>
          <th scope="col" className="px-6 py-3">Profession</th>
          <th scope="col" className="px-6 py-3">Birth Year</th>
          <th scope="col" className="px-6 py-3">Notable Work</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => (
          <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {person.name}
            </th>
            <td className="px-6 py-4">{person.profession}</td>
            <td className="px-6 py-4">{person.birthYear}</td>
            <td className="px-6 py-4">{person.notableWork}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}