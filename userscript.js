// Simulate login (this would be replaced with actual login functionality)
function login(username) {
    localStorage.setItem("username", username);
    window.location.href = "index.html"; // Redirect to homepage after login
}

// Display the user’s details on the homepage if they’re logged in
window.onload = function() {
    const username = localStorage.getItem("username");
    if (username) {
        // Update the user button to show the username
        document.getElementById("userButton").innerText = username;
        
        // Populate the dropdown with user details
        document.getElementById("userDetails").innerText = `Logged in as: ${username}`;
    }
};

// Toggle the user details dropdown visibility
function toggleUserDetails() {
    const dropdown = document.getElementById("userDetailsDropdown");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}