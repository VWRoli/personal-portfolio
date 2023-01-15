<script lang="ts">
	import { language } from '../store';
	import { hungarian } from '../lib/assets/languages/hungarian';
	import { english } from '../lib/assets/languages/english';
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

	const switchEnglish = () => {
		isActive = true;
		language.update((lang) => (lang = english));
	};

	const switchHungarian = () => {
		isActive = false;
		language.update((lang) => (lang = hungarian));
	};

	function scrollIntoView({ target }: { target: any }) {
		console.log(target);
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			top: -76,
			behavior: 'smooth'
		});
	}
</script>

<nav>
	<div class="nav-header">
		<div class="icon logo-icon">
			<FaCode />
		</div>
		{$language.logo}
		<button class="nav-toggle" aria-label="Toggle mobile menu" on:click={toggle}>
			{#if isOpen}
				<div>
					<FaTimes />
				</div>
			{:else}
				<div>
					<FaBars />
				</div>
			{/if}
		</button>
	</div>
	<ul class={isOpen ? `links show-container` : `links`}>
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
			<LangButton flag={hungaryFlag} {isActive} handleClick={switchEnglish} />
			<LangButton flag={englishFlag} isActive={!isActive} handleClick={switchHungarian} />
		</div>
	</div>
</nav>
