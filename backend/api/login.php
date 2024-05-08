<?php
include_once "../includes/config.php";

// Xử lý yêu cầu POST từ frontend
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Thực hiện xác thực người dùng ở đây

    // Ví dụ: Kiểm tra email và mật khẩu trong cơ sở dữ liệu
    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // Người dùng đăng nhập thành công
        echo json_encode(array("success" => true));
    } else {
        // Đăng nhập thất bại
        echo json_encode(array("success" => false, "message" => "Đăng nhập không thành công"));
    }
}
?>
