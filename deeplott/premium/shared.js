/**
 * Shared logic cho Wiki Premium
 * Tác giả: Antigravity
 */

const Constants = {
    AppName: "Deeplott",
    PremiumTitle: "Premium Experience",
    WelcomeTitle: "Nâng tầm trải nghiệm cùng",
    Home: "Trang chủ Premium",
    MenuTitle: "Tính năng Premium",

    // Feature titles
    Features: {
        History: "Phân tích kỳ quay không giới hạn",
        Speed: "Băng thông & Tốc độ ưu tiên",
        SmartWheel: "Màn hình tối ưu bao",
        Management: "Quản lý bộ số cá nhân",
        Personalization: "Cá nhân hóa chuyên sâu",
        FAB: "Floating Action Button (FAB)"
    },

    // Feature descriptions short
    Descriptions: {
        History: "Soi tất cả kỳ quay (100, 200, 500, 1000...) thay vì chỉ 100 kỳ như bản miễn phí.",
        Speed: "Xử lý Quality Check và Gợi ý bộ số với tốc độ server ưu tiên, không giới hạn băng thông.",
        SmartWheel: "Công cụ mạnh mẽ giúp tối ưu hóa việc chọn bao, tăng xác suất trúng thưởng.",
        Management: "Lưu trữ, kiểm tra kết quả và theo dõi hiệu quả các bộ số cá nhân của bạn.",
        Personalization: "Gợi ý số theo phong thủy, độ tuổi và phong cách chơi riêng biệt của bạn.",
        FAB: "Import hàng loạt, quét vé giấy và nhập số yêu thích ngay trong khi phân tích."
    }
};

// Sidebar configuration
const menuItems = [
    { id: 'home', icon: 'ph-house', label: 'Trang chủ', link: 'index.html' },
    { id: 'history', icon: 'ph-chart-line-up', label: 'Soi kỳ quay', link: 'draw-history.html' },
    { id: 'speed', icon: 'ph-lightning', label: 'Tốc độ ưu tiên', link: 'speed-priority.html' },
    { id: 'wheel', icon: 'ph-circles-three-plus', label: 'Tối ưu bao', link: 'smart-wheel.html' },
    { id: 'numbers', icon: 'ph-folder-star', label: 'Quản lý bộ số', link: 'personal-numbers.html' },
    { id: 'personal', icon: 'ph-user-focus', label: 'Cá nhân hóa', link: 'personalization.html' },
    { id: 'fab', icon: 'ph-plus-circle', label: 'Tính năng FAB', link: 'fab-features.html' },
];

/**
 * Khởi tạo sidebar và các thành phần chung
 */
function initCommonElements() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Create Sidebar
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.id = 'sidebar';

    let menuHtml = `
        <div class="sidebar-header">
            <img src="screenshot/icon.png" alt="Logo" onerror="this.src='https://placehold.co/40x40?text=DL'">
            <h2>${Constants.AppName}</h2>
        </div>
        <ul class="nav-links">
    `;

    menuItems.forEach(item => {
        const isActive = currentPath === item.link ? 'active' : '';
        menuHtml += `
            <li>
                <a href="${item.link}" class="${isActive}">
                    <i class="${item.icon}"></i>
                    <span>${item.label}</span>
                </a>
            </li>
        `;
    });

    menuHtml += `</ul>`;
    sidebar.innerHTML = menuHtml;
    document.body.appendChild(sidebar);

    // Create Overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.id = 'overlay';
    document.body.appendChild(overlay);

    // Menu toggle logic
    const menuBtn = document.querySelector('.menu-toggle');
    if (menuBtn) {
        menuBtn.onclick = () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        };
    }

    overlay.onclick = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    };

    // Replace constants in text
    document.querySelectorAll('[data-text]').forEach(el => {
        const key = el.getAttribute('data-text');
        const keys = key.split('.');
        let val = Constants;
        keys.forEach(k => { val = val[k]; });
        if (val) el.textContent = val;
    });
}

document.addEventListener('DOMContentLoaded', initCommonElements);
