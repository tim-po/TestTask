const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  rootElement.setAttribute('data-theme', savedTheme);
}

// Respect system preference
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
if (!localStorage.getItem('theme')) {
  rootElement.setAttribute('data-theme', systemPreference);
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  rootElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});