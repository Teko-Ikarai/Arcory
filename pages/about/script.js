// Light/Dark mode toggle
const page = document.querySelector('s-page')
const toggleTheme = document.querySelector('#toggleTheme')
const toggleThemeIcon = document.querySelector('#toggleThemeIcon')
toggleTheme.onclick = () => {
    page.toggle(page.isDark ? 'light' : 'dark', toggleTheme)
    toggleThemeIcon.setAttribute('name', page.isDark ? 'light_mode' : 'dark_mode')
}

// Change the theme
const img = new Image()
img.src = "../../images/bgAbout.jpg"
img.crossOrigin = 'anonymous'
console.log(img)
sober.theme.createScheme(img, { page: document.querySelector('s-page') })
console.log(sober.theme)

// Switch pages
const pageHome = document.querySelector('#home')
const pageCharCards = document.querySelector('#charCards')
const pageContactUs = document.querySelector('#contactUs')
pageHome.onclick = () => window.location.href= '../../'
pageCharCards.onclick = () => window.location.href= '../../pages/charCards/'
pageContactUs.onclick = () => window.location.href= '../../pages/contactUs/'