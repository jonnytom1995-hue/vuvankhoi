particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80, // Số lượng hạt hiển thị trên màn hình
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" // Màu sắc của hạt bụi (màu trắng)
    },
    "shape": {
      "type": "circle" // Hình dáng hạt tròn
    },
    "opacity": {
      "value": 0.5, // Độ mờ của hạt
      "random": true, // Hạt đậm hạt nhạt ngẫu nhiên
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3, // Kích thước hạt bụi tối đa
      "random": true, // Hạt to hạt nhỏ ngẫu nhiên
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": false // Tắt đường kẻ nối giữa các hạt để giống hạt bụi/tuyết rơi hơn
    },
    "move": {
      "enable": true,
      "speed": 1.5, // Tốc độ bay của hạt bụi
      "direction": "none", // Bay tự do không theo hướng cố định
      "random": true,
      "straight": false,
      "out_mode": "out", // Hạt bay ra khỏi màn hình sẽ tự tạo lại hạt mới
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble" // Hiệu ứng khi rê chuột vào: hạt bụi sẽ to lên nhẹ
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Click chuột sẽ sinh thêm hạt mới
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 100,
        "size": 6,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

