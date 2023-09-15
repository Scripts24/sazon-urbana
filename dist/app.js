const ham = document.getElementById('ham')
const navMenu = document.getElementById('nav-menu')
const closeIcon = document.getElementById('close-icon')
const navLink = document.querySelectorAll('.nav-link')

ham.addEventListener('click', () => {
    navMenu.classList.remove('hidden')
})

closeIcon.addEventListener('click', () => {
    navMenu.classList.add('hidden')
})

navLink.forEach(link =>
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden')
    })
)