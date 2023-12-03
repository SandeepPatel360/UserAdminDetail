import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"
// import "../styles/UserManagementInterface.css";
import { toast } from "react-toastify";
import Table from "./components/UserTable";
// import SearchBar from "./SearchBar";
import Pagination from "./components/Pagination";
import DeleteSelectedButton from "./components/DeleteSlectedUser";
import EditModal from "./components/EditUser";

const API_URL =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const UserManagementInterface = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editRowData, setEditRowData] = useState(null);

  const itemsPerPage = 10;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = users.filter(
      (user) =>
        user.id.toLowerCase().includes(query) ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handleEdit = (id) => {
    const rowToEdit = filteredUsers.find((user) => user.id === id);
    setEditRowData(rowToEdit);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (!selectedRows.includes(id)) {
      toast.error("Please select the row to delete.");
      return;
    }

    setFilteredUsers((prevFilteredUsers) =>
      prevFilteredUsers.filter((user) => user.id !== id)
    );

    toast.error("Deleted Successfully!");
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const handleSelectAllRows = (event) => {
    const { checked } = event.target;
    const allRowIds = currentUsers.map((user) => user.id); // Use currentUsers instead of filteredUsers

    if (checked && selectedRows.length !== allRowIds.length) {
      setSelectedRows(allRowIds);
      toast.warn("Hey You Selected All !", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
      });
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelection = (event, id) => {
    const { checked } = event.target;
    if (checked) {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, id]);
      toast.success("Selected", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((rowId) => rowId !== id)
      );
    }
  };

  const handleDeleteSelected = () => {
    const updatedUsers = users.filter(
      (user) => !selectedRows.includes(user.id)
    );
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setSelectedRows([]);
    toast.error("Selected rows deleted successfully");
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <div className="container display-flex">
      
       <input
       className= "w-full mb-7 mt-5 ml-5 p-2.5 pl-3 pr-4 rounded-full bg-gray-200 text-gray-700 text-base w-80 shadow-sm transition duration-300 ease-in-out"
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearch}
     
    />
      <Table
        users={currentUsers}
        selectedRows={selectedRows}
        handleRowSelection={handleRowSelection}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleSelectAllRows={handleSelectAllRows}
      />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredUsers.length}
        handlePagination={handlePagination}
      />
      <DeleteSelectedButton
        handleDeleteSelected={handleDeleteSelected}
        selectedRows={selectedRows}
      />
      {isModalOpen && (
        <EditModal editRowData={editRowData} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default UserManagementInterface;