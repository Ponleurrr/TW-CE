const thumbs = document.querySelectorAll('.thumb-box');
const mainImg = document.getElementById('current-main-img');

thumbs.forEach(box => {
    box.addEventListener('click', () => {
        // Remove active class from all
        thumbs.forEach(t => t.classList.remove('active'));
        // Add to clicked one
        box.classList.add('active');
        // Change main image
        mainImg.src = box.querySelector('img').src;
    });
});