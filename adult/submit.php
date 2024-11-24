<?php
// Retrieve form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$score = $_POST['score'];
$class_name   = $_POST['class_name'];

// Calculate the exam duration
//$startTimestamp = $_POST['startTimestamp'];
$currentTimestamp = time(); // Get the current timestamp
$duration = $currentTimestamp ; //- $startTimestamp;

// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "adult";
//first create the database first.  

// Create a connection
$conn = new mysqli($servername, $username, $password);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Database name to check
$dbName = $dbname;

// Query to retrieve the list of databases
$sql = "SHOW DATABASES";
$result = $conn->query($sql);
// Check if the database exists
/*  $sql = "DROP DATABASE $dbName";

// Execute the query
if ($conn->query($sql) === TRUE) {
    echo "Database deleted successfully";
} else {
    echo "Error deleting database: " . $conn->error;
} */
  
$databaseExists = false;
while ($row = $result->fetch_assoc()) {
    if ($row['Database'] === $dbName) {
        $databaseExists = true;
        break;
    }
}
// if false create database
if ($databaseExists == false) {
    $sql = "CREATE DATABASE $dbname";
if ($conn->query($sql) === TRUE) {
    //create table here 
$connt = new mysqli($servername, $username, $password, $dbname);
$sql = "CREATE TABLE result (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    score VARCHAR(255) NOT NULL,
    duration VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($connt->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error creating table: " . $connt->error;
}
$connt->close();

} else {
    echo "Error creating database: " . $conn->error;
}

} else {

}

// Close the connection
$conn->close();


// Create a new connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute the SQL statement to insert the data into the table
$sql = "INSERT INTO result (name, phone, score, duration , class_name) VALUES ('$name', '$phone', '$score', '$duration' ,'$class_name')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
