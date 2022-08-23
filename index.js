const button = document.getElementById('lang-button')
const logoSubtitle = document.getElementById('logo-subtitle')
const mainTitle = document.getElementById('main-title')
const intro1 = document.getElementById('intro1')
const intro2 = document.getElementById('intro2')
const intro3 = document.getElementById('intro3')
let isEnglish = false

const intro2TextEnglish = `
<p>
I had worked before in different fields in my life and I have many kinds of hobbies. I don't like boring things, I am eager to know or learn something new. They say about me I am creative. I like challenges and technically complex tasks, that is why I choosed to work in the IT field.
</p>
<p>
I have been studying programming since the beginning of 2020, I participated in a "Full-stack coding and Finnish language" course in Tampere and at the same time I took various online courses and completed some open university faculties.
</p>
`
const intro2TextFinnish = `
<p>
Olen tehnyt elämässäni paljon erilaisia töitä ja minulla on monenlaisia harrastuksia. En pidä tylsistä asioista, olen innokas tietämään tai oppimaan jotain uutta. Olen luova ja tykkään haasteista, siksi valitsin IT-alan.
</p>
<p>
Olen opiskellut vuoden 2020 alusta ohjelmointia, osallistuin "Full-stack coding and Finnish language"-kurssille Tampereella ja samaan aikaan opiskelin erilaisilla verkkokursseilla avoin yliopistossa.
</p>
`

const textSelector = () => {
	if (isEnglish) {
		button.innerText = 'FIN'
		logoSubtitle.innerText = 'Visual CV'
		mainTitle.innerText = 'Profile'
		intro1.innerText = 'I am Miklós Oravecz web developer.'
		intro2.innerHTML = `${intro2TextEnglish}`

		intro3.innerText =
			'My last job was at Kahjo Media Oy, which is a small start-up company in Tampere, where I worked as a full-stack developer. In my work, I deepened my technical skills and I had gained more experience, e.g. on the usage of cloud services; database management; UI design and graphic design.'
	} else {
		button.innerText = 'ENG'
		logoSubtitle.innerText = 'Visuaalinen CV'
		mainTitle.innerText = 'Profiili'
		intro1.innerText = 'Olen Miklós Oravecz web-kehittäjä.'
		intro2.innerHTML = `${intro2TextFinnish}`
		intro3.innerText =
			'Minun viimeisin työpaikka oli Kahjo Media Oy, joka on pieni start up-firma Tampereella, jossa työskentelin full-stack-kehittäjänä. Työssäni syvensin tekninen taitojani ja sain lisää kokemusta mm. pilvipalveluiden käytöstä, tietokannan hallinnasta, UI-suunnittelusta ja graafista suunnittelusta.'
	}
}

const onClick = () => {
	isEnglish = !isEnglish
	textSelector()
}

textSelector()

button.addEventListener('click', onClick)
