function turnCarouselRight(carousel, dots) {
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
      dots[i].setAttribute('active', 'false');
      dots[i + 1].setAttribute('active', 'true');
      break;
    }
  }
}

function turnCarouselLeft(carousel, dots) {
  for (let i = 0; i < carousel.length; i++) {
    if (carousel[i].getAttribute('active') === 'true' && i - 1 >= 0) {
      carousel.forEach((element) => {
        element.style.display = 'none';
      });
      carousel[i].setAttribute('active', 'false');
      carousel[i - 1].setAttribute('active', 'true');
      carousel[i - 1].style.display = 'inline';
      dots[i].setAttribute('active', 'false');
      dots[i - 1].setAttribute('active', 'true');
      break;
    }
  }
}

function dotNavigation(dots, carousel) {
  return function (e) {
    dots.forEach((dot) => {
      dot.setAttribute('active', 'false');
    });
    carousel.forEach((image) => {
      image.style.display = 'none';
      image.setAttribute('active', 'false');
    });
    const index = e.target.getAttribute('index');
    dots[index].setAttribute('active', 'true');
    carousel[index].setAttribute('active', 'true');
    carousel[index].style.display = 'inline';
  };
}

export { turnCarouselRight, turnCarouselLeft, dotNavigation };
