<?php

$host = "localhost";
$username = "root";
$password = "kushal@1";
$database = "web_app_db";

$conn = new mysqli($host, $username, $password, $database);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$dob = $_POST['dob'];

$sql = "INSERT INTO user_data (name, email, phone, address, dob) VALUES ('$name', '$email', '$phone', '$address', '$dob')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>