const images = document.querySelectorAll('.image');

images.forEach(image => {
  image.addEventListener('click', () => {
    const fullscreen = document.createElement('div');
    fullscreen.classList.add('fullscreen');
    const fullscreenImage = document.createElement('img');
    fullscreenImage.classList.add('fullscreen-image');
    fullscreenImage.src = image.src;
    fullscreen.appendChild(fullscreenImage);
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
      fullscreen.remove();
    });
    fullscreen.appendChild(closeButton);
    document.body.appendChild(fullscreen);
  });
});
