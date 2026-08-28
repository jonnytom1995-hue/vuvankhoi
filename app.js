// 1. Cấu hình hiệu ứng hạt nền (Particles)
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.4, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": false },
    "move": { "enable": true, "speed": 1.2, "direction": "none", "random": true, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "bubble" }, "resize": true },
    "modes": { "bubble": { "distance": 100, "size": 5, "duration": 2, "opacity": 0.8 } }
  },
  "retina_detect": true
});

// 2. Logic tự động lấy ngày tháng thực tế từ hệ thống
document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const formattedDate = `${dd}/${mm}/${yyyy}`;

    const autoDateElements = document.querySelectorAll('.update-date[data-auto-date="true"]');
    autoDateElements.forEach(element => {
        // Cập nhật chuỗi nội dung dài giống hệ thống trong hình ảnh của bạn
        element.textContent = `Link Cài Trực Tiếp V2.735 Cập nhật: ${formattedDate}`;
    });
});

