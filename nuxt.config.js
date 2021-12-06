export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'SA - eLearning',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap'
			},
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap'
			},
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap'
			},
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/fontawesome.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/icofont.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/themify.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/flag-icon.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/animate.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/feather-icon.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/chartist.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/date-picker.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/prism.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/vector-map.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/bootstrap.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/style.css' },
			{ rel: 'stylesheet', type: 'text/css', href: '/assets/css/responsive.css' }
		],
		script: [ { src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js' } ]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [ '~/plugins/mixins.js' ],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [ '@nuxtjs/moment' ],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/auth-next',
		'nuxt-sweetalert2'
	],
	router: {
		middleware: [ 'auth' ]
	},

	auth: {
		strategies: {
			local: {
				token: {
					property: 'access',
					global: true,
					// required: true,
					type: false
				},
				user: {
					property: 'data'
					// autoFetch: true
				},
				endpoints: {
					login: { url: 'http://localhost:3000/user/login', method: 'post' },
					logout: { url: 'http://localhost:3000/user/logout', method: 'post' },
					user: { url: 'http://localhost:3000/user/me', method: 'get' }
				}
			}
		}
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: 'http://localhost:3000'
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
	server: {
		host: '0'
	}
};
