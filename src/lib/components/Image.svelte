<script lang="ts">
	export let src: string;
	export let alt = '';
	export let lazyload = true;
	export let zoomable = true;

	const source = lazyload ? { 'data-src': src } : { src };
</script>

<img {...source} {alt} class:lazyload class:zoomable />

<style>
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
</style>
