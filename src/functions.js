function turnCarouselRight(carousel) {
  for (let i = 0; i < carousel.length; i++) {
    if (
      carousel[i].getAttribute('active') === 'true' &&
      i + 1 < carousel.length
    ) {
      carousel.forEach((element) => {
        element.style.display = 'none';
      });
      carousel[i].setAttribute('active', 'false');
      carousel[i + 1].setAttribute('active', 'true');
      carousel[i + 1].style.display = 'inline';
      break;
    }
  }
}

function turnCarouselLeft(carousel) {
  for (let i = 0; i < carousel.length; i++) {
    if (carousel[i].getAttribute('active') === 'true' && i - 1 >= 0) {
      carousel.forEach((element) => {
        element.style.display = 'none';
      });
      carousel[i].setAttribute('active', 'false');
      carousel[i - 1].setAttribute('active', 'true');
      carousel[i - 1].style.display = 'inline';
      break;
    }
  }
}

export { turnCarouselRight, turnCarouselLeft };
