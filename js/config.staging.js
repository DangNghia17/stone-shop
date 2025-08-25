// Environment configuration for the stone shop
window.APP_CONFIG = {
    environment: 'staging',
    version: '2.0.0-staging',
    siteName: 'Đá Mỹ Nghệ - Staging',
    description: 'Phiên bản thử nghiệm với giao diện nâng cấp',
    features: {
        newInterface: true,
        betaFeatures: true,
        debugMode: true
    },
    urls: {
        production: 'https://your-production-domain.vercel.app',
        staging: 'https://your-staging-domain.vercel.app'
    }
};