/* Setting date for copyrigth */
const spanElement = document.getElementById('currentYear')
const currentYear = new Date()
spanElement.textContent = String(currentYear.getFullYear())

/* Animations for sections */
const what = document.getElementById('what_we_do')

window.addEventListener('scroll', () => {
  const y = window.scrollY
  if (y >= 220) {
    // what.className = 'slide'
  }
})
