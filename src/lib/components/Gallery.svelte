<script lang="ts">
	import { onMount } from 'svelte';

	export let colW = 150;
	let colNb: Number;
	onMount(() => {
		const width = document.getElementById('grid').clientWidth;
		colNb = Math.min(Math.floor(width / colW), 4);
	});
</script>

<div id="grid" style="grid-template-columns: repeat({colNb}, 1fr);">
	<slot />
</div>

<style>
	#grid {
		display: grid;
		align-items: center;
		width: 100%;
		grid-gap: 1rem;
	}
	#grid > :global(*) {
		max-width: 100%;
		margin: auto;
	}
</style>
