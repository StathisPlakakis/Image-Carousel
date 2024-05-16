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

const allImages = document.querySelectorAll('img');
allImages.forEach((image) => {
  image.setAttribute('active', 'false');
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