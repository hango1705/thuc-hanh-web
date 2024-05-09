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
document.getElementById("uploadButton").addEventListener("click", function () {
  var fileInput = document.getElementById("videoInput");
  var file = fileInput.files[0];
  var formData = new FormData();
  formData.append("my_video", file);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "upload.php", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      alert("File đã được tải lên thành công!!!");
      location.reload();
    } else {
      alert("Đã xảy ra lỗi khi tải lên file.");
    }
  };

  xhr.send(formData);
});

document.querySelectorAll(".video__container__right video").forEach((video) => {
  video.addEventListener("click", function () {
    var videoSrc = this.getAttribute("src");
    var bgVideoElement = document.querySelector(
      ".bg__video .bg__video__element"
    );
    bgVideoElement.src = videoSrc;
    bgVideoElement.play();
  });
});
