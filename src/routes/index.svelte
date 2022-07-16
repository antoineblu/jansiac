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

<div class="historic">
	<h1>Historique</h1>
	<p>
		Eh oui ! Ceci est déjà le troisième volet de notre aventure. Si vous voulez retrouver nos
		motivations et les photos de la première fois, vous pouvez trouver le site de l'époque à <a
			href="https://projet.jansiac.repl.co">cette adresse</a
		>
		Le deuxième volet n'est plus disponible pour le moment, il faudra attendre le site qui fera le regroupement
		du tout.
	</p>
</div>

<h1>Toutes les photos</h1>
<div class="gallery">
	<Gallery>
		{#each gallery as _, i}
			<Image
				src={gallery[gallery.length - i - 1].url}
				title={gallery[gallery.length - i - 1].title || ''}
			/>
		{/each}
	</Gallery>
</div>

<Lazyload />

<style>
	h1 {
		color: white;
		margin: 2rem 0;
		margin-top: 8rem;
		text-align: center;
	}

	.historic {
		color: white;
		width: min(95vw, 35rem);
		margin: auto;
	}
	a {
		color: white;
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
