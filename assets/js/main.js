const logBtn = document.querySelector('.login-btn')
const modal = document.querySelector('.modal')
const closeLogBtn = document.querySelector('.modal-log-close-btn')

function showLogin(){
    modal.classList.add('open')
}

function closeLogin(){
    modal.classList.remove('open')
}

logBtn.addEventListener('click', showLogin)
closeLogBtn.addEventListener('click', closeLogin)


// ----------------- OVERLAY

const overlay = document.querySelector('.overlay');

function showLogin() {
    modal.classList.add('open');
    overlay.style.display = 'block'; // Hiển thị overlay
}

function closeLogin() {
    modal.classList.remove('open');
    overlay.style.display = 'none'; // Ẩn overlay
}

// --- menu-overlay

// function showMenu() {
//     document.getElementById("menu-overlay").classList.remove("d-none");
// }

// function hideMenu() {
//     document.getElementById("menu-overlay").classList.add("d-none");
// }
