const modal = document.querySelector('.backdrop');
const openBtns = document.querySelectorAll('.modal-btn-open');
const closeBtn = document.querySelector('.modal-btn-close');

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

// Вешаем обработчик на каждую кнопку из списка
openBtns.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});
closeBtn.addEventListener('click', toggleModal);
