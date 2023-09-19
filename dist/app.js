// Menú hamburguesa

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

// Active link

const activeLink = () => {
    const sections = document.querySelectorAll("section")
    const navLinks = documentquerySelectorAll(".nav-link")

    let current = "home"

    sections.forEach(section => {

        const sectionTop = section.offsetTop

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id')
        }
    })

    navLinks.forEach((item) => {
        item.classList.remove("text-amber-200")
        if(item.href.includes(current)){
            item.classList.add("text-amber-200")
        }
    })
}

window.addEventListener('scroll', activeLink)

// Scroll up

const scrollUp = () => {
    const scrollBtn = document.getElementById('top')

    if (this.scrollY >= 250) {
        scrollBtn.classList.remove("-bottom-1/2")
        scrollBtn.classList.add("bottom-4")
    } else {
        scrollBtn.classList.add("-bottom-1/2")
        scrollBtn.classList.remove("bottom-4")
    }
}

window.addEventListener('scroll', scrollUp)

// Change color header

const scrollHeader = () => {
    const header = document.getElementById('header')

    if (this.scrollY >= 50) {
        header.classList.add("border-b-2", "border-amber-400")
    } else {
        header.classList.remove("border-b-2", "border-amber-400")
    }
}

window.addEventListener('scroll', scrollHeader)

// Active buttons Section Menu

const tabs = document.querySelectorAll('.tabs-wrap ul li')

const all = document.querySelectorAll('.item')
const food = document.querySelectorAll('.food')
const snacks = document.querySelectorAll('.snacks')
const beverage = document.querySelectorAll('.beverage')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add("active")

        // Filter buttons Menú

        const tabVal = tab.getAttribute('data-tabs')

        all.forEach(item => {
            item.style.display = 'none'
        })

        if (tabVal == 'food') {
            food.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if (tabVal == 'snacks') {
            snacks.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if (tabVal == 'beverage') {
            beverage.forEach(item => {
                item.style.display = 'block'
            })
        }
        else {
            all.forEach(item => {
                item.style.display = 'block'
            })
        }
    })
})

// Dark Mode

const html = document.querySelector('html')
const themeBtn = document.getElementById('theme-toggle')

if (localStorage.getItem("mode") == "dark") {
    darkMode()
} else {
    lightMode()
}

themeBtn.addEventListener('click', (e) => {
    if (localStorage.getItem("mode") == "light") {
        darkMode()
    } else {
        lightMode()
    }
})

function darkMode() {
    html.classList.add('dark')
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line")
    localStorage.setItem("mode", "dark")
}

function lightMode() {
    html.classList.remove('dark')
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line")
    localStorage.setItem("mode", "light")
}

// ScrollReveal

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
})

sr.reveal(".home-img")
sr.reveal(".home-text", { origin: "bottom"})

sr.reveal(".about-img", { origin: "bottom"})
sr.reveal(".about-text", { origin: "top"})

sr.reveal(".list-menu", { origin: "left"})

sr.reveal(".review-content", { origin: "right"})

sr.reveal(".footer")