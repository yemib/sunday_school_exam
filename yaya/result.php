<?php
// MySQL database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "yaya";
$tableName = "result";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to fetch data from the table
$sql = "SELECT * FROM $tableName WHERE DATE(created_at) = CURDATE()";
$result = $conn->query($sql);

// Check if there are any rows returned
if ($result->num_rows > 0) {
    // Start creating the HTML table
    echo "<table>";
    echo "<tr>
            <th>ID</th>
            <th>Name</th>
            <th>phone</th>
             <th>score</th>
            <th>Date Submitted On </th>
          </tr>";

    // Fetch and display each row of data
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td>" . $row['name'] . "</td>";
        echo "<td>" . $row['phone'] . "</td>";    
         echo "<td>" . $row['score'] . "</td>"; 
          echo "<td>" . $row['created_at'] . "</td>";
        echo "</tr>";
    }

    // Close the HTML table
    echo "</table>";
} else {
    echo "No data found in the table";
}

// Close the connection
$conn->close();
?>
