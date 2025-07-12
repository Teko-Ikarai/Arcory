console.log(sober)

// Light/Dark mode toggle
const page = document.querySelector('s-page')
const toggleTheme = document.querySelector('#toggleTheme')
const toggleThemeIcon = document.querySelector('#toggleThemeIcon')
const bgCharInfo = document.querySelector('#characters')
toggleTheme.onclick = () => {
    page.toggle(page.isDark ? 'light' : 'dark', toggleTheme)
    toggleThemeIcon.setAttribute('name', page.isDark ? 'light_mode' : 'dark_mode')
    bgCharInfo.setAttribute('style', page.isDark ? 'background-image: url("./images/bgCharInfo.jpg"); transition: 1s;' : 'background-image: url("./images/bgCharInfoDark.jpg"); transition: 1s;')
}

// Change the theme
const img = new Image()
img.src = "./images/bgHome.jpg"
img.crossOrigin = 'anonymous'
console.log(img)
sober.theme.createScheme(img, { page: document.querySelector('s-page') })
console.log(sober.theme)

// Switch pages
const pageHome = document.querySelector('#home')
const pageCharCards = document.querySelector('#charCards')
const pageAbout = document.querySelector('#about')
const pageContactUs = document.querySelector('#contactUs')
pageHome.onclick = () => window.location.href= './'
pageCharCards.onclick = () => window.location.href= './pages/charCards/'
pageAbout.onclick = () => window.location.href= './pages/about/'
pageContactUs.onclick = () => window.location.href= './pages/contactUs/'