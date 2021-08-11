const spanElement = document.getElementById('currentYear');
const currentYear = new Date();
spanElement.textContent = String(currentYear.getFullYear());