<script lang="ts">
	export let src: string;
	export let alt = '';
	export let title = '';
	export let lazyload = true;
	export let zoomable = true;

	const source = lazyload ? { 'data-src': src } : { src };
</script>

<figure>
	<img {...source} {alt} {title} class:lazyload class:zoomable />
	{#if title}
		<h3>{title}</h3>
	{/if}
</figure>

<style>
	figure {
		position: relative;
		max-width: 100%;
		max-height: inherit;
	}
	img {
		max-width: 100%;
		max-height: inherit;
	}
	img:global(.lazyload) {
		opacity: 0;
		transition: 500ms;
		transition-property: opacity, transform !important;
	}
	img:global(.loaded) {
		opacity: 1;
	}

	h3 {
		background: #444;
		padding: 0.5em 1em;
		position: absolute;
		transform: translate(-0.5rem, -2rem);
		color: white;
		z-index: 2;
		font-size: 1rem;
	}
</style>
