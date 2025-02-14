const openPasswordFormBtn = document.querySelector('.open-password-form-btn');
const passwordContainer = document.getElementById('password-container');
const passwordInput = document.getElementById('password-input');
const submitPasswordBtn = document.getElementById('submit-password');
const errorMessage = document.getElementById('error-message');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');


openPasswordFormBtn.addEventListener('click', () => {
    passwordContainer.style.display = 'block';  
});


submitPasswordBtn.addEventListener('click', () => {
    const password = passwordInput.value;  
    if (password === "20-02-2018") {
        passwordContainer.style.display = 'none';  
        modal.style.display = 'flex';  
    } else {
        errorMessage.style.display = 'block';  
    }
});


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';  
});


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';  
    }
});
