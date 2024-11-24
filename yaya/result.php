<h3>YAYA RESULT</h3>
<?php
// MySQL database credentials
include('../env.php');
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
    echo "<table  border=1>";
    echo "<tr>
            <th>ID</th>
            <th>Name</th>
            <th>phone</th>
             <th>score</th>
            <th>Class </th>
          </tr>";

    // Fetch and display each row of data
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td>" . $row['name'] . "</td>";
        echo "<td>" . $row['phone'] . "</td>";    
         echo "<td>" . $row['score'] . "</td>"; 
          echo "<td>" . $row['class_name'] . "</td>";
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
