<script lang="ts">
	import type { Day } from './Day';
	import Image from './Image.svelte';
	import { fly } from 'svelte/transition';
	export let days: Day[];

	let index = days.length - 1;
	let day: Day;

	$: if (index != -1) {
		index = Math.min(Math.max(0, index), days.length);
		day = days[index];
		console.log(index);
	}

	const duration = 700;
</script>

<div class="diary">
	<select bind:value={index}>
		{#each days as d, i}
			<option value={i}>Jour {i + 1} - {d.title}</option>
		{/each}
	</select>
	{#key index}
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
	select {
		font-size: 1.5rem;
		top: 1rem;
		right: 1rem;
		position: absolute;
		z-index: 3;
		background-color: #555;
		border: none;
		padding: 1rem;
		color: white;
		transform: translateX(-1rem);
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
			top: 2rem;
		}
		select {
			top: 5rem;
		}
		.image {
			top: 50%;
			transform: translateY(-50%);
		}
	}
</style>
