import React from "react";

const DeleteSelectedButton = ({ handleDeleteSelected, selectedRows }) => {
  return (
    <button
      className={`px-4 py-2 bg-red-500 rounded-full text-white text-sm cursor-pointer absolute left-8 ${
        selectedRows.length === 0 ? "opacity-70 cursor-not-allowed" : ""
      }`}
      onClick={handleDeleteSelected}
      disabled={selectedRows.length === 0}
    >
      Delete Selected
    </button>
  );
};

export default DeleteSelectedButton;
