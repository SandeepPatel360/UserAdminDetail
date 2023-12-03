import React from "react";

const EditModal = ({ editRowData, setIsModalOpen }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center modal z-50 mr-2">
      <div className="bg-white p-10 rounded-lg shadow-md max-w-2xl w-80%">
        <h3 className="text-2xl font-bold text-center mb-4">Edit Row</h3>
        <p>ID: {editRowData?.id}</p>
        <p>Name: {editRowData?.name}</p>
        <p>Email: {editRowData?.email}</p>
        <p>Role: {editRowData?.role}</p>
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-full text-lg cursor-pointer transition duration-300 ease-in-out hover:bg-green-600"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EditModal;
