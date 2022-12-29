export const english = {
	logo: 'Roland Füst',
	links: [
		{
			id: 1,
			url: '#hero',
			text: 'Home'
		},
		{
			id: 2,
			url: '#projects',
			text: 'Projects'
		},
		{
			id: 3,
			url: '#experience',
			text: 'Experience'
		},
		{
			id: 4,
			url: '#about',
			text: 'About'
		}
	],
	resumeBtn: 'Resume',
	mainTitle: `Hello, I'm Roland Füst`,
	jobTitle: `I'm a Web-developer.`,
	mainStrengths: `My main strengths are`,
	additionalExp: `I also have additional experience with`,
	technologies: 'Technologies:',
	projectTitle: 'My Personal Projects',
	descriptionTitle: 'Description:',
	projectsData: [
		{
			id: 1,
			title: 'Guitar Practice Assistant',
			img: '/img/practice-assistant.png',
			tags: ['Typescript', 'React', 'Sass', 'Redux', 'MongoDB', 'NodeJs', 'ExpressJS', 'API'],
			codeUrl: 'https://github.com/VWRoli/guitar-practice-assistant',
			liveUrl: 'https://guitar-pa.netlify.app',
			desc: [
				'Guitar practice assistant app, with a built-in metronome. ',
				'The app is built with Typescript with MERN stack and using RESTful API design. ',
				'I used Redux for state management, Node & Express for API, MongoDB as a database. ',
				'***Credentials: (username: demoUser1 password: 123456Aa!)'
			]
		},
		{
			id: 2,
			title: 'Guitar Store',
			reverse: true,
			img: '/img/guitar-store.png',
			tags: ['JavaScript', 'React', 'Redux', 'Sass', 'API'],
			codeUrl: 'https://github.com/VWRoli/guitar-store',
			liveUrl: 'https://guitar-store-site.netlify.app/',
			desc: [
				'Complete frontend for a Guitar E-Commerce website with a compare and cart section. ',
				'Products are paginated and can be filtered, sorted, searched. ',
				'Used JSON Server for creating the Rest API for storing product data. ',
				'Build with React, Sass, React Router, Redux, and different React Hooks.'
			]
		},
		{
			id: 3,
			title: 'Crypto Portfolio Tracker',
			img: '/img/cryptofolio.png',
			tags: ['JavaScript', 'React', 'Redux', 'Sass', 'API'],
			codeUrl: 'https://github.com/VWRoli/Redux-cryptofolio',
			liveUrl: 'https://cryptofolio-app.netlify.app/',
			desc: [
				'Cryptocurrency portfolio tracker application. Select or search the currencies you want to add to your portfolio. ',
				'Track the value of your assets. Take a look at the price change chart. ',
				'Build with React, state management with Redux. For styling I used Sass. ',
				'For getting the currency information I worked with the CoinGecko API.'
			]
		},

		{
			id: 4,
			title: 'Memory Card Game',
			reverse: true,
			img: '/img/memory-card-game.png',
			tags: ['HTML', 'CSS', 'JavaScript'],
			codeUrl: 'https://codepen.io/VWRoli/pen/MWjqVpg',
			liveUrl: 'https://codepen.io/VWRoli/pen/MWjqVpg',
			desc: [' Memory card game. Created with only Vanilla JS.']
		},
		{
			id: 5,
			title: 'Crypto Website',
			img: '/img/crypto.png',
			tags: ['HTML', 'CSS', 'JavaScript', 'API', 'SEO'],
			codeUrl: 'https://github.com/VWRoli/kriptosuli',
			liveUrl: 'https://kriptosuli-eu.netlify.app/',
			desc: [
				'Cryptocurrency educational website. ',
				'Live cryptocurrency tracker using the Coingecko API. ',
				'Fully Responsive Website. ',
				'Night mode settings, which are saved with LocalStorage.'
			]
		}
	],
	liveBtn: 'Live Demo',
	codeBtn: 'View Code',
	skillsTitle: 'Skills',
	frontendTitle: 'Front-end:',
	banckendTitle: 'Back-end:',
	librariesTitle: 'Libraries, Frameworks:',
	otherTitle: 'Other',
	moreAboutTitle: 'More About Me',
	aboutTextPar1: `I'm an ex Online poker player turned self-taught Web-developer. Currently, my main focus is JavaScript and the MERN stack. I enjoy the problem-solving aspect of programming, that a developer has to face day after day.`,
	aboutTextPar2: `My native language is <b>Hungarian</b> and I also speak fluent <b>English</b>.`,
	viewCodesTitle: 'View my codes:',
	linkedInTitle: 'More info on LinkedIn:',
	emailTitle: 'Send me an Email:',
	resumeTitle: 'Download my resume:',
	experienceTitle: 'Work experience',
	greenstand: {
		jobTitle: 'Volunteer React developer',
		jobDate: 'Aug 2021 - April 2022',
		jobDescription1: 'One of the main contributors',
		jobDescription1part2: 'and',
		jobDescription2: 'Creating reusable and scalable frontend components for the app, using ',
		jobDescription3: 'Helped set up the project infrastructure.',

		jobDescription4: 'Member of the Code reviewer team.'
	},
	cubicfox: {
		jobTitle: 'Frontend developer',
		jobDate: 'April 2022 - Present',
		jobDescription1: 'Building robust and scalable web applications, using'
	}
};
