<?php
$host = "localhost"; // Tên máy chủ MySQL
$user = "username"; // Tên người dùng MySQL
$password = ""; // Mật khẩu MySQL
$database = "db_netflix"; // Tên cơ sở dữ liệu

$conn = mysqli_connect($host, $user, $password, $database);

// Kiểm tra kết nối
if (!$conn) {
    die("Kết nối không thành công: " . mysqli_connect_error());
}
?>
