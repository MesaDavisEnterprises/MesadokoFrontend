import React from "react";

const TableUsersTopBuy = () => {
  const topUsers = [
    {
      id: 1,
      name: "Juan Perez",
      email: "peter@gmail.com",
      totalPurchases: 10,
    },
    {
      id: 2,
      name: "Lina Ochoa",
      email: "Lorena@gmail.com",
      totalPurchases: 8,
    },
    {
      id: 3,
      name: "Luisa Perez",
      email: "luisa@gmail.com",
      totalPurchases: 5,
    },
    {
      id: 4,
      name: "Carlos Perez",
      email: "carlos@gmail.com",
      totalPurchases: 12,
    },
    {
      id: 5,
      name: "Maria Perez",
      email: " mari@gmail.com",
      totalPurchases: 6,
    },
  ];

  return (
    
      <table className="w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Correo
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total de Compras
            </th>
          </tr>
        </thead>
        <tbody>
          {topUsers.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-base text-gray-900 font-medium">
                  {user.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-base text-gray-900">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-base text-gray-900">
                  {user.totalPurchases}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
  );
};

export default TableUsersTopBuy;
