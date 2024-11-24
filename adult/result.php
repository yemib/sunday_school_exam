<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filter Results by Date</title>
    <script  src="../jquery-3.6.0.min.js"></script>
</head>
<body>
<?php
// MySQL database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "adult";
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
            <th>duration</th>
          </tr>";

    // Fetch and display each row of data
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td>" . $row['name'] . "</td>";
        echo "<td>" . $row['phone'] . "</td>";    
         echo "<td>" . $row['score'] . "</td>"; 
          echo "<td>" . $row['duration'] . "</td>";
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


<!-- <h2>Filter Results by Date</h2>

<form id="dateFilterForm">
    <label for="filterDate">Select Date:</label>
    <input type="date" id="filterDate" name="filterDate" required>
    <input type="submit" value="Filter">
</form> -->

<script>


    $('form').hide();
</script>


</body>
</html>