// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Liana',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'f8657673d00192ce5b39f3daf70e0219', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'F'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '38.439701',
	defaultLongitude: '-122.715637',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://www.instagram.com',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/#inbox',
		},
		{
			id: '3',
			name: 'Pinterest',
			icon: 'cake',
			link: 'https://www.pinterest.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'rocket',
			link: 'https://reddit.com/',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		
		
		
	{
			id: '7',
			name: 'Youtube',
			icon: 'book-open',
			link: 'https://www.youtube.com/',
		},	
		
		{
			id: '8',
			name: 'Youtube',
			icon: 'globe',
			link: 'https://www.youtube.com/',
		},	
		
		{
			id: '9',
			name: 'Youtube',
			icon: 'podcast',
			link: 'https://www.youtube.com/',
		},	
		
		
		
		
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'RWBY',
					link: 'https://open.spotify.com/playlist/0gPRAyQHoy3F9z0YMF9jtg',
				},
				{
					name: 'ANIME',
					link: 'https://open.spotify.com/playlist/4iNwqUZl1QWZIE3N56QKCi',
				},
				{
					name: 'WARHAMMER',
					link: 'https://open.spotify.com/playlist/7CRznAI0e2xrKz7ALiTpOS',
				},
				{
					name: 'LEGENDARY',
					link: 'https://open.spotify.com/playlist/12AjYnXtK6HRt3ff7EBXsF',
				},
				
				{
					name: 'JON',
					link: 'https://open.spotify.com/playlist/12AjYnXtK6HRt3ff7EBXsF',
				},
				
				{
					name: 'SUBLIME',
					link: 'https://open.spotify.com/playlist/12AjYnXtK6HRt3ff7EBXsF',
				},
				
				
			],
		},
		{
			icon: 'tv',
			id: '2',
			links: [
				{
					name: 'HULU',
					link: 'https://www.hulu.com/hub/home',
				},
				{
					name: 'PEACOCK',
					link: 'https://www.peacocktv.com/watch/home',
				},
				{
					name: 'NETFLIX',
					link: 'https://www.netflix.com/browse',
				},
				{
					name: 'HBO MAX',
					link: 'https://play.hbomax.com/page/urn:hbo:page:home',
				},
				
				{
					name: 'CRUNCHYROLL',
					link: 'https://play.hbomax.com/page/urn:hbo:page:home',
				},
				
				{
					name: 'YOUTUBE',
					link: 'https://play.hbomax.com/page/urn:hbo:page:home',
				},
				
				
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
