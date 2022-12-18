/* Setting date for copyrigth */
const spanElement = document.getElementById('currentYear')
const currentYear = new Date()
spanElement.textContent = String(currentYear.getFullYear())

/* Animations for sections */
const what = document.getElementById('what_we_do')
const who = document.getElementById('who_we_are')

window.addEventListener('scroll', () => {
  const y = window.scrollY
  if (y >= 200) {
    what.style.transform = 'translateX(-100%)'
  }
  if (y >= 400) {
    who.style.transform = 'translateX(100%)'
  }
})
