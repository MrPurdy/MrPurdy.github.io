const customCursor = document.getElementById('custom-cursor');
const hoverContainer = document.querySelector('.hover-container');
const updateCursorPosition = (event) => {
  customCursor.style.top = `${event.clientY}px`;
  customCursor.style.left = `${event.clientX}px`;
}
window.addEventListener('mousemove', (event) => {
  updateCursorPosition(event)

  if (hoverContainer.matches(':hover')) {
    customCursor.classList.add('zoom')
  } else {
    customCursor.classList.remove('zoom')
  }
})
