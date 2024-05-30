/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'bg-header': '#ace6ea',
			'main-button': '#461dba',
			main: '#080808',
			white: '#fff',
			biruza: '#0fa4ae',
			'biruze-light': '#ace6ea',
			bredcrambs: '#3BA9B2',
			grey: '#555555'
		},
		backgroundImage: {
			'doctor-womem': "url('/img/main-page-img/doctor-women-375-768.png')",
			'doctor-womem-1024-1440': "url('/img/main-page-img/doctor-women-1024-1440.png')",
			'article-img': "url('/img/article/header-article-1440.png')",
			'doctor-men': "url('/img/main-page-img/doctor-men-375px.png')",
			'doctor-men-lg': "url('/img/main-page-img/doctor-men.png')"
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
			raleway: ['Raleway', 'sans-serif']
		},
		screens: {
			bs: '320px',
			
			sm: '375px',

			md: '425px',

			lg: '768px',

			xl: '1024px',

			'2xl': '1440px'
		},
		extend: {}
	},
	plugins: []
};
