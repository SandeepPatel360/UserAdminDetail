import React from "react";

const TableRow = ({
  user,
  selected,
  handleRowSelection,
  handleEdit,
  handleDelete,
}) => {
  return (
    <tr className={`bg-gray-100  ${selected ? "selected" : ""}`}>
      <td className="bg-gray-100">
        <input
          // className="bg-gray-200"
          type="checkbox"
          checked={selected}
          onChange={(event) => handleRowSelection(event, user.id)}
        />
      </td>

      <td className="px-6 py-4 font-bold bg-gray-100">{user.id}</td>
      <td className="px-6 py-4 font-bold bg-gray-100">{user.name}</td>
      <td className="px-6 py-4 font-bold bg-gray-100">{user.email}</td>
      <td className="px-6 py-4 font-bold bg-gray-100">{user.role}</td>
      <td className="btn-container bg-gray-100">
        <button onClick={() => handleEdit(user.id)}>
          <i className="fas fa-edit mr-5 bg-gray-200"></i>
        </button>
        <button onClick={() => handleDelete(user.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;