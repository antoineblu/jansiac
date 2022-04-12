import type { Day } from '$lib/components/Day';

const days: Day[] = [
	{
		title: 'Départ',
		text: 'Test test',
		image: 'favicon.png'
	},
	{
		title: 'Débuts',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vel veritatis delectus dolore in, quo sed, nemo quisquam distinctio cupiditate animi aperiam accusantium sapiente laboriosam quis neque molestiae, quia natus!',
		image: 'géo.png'
	}
];

export function get() {
	return {
		body: { days }
	};
}
