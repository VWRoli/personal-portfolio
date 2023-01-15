export const hungarian = {
	logo: 'Füst Roland',
	links: [
		{
			id: 1,
			url: '#hero',
			text: 'Főoldal'
		},
		{
			id: 2,
			url: '#projects',
			text: 'Projektek'
		},
		{
			id: 3,
			url: '#experience',
			text: 'Tapasztalat'
		},
		{
			id: 4,
			url: '#about',
			text: 'Rólam'
		}
	],
	resumeBtn: 'Önéletrajz',
	mainTitle: `Helló! Füst Roland vagyok.`,
	jobTitle: `Webfejlesztő.`,
	mainStrengths: `A fő erősségeim`,
	additionalExp: `Ugyanakkor van további tapasztalatom a következő technológiákban`,
	technologies: 'Technológiák:',
	projectTitle: 'Saját projektek',
	descriptionTitle: 'Leírás:',
	projectsData: [
		{
			id: 1,
			title: 'Gitárgyakorló asszisztens',
			img: '/img/practice-assistant.png',
			tags: ['Typescript', 'React', 'Sass', 'Redux', 'MongoDB', 'NodeJs', 'ExpressJS', 'API'],
			codeUrl: 'https://github.com/VWRoli/guitar-practice-assistant',
			liveUrl: 'https://guitar-pa.netlify.app',

			desc: [
				'Gitárgyakorló asszisztens alkalmazás, beépített metronómmal. ',
				'Az alkalmazás Typescript-ben készült, MERN stack használatával, és RESTful API modell terv alapján. ',
				'Redux-ot használtam az állapotkezeléshez, Node és Express API-hoz, adatbázisként pedig MongoDB-t. ',
				'***Belépési információk: (Felhasználónév: demoUser1 Jelszó: 123456Aa!)'
			]
		},
		{
			id: 2,
			title: 'Gitár Bolt',
			img: '/img/guitar-store.png',
			tags: ['JavaScript', 'React', 'Redux', 'Sass', 'API'],
			codeUrl: 'https://github.com/VWRoli/guitar-store',
			liveUrl: 'https://guitar-store-site.netlify.app/',
			desc: [
				'Komplett kezelőfelület egy gitár webshop-hoz, összehasonlítás és kosár részleggel. ',
				'A termékek lapozhatók, szűrhetők, válogathatók és kereshetők. ',
				'JSON szervert használtam a REST API létrehozásához és a termékadatok tárolásához. ',
				'A weboldalt React-el építettem, valamint Sass, React Router, Redux-al és különböző React Hook-okkal.'
			]
		},
		{
			id: 3,
			title: 'Kripto portfólió követő',
			img: '/img/cryptofolio.png',
			tags: ['JavaScript', 'React', 'Redux', 'Sass', 'API'],
			codeUrl: 'https://github.com/VWRoli/Redux-cryptofolio',
			liveUrl: 'https://cryptofolio-app.netlify.app/',
			desc: [
				'Kriptovaluta portfolió követő alkalmazás. Kriptóvaluták kereshetőek és hozzáadhatóak a portfólióhoz. ',
				'Kriptó eszközök nyomon követhetőek az árváltozási diagrammal. ',
				'React-el épített, állapotkezelés Redux-al. Kezelőfelület arculata Sass-el lett megvalósítva. ',
				'A valutainformációk megszerzéséhez a CoinGecko API-al dolgoztam.'
			]
		},

		{
			id: 4,
			title: 'Memóriakártya játék',
			img: '/img/memory-card-game.png',
			tags: ['HTML', 'CSS', 'JavaScript'],
			codeUrl: 'https://codepen.io/VWRoli/pen/MWjqVpg',
			liveUrl: 'https://codepen.io/VWRoli/pen/MWjqVpg',
			desc: ['Szimpla Javascript-el készült memóriakártya játék.']
		},
		{
			id: 5,
			title: 'Kripto weboldal',
			img: '/img/crypto.png',
			tags: ['HTML', 'CSS', 'JavaScript', 'API', 'SEO'],
			codeUrl: 'https://github.com/VWRoli/kriptosuli',
			liveUrl: 'https://kriptosuli-eu.netlify.app/',
			desc: [
				'Kriptovaluta oktatói weboldal. ',
				'Valós idejű kriptovaluta nyomkövető a Coingecko API használatával. ',
				'Teljesen mobil-barát honlap. ',
				'Éjszakai mód beállítás, amely LocalStorage segítségével menthetőek.'
			]
		}
	],
	liveBtn: 'Bemutató',
	codeBtn: 'Kód',
	skillsTitle: 'Szakismeretek:',
	frontendTitle: 'Front-end:',
	banckendTitle: 'Back-end:',
	librariesTitle: 'Könyvtárak, keretrendszerek:',
	otherTitle: 'Egyebek:',
	moreAboutTitle: 'Bővebben rólam:',
	aboutTextPar1: `Volt online pókerjátékos vagyok, aki autodidakta módon vált webfejlesztővé. Jelenleg a JavaScript-re és a MERN stack-re fókuszálok. Élvezem a programozás probléma megoldási aspektusát, amellyel egy fejlesztőnek nap mint nap szembe kell néznie.`,
	aboutTextPar2: `Anyanyelvem a <b>magyar</b> és emellett folyékonyan beszélek <b>angolul</b> is.`,
	viewCodesTitle: 'Kódjaim megtekinthetőek:',
	linkedInTitle: 'További információ LinkedIn-en:',
	emailTitle: 'Email küldés:',
	resumeTitle: 'Önéletrajz letöltése:',
	experienceTitle: 'Tapasztalat',
	greenstand: {
		jobTitle: 'Önkéntes React fejlesztő',
		jobDate: '2021 Augusztus - 2022 Április',
		jobDescription1: 'Fő közreműködő a következő projektben: ',
		jobDescription1part2: 'és',
		jobDescription2:
			'Újrafelhasználható és skálázható komponensek létrehozása a következő technológiák segítségével: ',
		jobDescription3: 'Segítettem felállítani a projekt infrastruktúrát.',

		jobDescription4: 'Tagja a "Code review" csapatnak'
	},
	cubicfox: {
		jobTitle: 'Frontend fejlesztő',
		jobDate: '2022 Április - ',
		jobDescription1:
			'Újrafelhasználható és nagymértékben skálázható web applikációk létrehozása a következő technológiák segítségével:'
	}
};
