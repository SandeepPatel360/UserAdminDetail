import React from "react";
import TableRow from "./TableRow";

const Table = ({
  users,
  selectedRows,
  handleRowSelection,
  handleEdit,
  handleDelete,
  handleSelectAllRows,
}) => {
  const currentUsers = users.slice(0, 10); 
  return (
    <table className="min-w-full text-left text-sm font-light ml-7 ">
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          <th className="bg-gray-200">
            <input
              type="checkbox"
              checked={selectedRows.length === currentUsers.length}
              onChange={handleSelectAllRows}
              className="checkbox-input "
            />
            <span className="checkbox-custom"></span>
          </th>
          <th scope="col" className="px-6 py-4 font-bold bg-gray-200">ID</th>
          <th scope="col" className="px-6 py-4 font-bold bg-gray-200">Name</th>
          <th scope="col" className="px-6 py-4 font-bold bg-gray-200">Email</th>
          <th scope="col" className="px-6 py-4 font-bold bg-gray-200">Role</th>
          <th scope="col" className="px-6 py-4 font-bold bg-gray-200">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <TableRow
            key={user.id}
            user={user}
            selected={selectedRows.includes(user.id)}
            handleRowSelection={handleRowSelection}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;