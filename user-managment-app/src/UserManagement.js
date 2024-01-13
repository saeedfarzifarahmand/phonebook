// src/UserManagement.js
import React, { useState } from 'react';

function UserManagement() {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [searchTerm, setSearchTerm] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [searchResults, setSearchResults] = useState([]);
    // Add status to store user information
    
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        const userData = {
            fullName,
            address,
            email,
            phoneNumber,
            description,
        };

        try {

            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert('Data submitted successfully!');
            } else {
                alert('Failed to submit data.');
            }
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('An error occurred while submitting data.');
        }
    };
// eslint-disable-next-line no-unused-vars
    const handleSearch = () => {
        // Implement search functionality here
        alert('Search functionality is not implemented yet.');
    };
    const searchUser = async () => {
        try {

            const response = await fetch(`http://localhost:3001/users?fullName=${searchTerm}`);
            const data = await response.json();

            setSearchResults(data);
        } catch (error) {
            console.error('Error searching user:', error);
            alert('An error occurred while searching user.');
        }

    };

    const handleDelete = () => {
        // Implement delete functionality here
        alert('Delete functionality is not implemented yet.');
    };


    return (


        <div className="container">
            <h2>User Information</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                <button type="submit">Save</button>
            </form>
            <div id="searchAndDelete">
                <label htmlFor="search">Search:</label>
                <input type="text" id="search" name="search" />
                <button onClick={searchUser}>Search</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

export default UserManagement;
