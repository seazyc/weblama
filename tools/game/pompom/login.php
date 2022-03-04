<?php
session_start();
//connect database
$servername = "localhost";
$username   = "kikiakad_pompom";
$password   = "Makopala335321";
$database   = "pompom";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//echo "Connected successfully";
//die;
 
//step 1
$email  = $_POST ["email"];
$pass   = $_POST ["password"];
//print_r ($pass); die;

//convert password to md5
$pass = md5($pass);

// check if the user id and password combination exist in database
$sql = "SELECT * FROM user WHERE email = '".$email."' AND password = '".$pass."'";
$result = mysqli_query($conn, $sql);

//if match is equal to 1 there is a match
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        //set session
        $_SESSION['authorized'] = true;
        $_SESSION['id']     = $row['id'];
        $_SESSION['name']   = $row['name'];
        $_SESSION['email']  = $row['email'];
    }
    
    header('Location: ../Games.php');
    exit;


} else {
    // login failed save error to a session
    header('Location: ../indeks.php?msg=Password or email wrong!');
}


?>