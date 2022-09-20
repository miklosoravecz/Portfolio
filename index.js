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
const slides = document.getElementsByClassName('carousel')
const leftButton = document.getElementById('carousel-left-caret')
const rightButton = document.getElementById('carousel-right-caret')
const dots = document.getElementsByClassName('carousel-dot')

const numberOfSlides = slides.length
const buttonGroup = [navbarHomeButton, aboutButton, projectsButton, contactButton]
const dotsArray = Array.from(dots)
let position = 0
let burgerMenuOpened = false

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

const removeActiveClassFromDots = () => {
	dotsArray.forEach(dot => {
		dot.classList.remove('active')
	})
}

const hideAllSlides = () => {
	removeActiveClassFromDots()
	for (const slide of slides) {
		slide.classList.remove('carousel-item-visible')
		slide.classList.remove('slide-from-left')
		slide.classList.remove('slide-from-right')
		slide.classList.add('carousel-item-hidden')
	}
}

const handleMoveToNextSlide = () => {
	hideAllSlides()
	if (position === numberOfSlides - 1) {
		position = 0
	} else {
		position++
	}

	slides[position].classList.add('carousel-item-visible')
	slides[position].classList.add('slide-from-right')
	dots[position].classList.add('active')
}

const handleMoveToPrevSlide = () => {
	hideAllSlides()
	if (position === 0) {
		position = numberOfSlides - 1
	} else {
		position--
	}

	slides[position].classList.add('carousel-item-visible')
	slides[position].classList.add('slide-from-left')
	dots[position].classList.add('active')
}

const navigateToSlide = (event) => {
	hideAllSlides()
	removeActiveClassFromDots()
	let positionNum = parseInt(event.srcElement.id)
	position = positionNum
	slides[position].classList.add('carousel-item-visible')
	slides[position].classList.add('slide-from-left')
	dots[position].classList.add('active')
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
leftButton.addEventListener('click', handleMoveToPrevSlide)
rightButton.addEventListener('click', handleMoveToNextSlide)
dotsArray.forEach(dot => {
	dot.addEventListener('click', navigateToSlide)
})
emailLink.addEventListener('click', copyToClipboard)
