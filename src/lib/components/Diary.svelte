<script lang="ts">
	import type { Day } from './Day';
	import Image from './Image.svelte';
	import { fly } from 'svelte/transition';
	export let seasons: Day[][];

	let seasonIndex = 0;
	let dayIndex = 0;
	let day: Day;

	$: if (seasons[seasonIndex] && seasons[seasonIndex][dayIndex]) {
		day = seasons[seasonIndex][dayIndex];
	}

	const duration = 700;
</script>

<div class="diary">
	<div class="selects">
		<select bind:value={seasonIndex}>
			{#each seasons as _, i}
				<option value={i}>Saison {i + 1}</option>
			{/each}
		</select>
		<select bind:value={dayIndex}>
			{#each seasons[seasonIndex] as d, i}
				<option value={i}>Jour {i + 1} - {d.title}</option>
			{/each}
		</select>
	</div>
	{#key dayIndex+seasonIndex}
		<div
			class="text"
			in:fly={{ x: -300, duration, delay: duration }}
			out:fly={{ x: -300, duration }}
		>
			<h1>{day.title}</h1>
			<p>{@html day.text}</p>
		</div>
		<div
			class="image"
			in:fly={{ x: 300, duration, delay: duration }}
			out:fly={{ x: 300, duration }}
		>
			<Image src={day.image} lazyload={false} />
		</div>
	{/key}
</div>

<style>
	.diary {
		position: relative;
		color: white;
		min-height: 100vh;
		width: 90vw;
		margin-left: 5vw;
	}
	.selects {
		position: absolute;
		right: 0;
		bottom: 5rem;
		z-index: 3;
	}
	select {
		font-size: 1.5rem;
		background-color: #555;
		border: none;
		padding: 1rem;
		color: white;
		max-width: 95vw;
	}
	.image {
		position: absolute;
		max-width: 100%;
		max-height: calc(100vh - 10rem);
		z-index: 0;
	}
	.text {
		position: relative;
		font-size: 1.2rem;
		margin: 3rem auto;
		background-color: #444;
		padding: 2rem;
		width: min(40rem, 100%);
		z-index: 1;
	}
	@media (max-width: 500px) {
		.image {
			max-width: 100vw;
			width: 100vw;
			margin-left: -5vw;
		}
	}
	@media (min-width: 800px) {
		.text {
			position: absolute;
			left: 5rem;
			top: 3rem;
		}
		select {
			top: 4rem;
		}
		.image {
			top: 50%;
			transform: translateY(-50%);
		}
	}
</style>
