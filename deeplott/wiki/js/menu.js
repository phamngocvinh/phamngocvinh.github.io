document.addEventListener("DOMContentLoaded", () => {
    // MathJax Config before it loads
    window.MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']]
        },
        svg: {
            fontCache: 'global'
        }
    };

    const menuItems = [
        { id: 'index', name: 'Giới thiệu chung', icon: 'fas fa-home', url: 'index.html' },
        { id: 'general', name: 'Phân tích Tổng quan', icon: 'fas fa-chart-pie', url: 'general.html' },
        { id: 'overdue', name: 'Phân tích Gan (Overdue)', icon: 'fas fa-hourglass-half', url: 'overdue.html' },
        { id: 'relationships', name: 'Mối quan hệ & Bộ số', icon: 'fas fa-people-arrows', url: 'relationships.html' },
        { id: 'chain', name: 'Chuỗi Dẫn-Theo', icon: 'fas fa-link', url: 'chain.html' },
        { id: 'latest_draw', name: 'Kỳ quay gần nhất', icon: 'fas fa-history', url: 'latest_draw.html' },
        { id: 'special', name: 'Phân tích Số đặc biệt', icon: 'fas fa-star', url: 'special.html' },
        { id: 'consecutive', name: 'Chuỗi liên tiếp', icon: 'fas fa-layer-group', url: 'consecutive.html' },
        { id: 'modulo', name: 'Khoảng cách & Modulo', icon: 'fas fa-percentage', url: 'modulo.html' },
        { id: 'ratios', name: 'Tỷ lệ Chẵn/Lẻ & Lớn/Nhỏ', icon: 'fas fa-balance-scale', url: 'ratios.html' },
        { id: 'distribution', name: 'Phân phối & Kiểm định', icon: 'fas fa-th-large', url: 'distribution.html' },
        { id: 'poisson', name: 'Phân bố Poisson', icon: 'fas fa-chart-area', url: 'poisson.html' },
        { id: 'knn', name: 'K-Nearest Neighbors', icon: 'fas fa-project-diagram', url: 'knn.html' },
        { id: 'smart_wheel', name: 'Tổ hợp Smart Wheel', icon: 'fas fa-dharmachakra', url: 'smart_wheel.html' },
        { id: 'advanced', name: 'Chỉ số Nâng cao', icon: 'fas fa-vial', url: 'advanced.html' },
        { id: 'weekday', name: 'Phân tích theo Thứ', icon: 'fas fa-calendar-alt', url: 'weekday.html' }
    ];

    // Xác định trang hiện tại
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Tạo HTML cho Sidebar
    const sidebarHTML = `
        <div class="sidebar-header">
            <div class="logo-container">
                <div class="logo-icon">D</div>
                <div class="logo-text">Deeplott Wiki</div>
            </div>
            <button class="mobile-menu-btn" id="mobile-menu-btn" title="Toggle Menu">
                <i class="fas fa-bars"></i>
            </button>
        </div>
        <ul class="menu-list" id="menu-list">
            ${menuItems.map(item => `
                <li class="menu-item ${currentPage === item.url ? 'active' : ''}">
                    <a href="${item.url}">
                        <i class="${item.icon}"></i>
                        <span>${item.name}</span>
                    </a>
                </li>
            `).join('')}
        </ul>
        <div class="sidebar-footer" style="margin-top: auto; padding-top: 2rem; font-size: 0.8rem; color: var(--nord3); text-align: center;">
            Phiên bản 1.0<br>Toán học ứng dụng
        </div>
    `;

    // Inject Sidebar vào element có id="sidebar-container"
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = sidebarHTML;
    }

    // Mobile menu toggle event
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const menuList = document.getElementById('menu-list');
    const sidebarFooter = document.querySelector('.sidebar-footer');
    if (mobileBtn && menuList) {
        mobileBtn.addEventListener('click', () => {
            menuList.classList.toggle('show');
            if(sidebarFooter) {
                sidebarFooter.classList.toggle('show');
            }
        });
    }

    // Load FontAwesome dynamically
    if (!document.getElementById('fontawesome')) {
        const fa = document.createElement('link');
        fa.id = 'fontawesome';
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fa);
    }

    // Load MathJax dynamically
    if (!document.getElementById('mathjax-script')) {
        const mj = document.createElement('script');
        mj.id = 'mathjax-script';
        mj.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
        mj.async = true;
        document.head.appendChild(mj);
    }
});
