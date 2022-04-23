import speakersData from './speakersData.js';

const speakers = speakersData();

function markupSpeaker(speaker) {
  return `<div class="speaker-card">
            <div class="grid-bg"></div>
            <img src="${speaker.img}" class="speaker-img" alt="${speaker.name}">
            <div class="speaker-info">
              <h3 class="speaker-name">${speaker.name}</h3>
              <p class="speaker-title">${speaker.title}</p>
              <hr class="sep-info">
              <p class="speaker-bio">${speaker.bio}</p>
            </div>
          </div>`;
}

function createAllSpeakers() {
  let speakersMarkup = '';
  speakers.forEach((speaker) => {
    speakersMarkup += markupSpeaker(speaker);
  });
  return speakersMarkup;
}

function toggleMobileMenu() {
  document.querySelectorAll('.menu-element, #hamburger').forEach((element) => element.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
  }));
}
toggleMobileMenu();