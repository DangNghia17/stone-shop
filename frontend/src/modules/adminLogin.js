// Admin login handler
export function initAdminLogin() {
  const loginForm = document.getElementById('admin-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Simple authentication (demo)
      if (username === 'meaning17' && password === 'Nghiachidang@2002') {
        localStorage.setItem('adminLoggedIn', 'true');
        window.location.hash = '#/dashboard';
      } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
      }
    });
  }
}
