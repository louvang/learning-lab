const { hash } = window.location;

const msg = atob(hash.replace('#', ''));
if (msg) {
  document.querySelector('#msg-card').classList.add('hide');
  document.querySelector('#msg-show').classList.remove('hide');

  document.querySelector('h1').innerHTML = msg;
}

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('#msg-card').classList.add('hide');
  document.querySelector('#link-card').classList.remove('hide');

  const input = document.querySelector('#msg-input');
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector('#link-input');

  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
