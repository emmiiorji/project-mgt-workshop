function toggleMobileMenu() {
  document.querySelectorAll('.menu-element, #hamburger').forEach((element) => element.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
  }));
}

toggleMobileMenu();
