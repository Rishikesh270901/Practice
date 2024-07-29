import React from "react";

const Table = () => {
  // Sample data with a claim attribute
  const data = [
    { id: 1, name: "John Doe", age: 28, email: "john@example.com", claimed: true },
    { id: 2, name: "Jane Smith", age: 34, email: "jane@example.com", claimed: false },
    { id: 3, name: "Alice Johnson", age: 23, email: "alice@example.com", claimed: true },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase sm:px-6">ID</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase sm:px-6">Name</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase sm:px-6">Age</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase sm:px-6">Email</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase sm:px-6">Claim Status</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase sm:px-6">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2 text-sm font-medium text-gray-900 sm:px-6">{item.id}</td>
              <td className="px-4 py-2 text-sm text-gray-700 sm:px-6">{item.name}</td>
              <td className="px-4 py-2 text-sm text-gray-700 sm:px-6">{item.age}</td>
              <td className="px-4 py-2 text-sm text-gray-700 sm:px-6">{item.email}</td>
              <td className="px-4 py-2 text-sm text-gray-500 sm:px-6">
                {item.claimed ? (
                  <span className="bg-green-100 text-green-800 py-1 px-2 rounded-full text-xs font-semibold">Claimed</span>
                ) : (
                  <span className="bg-red-100 text-red-800 py-1 px-2 rounded-full text-xs font-semibold">Not Claimed</span>
                )}
              </td>
              <td className="px-4 py-2 text-sm text-gray-500 sm:px-6">
                {item.claimed ? (
                  <button
                    disabled
                    className="bg-gray-400 text-white py-1 px-3 rounded-lg cursor-not-allowed text-xs"
                  >
                    Claimed
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-xs"
                  >
                    Claim Now
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
