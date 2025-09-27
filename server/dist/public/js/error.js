document.addEventListener('DOMContentLoaded', () => {
    const errorCode = document.querySelector('.error-code');
    if (errorCode) {
        errorCode.style.transition = 'transform 0.5s ease-out';
        errorCode.style.transform = 'scale(1.05)';
        setTimeout(() => {
            errorCode.style.transform = 'scale(1)';
        }, 500);
    }
});