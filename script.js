// script.js
function searchUser() {
    // Implement search functionality here
    alert('Search functionality is not implemented yet.');
}

function deleteUser() {
    // Implement delete functionality here
    alert('Delete functionality is not implemented yet.');
}

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const description = document.getElementById('description').value;

    // You can now send this data to your server or perform any other necessary actions
    alert(`Data Submitted:\nFull Name: ${fullName}\nAddress: ${address}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nDescription: ${description}`);
});





