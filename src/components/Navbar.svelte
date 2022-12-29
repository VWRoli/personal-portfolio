<script lang="ts">
	import { language } from '../store';
	//@ ts-ignore
	import FaCode from 'svelte-icons/fa/FaCode.svelte';
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
	import FaTimes from 'svelte-icons/fa/FaTimes.svelte';
	import Button from './common/Button.svelte';
	import LangButton from './common/LangButton.svelte';
	import hungaryFlag from '$lib/assets/images/hungary.png';
	import englishFlag from '$lib/assets/images/united-kingdom.png';

	let isOpen = false;
	let isActive = true;

	function toggle() {
		isOpen = !isOpen;
	}

	function scrollIntoView({ target }: { target: any }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<nav>
	<div class="nav-header">
		<div class="icon">
			<FaCode class="logo-icon" />
		</div>
		{$language.logo}
		<button class="nav-toggle" aria-label="Toggle mobile menu" on:click={toggle}>
			{#if isOpen}
				<div>
					<FaBars />
				</div>
			{:else}
				<div>
					<FaTimes />
				</div>
			{/if}
		</button>
	</div>
	<ul class={isOpen ? `links` : `links show-container`}>
		{#each $language.links as link (link.id)}
			<li>
				<a class="link-items" href={link.url} on:click|preventDefault={scrollIntoView}>
					{link.text}
				</a>
			</li>
		{/each}
	</ul>
	<div class="nav-controls">
		<div class="nav-resume">
			<Button route="cv_roland_füst.pdf" label={$language.resumeBtn} typeClass="resume" />
		</div>
		<div class="lang-selector">
			<LangButton flag={hungaryFlag} {isActive} handleClick={() => {}} />
			<LangButton flag={englishFlag} isActive={!isActive} handleClick={() => {}} />
		</div>
	</div>
</nav>
