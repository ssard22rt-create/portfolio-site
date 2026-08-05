// Плавное появление блоков при прокрутке
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

// Создаем анимированные частицы
const particles = document.getElementById("particles");

for (let i = 0; i < 80; i++) {

    const star = document.createElement("div");

    star.style.position = "absolute";
    star.style.width = Math.random() * 4 + 2 + "px";
    star.style.height = star.style.width;

    star.style.background = "white";
    star.style.borderRadius = "50%";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random();

    star.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;

    particles.appendChild(star);
}

// Добавляем CSS-анимацию для частиц
const style = document.createElement("style");

style.innerHTML = `
@keyframes float{
    0%{
        transform:translateY(0px);
    }

    50%{
        transform:translateY(-40px);
    }

    100%{
        transform:translateY(0px);
    }
}
`;

document.head.appendChild(style);