const burgerButton = document.getElementById('burger-button')
const navbarMenu = document.getElementById('navbar-menu')
const menuItems = document.querySelectorAll('.menu-item')
const burgerLines = document.querySelectorAll('.navbar-burger-bar')
// const button = document.getElementById('lang-button')
// const logoSubtitle = document.getElementById('logo-subtitle')
// const mainTitle = document.getElementById('main-title')
// const intro1 = document.getElementById('intro1')
// const intro2 = document.getElementById('intro2')
// const intro3 = document.getElementById('intro3')
// const section2Title = document.getElementById('section-two-title')
// const section2Text = document.getElementById('section-two-text')
// const section2BTitle = document.getElementById('section-two-b__content__title')
// const linkButton1 = document.getElementById('link-button-1')
// const linkButton2 = document.getElementById('link-button-2')
// const linkButton3 = document.getElementById('link-button-3')
// const linkButton4 = document.getElementById('link-button-4')
// const linkButton5 = document.getElementById('link-button-5')
// const sectionThreeTitle = document.getElementById('section-three-title')
let burgerMenuOpened = false
// let isEnglish = false

function toggleMenu() {
	if (!burgerMenuOpened) {
		burgerButton.classList.add('close')
		navbarMenu.classList.add('show')
		menuItems.forEach((item) => item.classList.add('show'))
		burgerLines.forEach((item) => item.classList.add('show'))
		burgerMenuOpened = true
	} else {
		burgerButton.classList.remove('close')
		navbarMenu.classList.remove('show')
		menuItems.forEach((item) => item.classList.remove('show'))
		burgerLines.forEach((item) => item.classList.remove('show'))
		burgerMenuOpened = false
	}
}

// const intro2TextEnglish = `
// <p>
// I had worked before in different fields in my life and I have many kinds of hobbies. I don't like boring things, I am eager to know or learn something new. They say about me I am creative. I like challenges and technically complex tasks, that is why I choosed to work in the IT field.
// </p>
// <p>
// I have been studying programming since the beginning of 2020, I participated in a "Full-stack coding and Finnish language" course in Tampere and at the same time I took various online courses and completed some open university faculties.
// </p>
// `
// const intro2TextFinnish = `
// <p>
// Olen tehnyt elämässäni paljon erilaisia töitä ja minulla on monenlaisia harrastuksia. En pidä tylsistä asioista, olen innokas tietämään tai oppimaan jotain uutta. Olen luova ja tykkään haasteista, siksi valitsin IT-alan.
// </p>
// <p>
// Olen opiskellut vuoden 2020 alusta ohjelmointia, osallistuin "Full-stack coding and Finnish language"-kurssille Tampereella ja samaan aikaan opiskelin erilaisilla verkkokursseilla avoin yliopistossa.
// </p>
// `
// const section2TextEnglish = `
// <p class="main__section-two__content__text-container-text">
// ÓBUDAN UNIVERSITY (BUDAPEST, HUNGARY): <b>Environmental Engineer (BSc),</b> 2014
// </p>
// <p class="main__section-two__content__text-container-text">
// JYVÄSKYLÄ EDUCATIONAL CONSORTIUM GRADIA: <b>Vocational upper secondary qualification in Business and Administration,</b> 2019
// </p>
// <p class="main__section-two__content__text-container-text">
// OPIFRAME OY: <b>Full-stack Coding and Finnish Language,</b> 2020:
// </p>
// <p class="main__section-two__content__text-container-text">
// <i>We studied on live lessons the fundamentals of developing a MERN stack application and also created a MERN app as own project during the course.</i>
// </p>
// `
// const section2TextFinnish = `
// <p class="main__section-two__content__text-container-text">
// ÓBUDAN YLIOPISTO (BUDAPEST, UNKARI), REJTŐ SÁNDORIN
// KEVYTTEOLLISUUS JA YMPÄRISTÖNSUOJELUN INSINÖÖRITAIDON
// TIEDEKUNTA: <b>Ympäristöinsinööri (BSc),</b> 2014
// </p>
// <p class="main__section-two__content__text-container-text">
// GRADIA JYVÄSKYLÄ: <b>Liiketoiminnan perustutkinto,</b> 2019
// </p>
// <p class="main__section-two__content__text-container-text">
// OPIFRAME OY: <b>Full-stack Coding and Finnish Language,</b> 2020:
// </p>
// <p class="main__section-two__content__text-container-text">
// <i>Ohjelmoinnissa pääalueena käytiin läpi tyypillisen
// 	RESTful-pohjaisen webapplikaation toiminta (MERN) eli MongoDB,
// 	Express, React, Redux ja NodeJS.</i>
// </p>
// `
// const textSelector = () => {
// 	if (isEnglish) {
// 		button.innerText = 'FIN'
// 		logoSubtitle.innerText = 'Visual CV'
// 		mainTitle.innerText = 'Profile'
// 		intro1.innerText = 'I am Miklós Oravecz web developer.'
// 		intro2.innerHTML = `${intro2TextEnglish}`
// 		intro3.innerText =
// 			'My last job was at Kahjo Media Oy, which is a small start-up company in Tampere, where I worked as a full-stack developer. In my work, I deepened my technical skills and I had gained more experience, e.g. on the usage of cloud services; database management; UI design and graphic design.'
// 		section2Title.innerText='Education'
// 		section2Text.innerHTML = `${section2TextEnglish}`
// 		section2BTitle.innerText = 'Courses and Trainings'
// 		linkButton1.innerText = 'Link to the certificate'
// 		linkButton2.innerText = 'Link to the certificate'
// 		linkButton3.innerText = 'Link to M001 certificate'
// 		linkButton4.innerText = 'Link to M220 certificate'
// 		linkButton5.innerText = 'Link to M320 certificate'
// 		sectionThreeTitle.innerText = ''
// 	} else {
// 		button.innerText = 'ENG'
// 		logoSubtitle.innerText = 'Visuaalinen CV'
// 		mainTitle.innerText = 'Profiili'
// 		intro1.innerText = 'Olen Miklós Oravecz web-kehittäjä.'
// 		intro2.innerHTML = `${intro2TextFinnish}`
// 		intro3.innerText =
// 			'Minun viimeisin työpaikka oli Kahjo Media Oy, joka on pieni start up-firma Tampereella, jossa työskentelin full-stack-kehittäjänä. Työssäni syvensin tekninen taitojani ja sain lisää kokemusta mm. pilvipalveluiden käytöstä, tietokannan hallinnasta, UI-suunnittelusta ja graafista suunnittelusta.'
// 		section2Title.innerText='Koulutus'
// 		section2Text.innerHTML = `${section2TextFinnish}`
// 		section2BTitle.innerText = 'Verkkokurssit'
// 		linkButton1.innerText = 'Linkki	todistukseen'
// 		linkButton2.innerText = 'Linkki	todistukseen'
// 		linkButton3.innerText = 'Linkki M001 todistukseen'
// 		linkButton4.innerText = 'Linkki M220 todistukseen'
// 		linkButton5.innerText = 'Linkki M320 todistukseen'
// 	}
// }

// const onClick = () => {
// 	isEnglish = !isEnglish
// 	textSelector()
// }

// textSelector()

burgerButton.addEventListener('click', toggleMenu)
// button.addEventListener('click', onClick)
