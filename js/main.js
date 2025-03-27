/* ===== SHOW MENU ===== */
const btnToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

const toogleNavMenu = () => {
	navMenu.classList.toggle('show-menu');
};

btnToggle.addEventListener('click', toogleNavMenu);

/* ===== REMOVE MENU MOBILE ===== */
const navLinkBtns = document.querySelectorAll('.nav__link');
const nav = document.getElementById('nav-menu');

const linkAction = () => {
	nav.classList.remove('show-menu');
};

navLinkBtns.forEach(nBtn => nBtn.addEventListener('click', linkAction));

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */

/* ===== CHANGE BACKGROUND HEADER ===== */

/* ===== SHOW SCROLL TOP ===== */
const scrollTop = () => {
	const scrollTop = document.getElementById('scroll-top');

	if (this.scrollY >= 200) {
		scrollTop.classList.add('show-scroll');
	} else {
		scrollTop.classList.remove('show-scroll');
	}
};

window.addEventListener('scroll', scrollTop);

/* ===== DARK LIGHT THEME ===== */

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => {
	document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};

const getCurrentIcon = () => {
	themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';
};

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
	themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);

	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});

/* ===== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ===== */

function scaleCv() {
	document.body.classList.add('scale-cv');
}

/* ===== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ===== */

function removeScale() {
	document.body.classList.remove('scale-cv');
	footer.classList.remove('active');
}

/* ===== GENERATE PDF ===== */

let areaCv = document.getElementById('area-cv');

let resumeButton = document.getElementById('resume-button');

const footer = document.querySelector('footer');

let opt = {
	margin: [0, 0, 0, 0],
	filename: 'Sebastian_Jastrzebski_CV',
	image: { type: 'jpeg', quality: 0.90 },
	html2canvas: { scale: 1 },
	jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
};

function generateResume() {
	// html2pdf(areaCv, opt);
	html2pdf().from(areaCv).set(opt).save();
}
resumeButton.addEventListener('click', () => {
	footer.classList.add('active');
	scaleCv();
	generateResume();
	setTimeout(removeScale, 1000);
});
