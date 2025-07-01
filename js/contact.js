// Contact page JavaScript

// Initialize contact page
function initializeContact() {
    setupEventListeners();
    loadFAQ();
}

// Setup event listeners
function setupEventListeners() {
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isOpen = answer.classList.contains('max-h-0');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                otherAnswer.classList.add('max-h-0');
                otherAnswer.classList.remove('max-h-96');
            });
            
            // Toggle current item
            if (isOpen) {
                answer.classList.remove('max-h-0');
                answer.classList.add('max-h-96');
            } else {
                answer.classList.add('max-h-0');
                answer.classList.remove('max-h-96');
            }
        });
    });

    // Social media links
    const socialLinks = document.querySelectorAll('[data-social]');
    socialLinks.forEach(link => {
        link.addEventListener('click', handleSocialClick);
    });
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Validate form
    if (!contactData.name || !contactData.email || !contactData.message) {
        Utils.showNotification('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
        return;
    }

    if (!Utils.validateEmail(contactData.email)) {
        Utils.showNotification('Email không hợp lệ!', 'error');
        return;
    }

    if (contactData.phone && !Utils.validatePhone(contactData.phone)) {
        Utils.showNotification('Số điện thoại không hợp lệ!', 'error');
        return;
    }

    // Save contact message
    const contacts = Storage.get('contacts', []);
    contacts.push({
        ...contactData,
        id: Utils.generateId(),
        createdAt: new Date().toISOString(),
        status: 'new'
    });
    Storage.set('contacts', contacts);

    // Reset form
    e.target.reset();
    
    Utils.showNotification('Gửi tin nhắn thành công! Chúng tôi sẽ liên hệ lại sớm nhất.', 'success');
}

// Handle social media clicks
function handleSocialClick(e) {
    e.preventDefault();
    const platform = e.currentTarget.dataset.social;
    
    const socialUrls = {
        facebook: 'https://facebook.com/damynghe',
        twitter: 'https://twitter.com/damynghe',
        instagram: 'https://instagram.com/damynghe',
        youtube: 'https://youtube.com/damynghe',
        linkedin: 'https://linkedin.com/company/damynghe'
    };
    
    const url = socialUrls[platform];
    if (url) {
        window.open(url, '_blank');
    }
}

// Load FAQ data
function loadFAQ() {
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer) return;

    const faqData = [
        {
            question: 'Các sản phẩm đá mỹ nghệ có nguồn gốc từ đâu?',
            answer: 'Tất cả sản phẩm đá mỹ nghệ của chúng tôi đều được chế tác từ đá tự nhiên quý giá, có nguồn gốc rõ ràng và được khai thác bền vững.'
        },
        {
            question: 'Thời gian giao hàng là bao lâu?',
            answer: 'Thời gian giao hàng phụ thuộc vào địa điểm và loại sản phẩm. Thông thường từ 3-7 ngày làm việc cho các đơn hàng trong nội thành, 7-14 ngày cho các tỉnh thành khác.'
        },
        {
            question: 'Có chính sách bảo hành không?',
            answer: 'Chúng tôi cam kết bảo hành chất lượng sản phẩm trong vòng 12 tháng. Nếu có lỗi do sản xuất, chúng tôi sẽ đổi trả hoặc sửa chữa miễn phí.'
        },
        {
            question: 'Có thể đặt hàng theo yêu cầu riêng không?',
            answer: 'Có, chúng tôi nhận đặt hàng theo yêu cầu riêng của khách hàng. Vui lòng liên hệ trực tiếp để được tư vấn chi tiết về thiết kế và thời gian thực hiện.'
        },
        {
            question: 'Phương thức thanh toán nào được chấp nhận?',
            answer: 'Chúng tôi chấp nhận thanh toán bằng tiền mặt, chuyển khoản ngân hàng, hoặc thanh toán qua các cổng thanh toán trực tuyến an toàn.'
        }
    ];

    faqContainer.innerHTML = faqData.map((faq, index) => `
        <div class="faq-item border-b border-gray-200">
            <button class="faq-question w-full py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span class="font-medium text-gray-900">${faq.question}</span>
                <i class="fas fa-chevron-down text-gray-500 transition-transform"></i>
            </button>
            <div class="faq-answer max-h-0 overflow-hidden transition-all duration-300">
                <div class="pb-4 text-gray-600">
                    ${faq.answer}
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeContact); 