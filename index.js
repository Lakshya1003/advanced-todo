document.addEventListener('DOMContentLoaded', () => {
  const headerText = document.querySelectorAll('#header-text span');
  headerText.forEach((letter, index) => {
    setTimeout(() => {
      letter.style.opacity = 1;
      letter.style.transform = 'translateY(0)';
    }, index * 100); // Delay each letter by 100ms (adjust as desired)
  });
});