const modal = document.querySelector('.backdrop');
const openBtn = document.querySelector('.modal-btn-open');
const closeBtn = document.querySelector('.modal-btn-close');

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

openBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
