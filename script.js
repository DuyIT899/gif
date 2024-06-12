document.addEventListener("DOMContentLoaded", function () {
  const circleImagesContainer = document.getElementById("circleImages");
  const radius = 150;
  const imagesPerGroup = 10;
  const displayTime = 8000; // Thời gian hiển thị mỗi nhóm hình ảnh (miligiây)

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
    "./img/DH GTVT TPHCM-1.png",
    "./img/DH Hoa sen-1.png",
    "./img/ĐH Hung Vuong.png",
    "./img/DH MoTPHCM.png",
    "./img/DH Ngan hang.jpg",
    "./img/DH NTT.jpg",
    "./img/Dh QT.png",
    "./img/DH SP-1.png",
    "./img/DH TC MKT-1.png",
    "./img/DH TNMT-1.png",
    "./img/Dh Y PNT.png",
    "./img/Hitu (1).png",
    "./img/Huflit.png",
    "./img/Hutech.png",
    "./img/hvuh.jpg",
    "./img/Logo BK.png",
    "./img/Logo_IUH.png",
    "./img/logo-CDCN.png",
    "./img/logocesti-chuan-1.png",
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

  // Chia mảng thành các nhóm có 10 hình ảnh
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

      const image = document.createElement("img");
      image.src = imageGroups[currentGroupIndex][i];
      image.alt = `Circle Image ${i + 1}`;
      circleImage.appendChild(image);
      circleImagesContainer.appendChild(circleImage);
    }

    // Chuyển sang nhóm hình ảnh tiếp theo
    currentGroupIndex = (currentGroupIndex + 1) % imageGroups.length;
  }
    // Hiển thị nhóm hình ảnh đầu tiên ngay lập tức
    displayImageGroup();

  // Gọi hàm hiển thị mỗi 3 giây
  setInterval(displayImageGroup, displayTime);
});
