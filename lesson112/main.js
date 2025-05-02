// -------первый вариант--------//
// const openButton = document.getElementById('open-modal');
// const closeButton = document.getElementById('close-modal');
// const modalWindow = document.getElementById('modal-window');

// // Обработчик события для кнопки открытия модального окна
// openButton.addEventListener('click', () => {
//     // Открываем модальное окно
//     modalWindow.showModal();
// });

// // Обработчик события для закрытия модального окна
// closeButton.addEventListener('click', () => {
//     // Закрываем модальное окно
//     modalWindow.close();
// });

// -------второй вариант--------- //
const openButtons = document.querySelectorAll('.open-modal')
const closeButton = document.querySelector('.modal__close-btn')
const modalWindow = document.querySelector('.modal')

openButtons.forEach(button => button.addEventListener('click', () => {
    modalWindow.style.display = 'block'
}))

closeButton.addEventListener('click', () => {
    modalWindow.style.display = 'none'
})

window.addEventListener('click', event => {
    if (event.target === modalWindow) {
        modalWindow.style.display = 'none'
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        modalWindow.style.display = 'none'
    }
})
