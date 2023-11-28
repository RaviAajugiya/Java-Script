const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
let active;

const openModal = function (e) {
  active = e.target.id;
  console.log(active);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  if (active == 1) {
    overlay.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', escHandler);

    btnCloseModal.addEventListener('click', closeModal);

  } else if (active == 2) {
    btnCloseModal.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', escHandler);

    overlay.addEventListener('click', closeModal);

  } else if (active == 3) {
    overlay.removeEventListener('click', closeModal);
    btnCloseModal.removeEventListener('click', closeModal);

    document.addEventListener('keydown', escHandler);
  };
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

const escHandler = function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}