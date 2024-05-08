<?php
// Kết nối với cơ sở dữ liệu
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "db_netflix";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Kiểm tra xem có tập tin đã được tải lên không
if ($_FILES["videoFile"]["error"] == UPLOAD_ERR_OK) {
    $videoName = $_FILES["videoFile"]["name"];
    $videoTmpName = $_FILES["videoFile"]["tmp_name"];
    $videoType = $_FILES["videoFile"]["type"];

    // Di chuyển tập tin tải lên vào thư mục mong muốn
    $targetDirectory = "D:/uploads/";
    $targetFile = $targetDirectory . basename($videoName);

    if (move_uploaded_file($videoTmpName, $targetFile)) {
        // Lưu đường dẫn của video vào cơ sở dữ liệu
        $videoPath = $targetFile;
        $sql = "INSERT INTO videos (video_path) VALUES ('$videoPath')";

        if ($conn->query($sql) === TRUE) {
            echo "Video uploaded successfully.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Error uploading video.";
    }
} else {
    echo "Error uploading video.";
}

$conn->close();
?>