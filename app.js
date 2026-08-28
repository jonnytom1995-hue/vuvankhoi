// --- Tự động điền ngày cập nhật hiện tại ---
document.addEventListener("DOMContentLoaded", function () {
    // Lấy ngày, tháng, năm hiện tại từ hệ thống máy tính người dùng
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Tháng trong JS tính từ 0-11
    const yyyy = today.getFullYear();
    
    const formattedDate = `${dd}/${mm}/${yyyy}`;

    // Tìm tất cả các thẻ có thuộc tính data-date="today"
    const autoDateElements = document.querySelectorAll('.update-date[data-date="today"]');
    
    autoDateElements.forEach(element => {
        element.textContent = `Cập nhật: Hôm nay (${formattedDate})`;
    });
});
