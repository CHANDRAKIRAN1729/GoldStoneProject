import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUserData, setEditedUserData] = useState({});

  useEffect(() => {
    // Fetch user data from the backend API
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleEditUser = (userId) => {
    console.log(userId);
    
    // Set the editingUserId to enable editing mode for a specific user
    setEditingUserId(() => userId);
    // Find the user with the given userId and set their data in the editedUserData state
    const user = users.find((user) => user.id === userId);
    if (user) {
      setEditedUserData(user);
    }
  };

  const handleUpdateUser = async () => {
    alert(editingUserId);
    alert(editedUserData.name);
    alert(editedUserData.email);
    alert(editedUserData.gender);
    alert(editedUserData.status);
    try {
      // Send a PUT request to update the user data in the backend
      const response = await axios.post(`http://localhost:3001/api/users/${editingUserId}`, editedUserData);
      alert('Response: ' + JSON.stringify(response.data));
      if (!response.data) {
        throw new Error('Error updating user');
      }
      
      // Clear the editingUserId and editedUserData states
      setEditingUserId(null);
      setEditedUserData({});
      
      // Fetch the updated user data from the backend
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  
  
  

  const handleInputChange = (e) => {
    // Update the editedUserData state with the changes made in the input fields
    setEditedUserData({
      ...editedUserData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editedUserData.name || ''}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    name="email"
                    value={editedUserData.email || ''}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    name="gender"
                    value={editedUserData.gender || ''}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.gender
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    name="status"
                    value={editedUserData.status || ''}
                    onChange={handleInputChange}
                  />
                ) : (
                  user.status
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <div>
                    <button onClick={handleUpdateUser}>Save</button>
                  </div>
                ) : (
                  <button onClick={() => handleEditUser(user.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
