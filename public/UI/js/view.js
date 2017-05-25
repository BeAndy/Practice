/* global document window */
function getById(currentId) {
  return document.getElementById(currentId);
}
window.onclick = function clickHandler(event) {
  const modal = getById('login-template');
  const filter = getById('filter');
  const view = getById('view');
  const create = getById('create');
  const change = getById('change');
  const body = document.body;
  if (event.target === modal) {
    modal.style.display = 'none';
  }
  if (event.target === filter) {
    filter.style.display = 'none';
    filter.classList.toggle('animate-div', false);
  }
  if (event.target === view) {
    view.style.display = 'none';
    body.classList.toggle('no-scroll', false);
  }
  if (event.target === create) {
    create.style.display = 'none';
    body.classList.toggle('no-scroll', false);
  }
  if (event.target === change) {
    change.style.display = 'none';
    body.classList.toggle('no-scroll', false);
  }
};
