// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'TESS',
		site: 'https://tess-promo.ru',
		tags: '2024 верстка less jquery tailwind postcss php adaptive e-produce git',
		date: '07/2024',
		img: require('/images/projects/tess/preview.jpg'),
		link: 'tess'
	},
	{
		id: 2,
		title: 'Столярж Алексей Борисович',
		site: 'https://stoliarzh.art/',
		tags: '2024 верстка less jquery adaptive tailwind postcss php mitia',
		date: '06/2024',
		img: require('/images/projects/stoliarzh/preview.jpg'),
		link: 'stoliarzh'
	},
	{
		id: 3,
		title: 'Трансойл',
		site: 'https://transoil.com/',
		tags: '2024 верстка less jquery tailwind adaptive php e-produce git postcss mysql bitrix',
		date: '06/2024',
		img: require('/images/projects/transoil/preview.jpg'),
		link: 'transoil'
	},
	{
		id: 4,
		title: 'M&M\'s Promo',
		site: 'https://www.mms-promo.ru/',
		tags: '2024 верстка less jquery tailwind adaptive php e-produce git',
		date: '05/2024',
		img: require('/images/projects/mms-kinovecher/preview.jpg'),
		link: 'mms-kinovecher'
	},
	{
		id: 5,
		title: 'Flexiled',
		site: 'https://flexiled.ru',
		tags: '2024 верстка less tailwind alpus umbrellajs php bitrix mysql adaptive git',
		date: '05/2024',
		img: require('/images/projects/flexiled/preview.jpg'),
		link: 'flexiled'
	},
	{
		id: 6,
		title: 'LiveJournal 25',
		site: '',
		tags: '2024 верстка less jquery tailwind adaptive parallax e-produce git',
		date: '04/2024',
		img: require('/images/projects/lj-25/preview.jpg'),
		link: 'lj-25'
	},
	{
		id: 7,
		title: 'M&M\'s Promo',
		site: 'https://www.mms-promo.ru/',
		tags: '2024 верстка less jquery tailwind adaptive php e-produce git',
		date: '03/2024',
		img: require('/images/projects/mms-eggs/preview.jpg'),
		link: 'mms-eggs'
	},
	{
		id: 8,
		title: 'Zverush',
		site: 'https://zverush.ru',
		tags: '2024 верстка less jquery tailwind adaptive mitia',
		date: '03/2024',
		img: require('/images/projects/zverush/preview.jpg'),
		link: 'zverush'
	},
	{
		id: 9,
		title: 'ОПТТРЕЙД',
		site: '',
		tags: '2024 верстка less jquery tailwind adaptive alpus',
		date: '03/2024',
		img: require('/images/projects/opttrade/preview.jpg'),
		link: 'opttrade'
	},
	{
		id: 10,
		title: 'Hochland Spring',
		site: '',
		tags: '2024 верстка less jquery tailwind adaptive e-produce git',
		date: '02/2024',
		img: require('/images/projects/hochland-spring/preview.jpg'),
		link: 'hochland-spring'
	},
	{
		id: 11,
		title: 'Благотворительный фонд развития онкологических клиник',
		site: '',
		tags: '2024 верстка less jquery adaptive alpus tanais git',
		date: '02/2024',
		img: require('/images/projects/fond-onko/preview.jpg'),
		link: 'fond-onko'
	},
	{
		id: 12,
		title: 'Мотор',
		site: 'https://заведисвоймотор.рф/',
		tags: '2024 верстка less jquery tailwind adaptive e-produce git',
		date: '01/2024',
		img: require('/images/projects/motor/preview.jpg'),
		link: 'motor'
	},
];

export default projects;
