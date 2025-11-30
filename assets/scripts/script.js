const menu = document.getElementById('menu');
const close_btn = document.getElementById('burger-close');

close_btn.addEventListener('click', () => {
  menu.classList.toggle('_open');
});

const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.className = "scroll-top-btn";
scrollTopBtn.innerHTML = `
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
</svg>
`;

document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});


const profileBtn = document.getElementById("profileBtn");

// створюємо overlay
const modalOverlay = document.createElement("div");
modalOverlay.className = "modal-overlay";

// створюємо модальне вікно
const modalWindow = document.createElement("div");
modalWindow.className = "modal-window";

// вміст модального вікна
modalWindow.innerHTML = `
    <h2>Реєстрація</h2>
    <form class="modal-form">
        <label>
            Логін
            <input type="text" class="modal-input login-input" required>
        </label>

        <label>
            Пароль
            <input type="password" class="modal-input password-input" required>
        </label>

        <label>
            Підтвердження паролю
            <input type="password" class="modal-input confirm-input" required>
        </label>

        <div class="modal-buttons">
            <button type="button" class="modal-btn modal-btn--login">Увійти</button>
            <button type="submit" class="modal-btn modal-btn--register">Зареєструватися</button>
        </div>
    </form>
`;

modalOverlay.appendChild(modalWindow);
document.body.appendChild(modalOverlay);

profileBtn.addEventListener("click", () => {
    modalOverlay.classList.add("open");
});

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("open");
    }
});

document.querySelector(".modal-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const pass = document.querySelector(".password-input").value;
    const confirm = document.querySelector(".confirm-input").value;

    if (pass !== confirm) {
        alert("Паролі не збігаються");
        return;
    }

    alert("Реєстрація успішна!");
});
