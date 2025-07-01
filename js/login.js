// Login page JavaScript

// Toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const icon = document.querySelector('#toggle-password i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Handle form submission
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loadingOverlay = document.getElementById('loading-overlay');
    const loginBtn = document.getElementById('login-btn');

    // Show loading
    loadingOverlay.classList.remove('hidden');
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Đang xử lý...';

    // Simulate API call
    setTimeout(() => {
        if (Auth.login(username, password)) {
            // Success animation
            loginBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Thành công!';
            loginBtn.classList.remove('from-blue-500', 'to-purple-600');
            loginBtn.classList.add('from-green-500', 'to-green-600');
            
            Utils.showNotification('Đăng nhập thành công!', 'success');
            
            setTimeout(() => {
                window.location.href = 'admin.html';
            }, 1000);
        } else {
            // Error animation
            loginBtn.innerHTML = '<i class="fas fa-times mr-2"></i>Đăng nhập thất bại';
            loginBtn.classList.remove('from-blue-500', 'to-purple-600');
            loginBtn.classList.add('from-red-500', 'to-red-600');
            
            // Shake animation
            const form = document.querySelector('.glass-effect');
            form.style.animation = 'shake 0.5s ease-in-out';
            
            Utils.showNotification('Tên người dùng hoặc mật khẩu không đúng!', 'error');
            
            setTimeout(() => {
                form.style.animation = '';
                loginBtn.innerHTML = '<i class="fas fa-sign-in-alt mr-2"></i>Đăng Nhập';
                loginBtn.classList.remove('from-red-500', 'to-red-600');
                loginBtn.classList.add('from-blue-500', 'to-purple-600');
                loginBtn.disabled = false;
                loadingOverlay.classList.add('hidden');
            }, 2000);
        }
    }, 1500);
}

// Initialize login page
document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    document.getElementById('toggle-password').addEventListener('click', togglePasswordVisibility);

    // Handle form submission
    document.getElementById('login-form').addEventListener('submit', handleLogin);

    // Enter key to login
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('login-btn').click();
        }
    });

    // Auto focus on username field
    document.getElementById('username').focus();
}); 