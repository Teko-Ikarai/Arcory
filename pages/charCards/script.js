// Light/Dark mode toggle
const page = document.querySelector('s-page')
const toggleTheme = document.querySelector('#toggleTheme')
const toggleThemeIcon = document.querySelector('#toggleThemeIcon')
const bgCharCards = document.querySelector('#characters')
toggleTheme.onclick = () => {
    page.toggle(page.isDark ? 'light' : 'dark', toggleTheme)
    toggleThemeIcon.setAttribute('name', page.isDark ? 'light_mode' : 'dark_mode')
    bgCharCards.setAttribute('style', page.isDark ? 'background-image: url("../../images/bgCharInfo.jpg"); transition: 1s;' : 'background-image: url("../../images/bgCharInfoDark.jpg"); transition: 1s;')
}

// Change the theme
const img = new Image()
img.src = "../../images/bgCharCards.jpg"
img.crossOrigin = 'anonymous'
console.log(img)
sober.theme.createScheme(img, { page: document.querySelector('s-page') })
console.log(sober.theme)

// Switch pages
const pageHome = document.querySelector('#home')
const pageContactUs = document.querySelector('#contactUs')
const pageAbout = document.querySelector('#about')
pageHome.onclick = () => window.location.href= '../../'
pageContactUs.onclick = () => window.location.href= '../../pages/contactUs/'
pageAbout.onclick = () => window.location.href= '../../pages/about/'