const menuBtn = document.querySelector('.menu');
const list = document.querySelector('ul');
menuBtn.addEventListener('click', () => {
    list.classList.toggle('is-opened')
})

function setContainerWidthClass() {
  const containers = document.querySelectorAll('.container');
  const screenWidth = window.innerWidth;

  containers.forEach(container => {
    if (screenWidth > 1440) {
      container.classList.add('container-width');
    } else {
      container.classList.remove('container-width');
    }
  });
}

setContainerWidthClass();
window.addEventListener('resize', setContainerWidthClass);
  