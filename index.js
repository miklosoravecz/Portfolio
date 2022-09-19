const burgerButton = document.getElementById('burger-button')
const navbar = document.getElementById('navbar')
const navbarHomeButton = document.getElementById('navbar-brand')
const navbarMenu = document.getElementById('navbar-menu')
const menuItems = document.querySelectorAll('.menu-item')
const burgerLines = document.querySelectorAll('.navbar-burger-bar')
const aboutButton = document.getElementById('about-btn')
const projectsButton = document.getElementById('projects-btn')
const contactButton = document.getElementById('contact-btn')
const overlay = document.getElementById('banner-overlay')
const aboutSection = document.getElementById('about')
const outerCircle = document.getElementById('outer-circle-svg')
const innerCircle = document.getElementById('smaller-circle-svg')
const portrait = document.getElementById('portrait-svg')
const shadow = document.getElementById('shadow-svg')
const emailLink = document.getElementById('footer-href-email')
const footerPopup = document.getElementById('footer-copy-popup')

let burgerMenuOpened = false
const buttonGroup = [navbarHomeButton, aboutButton, projectsButton, contactButton]

const toggleMenu = () => {
	if (!burgerMenuOpened) {
		burgerButton.classList.add('close')
		navbarMenu.classList.add('show')
		overlay.classList.add('show')
		menuItems.forEach((item) => item.classList.add('show'))
		burgerLines.forEach((item) => item.classList.add('show'))
		burgerMenuOpened = true
	} else {
		burgerButton.classList.remove('close')
		navbarMenu.classList.remove('show')
		overlay.classList.remove('show')
		menuItems.forEach((item) => item.classList.remove('show'))
		burgerLines.forEach((item) => item.classList.remove('show'))
		burgerMenuOpened = false
	}
}

const closeMenu = () => {
	toggleMenu()
}

const toggleNavBlur = () => {
	let elementPositionFromViewportTop = aboutSection.getBoundingClientRect().top
	let navbarHeight = navbar.offsetHeight
	navbar.classList.toggle('add-blur',(navbarHeight > elementPositionFromViewportTop))
}

const animationOnScroll = () => {
	let circlePositionFromViewportTop = outerCircle.getBoundingClientRect().top
	let outerCircleOffsetTop = outerCircle.offsetTop
		
	if (outerCircleOffsetTop + 20 >= circlePositionFromViewportTop) {
		outerCircle.classList.add('animation')
		innerCircle.classList.add('animation')
		shadow.classList.add('animation')
		portrait.classList.add('animation')
	}
}

const copyToClipboard = () => {
	navigator.clipboard.writeText('oravecz.miklos@gmail.com')
	footerPopup.classList.add('show-message')

	setTimeout(() => {
		footerPopup.classList.remove('show-message')
	}, '1000')
}

const domLoaded = () => {
	document.addEventListener('scroll', animationOnScroll)
}

document.addEventListener('DOMContentLoaded', domLoaded)
document.addEventListener('scroll', toggleNavBlur)
burgerButton.addEventListener('click', toggleMenu)
buttonGroup.forEach(item => {
	item.addEventListener('click', closeMenu)
})
emailLink.addEventListener('click', copyToClipboard)
