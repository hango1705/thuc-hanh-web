let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".bg__video__element");

  const playPauseButton = document.querySelector(".play__pause__button");

  playPauseButton.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      video.pause();
      playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const uploadButton = document.getElementById("uploadButton");
  const fileInput = document.getElementById("fileInput");

  uploadButton.addEventListener("click", function () {
    fileInput.click();
  });

  fileInput.addEventListener("change", function () {
    const selectedFile = fileInput.files[0];
    uploadVideo(selectedFile);
  });

  function uploadVideo(videoFile) {
    const formData = new FormData();
    formData.append("videoFile", videoFile);

    fetch("upload.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        alert(result); // Hiển thị thông báo từ kết quả của upload.php
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
