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

// Scroll up

const scrollUp = () =>{
    const scrollBtn = document.getElementById('top')

    if(this.scrollY >= 250){
        scrollBtn.classList.remove("-bottom-1/2")
        scrollBtn.classList.add("bottom-4")
    }else{
        scrollBtn.classList.add("-bottom-1/2")
        scrollBtn.classList.remove("bottom-4")
    }
}

window.addEventListener('scroll', scrollUp)

// Change color header

const scrollHeader = () =>{
    const header = document.getElementById('header')

    if(this.scrollY >= 50){
        header.classList.add("border-b-2", "border-amber-400")
    }else{
        header.classList.remove("border-b-2", "border-amber-400")
    }
}

window.addEventListener('scroll', scrollHeader)
