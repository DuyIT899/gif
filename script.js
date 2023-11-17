document.addEventListener("DOMContentLoaded", function () {
  const circleImagesContainer = document.getElementById("circleImages");
  const centerImage = document.querySelector(".center-image img");
  const numImages = 50;
  const radius = 150;
  const imagesPerGroup = 10;
  const displayTime = 3000; // Thời gian hiển thị mỗi nhóm hình ảnh (miligiây)

  const imagePaths = [
    "./img/1. KH XH NV.png",
    "./img/2. DH Van hoa.jpg",
    "./img/3. KH Tu nhien.png",
    "./img/4. Nong lam.png",
    "./img/5. DH Thuy loi.png",
    "./img/6. BCVT.png",
    "./img/7. Gia Dinh.png",
    "./img/8. Viet Duc.png",
    "./img/9. LDXH.jpg",
    "./img/Cao Thang.png",
    "./img/CD KT.png",
    "./img/CDCNTD.png",
    "./img/CDLTTs.png",
    "./img/DH CNSG.jpg",
    "./img/DH CNTT.jpg",
    "./img/DH Cong Thuong.jpg",
    "./img/DH GTVT phan hieu HCM.png",
    "./img/DH GTVT TPHCM.png",
    "./img/DH Hoa sen.png",
    "./img/ĐH Hung Vuong.png",
    "./img/DH MoTPHCM.png",
    "./img/DH Ngan hang.jpg",
    "./img/DH NTT.jpg",
    "./img/Dh QT.png",
    "./img/DH SP.png",
    "./img/DH TC MKT.png",
    "./img/DH TNMT.png",
    "./img/Dh Y PNT.png",
    "./img/Hitu (1).png",
    "./img/Huflit.png",
    "./img/Hutech.png",
    "./img/hvuh.jpg",
    "./img/Logo BK.png",
    "./img/Logo_IUH.png",
    "./img/logo-CDCN.png",
    "./img/logocesti-chuan.png",
    "./img/LOGO-DHYD-400.jpg",
    "./img/Logo-HBU-Final.png",
    "./img/logo-tdtu-new.png",
    "./img/logo-uef-home.jpg",
    "./img/Nhacvien.png",
    "./img/SGU-LOGO-400x400.png",
    "./img/spkt.jpg",
    "./img/TV KHTH.jpg",
    "./img/TV TT.png",
    "./img/uah.png",
    "./img/UEL_Logo.png",
    "./img/UMT.png",
    "./img/TV KHTH.jpg",
    "./img/Vien NCPT.jpg",
  ];

  // Chia mảng thành các nhóm có 14 hình ảnh
  const imageGroups = [];
  for (let i = 0; i < imagePaths.length; i += imagesPerGroup) {
    imageGroups.push(imagePaths.slice(i, i + imagesPerGroup));
  }

  let currentGroupIndex = 0;

  function displayImageGroup() {
    circleImagesContainer.innerHTML = ''; // Xóa các hình ảnh hiện tại

    for (let i = 0; i < imagesPerGroup; i++) {
      const angle = (i / imagesPerGroup) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const circleImage = document.createElement("div");
      circleImage.classList.add("circle-image");
      circleImage.style.left = `calc(50% + ${x}px)`;
      circleImage.style.top = `calc(50% + ${y}px)`;

      const imageIndex = i % imagesPerGroup;
      const image = document.createElement("img");
      image.src = imageGroups[currentGroupIndex][imageIndex];
      image.alt = `Circle Image ${i + 1}`;
      circleImage.appendChild(image);
      circleImagesContainer.appendChild(circleImage);

      // Đặt độ trễ cho hiệu ứng fade in-out
      setTimeout(() => fadeInOut(circleImage), i * (displayTime / imagesPerGroup));
    }

    // Chuyển sang nhóm hình ảnh tiếp theo
    currentGroupIndex = (currentGroupIndex + 1) % imageGroups.length;
  }

  // Gọi hàm hiển thị mỗi 3 giây
  setInterval(displayImageGroup, displayTime);
});

// Hàm thực hiện hiệu ứng fade in-out
function fadeInOut(element) {
  let opacity = 0;
  let direction = 1;

  const fadeInterval = setInterval(function () {
    opacity += direction * 0.1;

    if (opacity >= 1) {
      opacity = 1;
      direction = -1;
    } else if (opacity <= 0) {
      opacity = 0;
      direction = 1;
    }

    element.style.opacity = opacity;

    if (opacity === 0 && direction === 1) {
      clearInterval(fadeInterval);
    }
  }, 100); // Thời gian cập nhật hiệu ứng (miligiây)
}
