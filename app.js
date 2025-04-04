// Scroll Button - Sayfayı aşağı kaydırma işlemi
const scrollButton = document.getElementById("scrollButton");

scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
});

// Görsellerin üzerine gelince büyüme efekti
const images = document.querySelectorAll('.image-container img');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});


