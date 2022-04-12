<script lang="ts" context="module">
	import mediumZoom from 'medium-zoom';
	import lozad from 'lozad';
	import { onMount } from 'svelte';

	function lazyload() {
		const observer = lozad('.lazyload', {
			loaded: (el: HTMLElement) => {
				el.classList.remove('lazyload');
				el.classList.add('loaded');
			}
		});
		observer.observe();
		mediumZoom('.zoomable', {
			margin: 10,
			background: '#00000088',
			scrollOffset: 99999999
		});
	}
</script>

<script lang="ts">
	onMount(lazyload);
</script>
