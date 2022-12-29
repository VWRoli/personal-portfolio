<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import HeroSection from '../components/HeroSection.svelte';
	import Projects from '../components/Projects.svelte';
	import Experience from '../components/Experience.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="./src/css/index.min.css" />
</svelte:head>

<main>
	<Navbar />
	<HeroSection />
	<Projects />
	<Experience />
</main>
