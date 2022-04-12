<script lang="ts">
	import type { Day } from '$lib/components/Day';
	import Diary from '$lib/components/Diary.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Image from '$lib/components/Image.svelte';
	import Lazyload from '$lib/components/Lazyload.svelte';
	import '$lib/styles/global.css';

	const possibilities = ['favicon.png', 'géo.png', 'logo.png', 'whileTrue.jpg'];
	const images = [];
	for (let i = 0; i < 30; i++) {
		images.push(possibilities[Math.floor(Math.random() * possibilities.length)]);
	}

	export let days: Day[];
</script>

<Diary {days} />
<div class="gallery">
	<Gallery>
		{#each images as src}
			<Image {src} />
		{/each}
	</Gallery>
</div>

<Lazyload />

<style>
	.gallery {
		margin: auto;
		margin-bottom: 10rem;
		width: min(95vw, 70rem);
	}
	.gallery :global(img:hover) {
		transform: scale(1.2);
	}
</style>
