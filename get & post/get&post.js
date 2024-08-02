// Asynchronous function to fetch posts
async function getPosts() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Function to create and display table rows
function displayTable(data) {
    const tableBody = document.getElementById('table-body');

    data.forEach(item => {
        // Create table row element
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
        `;

        // Append row to table body
        tableBody.appendChild(row);
    });
}

// Fetch posts and display them in the table
getPosts()

.then(data => {
     displayTable(data);
    }
);
