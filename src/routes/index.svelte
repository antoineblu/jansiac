<script lang="ts">
	import Diary from '$lib/components/Diary.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Image from '$lib/components/Image.svelte';
	import Lazyload from '$lib/components/Lazyload.svelte';
	import '$lib/styles/global.css';

	import { days, gallery } from './index';
</script>

<svelte:head>
	<title>Un chalet à Jansiac</title>
</svelte:head>

<Diary {days} />

<h1>Toutes les photos</h1>
<div class="gallery">
	<Gallery>
		{#each gallery as img}
			<Image src={img.url} />
		{/each}
	</Gallery>
</div>

<Lazyload />

<style>
	h1 {
		color: white;
		margin: 2rem 0;
		margin-top: 6rem;
		text-align: center;
	}
	.gallery {
		margin: auto;
		margin-bottom: 10rem;
		width: min(95vw, 70rem);
	}
	.gallery :global(img:hover) {
		transform: scale(1.1);
	}
</style>
