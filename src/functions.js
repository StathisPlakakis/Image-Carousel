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

function automaticCarouselRotation(dots, carousel) {
  for (let i = 0; i < carousel.length; i++) {
    if (carousel[i].getAttribute('active') === 'true') {
      if (i + 1 < carousel.length) {
        turnCarouselRight(carousel, dots);
        break;
      } else {
        carousel.forEach((element, index) => {
          element.style.display = 'none';
          element.setAttribute('active', 'false');
          dots[index].setAttribute('active', 'false');
        });
        carousel[0].setAttribute('active', 'true');
        carousel[0].style.display = 'inline';
        dots[0].setAttribute('active', 'true');
        break;
      }
    }
  }
}

export {
  turnCarouselRight,
  turnCarouselLeft,
  dotNavigation,
  automaticCarouselRotation,
};
