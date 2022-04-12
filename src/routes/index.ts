import type { Day } from '$lib/components/Day';

const days: Day[] = [
	{
		title: 'Ça continue!',
		text: "Nous y sommes, nous commençons enfin à poser les murs et l'accomplissement se fait ressentir dans l'équipe. Dans la joie, la bonne humeur et l'humour, on porte, on visse et on rigole. Sastisfaits de n'avoir que quelques légers imprévus, nous profitons d'un chantier agréable malgré un vent prononcé qui n'a pas encore posé de problème. Merci à vous qui suivez ce chantier et merci à ce projet qui nous fait vivre de beaux moments humains.",
		image: 'https://s5.imgcdn.dev/BafeD.jpg'
	}
];

const gallery = [
	{ url: 'https://s5.imgcdn.dev/BamAH.jpg' },
	{ url: 'https://s5.imgcdn.dev/Bae5i.jpg' },
	{ url: 'https://s5.imgcdn.dev/BabD2.jpg' },
	{ url: 'https://s5.imgcdn.dev/Badzy.jpg' },
	{ url: 'https://s5.imgcdn.dev/BaWM9.jpg' },
	{ url: 'https://s5.imgcdn.dev/BafeD.jpg' }
];

export function get() {
	return {
		body: { days, gallery }
	};
}
