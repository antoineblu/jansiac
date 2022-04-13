<script lang="ts">
	import mediumZoom from 'medium-zoom';
	import lozad from 'lozad';
	import { onMount } from 'svelte';

	let zoomTitle = 'test';
	let visible = false;
	function lazyload() {
		const observer = lozad('.lazyload', {
			loaded: (el: HTMLElement) => {
				el.classList.remove('lazyload');
				el.classList.add('loaded');
			}
		});
		observer.observe();
		const zoom = mediumZoom('.zoomable', {
			margin: 10,
			background: '#000000aa',
			scrollOffset: 25
		});
		zoom.on('open', (e) => {
			visible = true;
			zoomTitle = (e.target as HTMLElement).title;
		});
		zoom.on('close', () => {
			visible = false;
		});
	}
	onMount(lazyload);
</script>

{#if visible && zoomTitle}
	<h1>{zoomTitle}</h1>
{/if}

<style>
	h1 {
		position: fixed;
		z-index: 7;
		top: 0;
		left: 0;
		color: white;
		text-align: center;
		width: 100vw;
		padding: 1rem;
		background-color: #0006;
	}
</style>
