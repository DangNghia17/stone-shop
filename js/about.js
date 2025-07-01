// About page JavaScript

// Initialize about page
function initializeAbout() {
    setupEventListeners();
    loadStatistics();
    loadTeamMembers();
}

// Setup event listeners
function setupEventListeners() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

// Handle smooth scrolling
function handleSmoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Handle intersection observer
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}

// Load statistics with animation
function loadStatistics() {
    const stats = [
        { id: 'years-experience', target: 15, suffix: '+' },
        { id: 'products-sold', target: 1000, suffix: '+' },
        { id: 'happy-customers', target: 500, suffix: '+' },
        { id: 'awards-won', target: 25, suffix: '+' }
    ];

    stats.forEach(stat => {
        const element = document.getElementById(stat.id);
        if (element) {
            animateNumber(element, 0, stat.target, 2000, stat.suffix);
        }
    });
}

// Animate number counting
function animateNumber(element, start, end, duration, suffix = '') {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Load team members
function loadTeamMembers() {
    const teamContainer = document.getElementById('team-container');
    if (!teamContainer) return;

    const teamData = [
        {
            name: 'Nguyễn Văn A',
            position: 'Giám đốc',
            image: 'https://res.cloudinary.com/meaning17/image/upload/v1703123496/damynghe/team-member-1.jpg',
            description: 'Chuyên gia với hơn 15 năm kinh nghiệm trong lĩnh vực đá mỹ nghệ.'
        },
        {
            name: 'Trần Thị B',
            position: 'Quản lý sản xuất',
            image: 'https://res.cloudinary.com/meaning17/image/upload/v1703123497/damynghe/team-member-2.jpg',
            description: 'Đảm bảo chất lượng và tiến độ sản xuất của từng sản phẩm.'
        },
        {
            name: 'Lê Văn C',
            position: 'Thợ chế tác chính',
            image: 'https://res.cloudinary.com/meaning17/image/upload/v1703123498/damynghe/team-member-3.jpg',
            description: 'Nghệ nhân tài hoa với đôi tay khéo léo và tâm huyết với nghề.'
        },
        {
            name: 'Phạm Thị D',
            position: 'Tư vấn khách hàng',
            image: 'https://res.cloudinary.com/meaning17/image/upload/v1703123499/damynghe/team-member-4.jpg',
            description: 'Chuyên viên tư vấn nhiệt tình, am hiểu sâu sắc về sản phẩm.'
        }
    ];

    teamContainer.innerHTML = teamData.map(member => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-on-scroll">
            <div class="relative">
                <img src="${member.image}" alt="${member.name}" class="w-full h-64 object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div class="absolute bottom-4 left-4 text-white">
                    <h3 class="text-xl font-semibold">${member.name}</h3>
                    <p class="text-blue-200">${member.position}</p>
                </div>
            </div>
            <div class="p-6">
                <p class="text-gray-600">${member.description}</p>
                <div class="mt-4 flex space-x-3">
                    <a href="#" class="text-blue-600 hover:text-blue-800">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#" class="text-blue-600 hover:text-blue-800">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="text-blue-600 hover:text-blue-800">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Load timeline
function loadTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) return;

    const timelineData = [
        {
            year: '2009',
            title: 'Thành lập công ty',
            description: 'Đá Mỹ Nghệ được thành lập với mục tiêu mang đến những sản phẩm đá mỹ nghệ chất lượng cao.'
        },
        {
            year: '2012',
            title: 'Mở rộng sản xuất',
            description: 'Xây dựng xưởng sản xuất quy mô lớn với trang thiết bị hiện đại.'
        },
        {
            year: '2015',
            title: 'Đạt chứng nhận ISO',
            description: 'Đạt chứng nhận ISO 9001:2015 về quản lý chất lượng sản phẩm.'
        },
        {
            year: '2018',
            title: 'Mở rộng thị trường',
            description: 'Bắt đầu xuất khẩu sản phẩm ra thị trường quốc tế.'
        },
        {
            year: '2021',
            title: 'Công nghệ số hóa',
            description: 'Ứng dụng công nghệ số trong thiết kế và sản xuất sản phẩm.'
        },
        {
            year: '2024',
            title: 'Tương lai',
            description: 'Tiếp tục phát triển và đổi mới để mang đến những sản phẩm tốt nhất cho khách hàng.'
        }
    ];

    timelineContainer.innerHTML = timelineData.map((item, index) => `
        <div class="flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-on-scroll">
            <div class="flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">${item.title}</h3>
                    <p class="text-gray-600">${item.description}</p>
                </div>
            </div>
            <div class="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                ${item.year}
            </div>
            <div class="flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}"></div>
        </div>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAbout); 