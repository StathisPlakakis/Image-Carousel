function turnCarouselRight(carousel) {
  carousel.forEach((element) => {
    element.style.display = 'none';
  });
  for (let i = 0; i < carousel.length; i++) {
    if (
      carousel[i].getAttribute('active') === 'true' &&
      i + 1 < carousel.length
    ) {
      carousel[i].setAttribute('active', 'false');
      carousel[i + 1].setAttribute('active', 'true');
      carousel[i + 1].style.display = 'inline';
      break;
    }
  }
}

export default turnCarouselRight;
