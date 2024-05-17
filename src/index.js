import './style.css';
import { turnCarouselRight, turnCarouselLeft } from './functions';
import badgeDollar from './assets/badge-dollar.svg';
import careerGrowth from './assets/career-growth.svg';
import dollar from './assets/dollar.svg';
import sackDollar from './assets/sack-dollar.svg';
import talentAlt from './assets/talent-alt.svg';
import userSalary from './assets/user-salary.svg';

const slides = document.querySelector('.slides');

const newBadgeDollar = new Image();
newBadgeDollar.src = badgeDollar;
newBadgeDollar.style.height = '100px';
newBadgeDollar.style.width = '100px';
slides.appendChild(newBadgeDollar);

const newCareerGrowth = new Image();
newCareerGrowth.src = careerGrowth;
newCareerGrowth.style.height = '100px';
newCareerGrowth.style.width = '100px';
slides.appendChild(newCareerGrowth);

const newDollar = new Image();
newDollar.src = dollar;
newDollar.style.height = '100px';
newDollar.style.width = '100px';
slides.appendChild(newDollar);

const newSackDollar = new Image();
newSackDollar.src = sackDollar;
newSackDollar.style.height = '100px';
newSackDollar.style.width = '100px';
slides.appendChild(newSackDollar);

const newTalentAlt = new Image();
newTalentAlt.src = talentAlt;
newTalentAlt.style.height = '100px';
newTalentAlt.style.width = '100px';
slides.appendChild(newTalentAlt);

const newUserSalary = new Image();
newUserSalary.src = userSalary;
newUserSalary.style.height = '100px';
newUserSalary.style.width = '100px';
slides.appendChild(newUserSalary);

const newBadgeDollar2 = new Image();
newBadgeDollar2.src = badgeDollar;
newBadgeDollar2.style.height = '100px';
newBadgeDollar2.style.width = '100px';
slides.appendChild(newBadgeDollar2);

const newCareerGrowth2 = new Image();
newCareerGrowth2.src = careerGrowth;
newCareerGrowth2.style.height = '100px';
newCareerGrowth2.style.width = '100px';
slides.appendChild(newCareerGrowth2);

const newDollar2 = new Image();
newDollar2.src = dollar;
newDollar2.style.height = '100px';
newDollar2.style.width = '100px';
slides.appendChild(newDollar2);

const newSackDollar2 = new Image();
newSackDollar2.src = sackDollar;
newSackDollar2.style.height = '100px';
newSackDollar2.style.width = '100px';
slides.appendChild(newSackDollar2);

const newTalentAlt2 = new Image();
newTalentAlt2.src = talentAlt;
newTalentAlt2.style.height = '100px';
newTalentAlt2.style.width = '100px';
slides.appendChild(newTalentAlt2);

const newUserSalary2 = new Image();
newUserSalary2.src = userSalary;
newUserSalary2.style.height = '100px';
newUserSalary2.style.width = '100px';
slides.appendChild(newUserSalary2);

const allImages = document.querySelectorAll('img');
allImages.forEach((image, index) => {
  image.setAttribute('active', 'false');
  image.setAttribute('index', index);
});

allImages[0].setAttribute('active', 'true');

const next = document.querySelector('.turnCarouselRight');
next.addEventListener('click', () => {
  turnCarouselRight(allImages);
});

const previous = document.querySelector('.turnCarouselLeft');
previous.addEventListener('click', () => {
  turnCarouselLeft(allImages);
});

const navigationDots = document.querySelector('.navigation-dots');
allImages.forEach((image) => {
  const navigationDot = document.createElement('div');
  const position = image.getAttribute('index');
  navigationDot.setAttribute('index', position);
  navigationDot.classList.add('navigation-dot');
  navigationDot.setAttribute('active', 'false');
  navigationDots.appendChild(navigationDot);
});

document.querySelector('.navigation-dot').setAttribute('active', 'true');
