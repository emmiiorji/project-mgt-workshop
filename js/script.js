import speakersData from './speakersData.js';

const speakers = speakersData();

function markupSpeaker(speaker) {
  return `<article class="speaker-card">
            <div class="grid-bg"></div>
            <img src="${speaker.img}" class="speaker-img" alt="${speaker.name}">
            <div class="speaker-info">
              <h3 class="speaker-name">${speaker.name}</h3>
              <p class="speaker-title">${speaker.title}</p>
              <hr class="sep-info">
              <p class="speaker-bio">${speaker.bio}</p>
            </div>
          </article>`;
}

function createAllSpeakers() {
  let speakersMarkup = '';
  speakers.forEach((speaker) => {
    speakersMarkup += markupSpeaker(speaker);
  });
  return speakersMarkup;
}

function loadSpeakers() {
  const speakersSection = document.getElementById('speakers');
  const content = `<h2>Featured Speakers</h2>
                <hr class="heading-underline">
                <div class="featured-speakers-container">${createAllSpeakers()}</div>
                <button type="button" class="bu-more">More <i class="fa-solid fa-angle-right down"></i></button>`;
  speakersSection.innerHTML = content;
}
loadSpeakers();

function toggleAddMoreButton() {
  const size = window.matchMedia('(max-width: 780px)');
  if (size.matches) {
    Array.from(document.querySelectorAll('#speakers .speaker-card')).forEach((card, index) => {
      if (index >= 2) {
        card.classList.toggle('hide');
      }
    });
  }
}
toggleAddMoreButton();

function toggleShowSpeakers() {
  const buMore = document.querySelector('#speakers .bu-more');
  buMore.addEventListener('click', (e) => {
    toggleAddMoreButton();
    const arrow = e.target.querySelector('i');
    if (arrow.classList.contains('down')) {
      arrow.classList.remove('down');
      arrow.classList.add('up');
      buMore.childNodes[0].textContent = 'Less ';
    } else {
      arrow.classList.remove('up');
      arrow.classList.add('down');
      buMore.childNodes[0].textContent = 'More ';
    }
  });
}
toggleShowSpeakers();

function toggleMobileMenu() {
  document.querySelectorAll('.menu-element, #hamburger').forEach((element) => element.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
  }));
}
toggleMobileMenu();